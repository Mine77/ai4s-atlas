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

## 公司与创始团队

Orbital Industries 创立于 2022 年，早期以 Orbital Materials 名义开发材料模型，在美国新泽西州设立实验室。英国实体 Orbital Materials Ltd 于 2022 年 9 月 2 日注册，截至 2026 年 11 月 20 日仍登记为存续的私人有限公司。2026 年 B 轮公告列出伦敦和旧金山两地约 50 人的团队。公司把材料研发软件对外授权，同时通过旗下品牌 Orbital IT 将冷却液与散热硬件一起开发。[英国公司登记](https://find-and-update.company-information.service.gov.uk/company/14332843) · [旧品牌的公司公告](https://web.archive.org/web/20240222221509/https://orbitalmaterials.com/news/series-a-announcement) · [B 轮及团队信息](https://www.orbitalindustries.com/news/press/orbital-industries-series-b-50-million) · [Orbital IT 品牌公告](https://www.orbitalindustries.com/news/announcements/introducing-orbital-it)

CEO Jonathan Godwin 曾在 DeepMind 从事五年研究，方向包括 AI 辅助材料设计。CTO James Gin-Pollock 是连续创业者，曾将一家企业出售给 Shutterstock。COO Daniel Miodovnik 有金融、政府 AI 项目和联合国咨询工作经历。Godwin 和 Gin-Pollock（论文署名 James Gin）也是原子模拟模型 Orb-v3 的共同作者。[创始团队介绍](https://www.orbitalindustries.com/news/press/orbital-industries-series-b-50-million) · [Orb-v3 论文](https://arxiv.org/abs/2504.06231)

## AI 如何改变材料实验的选择

科学家首先要决定哪些结构值得制样。例如，芯片两相冷却依靠液体沸腾带走热量，候选分子既要满足热学和电绝缘要求，也要能在冷板的实际工作条件下使用。团队用原子模拟初筛，再把候选物的性质与冷板几何、回路条件一起评估。这样，工程条件可以在材料定型前淘汰不合适的候选物。公司已披露用这套方法研发不含全氟和多氟烷基物质（PFAS）的介电冷却液。[冷却硬件团队的研发说明](https://www.linkedin.com/posts/orbital-it_the-hardware-team-gathered-in-our-san-francisco-activity-7503842382115794944-Z8oB) · [材料研发平台与冷却液案例](https://www.orbitalindustries.com/news/press/basf-ecms-ai-materials-discovery-platform)

| 产品或设施 | 在研发中承担的工作与公开验证 |
| --- | --- |
| Orb 与 OrbMol | 机器学习原子间势接收结构，估算能量与原子受力，供研究者计算结构变化和材料性质。公开仓库提供模型和使用说明。Orb-v3 论文报告，在作者选取的精度、速度和显存基准上，部分模型的推理延迟降至对照的十分之一以下、显存用量降至八分之一以下。数字衡量一次模拟的计算成本，实验室制样与测量另需计时。[同行可检查的代码](https://github.com/orbital-materials/orb-models) · [论文与比较条件](https://arxiv.org/abs/2504.06231) |
| CurieOS | 研究人员在同一项目中检索文献、分析实验记录、调用 Orb 模拟，并据此决定哪些候选材料优先合成。巴斯夫旗下 ECMS 已签署授权协议，将这套软件用于汽车尾气净化催化剂研发。公开协议没有披露新催化剂的转化率、耐久性或合同金额。[授权公告及客户技术负责人说明](https://www.orbitalindustries.com/news/press/basf-ecms-ai-materials-discovery-platform) |
| 材料实验室 | 团队合成并测试 AI 筛选的空气碳捕集吸附剂，希望利用数据中心余热帮助材料再生。2024 年公司与 AWS 报告，自第一季度设立实验室以来，吸附材料的性能改善了十倍。公告没有给出指标单位、绝对值或运行条件，因此无法换算为每吨碳移除成本或实际年度捕集量。[公司研发记录](https://www.orbitalindustries.com/news/blog/the-future-of-data-center-technology) · [AWS 的合作公告](https://press.aboutamazon.com/2024/12/orbital-materials-and-aws-enter-strategic-partnership-to-develop-and-pilot-technologies-for-data-center-decarbonization-and-efficiency) |

2026 年 6 月 2 日，公司还公布了分子模型 OrbMol-v2 的一项可核查结果。它为远距离静电相互作用加入显式计算，在剔除孤立原子的 GSCDB 基准上，绝对误差大于 100 千卡/摩尔的反应从上一版的 59 个降到 1 个。公司报告新版归一化误差比为 1.62，参照值 1 代表该基准所选最佳杂化密度泛函的误差水平。这个分数说明新版仍有预测偏差，尤其应关注会影响候选物排序的大误差。[模型发布、误差图与评测范围](https://www.orbitalindustries.com/news/blog/introducing-orbmol-v2)

## 数据中心业务与合作进展

Orbital IT 是数据中心基础设施品牌，业务包括冷却系统和工厂预制的数据中心模块。模块设计、风机选型及施工文件审查体现的是软件在工程中的使用。材料科研的实物证据来自团队合成测试的吸附剂，以及公司披露的冷却液研发。AWS 于 2024 年 12 月确认签订多年研发合作，以评估碳移除和冷却技术的性能与可扩展性。当时公布的 2025 年底机房测试是计划日期，公开公告未给出现场验收结果或采购金额。ECMS 的软件授权则提供了独立于机房项目的材料研发客户证据。[Orbital IT 业务范围](https://www.orbitalindustries.com/news/announcements/introducing-orbital-it) · [AWS 公告](https://press.aboutamazon.com/2024/12/orbital-materials-and-aws-enter-strategic-partnership-to-develop-and-pilot-technologies-for-data-center-decarbonization-and-efficiency) · [ECMS 授权公告](https://www.orbitalindustries.com/news/press/basf-ecms-ai-materials-discovery-platform)

## 最近三篇公司博客

截至 2026 年 11 月 20 日，官网新闻目录列出的最新三篇博客都来自 CurieOS 工程应用。它们说明材料项目进入硬件设计后，工程师如何检查计算、选择设备和交付文件。[官方新闻目录](https://www.orbitalindustries.com/news)

### 2026-10-26 · CurieOS cuts fan system effect calculations from days to 15 minutes

风机铭牌上的风量来自试验台。装入机柜后，盘管、转弯和狭窄出口会增加压损。工程师为一台设计流量 10,000 立方英尺/分钟的机房空调编写了 CurieOS 应用，依据布置图和 AMCA 201 系数逐段计算，单次运行不足 15 分钟。公司称同类手算原需数天。这里计时的是应用运行，文中没有给出软件开发工时或现场实测节电量。[公司原文与压损明细](https://www.orbitalindustries.com/news/blog/curieos-fan-system-effect-calculations)

### 2026-10-16 · Learning to Trust AI: What Building for Engineers Taught Us

产品经理 Ruxy Chitac 介绍了一次电缆负荷复核。先按标准载流量表查询，设计看似能承载 5,000 安培；再考虑相邻电缆发热影响，模型算得约 3,300 安培。软件列出 19 步运算、输入出处和对土壤热阻等未知条件的假设。这个案例展示了为何要保存计算方法，以及工程师如何据此判断哪些现场参数值得优先测量。[公司原文与计算记录](https://www.orbitalindustries.com/news/blog/learning-to-trust-ai)

### 2026-09-23 · How AI Cut Our Submittal Turnaround from 2 Weeks to 2 Days

机械工程师 Jaden Weaver 记录了一个送审资料包的交付过程。软件从厂商资料抽取规格、与项目要求交叉核对并标记冲突，工程师逐项核验和签署。正文给出的总周转时间从两至三周缩短至两至三天，计时范围涵盖文件准备与审查。作者还用同一平台比较四种冷却架构，让客户在概念设计阶段看到成本、用电和用水之间的取舍。[公司原文](https://www.orbitalindustries.com/news/blog/how-ai-cut-our-submittal-turnaround-from-2-weeks-to-2-days)

## 融资记录

| 披露时间 | 轮次及已公布金额 | 投资者与依据 |
| --- | --- | --- |
| 2023-06 | 早期融资，480 万美元 | 彭博报道初始融资额。公司在后续 A 轮公告中将 Fly Ventures 和 Compound 列为种子轮领投方。[彭博报道](https://www.bloomberg.com/news/articles/2023-06-30/artificial-intelligence-startup-looks-to-develop-climate-friendly-materials) · [公司 A 轮公告存档](https://web.archive.org/web/20240222221509/https://orbitalmaterials.com/news/series-a-announcement) |
| 2024-02-21 | A 轮，1,600 万美元 | Radical Ventures 领投，Toyota Ventures、Fly Ventures 和 Compound 参与；公司当时公布累计融资接近 2,100 万美元。[公司交割公告存档](https://web.archive.org/web/20240222221509/https://orbitalmaterials.com/news/series-a-announcement) |
| 2024-10-22 | 战略投资，金额未披露 | 公司确认收到英伟达旗下 NVentures 的投资，用于算力、团队与材料项目。[公司公告](https://www.orbitalindustries.com/news/announcements/press-release-orbital-materials-to-advance-materials-and-climate-technologies-with-ai-using-investment-from-nventures) |
| 2026-05-28 | B 轮，5,000 万美元 | Plural 领投，NVentures、Radical Ventures、Compound 和 Fly Ventures 参与。资金用途包括扩大数据中心产品部署及 AI 和工程团队。[公司融资公告](https://www.orbitalindustries.com/news/press/orbital-industries-series-b-50-million) |

## 相关链接

- [公司官网](https://www.orbitalindustries.com/) · [官方 AI 研究目录](https://www.orbitalindustries.com/ai-research)
- [Orb 模型与代码](https://github.com/orbital-materials/orb-models) · [Orb-v3 技术论文](https://arxiv.org/abs/2504.06231)
- [官网采用的品牌图标原图](https://www.orbitalindustries.com/favicon-main.png)
