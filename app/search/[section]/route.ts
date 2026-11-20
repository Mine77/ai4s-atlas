import { createFromSource } from 'fumadocs-core/search/server';
import { sources, type Section } from '../../../lib/atlas';
export const dynamic='force-static';
export function generateStaticParams(){ return Object.keys(sources).map(k=>({section:k+'.json'})); }
export async function GET(_request:Request,{params}:{params:Promise<{section:string}>}){
  const key=(await params).section.replace(/\.json$/,'') as Section;
  if(key==='startups')return createFromSource(sources.startups).staticGET();
  if(key==='research')return createFromSource(sources.research).staticGET();
  if(key==='guides')return createFromSource(sources.guides).staticGET();
  return new Response(null,{status:404});
}
