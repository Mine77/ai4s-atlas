import { createElement } from 'react';
import { guideTopics } from './guide-topics';
import { loader } from 'fumadocs-core/source';
import type { Node, Root } from 'fumadocs-core/page-tree';
import { startups, research, guides } from '../.source/server';

export const sections = {guides:'领域指南',startups:'商业项目',research:'学术项目'} as const;
export type Section = keyof typeof sections;
export const sources = {
  guides:loader({baseUrl:'/guides',source:guides.toFumadocsSource()}),
  startups:loader({baseUrl:'/startups',source:startups.toFumadocsSource()}),
  research:loader({baseUrl:'/research',source:research.toFumadocsSource()}),
};

function pageLink(p:{url:string,data:{title:string,logo?:string}}) {
  const icon=p.data.logo ? createElement('img',{
    src:(process.env.NEXT_PUBLIC_BASE_PATH||'')+p.data.logo, alt:'', loading:'lazy',
    className:'nav-logo', width:18, height:18,
  }) : undefined;
  return {type:'page' as const, name:p.data.title, url:p.url,icon};
}
const guidesByOrder=sources.guides.getPages().sort((a,b)=>a.data.order-b.data.order);
export const guideFolders=guideTopics.map(({key,name,description})=>({
  type:'folder' as const, name, description, children:guidesByOrder.filter(p=>p.data.group===key).map(pageLink),
}));
const byName=(a:{data:{title:string}},b:{data:{title:string}})=>a.data.title.localeCompare(b.data.title,'zh-CN');
export const profiles = {
  startups:sources.startups.getPages().sort(byName),
  research:sources.research.getPages().sort(byName),
};
const companyCategories=[...new Set(profiles.startups.map(p=>p.data.category))].sort((a,b)=>a.localeCompare(b,'zh-CN'));
const companyFolders=companyCategories.map(name=>({
  type:'folder' as const,name,children:profiles.startups.filter(p=>p.data.category===name).map(pageLink),
}));
const researchFolders = ['研究模型与方法','科研平台与工具','开放数据库'].map(name=>({
  type:'folder' as const,name,children:profiles.research.filter(p=>p.data.collection===name).map(pageLink),
})).filter(f=>f.children.length);
function folder(section: Section, groups: {type: 'folder'; name: string; children: Node[]}[]): Node {
  const name = sections[section];
  return {
    type: 'folder',
    name,
    index: {type: 'page', name, url: '/' + section},
    children: groups.map(group => ({
      ...group,
      name: `${group.name}（${group.children.length}）`,
    })),
  };
}
export const tree:Root={name:'AI4S Atlas',children:[
  folder('guides',guideFolders),folder('startups',companyFolders),folder('research',researchFolders),
]};
export function catalogRows(section:'startups'|'research') {
  return profiles[section].map(p=>({url:p.url,title:p.data.title,logo:p.data.logo,category:p.data.category,
    countries:p.data.countries,directions:p.data.directions,maturity:p.data.maturity}));
}
export type Project=ReturnType<typeof catalogRows>[number];
