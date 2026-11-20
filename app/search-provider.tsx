'use client';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
export function SearchProvider({children}:{children:ReactNode}){
  const path=usePathname();
  const section=path.startsWith('/research')?'research':path.startsWith('/guides')?'guides':'startups';
  const label={startups:'搜索公司',guides:'搜索领域指南',research:'搜索学术项目'}[section];
  return (
    <RootProvider key={section} i18n={{ translations: {
      'Search(search trigger)': label, 'Search(search dialog)': label,
      'Open Search(search trigger)(aria-label)': '打开搜索', 'Close Search(search dialog)(aria-label)': '关闭搜索',
      'No results found(search dialog)': '没有匹配的项目', 'Search failed(search dialog)': '搜索失败',
      'On this page(table of contents)': '本页目录', 'Table of Contents(inline table of contents)': '本页目录',
      'Previous Page(pagination)': '上一篇', 'Next Page(pagination)': '下一篇',
      'Skip to Content(skip link)': '跳到正文', 'Open Sidebar(sidebar)(aria-label)': '打开目录',
      'Close Sidebar(sidebar)(aria-label)': '收起目录',
    } }} search={{options: {type: 'static', api: (process.env.NEXT_PUBLIC_BASE_PATH || '') + '/search/'+section+'.json'}}}>
      {children}
    </RootProvider>
  );
}
