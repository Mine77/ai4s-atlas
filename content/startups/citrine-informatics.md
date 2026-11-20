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

## 公司与团队

Citrine Informatics 于 2013 年创立，总部在美国加州雷德伍德城。Greg Mulholland 和 Bryce Meredig 共同创办公司，两人都参与了早期热电材料推荐系统的实验研究。Mulholland 拥有剑桥大学材料科学硕士学位，现任 CEO。管理团队还包括首席运营官 Kyle Killebrew 和首席财务官 Rahim Lakhani。Meredig 曾任首席科学家，Kyle Michel 曾任首席技术官。截至 2026 年 11 月 20 日，公司仍以独立品牌提供商业平台，DCVC 将其列为投资组合公司。可核实的资本交易包括私募融资，公开材料未见上市或被收购公告。[公司与现任管理层](https://citrine.io/company/) · [早期团队与总部](https://citrine.io/media-post/citrine-informatics-raises-7-6m-to-revolutionize-materials-driven-product-development-with-ai/) · [DCVC 公司档案](https://www.dcvc.com/companies/citrine-informatics/) · [创始人合著论文](https://doi.org/10.1063/1.4952607)

## 产品

### 从企业实验数据到候选配方

同一填料在不同配比、加工条件和原料来源下，可能得到不同的涂层性能。配方师希望知道，哪些改变能降低成本、保留性能，哪些组合值得占用有限的测试时间。Citrine Platform 把客户的材料成分、工艺和实测结果关联起来。研究人员设置可用原料、目标性能和搜索范围，按模型推荐选择样品，完成测试后把结果用于下一轮训练。[平台与实验选择](https://www.dcvc.com/companies/citrine-informatics/) · [Dorfner 的实际研发流程](https://dorfner.com/en/applications/coatings/ai-and-colors/)

**Omni** 将包括旧电子表格在内的研发数据清洗并整理为待研究人员审核的记录。[Omni 产品说明](https://citrine.io/media-post/unveiling-the-next-frontier-in-materials-ai/)

2026 年 7 月公布的 **Catalyst** 把研究人员用自然语言描述的目标转成数据集、建模任务和候选实验，并给出推荐理由。**Apex** 是背后的预测层，会在多种架构中为具体项目选模型，可利用预训练的化学表示。公司当月披露，客户每月在平台上开展约 380 个项目、部署约 550 个模型，生成约 7 万条实验建议。7 万条衡量的是软件提出候选的规模，实际制样和测量由实验团队完成。[产品发布与统计口径](https://citrine.io/media-post/citrine-launches-catalyst-and-apex-to-make-ai-easier-for-materials-and-chemicals-experts-to-use-and-trust/)

### 两种热电材料的实测结果

两位创始人与大学研究人员合著的热电材料论文呈现了可以逐项核对的验证结果。模型根据材料组成，分别估计电阻率、导热系数、塞贝克系数等指标进入目标范围的概率。研究者从建议中挑出富含金属元素、与常见热电材料成分差异很大的 Gd₁₂Co₅Bi 和 Er₁₂Co₅Bi，制备样品并测量。两种材料的电阻率和导热表现符合模型给出的有利判断。模型对塞贝克系数达标的信心较低，实测绝对值也低于设定的 100 μV/K 门槛。这次工作找到了值得继续优化的材料族，同时揭示了限制其热电性能的具体指标。[同行评议论文](https://doi.org/10.1063/1.4952607) · [原文图 4 与实验数据](https://arxiv.org/abs/1502.07635)

## 产业伙伴与合作范围

以下合作公告和案例未披露合同金额。

| 客户或伙伴 | 合作范围与公开结果 |
| --- | --- |
| Dorfner | 这家德国矿物材料企业在自己的案例中说明，团队把高岭土精制、煅烧等工艺记录与填料性能、成本和能耗关联，开发了面向特定终端产品的 DORKAFILL 填料。Citrine 披露配方开发时间缩短 84%，公开材料未给出各项目的起止日期和样本数。[客户案例](https://dorfner.com/en/applications/coatings/ai-and-colors/) · [Citrine 的指标说明](https://citrine.io/resources/why-choose-citrine/) |
| 昭和电工（Showa Denko） | 客户希望找到同时满足多项要求的混合溶剂。团队从约 380 种备选溶剂出发，用配方规则把超过 8.5 亿种可能组合缩至逾一亿种有效组合，再选择候选做量子化学模拟。五个月内，超过 150 种候选在模拟中突破原有性能折衷边界，其中超过 50 种满足客户全部约束。公开结果属于计算验证。[项目原文](https://citrine.io/case-study-solvent-blend-discovery-accelerated/) |
| Huntsman Building Solutions | Citrine 披露，客户形成初始配方的时间从数月缩短到不足一天。客户后续仍需做产品测试，尤其是泡沫材料的防火性能验证。这个时间指标覆盖形成起始方案的阶段。[客户发言与指标](https://citrine.io/preparing-your-product-development-team-for-ai-three-mindset-shifts-that-matter/) · [泡沫测试案例目录](https://citrine.io/category/case-studies/) |
| 松下（Panasonic） | 研发团队寻找适用于低成本加工的有机半导体。技术案例列出 50 万种候选分子、196 次针对模型推荐分子的密度泛函计算，以及 4 种获得专利的候选。计算评估的是空穴迁移率，案例没有提供量产器件性能。[技术案例 PDF](https://citrine.io/wp-content/uploads/2021/04/Case-Study-Panasonic-Technical.pdf) |
| Eastman | 2021 年部署平台，随后签署多年协议，将原料采购信息与最终产品开发关联，以便跨团队比较材料选择。双方未公布节省的时间或成本。[多年协议](https://citrine.io/media-post/eastman-citrine-informatics-announce-partnership-for-accelerated-product-development/) |
| Perstorp | 用于醇酸树脂乳液。配方师比较乳化剂组合和加工条件，寻找能够稳定乳液的方案。客户报告缩短了开发时间，未给出具体比例。[客户公告](https://www.perstorp.com/en/news_center/news/2026/april/perstorp_partners_with_citrine_informatics) |
| Siemens Digital Industries Software、SCSK | 西门子与 Citrine 商定将材料设计接入数据管理与产品仿真流程。SCSK 则在日本经销平台并提供技术支持，2022 年 7 月 8 日起可通过 SCSK 取得平台服务。[西门子合作公告](https://citrine.io/media-post/citrine-siemens-digital-industries-partnership-announcement/) · [SCSK 经销公告](https://citrine.io/media-post/citrine-scsk-japan-partnership/) |

## 融资记录

下表分列公司宣布的融资和 SEC 申报时点的发行进度。两类记录可能涉及同一批资金，不能直接相加。所列文件均未披露公司估值。

| 日期 | 已披露金额、参与方与口径 |
| --- | --- |
| 2016-05-24 | SEC 豁免发行申报显示 8,757,049 美元全部售出，未标注商业轮次。[SEC Form D](https://www.sec.gov/Archives/edgar/data/1675501/000167550116000001/xslFormDX01/primary_doc.xml) |
| 2017-06-07 | 宣布完成 760 万美元 A 轮，Innovation Endeavors、DCVC 和 Prelude Ventures 领投，AME Cloud Ventures、XSeed Capital 参投。[公司公告](https://citrine.io/media-post/citrine-informatics-raises-7-6m-to-revolutionize-materials-driven-product-development-with-ai/) |
| 2018-04-19 | 收到腾讯和 B&C Holdings 提供的 800 万美元可转换票据融资。[公司公告](https://citrine.io/media-post/citrine-informatics-closes-8-million-convertible-note-to-meet-international-demand-for-materials-driven-ai/) |
| 2019-07-12 | 申报发行 28,556,986 美元，已售 20,948,322 美元。[SEC Form D](https://www.sec.gov/Archives/edgar/data/1675501/000167550119000001/xslFormDX01/primary_doc.xml) |
| 2019-10-10 | B 轮 2,000 万美元，Prelude Ventures、Innovation Endeavors 联合领投，Moore Strategic Ventures、Next47 等参与。[B 轮公告](https://citrine.io/media-post/citrine-informatics-raises-20m-in-series-b-funding/) |
| 2020-11-03 | 申报发行 2,000 万美元，已售 12,354,375 美元。[SEC Form D](https://www.sec.gov/Archives/edgar/data/1675501/000116840420000017/xslFormDX01/primary_doc.xml) |
| 2020-12-23 | 日本 Universal Materials Incubator（UMI）宣布战略投资，单笔金额未披露。200 亿日元是 UMI 的基金规模。Citrine 在这次公告中称累计融资超过 4,800 万美元。[UMI 公告](https://citrine.io/media-post/umi-announces-strategic-investment-in-citrine-informatics/) |
| 2022-03-25 | 赢创创投宣布战略投资，单笔金额未披露。[赢创投资公告](https://citrine.io/media-post/citrine-informatics-evonik-venture-capital/) |
| 2022-11-14 | 申报发行 17,633,507 美元，已售 12,595,504 美元。[SEC Form D](https://www.sec.gov/Archives/edgar/data/1675501/000116840422000002/xslFormDX01/primary_doc.xml) |
| 2023-01-04 | 宣布完成 1,600 万美元 C 轮，Prelude Ventures、Innovation Endeavors 领投，远东集团旗下 Drive Catalyst、Alumni Ventures、ISAI Cap Venture、Presidio Ventures 等参投。[C 轮公告](https://citrine.io/media-post/citrine-informatics-raises-series-c-funding-round/) |
| 2023-09-22 | 向美国证交会申报一笔豁免发行，2 名投资者认购共 4,999,999 美元，已售完。申报未给出商业轮次名称。[SEC Form D](https://www.sec.gov/Archives/edgar/data/1675501/000116840423000001/xslFormDX01/primary_doc.xml) |
| 2025-02-07 | 新一笔豁免发行的申报规模为 610 万美元。申报时 5 名投资者已认购 2,604,987 美元，尚余 3,495,013 美元待售。[SEC Form D 第 13–14 项](https://www.sec.gov/Archives/edgar/data/1675501/000116840425000001/xslFormDX08/primary_doc.xml) |

## 公司动态

### 早期材料数据库与工业试点

- **2013 年 · 公司创立。** Mulholland 与 Meredig 创办 Citrine，着手解决材料测试数据分散、人员流动后难以复用的问题。[公司沿革](https://citrine.io/company/)
- **2014-07-01 · 材料数据平台研发项目获得资助。** 美国国家科学基金会（NSF）SBIR 一期项目启动，资助额 149,999 美元，用于研发材料数据汇集与挖掘平台。这是有明确起止日期的研发经费。[SBIR 项目档案](https://www.sbir.gov/awards/147956)
- **2015-02-26 · 公布热电材料推荐与实验验证。** 创始人与学术合作者在预印本中公开推荐引擎，报告两种富金属候选材料的实测结果。其塞贝克系数未达预设门槛，实验帮助团队辨明了下一步需要改善的指标。论文随后经同行评议发表。[预印本与版本记录](https://arxiv.org/abs/1502.07635) · [期刊论文](https://doi.org/10.1063/1.4952607)
- **2015-05-12 · Citrination 向注册用户开放数据上传。** 用户可以向平台提交自己的材料数据，扩充原本可供查询的记录。[Citrination 更新公告](https://citrine.io/media-post/update-to-citrination/)
- **2017-04 · 将预测不确定性用于选择下一次实验。** 团队在四组材料数据上回测了一种选样方法，兼顾预期性能与尚不确定的候选区域。找到各组最优候选所需测量次数平均约为随机选样的三分之一。基准来自已有数据集，不能直接换算为客户项目节省的实验次数。[研究预印本](https://arxiv.org/abs/1704.07423) · [期刊论文](https://doi.org/10.1007/s40192-017-0098-z)
- **2018-06-21 · 与巴斯夫启动环境催化技术试点。** 初期关注能捕集二氧化碳等温室气体的材料，用巴斯夫的专业知识和实验数据指导候选筛选。公告披露了试点范围，未公布捕集性能。[巴斯夫公告](https://www.basf.com/us/en/media/news-releases/2018/06/P-US-18-075)
- **2019-03-08 · 朗盛将平台用于玻璃纤维浸润剂。** 试点针对玻纤与塑料基体之间的结合性能。朗盛提出希望将配方开发时间缩短一半以上，这是项目启动时的预期。[朗盛公告](https://lanxess.com/en/media/press-releases/2020/10/lanxess-to-deploy-artificial-intelligence-in-product-development)

### 企业部署与联合研究

- **2020-08-04 · 正式对外发布 Citrine Platform。** 企业版将材料数据基础设施和实验推荐结合。发布时朗盛、松下、AGC 和昭和电工已使用过 Citrine 技术，平台的对外发布日期晚于首批试点。[产品发布公告](https://citrine.io/media-post/public-citrine-platform-launch/)
- **2021-02-25 · 与西门子数字化工业软件建立合作。** 双方约定让材料和化工企业能把已有的数据管理系统、材料设计与产品仿真连在一起。公告没有披露已经上线的集成客户数量。[合作原文](https://citrine.io/media-post/citrine-siemens-digital-industries-partnership-announcement/)
- **2022-03-10 · 入选美国能源部 ONWARDS 项目。** Citrine、太平洋西北国家实验室和北得克萨斯大学共同获选承担三年、310 万美元的核废物安全储存材料研究，分别引入实验数据、玻璃与陶瓷模拟。310 万美元是联合项目经费。[项目公告](https://citrine.io/media-post/nuclear-waste-storage/)
- **2022-09-07 · Eastman 将已部署的平台扩展为多年合作。** 2021 年的实施使团队能够把原材料信息与产品性能关联起来。新协议将这一做法用于更多研发决策，未披露采购额。[双方公告](https://citrine.io/media-post/eastman-citrine-informatics-announce-partnership-for-accelerated-product-development/)
- **2023-03-17 · 参与 NSF 可持续材料设计项目。** Citrine 与麻省理工学院、康奈尔大学、斯旺西大学及 Station1 参与一期项目，研究如何将社会与环境因素纳入材料设计。75 万美元是联合项目资助额，公司对应份额未披露。[项目公告](https://citrine.io/media-post/citrine-informatics-awarded-a-national-science-foundation-convergence-accelerator-grant-as-a-collaborating-organization/)
- **2024-10-01 · 入选 ARPA-E 聚变能源材料研究计划。** Citrine 获选接受 30 万美元，用于研究聚变装置第一壁候选合金，比较稀少数据条件下的材料设计方案。获选公告未给出合金服役验证结果。[CHADWICK 项目公告](https://citrine.io/media-post/citrine-informatics-selected-to-receive-300000-in-federal-funding-for-technology-to-enable-fusion-power-plants/)
- **2025-09-12 · 与 Econic 开展二氧化碳基材料研发。** 英国合作方确认以自身实验及配方数据建模，目标包括聚氨酯用多元醇和 Recreaire 表面活性剂。双方未披露合同金额或由该合作实现的减排量。[Econic 公告](https://www.econic-technologies.com/citrine-informatics-and-econic-announce-partnership-to-accelerate-development-of-co%E2%82%82%E2%80%91based-materials/)
- **2025-12-10 · 公布 Omni 与 Apex 的分阶段开发。** 公司开始向平台添加清洗、整合数据和选择预测模型的功能。此次公告交代产品方向，2026 年 7 月的发布才具体披露了 Apex 的基准表现。[公司产品说明](https://citrine.io/media-post/unveiling-the-next-frontier-in-materials-ai/)

### 2026 年的研发应用与产品发布

- **2026-02-09 · 公布 BioMADE 水泥研究。** 项目拟建立模型，判断生物法制得的水泥在不同使用条件下的适用性。BioMADE 提供项目资金，公告未披露金额或现场验证结果。[项目原文](https://citrine.io/media-post/citrine-informatics-launches-biomade-project-to-optimize-deployment-of-biologically-produced-cement/)
- **2026-03-24 · ANZAPLAN 用平台比较选矿流程。** 双方将矿石组分、杂质、可选工艺和地区成本纳入同一次比较，目的是在可行性研究早期选出经济上可行的流程。公告未给出投产后的成本数据。[合作原文](https://citrine.io/media-post/citrine-informatics-and-anzaplan-collaborate-to-accelerate-economically-optimized-mineral-processing-using-ai/)
- **2026-04-22 · 与 Perstorp 公布醇酸树脂乳液项目。** Perstorp 部署配方工具，比较乳化剂与工艺条件的组合，次日也从客户角度确认了应用情况。数千种指可建模比较的配方规模。[公司公告](https://citrine.io/media-post/citrine-informatics-and-perstorp-partner-to-accelerate-alkyd-emulsion-innovation-using-ai/) · [Perstorp 公告](https://www.perstorp.com/en/news_center/news/2026/april/perstorp_partners_with_citrine_informatics)
- **2026-04-24 · 发表特种化工原料替代分析。** 原料断供会改变整个配方的可行范围。一种价格合适的替代品可能影响涂层性能，也可能无法满足某地区客户的要求。文章描述了配方团队如何在同一组目标下比较替代方案，把成本、供货区域和预期性能一起带入筛选，再决定哪些样品值得验证。文章讨论的是研发决策方法，没有为某种具体替代配方公布测试结果。[阅读原文](https://citrine.io/change-is-the-only-constant-how-specialty-chemicals-producers-can-build-resilience-with-ai/)
- **2026-06-16 · 与 CHESCO 继续 AGIL 2 合作。** 新阶段承接此前与罗尔斯·罗伊斯德国公司完成的 Rigel 工作，计划把实时工艺监测纳入制造数字孪生，用于混合电动交通系统原型开发。[联合公告](https://citrine.io/media-post/citrine-informatics-and-chesco/)
- **2026-07-07 · 公布 Catalyst 与 Apex，并解释为何模型建议需要可追溯。** 一条预测可能要消耗数周测试时间。文章从实验负责人的角度说明，建议必须交代为何选择这个样品、哪些变量决定表现、在原料或成本约束变化后结论是否仍成立。在同日的产品公告中，公司称，未经人工调优的 Apex 在 95% 的内部基准比较中达到或超过专家调优的旧平台模型。该比例来自公司内部对比，尚不能据此推算某家客户能省下多少轮实验。[博客原文](https://citrine.io/the-next-barrier-for-ai-in-materials-development-is-adoption/) · [同期基准说明](https://citrine.io/media-post/citrine-launches-catalyst-and-apex-to-make-ai-easier-for-materials-and-chemicals-experts-to-use-and-trust/) 7 月 14 日的公开演示录制了从研发目标到候选实验的工作流程。[产品演示](https://citrine.io/smoothing-the-path-to-ai-adoption/)
- **2026-08-29 · 以 Huntsman 为例讨论怎样启动配方项目。** 作者以 Huntsman 的经验解释，历史实验整理到什么程度，取决于下一次要做什么决策。团队可以先为一项具体配方任务收集有代表性的记录，把缺失的区域交给新实验补足。即使样品没有达到目标，只要能追溯原料、条件和测量结果，它仍能排除错误方向。文章所举约 30 个有代表性的数据点是作者给出的起步示例，是否够用取决于它们能否覆盖待研究的变量。[阅读原文](https://citrine.io/preparing-your-product-development-team-for-ai-three-mindset-shifts-that-matter/)
- **2026-09-02 · 与德国 Forum Rathenau 达成合作。** Citrine 约定为 Scale New Chemistry 项目的参加团队提供平台、培训和持续技术支持，使团队能够共享实验记录和模型。公告未披露由此产生的新产品或企业数量。[联合公告](https://citrine.io/media-post/forum-rathenau-and-citrine-informatics-partner-to-accelerate-germanys-green-deep-tech-ecosystem/)
- **2026-10-08 · 发布涂料和黏合剂重配方案例讲座。** 团队以无 PFAS 配方、水性产品的表面活性剂组合为例，讲解如何把原料属性、工艺参数和历次实验合用以挑选替代配方。公开页没有给出逐个候选的测试结果。[活动录像与案例范围](https://citrine.io/ai-powered-reformulation-finding-pfas-free-lower-voc-formulations-faster/)
- **2026-11-17 · 公开原料供应风险与配方调整专题。** 公司与行业活动平台 PMI Live 发布专题讲座，讨论如何找出对供应或成本最敏感的原料，以及如何在短缺和价格波动情景下筛选替代物。公开议程未披露新的客户实测指标。[公司活动日期](https://citrine.io/resources/webinars/) · [主办方专题页](https://www.pmi-live.com/events/resilient-by-design/)

## 相关链接

- [公司与团队](https://citrine.io/company/) · [客户案例目录](https://citrine.io/category/case-studies/) · [新闻与公告](https://citrine.io/media-post/) · [技术博客](https://citrine.io/resources/blog/)
- [热电材料论文与作者信息](https://www.repository.cam.ac.uk/items/b488012d-9f03-435b-9c74-16eea8e8a987) · [公司官网使用的品牌图标](https://citrine.io/wp-content/uploads/2018/08/cropped-favicon-source-192x192.png)
