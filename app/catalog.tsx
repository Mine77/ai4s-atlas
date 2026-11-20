'use client';
import Link from 'next/link';
import { useSyncExternalStore } from 'react';
import type { Project } from '../lib/atlas';

const directionLabels:Record<string,string>={Propose:'Propose · 提出候选',Synthesize:'Synthesize · 合成制备',Characterize:'Characterize · 表征分析',other:'其他科研环节'};
const directionsOf=(p:Project):string[]=>p.directions.length?p.directions:['other'];
const filters=[
  {key:'country',name:'国家或地区',values:(p:Project)=>p.countries},
  {key:'direction',name:'科研环节',values:directionsOf},
  {key:'stage',name:'进展程度',values:(p:Project)=>[p.maturity]},
  {key:'category',name:'项目类别',values:(p:Project)=>[p.category]},
];
function subscribe(notify:()=>void) {
  window.addEventListener('popstate',notify);
  return ()=>window.removeEventListener('popstate',notify);
}
export function Catalog({projects}:{projects:Project[]}) {
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
      <option value="">全部</option>{[...new Set(projects.flatMap(f.values))].sort().map(v=><option value={v} key={v}>{directionLabels[v]||v}</option>)}
    </select></label>)}</div><div className="count"><span aria-live="polite">{visible.length} 个项目</span>
    {search && <button onClick={()=>change('','')}>重置筛选</button>}</div>
    {!visible.length && <p>没有项目同时符合这些条件。</p>}
    <div className="project-grid">{visible.map(p=><Link className="project-card" key={p.url} href={p.url}>
      <small>{p.category} · {p.countries.join(' / ')}</small><h2>{p.title}</h2><p>{p.summary}</p>
      <div className="tags">{directionsOf(p).map(d=><span key={d}>{directionLabels[d]}</span>)}<b>{p.maturity}</b></div>
    </Link>)}</div>
    <details className="tag-guide"><summary>标签口径</summary>
      <p>国家或地区按直接参与研发或运营的主体标注，跨国合作可有多个标签。提出候选、合成制备、表征分析按已展示的能力多选。气象预报等任务归入「其他科研环节」。</p>
      <p>「研究验证」对应已有研究结果，「公开可用」对应已发布工具、数据或可洽询的方案，「实际部署」对应有明确使用场景，「临床开发」标记进入人体试验的药物。各档案说明具体使用者和证据。</p>
    </details></>;
}
