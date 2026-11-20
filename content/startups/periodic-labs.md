---
title: "Periodic Labs"
type: "startup"
logo: "/logos/periodic-labs.png"
category: "材料研发"
summary: "在加州自建自动化材料实验室，用合成记录和衍射图谱训练科学模型，并为半导体研发团队定制数据分析工具。"
countries: ["美国"]
directions: ["Propose","Synthesize","Characterize"]
maturity: "实际部署"
---

## 公司与团队

Periodic Labs 成立于 2025 年，在美国加州门洛帕克自建高通量材料实验室。团队研究高温超导体和磁性材料，也为半导体研发团队训练实验数据分析工具。公司保留每次合成的条件、失败样品和衍射测量结果，希望模型能从连续的实验记录中学到科学家为什么改变下一步方案。[公司成立公告](https://periodic.com/news/introducing-periodic-labs) · [创始人联合访谈](https://www.generalist.com/p/a-chatbot-walks-into-a-laboratory)

联合创始人 Liam Fedus 和 Ekin Doğuş Çubuk 共同担任 CEO。Fedus 曾负责 OpenAI 的后训练工作，参与创建 ChatGPT。Çubuk 曾领导 Google Brain 和 DeepMind 的材料与化学团队，其团队开发了用于预测稳定晶体的 GNoME。创始团队中，机器学习研究者 Dzmitry Bahdanau 负责多项大语言模型研究，Muratahan Aykol 专长于计算材料科学，麻省理工学院凝聚态物理学家 Joe Checkelsky 休假全职担任实验室负责人。科学顾问包括斯坦福大学的 Steve Kivelson、沈志勋和 Carolyn Bertozzi，以及西北大学的 Chris Wolverton 和 Mercouri Kanatzidis。[团队及科学顾问](https://periodic.com/) · [a16z 对创始团队的介绍](https://a16z.com/announcement/investing-in-periodic-labs/) · [创始人谈团队分工](https://swyx.substack.com/p/periodic)

## 产品

### 自动化材料实验室与 Periodic Neon

门洛帕克的实验室用机器人混合、加热粉末原料，再用粉末 X 射线衍射（XRD）测量产物。研究人员要从图谱中辨别目标晶相、未反应的原料和意外生成的副产物。混合样品中不同晶相的衍射峰会重叠，几种解释可能同样贴合曲线，原料和加热气氛却只支持其中一种。公司的万亿参数模型 Periodic Neon 读取制样条件和相关实验记录，调用结构数据库、物理模拟及图谱拟合软件，给实验人员返回晶相分析。官网提供可浏览的分析实例。[实验室说明](https://periodic.com/news/building-labs-that-learn) · [分析实例与研究报告](https://periodic.com/news/nature-is-our-learning-environment)

实验室已可全天候运行。一次新实验可能需要几天，团队在等待新样品时复用已有图谱训练模型，以缓解人工判谱跟不上制样速度的问题。已披露的内部部署用于解释实验结果。公司将设计合成步骤、选择下一项实验、指挥多轮实验列为后续任务；获得工作温度更高且实用的超导体仍是研究目标。[部署公告](https://periodic.com/news/building-labs-that-learn)

### 模型验证与训练成本

以开放权重模型 Kimi K2.6 为起点，团队用科研文献、代码和实验数据做中期训练，再做强化学习。在同一套分析工具下，公司以 134 个专家也需数小时解读的内部样品组成 FrontierXRD 难题集。基座模型达标率为 2.7%，Neon 为 55.3%。每张用于校准评分的图谱由三位材料专家标注，两种模型组成的评审组与专家共识一致率为 84%。前一个结果衡量判谱成功率，后一个结果衡量自动评分与专家判断的吻合程度。[评测原文](https://periodic.com/news/nature-is-our-learning-environment)

团队还评测了 198 份来自训练时留出化学体系的图谱。这项试验检验模型能否迁移到其他化学体系，样品和仪器仍来自 Periodic 自身。外部实验室的准确率、从提出材料假设到验证其性能所需的总时间，都需要另外测量。[留出化学体系实验](https://periodic.com/news/nature-is-our-learning-environment)

一次复杂分析可能超过一小时，模型要反复调用科学软件。团队将推理与训练异步运行，用 GPU 节点上的空闲 CPU 执行这些工具。最终训练峰值为 1,300 块 H200。对于长度不一的长输入，公司在相同 GPU 上测得训练吞吐量达到自身 Megatron 基线的 4.1 倍。该指标衡量计算端的训练效率。合成和验证材料仍取决于设备和单轮实验周期。[工程报告、硬件与基线](https://periodic.com/news/ai-infrastructure-at-periodic)

### 工业研发定制服务

对外服务面向半导体企业的工程师和研究员。Periodic 将内部开发的 AI 与计算工具带到客户现场，在客户安全环境中集成系统，支持本地推理和利用客户数据训练模型。已披露的应用是分析芯片散热实验数据，客户名称、验收指标和可单独核算的软件销售收入均未公开。[公司案例](https://periodic.com/) · [创始人关于现场交付的访谈](https://swyx.substack.com/p/periodic)

## 产业伙伴与合作范围

| 合作方 | 已披露的分工与结果 | 金额和边界 |
| --- | --- | --- |
| 未具名半导体制造商 | 厂商提供芯片散热研发场景，Periodic 为工程师和研究员训练定制分析智能体。 | 合同金额、散热性能改善和迭代提速幅度未披露，客户是否采购 Neon 未获确认。[最初披露](https://periodic.com/news/introducing-periodic-labs) |
| NVIDIA DevTech | 双方合作将优化器状态分块卸载功能带入 Megatron-LM。代码已合入 NVIDIA 仓库的开发分支，供使用该训练框架的团队复用。 | 工程合作金额未披露。NVentures 的股权投资另列于融资记录。[Periodic 工程报告](https://periodic.com/news/ai-infrastructure-at-periodic) · [NVIDIA 代码合并记录](https://github.com/NVIDIA/Megatron-LM/pull/6244) |
| 美国能源部（DOE） | Periodic 签署了 Genesis Mission 合作谅解备忘录，进入跨机构 AI 科研合作框架。 | DOE 公告未列 Periodic 的单独项目、采购金额或拨款。[能源部签署公告](https://www.energy.gov/articles/energy-department-announces-collaboration-agreements-24-organizations-advance-genesis) |
| 大学研究团队 | 公司以 Academic Grant Program 支持外部研究。Jiarui Liu 和 Yao Wang 在铜氧化物超导理论预印本中注明，工作主要由 Periodic 研究资助支持。 | 金额未披露。论文为作者团队完成的数值研究。[公司资助计划](https://periodic.com/) · [作者论文与致谢](https://arxiv.org/pdf/2610.39710) |

## 融资记录

| 日期与状态 | 投资金额与参与方 | 估值和依据 |
| --- | --- | --- |
| 2025-09-30 · 种子轮公布 | 3 亿美元，a16z 领投。参与方包括 Felicis、DST、NVentures、Accel，以及 Jeff Bezos、Elad Gil、Eric Schmidt、Jeff Dean 等个人。 | 领投方与公司交易律师确认该轮。Forge 列示的种子股投后估值为 13 亿美元。[a16z 公告](https://a16z.com/announcement/investing-in-periodic-labs/) · [Wilson Sonsini 交易说明](https://www.wsgr.com/en/insights/wilson-sonsini-advises-periodic-labs-on-dollar300-million-seed-round.html) · [Forge 记录](https://forgeglobal.com/periodic-labs_ipo/) |
| 2026-05-07 · 媒体报道融资谈判 | 《福布斯》引述知情人士称，公司与 AMP 就至少 5 亿美元新融资进行后期谈判。 | 当时讨论的估值为 75 亿美元，属于拟议条款。[《福布斯》报道](https://www.forbes.com/sites/iainmartin/2026/05/07/former-openai-researcher-to-raise-500-million-for-ai-science-startup/) |
| 2026-06-03 · 私募市场平台记录 | Forge 将 A 轮主档列为 7.5 亿美元，主要投资者为 AMP PBC。同日另列 A-1 股 1,700 万美元、A-2 股 4,113 万美元。 | 平台列示投后估值 75 亿美元。各档为股份类别记录，最终实收金额仍待公司或交易方确认。[Forge 融资明细](https://forgeglobal.com/periodic-labs_ipo/) · [公司新闻目录](https://periodic.com/news) |

## 公司动态

- **2025-09-30 · 公司公开亮相。** 团队披露了同时建设自动化实验室和训练科学模型的路线，并公布芯片散热数据分析这一早期工业项目。当时提高超导体工作温度是研究目标，公告未给出已制成样品的性能数据。[公司成立公告](https://periodic.com/news/introducing-periodic-labs)
- **2025-12-18 · 签署 Genesis Mission 备忘录。** 美国能源部将 Periodic 列入首批 24 家签约机构。备忘录确立合作意向，公告没有单列该公司的交付任务或预算。[美国能源部公告](https://www.energy.gov/articles/energy-department-announces-collaboration-agreements-24-organizations-advance-genesis)
- **2026-08-18 · 与 NVIDIA 的训练优化进入开源框架。** Megatron-LM 开发分支合入分块处理优化器状态与主权重的修改，减少参数更新时同时占用的 GPU 显存。仓库记录可以核对合入日期与代码范围。[NVIDIA 合并记录](https://github.com/NVIDIA/Megatron-LM/pull/6244) · [Periodic 对合作的说明](https://periodic.com/news/ai-infrastructure-at-periodic)
- **2026-09-15 · 门洛帕克实验室公布 Neon 部署结果。** 团队从最初的实物实验扩展到全天候高通量运行，并开始让 Neon 分析实验产物。三篇同期报告分别说明实验室如何复用历史记录、134 个困难样品如何评分，以及长时间调用科学工具时如何调度算力。公开的定量结果集中在判谱和训练效率。[实验室部署](https://periodic.com/news/building-labs-that-learn) · [模型验证](https://periodic.com/news/nature-is-our-learning-environment) · [训练工程](https://periodic.com/news/ai-infrastructure-at-periodic)
- **2026-10-08 · 创始人披露半导体项目的交付方式。** Fedus 介绍了驻场工程师和研究员如何在合作方安全环境中部署工具，并用合作方自己的数据训练模型。他将按科研结果定价描述为未来可能采用的方式，访谈未披露现有合同定价。[Latent Space 创始人访谈及逐字稿](https://swyx.substack.com/p/periodic)
- **2026-10-29 · 受资助的铜氧化物研究公开预印本。** Jiarui Liu 和 Yao Wang 用数值模拟研究晶格振动在何种条件下增强或抑制电子配对，并披露 Periodic 为主要资助来源。这给出了学术资助流向和研究结果的实例，论文没有报告公司合成新超导材料。[作者预印本](https://arxiv.org/abs/2610.39710) · [全文与资助致谢](https://arxiv.org/pdf/2610.39710)
- **2026-11-09 · 哈佛大学物理学家尹希（Xi Yin）宣布加入。** 尹希研究弦理论与数理物理，在个人声明中确认加入 Periodic，未披露所负责的具体项目。[本人声明](https://x.com/XiYin137/status/2119925284707455317) · [哈佛大学物理系资料](https://www.physics.harvard.edu/people/facpages/yin)

资料截至 2026 年 11 月 20 日。官网新闻目录收录成立公告及 Neon 发布当日的三篇文章，后续进展另见创始人访谈、受资助作者论文与当事人声明。[官方新闻目录](https://periodic.com/news)

## 相关链接

- [公司官网与团队名单](https://periodic.com/) · [官方新闻与研究目录](https://periodic.com/news)
- [2026 年 9 月两位创始人联合访谈](https://www.generalist.com/p/a-chatbot-walks-into-a-laboratory)
- 品牌标识采用公司官网浅色主题的放射状图标。[官网](https://periodic.com/) · [官方图标原图](https://framerusercontent.com/images/YQP9pmvqJp9zbLVAiY4KdsHfIs.png)
