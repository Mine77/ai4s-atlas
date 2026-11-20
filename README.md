# AI4S Atlas

[打开 AI4S Atlas](https://mine77.github.io/ai4s-atlas/)

侧栏有三个一级栏目。首页打开商业项目目录，可按国家、科研环节、进展程度及业务类别组合筛选。从公司档案点击标签也可查看同类公司。每个栏目有独立的搜索索引。

| 栏目 | 收录单位 | 内容目录 |
| --- | --- | --- |
| 领域指南 | 按学科组织的入门知识与证据解读 | `content/guides` |
| 商业项目 | 独立运营、未上市且有可核实科研产品或实验服务的创业公司，每家公司一份档案 | `content/startups` |
| 学术项目 | 有明确研究成果的模型、平台、工具和数据库，可包含产学合作 | `content/research` |

## 维护档案

为公司或研究成果使用正式简称，图标放在 `public/logos/`，在档案中注明官方出处。科研环节按已有能力多选 Propose、Synthesize、Characterize。公司信息、资助和客户合作分别注明主体、日期与依据。曾收录的上市公司产品资料存放在 `archive/listed-companies/`，原有分享链接可继续打开档案。

## 开发与部署

使用 Node.js 22.12 或更新版本。安装依赖 `npm ci`，本地预览 `npm run dev`，构建 `npm run build`。静态产物位于 `out/`。推送到 `main` 后，GitHub Actions 自动发布到 GitHub Pages。其他静态主机可通过 `NEXT_PUBLIC_BASE_PATH` 指定子目录前缀。
