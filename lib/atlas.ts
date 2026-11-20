import { loader } from 'fumadocs-core/source';
import type { Root } from 'fumadocs-core/page-tree';
import { docs } from '../.source/server';

export const source = loader({baseUrl: '/', source: docs.toFumadocsSource()});
export const pages = source.getPages();
export const projects = pages.map(({url,data})=>({
  url, title:data.title, summary:data.summary, category:data.category,
  countries:data.countries, directions:data.directions, maturity:data.maturity,
}));
export type Project = (typeof projects)[number];
export const tree:Root = { name:'AI4S Atlas', children:[
  {type:'page',name:'全部项目',url:'/'},
  ...[...new Set(projects.map(p=>p.category))].map(name=>({
    type:'folder' as const, name,
    children:projects.filter(p=>p.category===name).map(p=>({type:'page' as const,name:p.title,url:p.url})),
  })),
]};
