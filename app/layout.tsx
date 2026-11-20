import './global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { tree } from '../lib/atlas';

export default function Layout({children}: {children: ReactNode}) {
  return <html lang="zh-CN" suppressHydrationWarning><body>
    <RootProvider i18n={{ translations: {
      'Search(search trigger)': '搜索项目', 'Search(search dialog)': '搜索项目、团队或技术',
      'Open Search(search trigger)(aria-label)': '打开搜索', 'Close Search(search dialog)(aria-label)': '关闭搜索',
      'No results found(search dialog)': '没有匹配的项目', 'Search failed(search dialog)': '搜索失败',
      'On this page(table of contents)': '本页目录', 'Table of Contents(inline table of contents)': '本页目录',
      'Previous Page(pagination)': '上一篇', 'Next Page(pagination)': '下一篇',
      'Skip to Content(skip link)': '跳到正文', 'Open Sidebar(sidebar)(aria-label)': '打开目录',
      'Close Sidebar(sidebar)(aria-label)': '收起目录',
    } }} search={{options: {type: 'static', api: (process.env.NEXT_PUBLIC_BASE_PATH || '') + '/search-index.json'}}}>
      <DocsLayout tree={tree} nav={{title:'AI4S Atlas',url:'/'}}>{children}</DocsLayout>
    </RootProvider>
  </body></html>;
}
