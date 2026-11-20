import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DocsPage, DocsTitle, DocsDescription, DocsBody } from 'fumadocs-ui/layouts/docs/page';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { sources, guideFolders, catalogRows, sections, type Section } from '../../lib/atlas';
import { legacy } from '../../lib/legacy';
import { Catalog, Logo } from '../catalog';

type Props = {params:Promise<{path?:string[]}>};
export const dynamicParams=false;
export function generateStaticParams() {
  return [{path:[]}, ...Object.entries(sources).flatMap(([section,source])=>[
    {path:[section]}, ...source.getPages().map(p=>({path:[section,...p.slugs]})),
  ]),...Object.keys(legacy).map(id=>({path:['project',id]}))];
}
export async function generateMetadata({params}:Props) {
  const [section='startups',...slug]=(await params).path??[];
  if(section==='project')return {robots:{index:false}};
  const source=sources[section as Section];
  return {title:(source?.getPage(slug)?.data.title??sections[section as Section]??'目录')+' · AI4S Atlas'};
}
const footer={enabled:false};
export default async function AtlasPage({params}:Props) {
  const [section='startups',...slug]=(await params).path??[];
  if(section==='project'){
    const target=legacy[slug[0]];
    if(!target)notFound();
    const url=target.startsWith('/')?(process.env.NEXT_PUBLIC_BASE_PATH||'')+target:target;
    return <><meta httpEquiv="refresh" content={'0;url='+url}/><a href={url}>打开档案</a></>;
  }
  if(section==='guides' && !slug.length)return <DocsPage full footer={footer}><DocsTitle>领域指南</DocsTitle>
    <DocsBody>{guideFolders.map(g=><section key={g.name}><h2>{g.name}</h2><p>{g.question}</p><ul>{g.children.map(p=><li key={p.url}><Link href={p.url}>{p.name}</Link></li>)}</ul></section>)}</DocsBody></DocsPage>;
  if((section==='startups'||section==='research') && !slug.length) return <DocsPage full footer={footer}>
    <DocsTitle>{sections[section]}</DocsTitle><Catalog key={section} projects={catalogRows(section)} kind={section}/></DocsPage>;
  const source=sources[section as Section];
  const page=source?.getPage(slug);
  if(!page) notFound();
  const {body:Content,toc,title}=page.data;
  const profile='logo' in page.data ? page.data : undefined;
  const tags = profile ? [
    {key:'category', value:profile.category},
    ...profile.countries.map(value=>({key:'country',value})),
    ...profile.directions.map(value=>({key:'direction',value})),
    {key:'stage', value:profile.maturity},
  ] : [];
  return <DocsPage toc={toc} footer={footer}>
    <div className="profile-heading">{profile && <Logo path={profile.logo}/>}<DocsTitle>{title}</DocsTitle></div>
    {profile && <><DocsDescription>{profile.summary}</DocsDescription><div className="tags">
      {tags.map(tag=><Link key={tag.key+tag.value}
        href={{pathname:'/'+section,query:{[tag.key]:tag.value}}}>{tag.value}</Link>)}
    </div></>}
    <DocsBody><Content components={defaultMdxComponents}/></DocsBody></DocsPage>;
}
