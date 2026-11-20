'use client';
import Link from 'next/link';
import { useSyncExternalStore } from 'react';
import type { Project } from '../lib/atlas';

const directionLabels:Record<string,string>={Propose:'Propose · 提出候选',Synthesize:'Synthesize · 合成制备',Characterize:'Characterize · 表征分析',other:'其他科研环节'};
const stageOrder = ['研究验证', '公开可用', '实际部署', '临床试验获准', '临床开发'];
const directionsOf=(p:Project):string[]=>p.directions.length?p.directions:['other'];
const filters=[
  {key:'country',name:'国家或地区',values:(p:Project)=>p.countries},
  {key:'direction',name:'科研环节',values:directionsOf},
  {key:'stage',name:'进展程度',values:(p:Project)=>[p.maturity]},
  {key:'category',name:'项目类别',values:(p:Project)=>[p.category]},
];
function filterOptions(key: string, available: string[]) {
  const values = new Set(available);
  if (key === 'direction') return Object.keys(directionLabels).filter(value => values.has(value));
  if (key === 'stage') return stageOrder.filter(value => values.has(value));
  return [...values].sort((a, b) => a.localeCompare(b, 'zh-CN'));
}
function subscribe(notify:()=>void) {
  window.addEventListener('popstate',notify);
  return ()=>window.removeEventListener('popstate',notify);
}
export function Logo({path}:{path:string}) {
  return <span className="logo"><img src={(process.env.NEXT_PUBLIC_BASE_PATH||'')+path} alt="" /></span>;
}
export function Catalog({projects,kind}:{projects:Project[],kind:'startups'|'research'}) {
  const search=useSyncExternalStore(subscribe,()=>window.location.search,()=>'');
  const params=new URLSearchParams(search);
  const visible=projects.filter(p=>filters.every(f=>!params.get(f.key)||f.values(p).includes(params.get(f.key)!)));
  function change(key:string,value:string) {
    const url=new URL(window.location.href);
    if (!key) url.search='';
    else if(value) url.searchParams.set(key,value);
    else url.searchParams.delete(key);
    window.history.pushState(null,'',url);
    window.dispatchEvent(new Event('popstate'));
  }
  return <><div className="filters">{filters.map(f=><label key={f.key}>{f.name}
    <select value={params.get(f.key)||''} onChange={e=>change(f.key,e.target.value)}>
      <option value="">全部</option>{filterOptions(f.key, projects.flatMap(f.values)).map(v=><option value={v} key={v}>{directionLabels[v]||v}</option>)}
    </select></label>)}</div><div className="count"><span aria-live="polite">{visible.length} {kind==='startups'?'家公司':'项学术工作'}</span>
    {search && <button onClick={()=>change('','')}>重置筛选</button>}</div>
    {!visible.length && <p>没有项目同时符合这些条件。</p>}
    <div className="project-grid">{visible.map(p=><Link className="project-card" key={p.url} href={p.url}>
      <Logo path={p.logo}/><h2>{p.title}</h2>
    </Link>)}</div>
    <details className="tag-guide"><summary>标签口径</summary>
      <p>{kind==='startups'?'国家或地区按公司的创立地或主要运营所在地标注。':'国家或地区按直接参与研究的机构所在地标注。'}Propose 表示提出候选或下一组实验，Synthesize 表示参与制备实物样品，Characterize 表示测量或分析样品与观测数据。一个项目可以覆盖多个环节。档案中注明自建能力与合作方的分工。纯预报等任务可归入「其他科研环节」。</p>
      <p>「研究验证」表示已有可核查的研究结果。「公开可用」表示已发布工具、数据或对外服务。「实际部署」表示公司自有实验室或具名合作方已将技术用于具体研发任务。「临床试验获准」表示已有监管许可，首例给药尚待公开确认。「临床开发」表示至少一项候选药已有入组、给药或人体试验结果记录。是否有付费客户、是否实现量产或获批销售，见各档案披露的证据。</p>
    </details></>;
}
