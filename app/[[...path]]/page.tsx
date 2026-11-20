import { notFound } from 'next/navigation';
import { DocsPage, DocsTitle, DocsDescription, DocsBody } from 'fumadocs-ui/layouts/docs/page';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { pages, projects, source } from '../../lib/atlas';
import { Catalog } from '../catalog';

type Props = {params:Promise<{path?:string[]}>};
export const dynamicParams=false;
export function generateStaticParams() {return [{path:[]}, ...pages.map(p=>({path:p.slugs}))];}
export async function generateMetadata({params}:Props) {
  const title=source.getPage((await params).path ?? [])?.data.title;
  return {title:title ? title+' · AI4S Atlas' : 'AI4S Atlas · 项目研究'};
}
export default async function AtlasPage({params}:Props) {
  const path=(await params).path ?? [];
  if (!path.length) return <DocsPage full><DocsTitle>AI4S 项目研究</DocsTitle>
    <DocsDescription>从产品和团队读到实验验证、近期文章与资金来源。</DocsDescription>
    <Catalog projects={projects}/></DocsPage>;
  const p=source.getPage(path);
  if (!p) notFound();
  const {body:Content,toc,title,summary,category,countries,directions,maturity}=p.data;
  return <DocsPage toc={toc}><DocsTitle>{title}</DocsTitle><DocsDescription>{summary}</DocsDescription>
    <div className="tags"><span>{category}</span>{countries.map(c=><span key={c}>{c}</span>)}
      {(directions.length?directions:['其他科研环节']).map(d=><span key={d}>{d}</span>)}<b>{maturity}</b></div>
    <DocsBody><Content components={defaultMdxComponents}/></DocsBody></DocsPage>;
}
