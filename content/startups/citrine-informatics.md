---
title: "Citrine Informatics"
type: "startup"
logo: "/logos/citrine-informatics.png"
category: "材料研发"
summary: "把企业的配方、工艺和实测性能关联起来，帮助材料科学家选择下一组实验。客户已用它开发涂料填料、筛选混合溶剂，创始团队也以实物验证过模型推荐的热电材料。"
countries: ["美国"]
directions: ["Propose"]
maturity: "实际部署"
---

## 公司与创始人

Citrine Informatics 于 2013 年创立，总部在美国加州雷德伍德城。Greg Mulholland 和 Bryce Meredig 共同创办公司，两人都参与了早期热电材料推荐系统的实验研究。Mulholland 拥有剑桥大学材料科学硕士学位，现任 CEO。Meredig 曾任首席科学家，Kyle Michel 曾任首席技术官。截至 2026 年 11 月 20 日，公司仍以独立品牌提供商业平台，DCVC 将其列为投资组合公司。可核实的资本交易包括私募融资，公开材料未见上市或被收购公告。[公司与现任管理层](https://citrine.io/company/) · [早期团队与总部](https://citrine.io/media-post/citrine-informatics-raises-7-6m-to-revolutionize-materials-driven-product-development-with-ai/) · [DCVC 公司档案](https://www.dcvc.com/companies/citrine-informatics/) · [创始人合著论文](https://doi.org/10.1063/1.4952607)

## 产品怎样决定下一组实验

同一填料在不同配比、加工条件和原料来源下，可能得到不同的涂层性能。配方师希望知道，哪些改变能降低成本、保留性能，哪些组合值得占用有限的测试时间。Citrine Platform 把客户的材料成分、工艺和实测结果关联起来。研究人员设置可用原料、目标性能和搜索范围，按模型推荐选择样品，完成测试后把结果用于下一轮训练。[平台与实验选择](https://www.dcvc.com/companies/citrine-informatics/) · [Dorfner 的实际研发流程](https://dorfner.com/en/applications/coatings/ai-and-colors/)

2026 年 7 月发布的 **Catalyst** 把研究人员用自然语言描述的目标转成数据集、建模任务和候选实验，并给出推荐理由。**Apex** 是背后的预测层，会在多种架构中为具体项目选模型，可利用预训练的化学表示。公司当月披露，平台每月生成约 7 万条实验建议。这个数衡量软件提出候选的规模，实际制样和测量由实验团队完成。[产品发布与统计口径](https://citrine.io/media-post/citrine-launches-catalyst-and-apex-to-make-ai-easier-for-materials-and-chemicals-experts-to-use-and-trust/)

## 候选材料经实验后表现如何

两位创始人与大学研究人员合著的热电材料论文呈现了可以逐项核对的验证结果。模型根据材料组成，分别估计电阻率、导热系数、塞贝克系数等指标进入目标范围的概率。研究者从建议中挑出富含金属元素、与常见热电材料成分差异很大的 Gd₁₂Co₅Bi 和 Er₁₂Co₅Bi，制备样品并测量。两种材料的电阻率和导热表现符合模型给出的有利判断。模型对塞贝克系数达标的信心较低，实测也低于设定的 100 μV/K 门槛。这次工作找到了值得继续优化的材料族，同时揭示了限制其热电性能的具体指标。[同行评议论文](https://doi.org/10.1063/1.4952607) · [原文图 4 与实验数据](https://arxiv.org/abs/1502.07635)

## 客户与合作证据

| 客户 | 科学问题与公开结果 |
| --- | --- |
| Dorfner | 这家德国矿物材料企业在自己的案例中说明，团队把高岭土精制、煅烧等工艺记录与填料性能、成本和能耗关联，开发了面向特定终端产品的 DORKAFILL 填料。Citrine 披露配方开发时间缩短 84%，公开材料未给出各项目的起止日期和样本数。[客户案例](https://dorfner.com/en/applications/coatings/ai-and-colors/) · [Citrine 的指标说明](https://citrine.io/resources/why-choose-citrine/) |
| 昭和电工（Showa Denko） | 客户希望找到同时满足多项要求的混合溶剂。Citrine 报告，项目在五个月内评估逾一亿种候选组合，得到超过 50 种符合要求的配方。公开案例没有逐一列出这些候选的实测记录，一亿是筛选规模。[项目原文](https://citrine.io/case-study-solvent-blend-discovery-accelerated/) |
| Huntsman Building Solutions | Citrine 披露，客户形成初始配方的时间从数月缩短到不足一天。客户后续仍需做产品测试，尤其是泡沫材料的防火性能验证。这个时间指标覆盖形成起始方案的阶段。[客户发言与指标](https://citrine.io/preparing-your-product-development-team-for-ai-three-mindset-shifts-that-matter/) · [泡沫测试案例目录](https://citrine.io/category/case-studies/) |

## 最近三篇公司博客

截至 2026 年 11 月 20 日，以下三篇排在官网博客常规文章列表的最前面。日期采用各篇原文记录的首次发布日期。[博客目录](https://citrine.io/resources/blog/)

### 2026-08-29 · Preparing Your Product Development Team for AI: Three Mindset Shifts That Matter

作者以 Huntsman 的经验解释，历史实验整理到什么程度，取决于下一次要做什么决策。团队可以先为一项具体配方任务收集有代表性的记录，把缺失的区域交给新实验补足。即使样品没有达到目标，只要能追溯原料、条件和测量结果，它仍能排除错误方向。文章所举约 30 个起始数据点是项目经验，是否够用取决于它们能否覆盖待研究的变量。[阅读原文](https://citrine.io/preparing-your-product-development-team-for-ai-three-mindset-shifts-that-matter/)

### 2026-07-07 · The Next Barrier for AI in Materials Development is Adoption

一条预测可能要消耗数周测试时间。文章从实验负责人的角度说明，建议必须交代为何选择这个样品、哪些变量决定表现、在原料或成本约束变化后结论是否仍成立。同期产品公告称，未经人工调优的 Apex 在 95% 的内部基准比较中达到或超过专家调优的旧平台模型。该比例来自公司内部对比，尚不能据此推算某家客户能省下多少轮实验。[博客原文](https://citrine.io/the-next-barrier-for-ai-in-materials-development-is-adoption/) · [同期基准说明](https://citrine.io/media-post/citrine-launches-catalyst-and-apex-to-make-ai-easier-for-materials-and-chemicals-experts-to-use-and-trust/)

### 2026-04-24 · Change Is the Only Constant: How Specialty Chemicals Producers Can Build Resilience with AI

原料断供会改变整个配方的可行范围。一种价格合适的替代品可能影响涂层性能，也可能无法满足某地区客户的要求。文章描述了配方团队如何在同一组目标下比较替代方案，把成本、供货区域和预期性能一起带入筛选，再决定哪些样品值得验证。文章讨论的是研发决策方法，没有为某种具体替代配方公布测试结果。[阅读原文](https://citrine.io/change-is-the-only-constant-how-specialty-chemicals-producers-can-build-resilience-with-ai/)

## 融资记录

| 日期 | 已披露金额、参与方与口径 |
| --- | --- |
| 2017-06-07 | 宣布完成 760 万美元 A 轮，Innovation Endeavors、DCVC 和 Prelude Ventures 领投，AME Cloud Ventures、XSeed Capital 参投。[公司公告](https://citrine.io/media-post/citrine-informatics-raises-7-6m-to-revolutionize-materials-driven-product-development-with-ai/) |
| 2018-04-19 | 收到腾讯和 B&C Holdings 提供的 800 万美元可转换票据融资。[公司公告](https://citrine.io/media-post/citrine-informatics-closes-8-million-convertible-note-to-meet-international-demand-for-materials-driven-ai/) |
| 2019-10-10 | B 轮 2,000 万美元，Prelude Ventures、Innovation Endeavors 联合领投，Moore Strategic Ventures、Next47 等参与。[B 轮公告](https://citrine.io/media-post/citrine-informatics-raises-20m-in-series-b-funding/) |
| 2020-12-23、2022-03-25 | 日本 Universal Materials Incubator 与赢创创投分别宣布战略投资，单笔金额未公开。UMI 公告中的 200 亿日元是基金规模。Citrine 当时称自身累计融资已超过 4,800 万美元。[UMI 公告](https://citrine.io/media-post/umi-announces-strategic-investment-in-citrine-informatics/) · [赢创投资公告](https://citrine.io/media-post/citrine-informatics-evonik-venture-capital/) |
| 2023-01-04 | 宣布完成 1,600 万美元 C 轮，Prelude Ventures、Innovation Endeavors 领投，远东集团旗下 Drive Catalyst、Alumni Ventures、ISAI Cap Venture、Presidio Ventures 等参投。[C 轮公告](https://citrine.io/media-post/citrine-informatics-raises-series-c-funding-round/) |
| 2023-09-22 | 向美国证交会申报一笔豁免发行，2 名投资者认购共 4,999,999 美元，已售完。申报未给出商业轮次名称。[SEC Form D](https://www.sec.gov/Archives/edgar/data/1675501/000116840423000001/xslFormDX01/primary_doc.xml) |
| 2025-02-07 | 新一笔豁免发行的申报规模为 610 万美元。申报时 5 名投资者已认购 2,604,987 美元，尚余 3,495,013 美元待售。[SEC Form D 第 13–14 项](https://www.sec.gov/Archives/edgar/data/1675501/000116840425000001/xslFormDX08/primary_doc.xml) |

## 相关链接

- [公司与团队](https://citrine.io/company/) · [客户案例目录](https://citrine.io/category/case-studies/) · [技术博客](https://citrine.io/resources/blog/)
- [热电材料论文与作者信息](https://www.repository.cam.ac.uk/items/b488012d-9f03-435b-9c74-16eea8e8a987) · [公司官网使用的品牌图标](https://citrine.io/wp-content/uploads/2018/08/cropped-favicon-source-192x192.png)
