import { defineConfig, defineDocs, frontmatterSchema } from 'fumadocs-mdx/config';
import { z } from 'zod';

const profile = frontmatterSchema.extend({
  title: z.string().min(1).regex(/^[^|｜]+$/),
  category: z.string(),
  summary: z.string(),
  countries: z.array(z.string()).min(1),
  directions: z.array(z.enum(['Propose','Synthesize','Characterize'])),
  maturity: z.enum(['研究验证','公开可用','实际部署','临床试验获准','临床开发']),
  logo: z.string().regex(/^\/logos\/[\w.-]+$/),
});
export const startups = defineDocs({dir:'content/startups', docs:{schema:profile.extend({type:z.literal('startup')})}});
export const research = defineDocs({dir:'content/research', docs:{schema:profile.extend({
  type:z.literal('research'), collection:z.enum(['研究模型与方法','科研平台与工具','开放数据库']),
})}});
export const guides = defineDocs({dir:'content/guides', docs:{schema:frontmatterSchema.extend({
  group:z.enum(['intro','life','matter','earth','physics']), order:z.number(),
})}});
export default defineConfig();
