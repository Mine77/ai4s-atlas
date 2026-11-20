---
title: "Orbital Industries"
type: "startup"
logo: "/logos/orbital-industries.png"
category: "材料研发"
summary: "用原子模拟筛选材料，在自有实验室合成和测试候选物。研发团队已将这套方法用于碳捕集吸附剂和芯片冷却液，并向巴斯夫旗下 ECMS 授权催化剂研发软件。"
countries: ["英国","美国"]
directions: ["Propose","Synthesize","Characterize"]
maturity: "实际部署"
---

## 公司与团队

Orbital Industries 创立于 2022 年，早期以 Orbital Materials 名义开发材料模型，在美国新泽西州普林斯顿设立材料实验室。英国实体 Orbital Materials Ltd 于 2022 年 9 月 2 日注册，截至 2026 年 11 月 20 日仍登记为存续的私人有限公司。2026 年 B 轮公告列出伦敦和旧金山两地约 50 人的团队。公司把材料研发软件对外授权，同时通过旗下品牌 Orbital IT 将冷却液与散热硬件一起开发。[英国公司登记](https://find-and-update.company-information.service.gov.uk/company/14332843) · [旧品牌的公司公告](https://web.archive.org/web/20240222221509/https://orbitalmaterials.com/news/series-a-announcement) · [B 轮及团队信息](https://www.orbitalindustries.com/news/press/orbital-industries-series-b-50-million) · [Orbital IT 品牌公告](https://www.orbitalindustries.com/news/announcements/introducing-orbital-it)

CEO Jonathan Godwin 曾在 DeepMind 从事五年研究，方向包括 AI 辅助材料设计。CTO James Gin-Pollock 是连续创业者，曾将一家企业出售给 Shutterstock。COO Daniel Miodovnik 有金融、政府 AI 项目和联合国咨询工作经历。Godwin 和 Gin-Pollock（论文署名 James Gin）也是原子模拟模型 Orb-v3 的共同作者。[创始团队介绍](https://www.orbitalindustries.com/news/press/orbital-industries-series-b-50-million) · [Orb-v3 论文](https://arxiv.org/abs/2504.06231)

## 产品

### 从候选分子到冷板测试

科学家首先要决定哪些结构值得制样。例如，芯片两相冷却依靠液体沸腾带走热量，候选分子既要满足热学和电绝缘要求，也要能在冷板的实际工作条件下使用。团队用原子模拟初筛，再把候选物的性质与冷板几何、回路条件一起评估。这样，工程条件可以在材料定型前淘汰不合适的候选物。公司已披露用这套方法研发不含全氟和多氟烷基物质（PFAS）的介电冷却液。[冷却硬件团队的研发说明](https://www.linkedin.com/posts/orbital-it_the-hardware-team-gathered-in-our-san-francisco-activity-7503842382115794944-Z8oB) · [材料研发平台与冷却液案例](https://www.orbitalindustries.com/news/press/basf-ecms-ai-materials-discovery-platform)

### 模型、软件与实验验证

| 产品或设施 | 在研发中承担的工作与公开验证 |
| --- | --- |
| Orb 与 OrbMol | 机器学习原子间势接收结构，估算能量与原子受力，供研究者计算结构变化和材料性质。公开仓库提供模型和使用说明。Orb-v3 论文报告，在作者选取的精度、速度和显存基准上，部分模型的推理延迟降至对照的十分之一以下、显存用量降至八分之一以下。数字衡量一次模拟的计算成本，实验室制样与测量另需计时。[同行可检查的代码](https://github.com/orbital-materials/orb-models) · [论文与比较条件](https://arxiv.org/abs/2504.06231) |
| CurieOS | 研究人员在同一项目中检索文献、分析实验记录、调用 Orb 模拟，并据此决定哪些候选材料优先合成。巴斯夫旗下 ECMS 已签署授权协议，将这套软件用于汽车尾气净化催化剂研发。公开协议没有披露新催化剂的转化率、耐久性或合同金额。[授权公告及客户技术负责人说明](https://www.orbitalindustries.com/news/press/basf-ecms-ai-materials-discovery-platform) |
| 材料实验室 | 团队合成并测试 AI 筛选的空气碳捕集吸附剂，希望利用数据中心余热帮助材料再生。2024 年公司与 AWS 报告，自第一季度设立实验室以来，吸附材料的性能改善了十倍。公告没有给出指标单位、绝对值或运行条件，因此无法换算为每吨碳移除成本或实际年度捕集量。[公司研发记录](https://www.orbitalindustries.com/news/blog/the-future-of-data-center-technology) · [AWS 的合作公告](https://press.aboutamazon.com/2024/12/orbital-materials-and-aws-enter-strategic-partnership-to-develop-and-pilot-technologies-for-data-center-decarbonization-and-efficiency) |

2026 年 6 月 2 日，公司还公布了分子模型 OrbMol-v2 的一项可核查结果。它为远距离静电相互作用加入显式计算，在 GSCDB 中剔除需要孤立原子、非能量性质等项目后，团队以剩余 109 个子集的 5,152 个反应比较各方法。在这组反应中，绝对误差大于 100 千卡/摩尔的反应从上一版的 59 个降到 1 个。公司报告新版归一化误差比为 1.62，参照值 1 代表该基准所选最佳杂化密度泛函的误差水平。这个分数说明新版仍有预测偏差，尤其应关注会影响候选物排序的大误差。[模型发布、误差图与评测范围](https://www.orbitalindustries.com/news/blog/introducing-orbmol-v2)

### 数据中心模块与工程交付

Orbital IT 为数据中心开发商和运营商设计散热系统。Nova Array 把机架、冷却、备用电源和配电设备做成工厂预制模块，运到现场后再调试。品牌发布时给出的 180 天是模块交付周期，其在研的芯片直冷产品则把无 PFAS 介电流体、冷板和冷却液分配单元配套设计。对已完成工程，公司另列出一个美国东部项目，称已交付定制空气处理设备及可用于施工的文件。该案例未公布客户名称或设施运行数据。[Orbital IT 产品公告](https://www.orbitalindustries.com/news/announcements/introducing-orbital-it) · [Nova Array 产品页](https://www.orbitalindustries.com/products/nova-array) · [工程交付案例](https://it.orbitalindustries.com/case-studies)

## 产业伙伴与合作范围

| 伙伴 | 合作内容 | 已披露的结果与条款 |
| --- | --- | --- |
| Amazon Web Services（AWS） | 双方签订多年研发协议，评估适配机房余热的碳移除材料和冷却技术。协议还安排通过 SageMaker JumpStart 和 AWS Marketplace 提供 Orb，在 SageMaker HyperPod 上训练模型，并评估 Trainium 芯片。 | 公告确认实验室材料迭代。原定 2025 年底部署测试碳移除系统，所引资料未公布机房验收结果、年度捕集量或采购金额。[AWS 公告](https://press.aboutamazon.com/2024/12/orbital-materials-and-aws-enter-strategic-partnership-to-develop-and-pilot-technologies-for-data-center-decarbonization-and-efficiency) · [Orbital 研发说明](https://www.orbitalindustries.com/news/blog/the-future-of-data-center-technology) |
| Substrate AI | 西班牙合作方签约邀请 Orbital 参与设计建设位于塔拉韦拉-德拉雷纳的 AI 数据中心，合作涉及高密度 GPU 液冷。 | 合作方在 2025 年半年报中再次列出 Orbital 供应商协议。协议金额及设备验收结果未披露。[Substrate AI 公告](https://substrate.ai/substrate-ai-seals-partnership-with-orbital-materials-to-develop-its-first-sustainable-data-center-in-europe/) · [提交交易所的半年报](https://www.bmegrowth.es/docs/documentos/OtraInfRelevante/2025/10/05650_OtraInfRelev_20251028_1.pdf) |
| NVIDIA | Orbital IT 公布双方针对 NVIDIA Vera Rubin DSX 参考架构共同设计模块化机房基础设施，涉及供电、计算和冷却的协同设计。 | 公司给出从下单到启动最快 24 周的产品周期，未披露具体机房的投运日期或合同金额。NVentures 的股权投资另见融资记录。[DSX 合作公告](https://www.orbitalindustries.com/news/press/orbital-industries-partners-nvidia-dsx-ai-factory-infrastructure) |
| 巴斯夫环境催化剂及金属解决方案业务（BASF ECMS） | ECMS 获得 CurieOS 授权，用于汽车尾气后处理催化剂的筛选与研发。 | 公告载有 ECMS 技术负责人 Saeed Alerasool 对研发需求的说明，未披露授权费、新催化剂转化率、耐久性或量产进展。[软件授权公告](https://www.orbitalindustries.com/news/press/basf-ecms-ai-materials-discovery-platform) |

## 融资记录

| 披露时间 | 轮次及已公布金额 | 投资者与依据 |
| --- | --- | --- |
| 2023-06 | 早期融资，480 万美元 | 彭博报道初始融资额。公司在后续 A 轮公告中将 Fly Ventures 和 Compound 列为种子轮领投方。[彭博报道](https://www.bloomberg.com/news/articles/2023-06-30/artificial-intelligence-startup-looks-to-develop-climate-friendly-materials) · [公司 A 轮公告存档](https://web.archive.org/web/20240222221509/https://orbitalmaterials.com/news/series-a-announcement) |
| 2024-02-21 | A 轮，1,600 万美元 | Radical Ventures 领投，Toyota Ventures、Fly Ventures 和 Compound 参与；公司当时公布累计融资接近 2,100 万美元。[公司交割公告存档](https://web.archive.org/web/20240222221509/https://orbitalmaterials.com/news/series-a-announcement) |
| 2024-10-22 | 战略投资，金额未披露 | 公司确认收到英伟达旗下 NVentures 的投资，用于算力、团队与材料项目。[公司公告](https://www.orbitalindustries.com/news/announcements/press-release-orbital-materials-to-advance-materials-and-climate-technologies-with-ai-using-investment-from-nventures) |
| 2026-05-28 | B 轮，5,000 万美元 | Plural 领投，NVentures、Radical Ventures、Compound 和 Fly Ventures 参与。资金用途包括扩大数据中心产品部署及 AI 和工程团队。[公司融资公告](https://www.orbitalindustries.com/news/press/orbital-industries-series-b-50-million) |

上述披露均未列出投前或投后估值。

## 公司动态

- **2022-09-02 · 英国实体注册。** Orbital Materials Ltd 在伦敦注册，以自然科学和工程研发为登记业务。早期发布的模型和融资文件沿用 Orbital Materials 品牌。[英国公司登记](https://find-and-update.company-information.service.gov.uk/company/14332843)
- **2024 年第一季度 · 普林斯顿材料实验室启用。** 团队开始在同一设施内合成和测试模型筛选的候选物，首个产品方向是直接空气碳捕集所用的活性材料。AWS 在当年声明中追溯了实验室启用季度。[AWS 公告](https://press.aboutamazon.com/2024/12/orbital-materials-and-aws-enter-strategic-partnership-to-develop-and-pilot-technologies-for-data-center-decarbonization-and-efficiency)
- **2024-09-02 · 首次公开 Orb 材料模拟模型。** 团队将内部基础模型 LINUS 微调为供外部研究者使用的原子间势，并公开代码。公司在当时选定的大规模模拟对照中报告约五倍速度提升。[首版发布说明](https://www.orbitalindustries.com/news/blog/introducing-orb)
- **2024-12 · 碳移除项目进入与 AWS 联合评估阶段。** 公司与 AWS 报告实验室吸附材料性能较年初改善十倍，希望利用机房余热降低再生能耗。双方把机房集成列为后续试验目标，十倍改善所用指标与测量条件未披露。[AWS 合作公告](https://press.aboutamazon.com/2024/12/orbital-materials-and-aws-enter-strategic-partnership-to-develop-and-pilot-technologies-for-data-center-decarbonization-and-efficiency) · [公司技术回顾](https://www.orbitalindustries.com/news/blog/the-future-of-data-center-technology)
- **2025-04-08 · Orb-v3 技术预印本发布。** 作者比较了不同模型在精度、延迟和显存上的取舍，支持研究者按系统大小和所需性质选择模型。论文中的加速数据仅覆盖所测试的模拟任务。[预印本及版本记录](https://arxiv.org/abs/2504.06231)
- **2025-04-14 · Substrate AI 公布西班牙数据中心协议。** 高密度 GPU 冷却进入具名开发商的项目设计范围。随后提交给交易所的文件将 Orbital 列为已签约供应商。[开发商公告](https://substrate.ai/substrate-ai-seals-partnership-with-orbital-materials-to-develop-its-first-sustainable-data-center-in-europe/) · [交易所文件](https://www.bmegrowth.es/docs/documentos/OtraInfRelevante/2025/10/05650_OtraInfRelev_20251028_1.pdf)
- **2025-08-27 · OrbMol 将 Orb 从无机晶体扩展至分子。** 模型利用 OMol25 超过一亿项密度泛函理论计算结果训练，并将总电荷与自旋多重度纳入输入。团队将水及钠离子水合结构的模拟结果与实验衍射数据进行比较。[模型说明与评测图](https://www.orbitalindustries.com/news/announcements/orbmol-extending-orb-to-molecular-systems)
- **2026-05-27 · 推出 Orbital IT 品牌。** 公司将 Nova Array 模块化机房和正在研发的两相芯片直冷系统列为两条产品线，分别面向缩短现场施工时间和提高芯片散热能力。[品牌及产品公告](https://www.orbitalindustries.com/news/announcements/introducing-orbital-it)
- **2026-06-02 · OrbMol-v2 公开模型与代码。** 新版将长程静电作用显式计入能量。公司用氯化钠离子对展示了变化，在两离子相距较远时，新模型仍能给出随距离衰减的吸引作用。公开基准的误差及筛选范围见产品部分。[模型评测](https://www.orbitalindustries.com/news/blog/introducing-orbmol-v2)
- **2026-06-08 · 公布基于 NVIDIA DSX 的模块化设计。** Orbital IT 将机架散热仿真与厂外预制结合，为 Vera Rubin 架构规划计算和供电设施。公告公布了设计与交付能力，未列出已投运的 DSX 项目。[合作原文](https://www.orbitalindustries.com/news/press/orbital-industries-partners-nvidia-dsx-ai-factory-infrastructure)
- **2026-08-05 至 08-11 · CurieOS 首次公布外部授权伙伴。** BASF ECMS 签约将平台用于汽车排放催化剂研发。随后 CTO 以自研冷却系统解释平台如何工作：芯片规格改变时，团队重新筛选冷却液，计算冷板流场，再更新送交实验室的测试计划。[ECMS 授权公告](https://www.orbitalindustries.com/news/press/basf-ecms-ai-materials-discovery-platform) · [CTO 的产品说明](https://www.orbitalindustries.com/news/announcements/introducing-curieos)

- **2026-09-23 · 施工送审资料的准备与复核。** 机械工程师 Jaden Weaver 记录了一个送审资料包的交付过程。软件从厂商资料抽取规格、与项目要求交叉核对并标记冲突，工程师逐项核验和签署。正文给出的总周转时间从两至三周缩短至两至三天，计时范围涵盖文件准备与审查。作者还用同一平台比较四种冷却架构，让客户在概念设计阶段看到成本、用电和用水之间的取舍。[公司原文](https://www.orbitalindustries.com/news/blog/how-ai-cut-our-submittal-turnaround-from-2-weeks-to-2-days)
- **2026-10-16 · 复核地下电缆的实际载流量。** 产品经理 Ruxy Chitac 介绍了一次电缆负荷复核。先按标准载流量表查询，设计看似能承载 5,000 安培；再考虑相邻电缆发热影响，模型算得约 3,300 安培。软件列出 19 步运算、输入出处和对土壤热阻等未知条件的假设。这个案例展示了为何要保存计算方法，以及工程师如何据此判断哪些现场参数值得优先测量。[公司原文与计算记录](https://www.orbitalindustries.com/news/blog/learning-to-trust-ai)
- **2026-10-26 · 用 15 分钟复核风机安装后的压损。** 风机铭牌上的风量来自试验台。装入机柜后，盘管、转弯和狭窄出口会增加压损。工程师为一台设计流量 10,000 立方英尺/分钟的机房空调编写了 CurieOS 应用，依据布置图和 AMCA 201 系数逐段计算，单次运行不足 15 分钟。公司称同类手算原需数天。这里计时的是应用运行，文中没有给出软件开发工时或现场实测节电量。[公司原文与压损明细](https://www.orbitalindustries.com/news/blog/curieos-fan-system-effect-calculations)

截至 2026 年 11 月 20 日，公司新闻目录中最近一次更新是 10 月 26 日的风机案例。[官方新闻目录](https://www.orbitalindustries.com/news)

## 相关链接

- [公司官网](https://www.orbitalindustries.com/) · [官方 AI 研究目录](https://www.orbitalindustries.com/ai-research)
- [Orb 模型与代码](https://github.com/orbital-materials/orb-models) · [Orb-v3 技术论文](https://arxiv.org/abs/2504.06231)
- [官网采用的品牌图标原图](https://www.orbitalindustries.com/favicon-main.png)
