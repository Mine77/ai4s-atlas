import './global.css';
import { SearchProvider } from './search-provider';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { tree } from '../lib/atlas';

export default function Layout({children}: {children: ReactNode}) {
  return <html lang="zh-CN" suppressHydrationWarning><body>
    <SearchProvider><DocsLayout tree={tree} sidebar={{defaultOpenLevel:0}} nav={{title:'AI4S Atlas',url:'/'}}>{children}</DocsLayout></SearchProvider>
  </body></html>;
}
