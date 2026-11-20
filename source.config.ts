import { defineConfig, defineDocs, frontmatterSchema } from 'fumadocs-mdx/config';
import { z } from 'zod';

export const docs = defineDocs({
  dir: 'content',
  docs: {
    schema: frontmatterSchema.extend({
      category: z.string(),
      summary: z.string(),
      countries: z.array(z.string()).min(1),
      directions: z.array(z.enum(['Propose','Synthesize','Characterize'])),
      maturity: z.enum(['研究验证','公开可用','实际部署','临床开发']),
    }),
  },
});
export default defineConfig();
