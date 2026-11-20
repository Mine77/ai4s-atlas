---
title: "Xaira Therapeutics"
type: "startup"
logo: "/logos/xaira-therapeutics.png"
category: "制药与药物研发"
summary: "用单细胞数据寻找药物靶点，用生成模型设计抗体，并在自有实验室验证候选分子。已公开肿瘤与免疫炎症项目的临床前进展。"
countries: ["美国"]
directions: ["Propose","Synthesize","Characterize"]
maturity: "实际部署"
---

## 公司与团队

Xaira Therapeutics 是一家自行发现和开发生物药的美国未上市公司，总部位于加州南旧金山，在西雅图和伦敦设有研发中心。ARCH Venture Partners 与 Foresite Labs 联合孵化了公司。2024 年 4 月公开亮相时，团队已经汇集了华盛顿大学蛋白质设计研究所的模型研究人员、Illumina 分拆出的功能基因组学技术与人员，以及来自 Interline Therapeutics 的蛋白质组学团队。这些资源让公司能在内部选择靶点、设计分子并测量实验结果。[创立公告](https://www.businesswire.com/news/home/20240423707240/en/) · [研发地点](https://www.xaira.com/work-with-us) · [私募市场记录](https://forgeglobal.com/xaira-therapeutics_stock/)

联合创始人、董事长兼 CEO Marc Tessier-Lavigne 曾任基因泰克首席科学家。科学联合创始人 David Baker 来自华盛顿大学蛋白质设计研究所，现任科学顾问。Ci Chu 担任首席发现官，Debbie Law 担任首席科学官，Bo Wang 担任首席 AI 科学家。[CEO 履历](https://www.xaira.com/team/marc-tessier-lavigne) · [团队与里程碑](https://www.xaira.com/our-team)

## 产品

### 自有药物管线

Xaira 的主要交付物是供内部药物发现团队进一步开发的候选抗体和蛋白质药物。官网管线图列出九个项目。XA-1 和 XA-5 属于肿瘤方向，XA-2 至 XA-4 属于免疫与炎症方向，XA-6 至 XA-9 的疾病方向未披露。截至 2026 年 11 月 20 日，公开进度最靠前的项目在先导分子优化阶段。公司已披露分子结合和细胞功能数据，尚未公布这些项目的人体疗效。[管线图与平台说明](https://www.xaira.com/platform) · [XA-1 与 XA-4 项目数据](https://www.xaira.com/news/de-novo-design-of-progressable-antibodies-to-therapeutic-targets)

### 虚拟细胞与公开研究数据

X-Cell 为靶点研究人员预测改变某一基因活性后，其他基因的表达怎样变化。训练图谱 X-Atlas/Pisces 涵盖约 2,560 万个受干预的单细胞。公司报告，在训练时留出的诱导多能干细胞干预测试中，预测和实测表达变化的皮尔逊相关系数为 0.51。这个指标只衡量该测试中的表达变化预测，候选靶点的治疗价值还要在疾病模型和患者中分别验证。X-Patient 的设计用途是识别可能对治疗有反应的患者群体，公开平台页未列出前瞻性患者验证结果。[X-Cell 模型文档与评测口径](https://github.com/Xaira-Therapeutics/X-Cell/blob/main/docs/index.md) · [X-Patient 平台说明](https://www.xaira.com/platform)

外部研究者可依 CC BY-NC-SA 4.0 非商业许可获取较早的 X-Atlas/Orion 数据。该图谱记录约 800 万个细胞，覆盖两种人类细胞系和 18,903 个蛋白编码基因。对于更大的 Pisces 图谱，公司数据卡只列出部分拟发布数据，模型仓库也将权重和推理代码标为待发布；2,560 万是训练图谱规模。[公司数据发布账户](https://huggingface.co/Xaira-Therapeutics) · [Orion 数据卡与许可](https://huggingface.co/datasets/Xaira-Therapeutics/X-Atlas-Orion) · [Pisces 数据卡](https://huggingface.co/datasets/Xaira-Therapeutics/X-Atlas-Pisces)

### 抗体设计、靶点提名与实验验证

| 内部使用者 | 工具及交付物 | 已公开的验证范围 |
| --- | --- | --- |
| 抗体发现团队 | X-Design 为指定靶点提出抗体候选。实验人员检查候选的结合能力、对相似蛋白的选择性、功能和稳定性 | XA-1 取得临床前先导分子，XA-4 取得阻断受体活性的候选并进入先导优化。两者都是公司选择披露的项目。[抗体设计项目报告](https://www.xaira.com/news/de-novo-design-of-progressable-antibodies-to-therapeutic-targets) |
| 靶点研究团队 | X-Scientist 结合语言模型、公司内部数据和生物学工具，给出供实验筛选的候选清单 | 在一个肝细胞实验中，AI 和研究人员分别提名的候选取得相近命中率，随机提名明显更低。[对照实验](https://www.xaira.com/news/x-scientist-recursive-self-improving-agentic-ai-platform) |
| 蛋白生产与分析团队 | X-Automate 用机器人把生产工作站的样品交接给分析仪器，X-Scientist 协调搬运、上样和分析 | 已在内部高效液相色谱仪（HPLC）连续运行一周。档案中的“实际部署”指这条实验室流程。[实地运行报告](https://www.xaira.com/news/x-automate-brings-physical-and-agentic-ai-to-labs) |

## 产业伙伴与合作范围

| 机构或潜在伙伴 | 已披露的合作范围及条款 |
| --- | --- |
| 华盛顿大学蛋白质设计研究所、Baker 实验室 | 团队在《Nature》发表从头设计抗体的研究。华盛顿大学确认 Xaira 已取得相关技术许可，部分发明人收到许可相关款项，金额未披露。校方也说明，主要作者在开展研究时隶属大学，部分作者随后加入 Xaira。[校方对研究归属及许可的说明](https://www.ipd.uw.edu/2025/11/rfantibody-in-nature/) · [论文](https://doi.org/10.1038/s41586-025-09721-5) |
| Illumina、Interline Therapeutics | 初创时，Xaira 接收了源自 Illumina 的功能基因组学技术及人员，并整合了 Interline 的蛋白质组学团队。启动公告未披露两项安排的对价或共同开发药物条款。[创立公告](https://www.businesswire.com/news/home/20240423707240/en/) |
| Nebius | Xaira 获得北美区域奖及 3 万美元算力额度，可用于计算服务。此项支持按算力额度计量。[Nebius 获奖名单及条款](https://nebius.com/newsroom/nebius-celebrates-healthcare-and-life-sciences-innovators-at-expanded-ai-discovery-awards) |
| NVIDIA、AWS | X-Automate 团队致谢 NVIDIA 对机器人软件的技术讨论，以及 AWS 对 X-Bot 和潜在云端部署的意见。该报告未披露云端投产或商业合同金额。[实验室技术报告](https://www.xaira.com/news/x-automate-brings-physical-and-agentic-ai-to-labs) |
| 外部药企与数据持有方 | 商务负责人 Rachel Lane 在 2026 年 7 月解释对外部数据的需求。10 月，CEO 表示正在讨论用 X-Design 研究其他公司感兴趣的靶点。两次访谈均未披露已签约的药企客户、首付款或里程碑金额。[商务负责人访谈](https://www.biospace.com/business/secretive-ai-drug-hunter-xaira-dips-toe-into-dealmaking-with-hunt-for-partners) · [CEO 访谈](https://www.fiercebiotech.com/biotech/weve-been-taking-our-time-xaira-reveals-antibody-platform-and-first-taste-pipeline) |

## 融资记录

2024 年 4 月 23 日，公司公告启动时已获**超过 10 亿美元的投资承诺**，由 ARCH Venture Partners 和 Foresite Capital 领投。参与方包括 F-Prime、NEA、红杉资本、Lux Capital、Lightspeed、Menlo Ventures、Two Sigma Ventures、Parker Institute for Cancer Immunotherapy、Byers Capital、Rsquared 及 SV Angel。公司未逐笔披露资金到账时间、金额或投后估值。[公司融资公告](https://www.businesswire.com/news/home/20240423707240/en/)

私募市场平台 Forge 将同日融资列作 Series Seed 约 5.0134 亿美元、Series A 5 亿美元，列示投后估值约 26.5 亿美元。这是第三方对启动融资的股份分类，若将这两项再加到公司公告的承诺总额，会重复计算。[Forge 融资与估值表](https://forgeglobal.com/xaira-therapeutics_ipo/)

## 公司动态

- **2026-10-23 · 生产工作站接入 HPLC。** X-Automate 七天内完成 18 块 96 孔板的运输、上样和分析。报告所称处理量提高 80%，比较基准是工作日朝九晚五人工上样的模拟排班；收益来自夜间和周末也能上样。期间上游样品存储发生四次中断，需要人工恢复。该测试覆盖这条具体工作流程。[现场运行记录与模拟基准](https://www.xaira.com/news/x-automate-brings-physical-and-agentic-ai-to-labs)
- **2026-10-21 · X-Scientist 完成靶点提名对照实验。** 在肝细胞模型中，AI、研究人员和随机选择三组候选逆转特定基因表达反应的实测命中率分别为 7.1%、6.9% 和 0.9%。AI 提名用时约 20 分钟，人工超过三小时。计时只覆盖提出清单，三组候选随后都经过实验测量。[实验设计、图 3 与耗时口径](https://www.xaira.com/news/x-scientist-recursive-self-improving-agentic-ai-platform)
- **2026-10-02 · 公布 XA-1 与 XA-4 的抗体设计结果。** 在肿瘤项目 XA-1，182 个初始设计中有 18 个通过质控并确认结合目标。公司在七周内获得临床前先导分子，计时开始前已经确定目标结合位置并备齐实验材料。在免疫炎症项目 XA-4，以往筛选和免疫尝试均未取得可用分子；团队此次经细胞功能检测确认 6 个抑制候选，其中 1 个进入先导优化。两个案例分别回答了已知结合位置时的开发速度，以及难处理靶点上能否找到具有功能的分子。跨项目成功率尚未公布。[两个项目的实验结果与计时起点](https://www.xaira.com/news/de-novo-design-of-progressable-antibodies-to-therapeutic-targets)
- **2026-07 · 首次展示自有生物药管线。** 公司里程碑将首次公布管线列在 7 月。官网现列 XA-1 至 XA-9，并区分肿瘤、免疫炎症和未披露方向；XA-1 与 XA-4 的具体实测数据到 10 月才发表。[公司里程碑](https://www.xaira.com/our-team) · [管线图](https://www.xaira.com/platform)
- **2026-07-06 · 增设转化科学与早期临床开发负责人。** Ian McCaffery 出任该职能的高级副总裁，Ci Chu 与 Bo Wang 分别升任首席发现官和首席 AI 科学家。此次公告说明研发分工，管线的实际阶段仍以项目披露为准。[人事公告](https://www.xaira.com/news/xaira-therapeutics-announces-the-appointment)
- **2026-07-02 · 获 Nebius 北美区域奖。** Nebius 授予 Xaira 3 万美元算力额度。主办方另列各赛道竞争奖项及全体获奖者的额度总额，Xaira 的额度以区域奖条款为准。[主办方公告](https://nebius.com/newsroom/nebius-celebrates-healthcare-and-life-sciences-innovators-at-expanded-ai-discovery-awards)
- **2026-06-29 · 发布候选抗体进入后续开发的判据。** 公司说明怎样从筛选初步命中走向可推进的分子：先确认与目标真实结合，再考察功能、选择性和物理化学性质。该文给出了后来解读 XA-1、XA-4 数据的依据，本次披露的是评价框架。[公司技术文章](https://www.xaira.com/news/progressable-binders-the-binders-that-matter)
- **2026-03-17 · 公布首个虚拟细胞模型 X-Cell 与 Pisces 训练图谱。** 公司将靶点发现从发布数据推进到预测细胞对基因干预的反应，并披露了在留出干预上的模型评测。约 2,560 万个细胞是训练图谱规模，公开数据范围另见数据卡。[公司发布](https://www.xaira.com/news/xaira-therapeutics-launches-x-cell-its-first-virtual-cell-model-trained-on-the-largest-ever-genome-wide-perturbation-dataset-x-atlas-pisces) · [Pisces 数据卡](https://huggingface.co/datasets/Xaira-Therapeutics/X-Atlas-Pisces)
- **2025-11-05 · 抗体设计研究在《Nature》在线发表。** Baker 实验室团队报告，计算设计可生成同时具有重链和轻链的抗体可变区，并用结构实验核对结合方式。论文属于大学主导的研究；校方明确披露了相关发明向 Xaira 许可的关系。[研究所说明](https://www.ipd.uw.edu/2025/11/rfantibody-in-nature/) · [研究论文](https://doi.org/10.1038/s41586-025-09721-5)
- **2025-06-17 · 对外发布 X-Atlas/Orion。** 两种细胞系的基因干预数据让外部研究者能在同一图谱上比较表达反应、训练和评价模型。数据卡列明覆盖范围和非商业使用许可。[同期公司公告](https://www.financialcontent.com/article/bizwire-2025-6-17-x-atlasorion-xaira-therapeutics-unveils-largest-publicly-available-genome-wide-perturb-seq-dataset-to-power-next-generation-ai-for-biology) · [数据与许可](https://huggingface.co/datasets/Xaira-Therapeutics/X-Atlas-Orion)
- **2025-04-03 · Bo Wang 加入并负责生物医学 AI。** 其最初职务是高级副总裁兼生物医学 AI 负责人，首席 AI 科学家是 2026 年 7 月的晋升。[任命公告](https://www.xaira.com/news/xaira-therapeutics-announces-the-appointment-of-bo-wang)
- **2024-12-11 · 任命首席医学官与首席技术官。** 公司宣布 Paulo Fontoura 负责医学事务，联合创始人 Hetu Kamisetty 出任首席技术官。该安排补充了初创时以功能基因组学和计算设计为主的团队。[公司公告](https://www.businesswire.com/news/home/20241211004372/en/)
- **2024-10-17 · Debbie Law 加入领导科学研发。** 公司任命 Law 为首席科学官，同时任命 Julia Tran 为首席人事官，两者均直接向 CEO 汇报。[公司公告](https://www.xaira.com/news/xaira-therapeutics-appoints-dr-debbie-law-as-chief-scientific-officer-and-julia-tran-as-chief-people-officer)
- **2024-04-23 · Xaira 公开亮相。** ARCH Venture Partners 与 Foresite Labs 公布孵化成果，公司带着超过 10 亿美元的投资承诺启动，将药物开发、实验数据生产和机器学习置于同一组织。此时披露的是团队与研发能力。[启动公告](https://www.businesswire.com/news/home/20240423707240/en/)

## 相关链接

- [公司官网](https://www.xaira.com/) · [平台与管线](https://www.xaira.com/platform) · [公司新闻与技术文章目录](https://www.xaira.com/news-content)
- [公司研究数据账户](https://huggingface.co/Xaira-Therapeutics) · [X-Cell 模型文档](https://github.com/Xaira-Therapeutics/X-Cell/blob/main/docs/index.md)
- [公司官网品牌图标原图](https://cdn.prod.website-files.com/6a79b735e0b81ae1e04e6490/6a902bf3c8cab64d84f79942_Xaira_Favicon.png)
