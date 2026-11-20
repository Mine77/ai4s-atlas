---
title: "MaterialsZone"
type: "startup"
logo: "/logos/materialszone.png"
category: "材料研发"
summary: "以色列材料研发软件公司，用企业已有的配方、工艺和实测性能推荐下一轮实验。客户已将其用于双材料 3D 打印和低摩擦薄膜开发。"
countries: ["以色列"]
directions: ["Propose"]
maturity: "实际部署"
---

## 公司与团队

MaterialsZone 于 2017 年底从以色列巴伊兰大学孵化，总部位于特拉维夫。创始人 Assaf Anderson 博士有材料科学、光化学和纳米技术背景，现任 CTO。CEO Tal Meirzon 负责公司经营，首席产品官 Ori Yudilevich 拥有数学博士学位及数据科学、软件开发经验。截至 2026 年 11 月 20 日，领投方 Insight Partners 仍将公司列为在投项目，PitchBook 将其列为风险资本支持的私营企业。[投资方档案](https://www.insightpartners.com/portfolio/materials-zone/) · [公司团队](https://www.materials.zone/about-us) · [所有权状态](https://pitchbook.com/profiles/company/228181-96)

## 怎样选择下一组配方实验

研究人员先把原料牌号、用量、加工条件和对应样品的测试结果关联起来。假设研发目标是降低薄膜表面摩擦，团队还要限定膜厚、可用添加剂及生产工艺。Predictive Co-Pilot 用历史实验估计候选配方的性能，按团队给定的约束推荐值得制样的组合。研究人员决定采用哪些建议，制样测量后回填结果，再安排下一轮。界面也允许研究人员调整原料比例，同时观察预测性能和计算成本的变化。[预测与实验推荐模块](https://www.materials.zone/solutions/predictive-co-pilot) · [薄膜配方案例](https://www.materials.zone/customers/constab-ger)

2026 年 4 月推出的 Maven 让用户用自然语言查历史记录、绘图和比较数据。其分工在配方开发中很明确：研究人员可以用 Maven 查询做过哪些试验，用 Predictive Co-Pilot 选择下一轮候选，再在实验室里判断材料是否达标。[Maven 发布公告](https://www.prnewswire.com/news-releases/materialszone-launches-maven-a-conversational-ai-interface-for-its-enterprise-materials-platform-302756936.html) · [公司对配方工作流程的说明](https://www.materials.zone/blog/ai-for-cosmetics-formulation)

## 客户实测与证据边界

**Polyfos 的双材料 3D 打印。** Polyfos 要在同一次打印中得到耐用的零件本体和水溶性支撑。两种材料的配方与打印条件相互影响，单独调好一种材料仍可能得到无法使用的部件。其 CTO Keren Regev 确认，团队最初把 MaterialsZone 当作实验数据库，后来开始依据机器学习建议挑选实验。MaterialsZone 团队在《Chemical Engineering》披露，Polyfos 累计使用逾 100 种原料、测试逾 250 种配方，其中一次双材料工艺优化用了 12 次 AI 指导实验。一年间，不溶性打印材料的硬度达到此前的五倍。12 次实验对应特定工艺优化，五倍硬度是全年结果。报道未提供平行人工对照组，因而无法量化单靠算法节省了多少次实验。[2025 年 4 月 1 日案例、客户访谈及图表](https://www.chemengonline.com/advancing-additive-manufacturing-using-data-visualization-and-ai/?printmode=1)

**CONSTAB 的可金属化薄膜。** Kafrit 集团旗下德国厂商 CONSTAB 收到客户需求，要让非标准厚度的薄膜同时达到极低的摩擦系数。团队此前已记录约一年的实验，模型利用这些数据，在性能、生产和法规约束下推荐候选配方。据 2026 年 10 月发布的案例，CONSTAB 在五周内交付了获客户认可并采用的配方。五周计算的是应对这项新需求的周期，前期数据积累另计。公开摘要没有给出摩擦系数的绝对值、最终客户名称或批次间偏差。[公司客户案例](https://www.materials.zone/customers/constab-ger)

**量子点老化研究。** 在 Horizon Europe 博士研究网络 Track The Twin 中，MaterialsZone 提供 API，帮助多家机构将光谱文件和本地分析输出转成可复用的结构化数据，让研究者能对照不同条件下的测量。公司公开披露的贡献是实验数据基础设施；据此可确认其支持跨机构研究，尚无法评估它对量子点寿命预测精度的影响。[合作说明](https://www.materials.zone/customers/track-the-twin)

## 最近三篇公司博客

截至 2026 年 11 月 20 日，官网博客栏目最新三篇文章讨论了配方选择、稳定性验证和实验数据管理。[官方资源目录](https://www.materials.zone/resources)

### 2026-10-26 · How AI Is Used for Cosmetics Formulation

作者以洗发水说明为什么一个看似最优的配方有时值得暂缓测试。如果预测主要依赖此前使用的表面活性剂牌号，而候选配方换了供应商，先测新牌号对黏度和分层的影响，可能比直接试完整配方更有价值。文章区分了用于讲解的洗发水情境、他人发表的研究和平台本身的功能。[公司原文](https://www.materials.zone/blog/ai-for-cosmetics-formulation)

### 2026-10-15 · Accelerated Shelf Life Testing Explained

加速老化结果能否用于估算正常储存下的货架期，取决于升温后是否仍由同一种机制主导劣化。作者建议按批次或配方留出独立样本，并与正常储存下的实测结果对照。同一批次相邻时间点的测量很相似，随机拆到训练集和测试集会高估模型在新批次上的表现。[公司原文](https://www.materials.zone/blog/accelerated-shelf-life-testin)

### 2026-09-23 · 13 Food Formulation Software Solutions by Category

产品经理 Omri Schulman 按研发人员要作的决定比较了 13 款软件。营养与标签工具可以从配料表计算标签值；若问题是改变配比和加工条件后质地会怎样，就需要有实验条件、实测质地和配方版本相互对应的记录。文章将自家平台放在材料信息学一类，给出了适用的数据前提，未提供与所列产品在同一实验集上的对测。[公司原文](https://www.materials.zone/blog/top-food-formulation-software)

## 融资与项目经费

| 时间 | 公开记录与口径 |
| --- | --- |
| 2018-07 | Startup Nation Central 的 Finder 数据库列出 300 万美元种子轮，投资者为 Sarona Ventures 和天使投资人 Mark Weissman。公司现有董事名单也列有 Weissman 与 Sarona 的代表。[融资档案](https://finder.startupnationcentral.org/company_page/materials-zone) · [董事会名单](https://www.materials.zone/about-us) |
| 2021-04-27 | Insight Partners 确认公司完成 600 万美元 A 轮，由其领投，OurCrowd 参与。公告称公司当时已有付费客户，包括一家未具名的《财富》100 强公司。[领投方公告](https://www.insightpartners.com/ideas/materials-zone-raises-6-million-to-improve-its-ai-materials-discovery-platform-and-expand-its-global-reach/) |
| 2024-04 与 2026-06 | Finder 另录有 OurCrowd 参与的 A 轮和 Grace Software Holdings、Mark A. Weissman 参与的 B 轮，金额均未披露。PitchBook 公开页仍以 600 万美元 A 轮为最新交易。后两笔仅按数据库记录列示，未见相应交易方公告确认金额。[Finder 轮次表](https://finder.startupnationcentral.org/company_page/materials-zone) · [PitchBook 交易摘要](https://pitchbook.com/profiles/company/228181-96) |

Finder 另记载以色列创新局于 2018 年提供 12 万美元、BIRD Foundation 于 2019 年提供 60 万美元，均归为非股权资金。马里兰大学公布的 1,840 万美元则是美以储能研究联合体的五年项目总额，MaterialsZone 是参与机构之一，大学没有公布其实际分得的金额。[非股权资助记录](https://finder.startupnationcentral.org/company_page/materials-zone) · [马里兰大学项目公告](https://research.umd.edu/news/mei2-leads-us-side-184m-us-israel-energy-center-focused-energy-storage)

## 相关链接

- [MaterialsZone 官网](https://www.materials.zone/) · [官方客户案例目录](https://www.materials.zone/customers)
- [预测建模与实验推荐](https://www.materials.zone/solutions/predictive-co-pilot) · [官网品牌图标](https://cdn.prod.website-files.com/66a76467298c454de539f7aa/66cef238e96d8f1502659d8f_WebClip%20%20256x256.png)
