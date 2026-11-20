---
title: "PhysicsX"
type: "startup"
logo: "/logos/physicsx.png"
category: "物理与工程"
summary: "为工业设计团队生成候选几何形状、预测流场和结构性能。英国帆船队 GB1 已使用平台筛选船体，汽车气动模型则用高保真仿真检验阻力变化。"
countries: ["英国"]
directions: ["Propose", "Characterize"]
maturity: "实际部署"
---

## 公司与团队

改动一个车身或船体后，工程师要知道阻力会上升还是下降，还要找出哪些表面和尾流区域造成变化。伦敦公司 PhysicsX 把这两件事做成企业工程软件：先用数值求解器生成一批有物理量标注的设计，再训练模型预测新几何形状的性能。工程师可以让模型筛选候选，把有限的高精度计算和实物试验用在最值得验证的方案上。[平台说明](https://www.physicsx.ai/platform) · [GB1 船队的使用记录](https://www.gb1.com/en/articles/785_GB1-and-PhysicsX-Unveil-AI-Powered-Approach-to-Americas-Cup-Yacht-Design.html)

英国 Companies House 显示，PHYSICSX LIMITED（编号 12134466）于 2019 年 8 月 1 日注册。截至 2026 年 11 月 20 日，该实体登记为存续的私人有限公司，公司向重大控制权登记机构声明，没有达到该项登记要求的自然人或法人。公司以 PhysicsX 名义完成多轮融资，在伦敦、纽约和新加坡设有办公室，公开记录支持将其归为英国独立未上市企业。[公司注册](https://find-and-update.company-information.service.gov.uk/company/12134466) · [控制权登记](https://find-and-update.company-information.service.gov.uk/company/12134466/persons-with-significant-control) · [公司与办公地点](https://www.physicsx.ai/)

### 创始人与管理团队

- **Robin Tuluie，创始人兼董事长。** 曾在雷诺和梅赛德斯一级方程式车队负责研发，并任宾利车辆技术总监。他带来的经验是，在研发周期和试验次数受限时，如何用仿真判断机械设计改动是否值得试制。[创始人背景](https://www.physicsx.ai/resources/physicsx-raises-135m-series-b-to-usher-in-a-new-era-of-ai-native-engineering-and-manufacturing)
- **Jacomo Corbo，联合创始人兼 CEO。** 曾共同创办 QuantumBlack 并任首席科学家，也曾任雷诺一级方程式车队首席比赛策略师。2023 年 2 月他以联席 CEO 身份加入，后任 CEO。2026 年 6 月公司披露团队超过 300 人，10 月新加坡副总理在办公室开幕致辞中称全球团队接近 400 人，当地已有 20 人从事应用研发和工程交付。[2023 年任命](https://www.physicsx.ai/newsroom/jacomo-corbo-joins-physicsx-as-co-ceo) · [新加坡政府开幕致辞](https://www.meti.gov.sg/newsroom/speech-by-deputy-prime-minister-and-minister-for-energy--trade-and-industry--trade--gan-kim-yong-at-the-launch-of-physicsx-sg-/) · [C 轮公告](https://www.physicsx.ai/resources/physicsx-announces-300m-series-c-to-accelerate-physics-ai-for-industrial-engineering) · [新加坡办公室公告](https://www.physicsx.ai/resources/physicsx-launches-asia-pacific-hub-in-singapore-to-scale-ai-powered-industrial-engineering-across-the-region)
- **Dael Williamson，首席技术与平台官。** 2026 年 10 月从 Databricks 加入，曾任其欧洲、中东和非洲地区 CTO，负责将物理模型、工程数据和企业软件连接到客户已有工作流。[任命公告](https://www.physicsx.ai/resources/dael-williamson-joins-physicsx-as-chief-technology-and-platform-officer)

## 产品

### 几何生成与性能预测

**设计生成（Propose）。** 以 GB1 船体为例，大型几何模型先学习三维形状，再用船队的设计空间微调，按需求产生多种船体候选。大型物理模型对候选快速评分，工程师据此挑选值得送入高保真求解器的设计。生成与性能评估由不同模型负责，因此一个看起来合理的形状仍需单独核验。[船队技术说明](https://www.gb1.com/en/articles/785_GB1-and-PhysicsX-Unveil-AI-Powered-Approach-to-Americas-Cup-Yacht-Design.html)

**性能表征（Characterize）。** 汽车模型 PX-Car-Aero-v1 从车身表面几何预测升力、阻力、表面压力与壁面剪切应力，也可以在指定空间点预测气流速度。工程师既能比较两个造型的阻力差，也能从流场中追查差异来自哪里。客户可用自己的车型和求解设置进一步训练模型。商业平台提供仿真任务管理、模型开发部署和面向工程师的应用。[汽车模型技术文档](https://www.physicsx.ai/resources/scaling-physics-ai-for-automotive-aerodynamics-part-ii-meet-px-car-aero-v1) · [企业平台架构](https://www.physicsx.ai/resources/engineering-in-the-age-of-physics-ai-the-platform-driving-the-shift)

### 工程验证与局限

| 验证对象 | 如何比较 | 结果能支持什么判断 |
| --- | --- | --- |
| 汽车外部气动 | PXNetCar 包含 444 种基础车型及其变体，共 33,203 次仿真。团队在训练时未见的车型和其他求解设置上，将预训练后微调与相同架构从零训练比较。 | 公司报告在所测 SUV 任务中，达到相近表现所需的目标仿真数据约少 80%。在第三方 DrivAerML 数据上，节省幅度随指标目标变为 30%–70%。这些数字衡量逼近计算流体力学（CFD）结果所需的数据量；实际车辆的风洞误差仍需独立测量。[实验设置、误差曲线与对照](https://www.physicsx.ai/resources/scaling-physics-ai-for-automotive-aerodynamics-part-ii-meet-px-car-aero-v1) |
| 一米翼展滑翔机 | 团队从 LGM-Aero 的候选中选出经常规仿真筛选的设计，3D 打印实物，在机库和室外试飞。首轮短暂离地，调整试验装置后观察到平顺滑翔，并公开多次测试视频。 | 这项演示证明一个生成设计能够制成并滑翔，也暴露了实际试验条件与设计条件之间的偏差。模型只计算纵向稳定性，文章没有给出横向稳定性结果，也没有报告实测升阻比与预测的定量误差。[2025 年 3 月 13 日团队试验记录](https://www.physicsx.ai/resources/from-code-to-sky-the-journey-of-our-ai-designed-3d-printed-glider) |
| 帆船设计流程 | GB1 在实际研发计划中采用平台，将部分高成本流体仿真转为模型推理，并保留高保真计算作复核。 | 船队在 2026 年 10 月报告，早期工作所需的高保真雷诺平均纳维–斯托克斯（RANS）仿真降至约五分之一，设计评估最快提速 100 倍。与此前的面元法相比，船队还报告预测精度提高 100 倍，但未给出该指标的误差定义。指标衡量设计阶段的用时与计算量；尚未披露可归因于模型的实船航速增益。[GB1 工程团队公告](https://www.gb1.com/en/articles/785_GB1-and-PhysicsX-Unveil-AI-Powered-Approach-to-Americas-Cup-Yacht-Design.html) |

## 产业伙伴与合作范围

| 伙伴 | 实际工作与协议范围 |
| --- | --- |
| 英国美洲杯帆船队 GB1 | 船队是具名平台使用方。双方最初优化 2027 年赛季规则允许的设计参数，随后为 2029 年新规则开发船体生成和筛选流程。船队保留高保真计算复核环节，合同金额未披露。[GB1 设计团队说明](https://www.gb1.com/en/articles/785_GB1-and-PhysicsX-Unveil-AI-Powered-Approach-to-Americas-Cup-Yacht-Design.html) |
| Fortescue | 双方已合作研发超过两年，2026 年 10 月签署多年协议，拟把在研发中使用的技术扩展到采矿和冶金运营。合同金额、已覆盖矿区数及现场节能量未披露。[合作公告](https://www.physicsx.ai/resources/physicsx-and-fortescue-expand-partnership-to-accelerate-industrial-innovation-with-ai) |
| 西门子 | Simcenter 为早期航空模型提供训练所用的高保真仿真数据。双方后来将平台工作流与 Simcenter X 云端计算和远程桌面结合，并用西门子的多物理场仿真数据研究数据中心配电母线的温度预测。技术合作金额未披露，西门子的股权投资另见融资记录。[西门子软件公告](https://newsroom.sw.siemens.com/en-US/siemens-physicsx/) · [Simcenter X 合作](https://www.physicsx.ai/newsroom/physicsx-extends-collaboration-with-siemens-to-simcenter-tm-x-enabling-seamless-ai-powered-cfd-workflows) · [西门子配电业务公告](https://press.siemens.com/global/en/pressrelease/siemens-expands-data-center-partner-ecosystem-scale-next-generation-ai-infrastructure) |
| 德国电信、Microsoft、CoreWeave | 德国电信与 PhysicsX 达成三年合作，慕尼黑工业 AI 云已上线工程平台。PhysicsX 是 Microsoft Discovery 发布时的合作方，双方探索将工程物理模型接入科研智能体。与 CoreWeave 的协议则为客户在专用数据上训练和部署模型提供云算力。三项合作各自独立，公告未披露合同金额。[德国电信云平台](https://www.physicsx.ai/newsroom/from-compute-to-capability-physicsx-goes-live-on-the-european-industrial-ai-cloud) · [Microsoft Discovery 合作](https://www.physicsx.ai/newsroom/physicsx-forges-strategic-collaboration-with-microsoft-to-accelerate-engineering-innovation-with-ai-for-science-platform) · [CoreWeave 合作](https://www.physicsx.ai/newsroom/physicsx-and-coreweave-partner-to-deliver-high-performance-physics-ai-for-advanced-industrials) |
| 新加坡科技研究局 A*STAR、海事工程公司 Seatrium | A*STAR 与 PhysicsX 承诺五年共同投入 4,000 万新元，研究海事工程、先进制造、半导体制造和生物技术中的工程仿真。该数额为联合研发预算，双方各自份额未披露。Seatrium 另与 PhysicsX 合作改进海工设计决策，未披露金额或已经节省的开发时间。[合作方及协议范围](https://www.physicsx.ai/resources/physicsx-launches-asia-pacific-hub-in-singapore-to-scale-ai-powered-industrial-engineering-across-the-region) |

## 融资记录

| 公布日期 | 轮次与金额 | 已披露投资方 |
| --- | --- | --- |
| 2023-11-27 | A 轮，3,200 万美元 | General Catalyst 领投，Standard Investments、NGP、Radius Capital、Henry Kravis 等参投。[领投方说明](https://www.generalcatalyst.com/stories/our-investment-in-physicsx) · [公司公告](https://www.physicsx.ai/resources/physicsx-raises-32m-to-give-engineers-ai-superpowers-to-accelerate-design-of-advanced-technologies) |
| 2025-06-22 | B 轮，1.35 亿美元 | Atomico 领投，Temasek、西门子、Applied Materials、July Fund 参投，既有投资方 General Catalyst、NGP、Radius Capital、Standard Investments 和 Allen & Co. 继续参与。[B 轮公告](https://www.physicsx.ai/resources/physicsx-raises-135m-series-b-to-usher-in-a-new-era-of-ai-native-engineering-and-manufacturing) |
| 2025-11-19 | B 轮扩展后，同轮总额超过 1.55 亿美元，估值接近 10 亿美元 | NVIDIA 旗下 NVentures 加入。轮次总额已包含 6 月宣布的融资。[B 轮扩展公告](https://www.physicsx.ai/resources/physicsx-announces-extension-to-series-b-round) |
| 2026-06-08 | C 轮，3 亿美元，估值约 24 亿美元 | Temasek 领投，M&G Investments 和 Intrepid Growth Partners 新加入，Applied Materials、Atomico、General Catalyst、July Fund、NGP、NVIDIA、Radius、西门子等跟投。英国商业银行于 7 月 30 日另行确认其 2,500 万美元投资属于同一轮，未公告新的轮次总额。[英国商业银行披露](https://www.british-business-bank.co.uk/news-and-events/news/british-business-bank-invests-25m-investment-physicsx-including-fourth-investment-british-growth) · [C 轮公告](https://www.physicsx.ai/resources/physicsx-announces-300m-series-c-to-accelerate-physics-ai-for-industrial-engineering) |

A 轮及 2025 年 6 月 B 轮首份公告未披露估值。公司在 C 轮公告中另披露经营规模，称过去一年确认收入约为此前的两倍、签约金额约为三倍、客户数量超过此前的两倍。公司未披露收入绝对值、毛利或各客户付费额。[经营指标原文](https://www.physicsx.ai/resources/physicsx-announces-300m-series-c-to-accelerate-physics-ai-for-industrial-engineering)

## 公司动态

### 2019–2024 年

- **2019 年 8 月 1 日，英国法人注册。** 注册时使用 Motodynamics Ltd 名称，2020 年 7 月改用 PhysicsX Limited。注册档案将两段历史对应到同一公司编号。[英国注册记录及曾用名](https://find-and-update.company-information.service.gov.uk/company/12134466)
- **2022 年 10 月 7 日，早期工程项目获 Cherwell 创新企业奖。** 公司披露了可再生能源工作，以及为 Calon-Cardio 开发人工心脏提供的仿真与机器学习支持。公告所述成果限于工程研发，没有披露临床试验结果。[早期应用公告](https://www.physicsx.ai/newsroom/physicsx-wins-cherwell-business-awards)
- **2023 年 2 月 9 日，Jacomo Corbo 加入管理层。** 公司当时由 Robin Tuluie 领导，任命 Corbo 为联席 CEO，负责向新行业拓展应用以及确定软件产品和托管服务方向。公司较晚的公告则称其为联合创始人兼 CEO。[当时的任命](https://www.physicsx.ai/newsroom/jacomo-corbo-joins-physicsx-as-co-ceo) · [后续职务说明](https://www.physicsx.ai/resources/physicsx-announces-300m-series-c-to-accelerate-physics-ai-for-industrial-engineering)
- **2024 年 12 月 4 日，发布 LGM-Aero 和 Ai.rplane 演示应用。** 团队用超过 2,500 万个网格以及数万次流体与结构仿真训练模型，让工程师生成飞机概念形状并初评性能。西门子确认其 Simcenter 软件用于生成训练数据。Ai.rplane 属于早期公开演示，公司此后已在介绍页宣布结束该演示。[模型发布](https://www.physicsx.ai/newsroom/introducing-lgm-aero-genai-for-aero-engineering-and-airplane-showcase-application-for-aerostructures) · [西门子说明](https://newsroom.sw.siemens.com/en-US/siemens-physicsx/) · [演示应用说明及结束公告](https://www.physicsx.ai/resources/welcome-to-airplane)

### 2025 年

- **2025 年 3 月 13 日，公布一米翼展滑翔机试飞。** 团队把 Ai.rplane 的候选几何制成实物。视频记录了首次仅短暂离地、调整试验装置后实现滑翔的过程，给出了从仿真走到实物时遇到的具体差异。试验没有测量全部稳定性指标。[试飞记录与视频](https://www.physicsx.ai/resources/from-code-to-sky-the-journey-of-our-ai-designed-3d-printed-glider)
- **2025 年 5 月 19 日，作为首发合作方参与 Microsoft Discovery。** 双方宣布围绕物理模型、客户工程数据和科研智能体开展软件集成。公告界定了合作范围，未披露工业客户使用该集成节省的时间。[合作声明](https://www.physicsx.ai/newsroom/physicsx-forges-strategic-collaboration-with-microsoft-to-accelerate-engineering-innovation-with-ai-for-science-platform)
- **2025 年 7 月 23 日，西门子合作延伸至 Simcenter X。** 流体仿真工程师可将 PhysicsX 工作流与云端高性能计算和远程桌面结合，在同一环境中安排 CFD 计算和模型评估。此处交付的是软件工作流，公告没有给出基于客户项目的加速倍数。[软件发布说明](https://www.physicsx.ai/newsroom/physicsx-extends-collaboration-with-siemens-to-simcenter-tm-x-enabling-seamless-ai-powered-cfd-workflows)
- **2025 年 9 月 4 日，披露铸造产线的缺陷预测案例。** 一家未具名航空制造商把模型接入铸造线，结合过程数据与模具形状向操作员提供实时反馈。公司报告模型较原方法运行快逾 100 倍，同时称废品率下降，但未披露基准废品率或降幅。[产线案例](https://www.physicsx.ai/resources/real-time-intelligence-in-the-foundry-ai-for-casting-quality-and-efficiency)

### 2026 年

- **2026 年 3 月 16 日，与 NVIDIA 公布物理 AI 架构标准合作。** 团队计划用模块化框架 Opora 提供可复用的模型组件与参考配置，让工程师更容易复现实验。向 PhysicsNeMo 等开源生态提供工具仍是公告提出的后续方向。[架构与合作范围](https://www.physicsx.ai/resources/physicsx-announces-advancement-to-open-standards-for-physics-ai-powered-by-nvidia)
- **2026 年 3 月 18 日，西门子披露配电母线热预测应用。** 双方以多物理场仿真训练模型，西门子报告原本耗时数日的计算场景可在一秒内完成预测。该对照衡量预测速度，整座数据中心的前瞻性监测仍是目标。[西门子公告](https://press.siemens.com/global/en/pressrelease/siemens-expands-data-center-partner-ecosystem-scale-next-generation-ai-infrastructure)
- **2026 年 8 月 7 日，公布汽车外部气动模型 PX-Car-Aero-v1。** 技术报告把自建仿真数据扩至 444 种基础车型，并单列第三方 DrivAerML 数据上的结果，让读者区别同一数据管线内的精度和换求解器后可节省的标注成本。[训练与对照实验](https://www.physicsx.ai/resources/scaling-physics-ai-for-automotive-aerodynamics-part-ii-meet-px-car-aero-v1)
- **2026 年 8 月 11 日，《How an AI Agent Cracked an Industry Benchmark》。** 团队研究了 PLAID 的二维拉伸任务，发现只用给定样本也能重建与原数值模型高度一致的模拟行为。榜单的高分因而需要结合测试样本与模型的关系解读。对工业客户，另一种载荷、另一批材料或不同求解器上的独立验证更能检验迁移能力。[技术博客原文](https://www.physicsx.ai/resources/how-an-ai-agent-cracked-an-industry-benchmark)
- **2026 年 8 月 25 日，《Building Beyond CAD》。** Daniel Owen-Lloyd 和 Sanmitra Ghosh 讨论如何绕开预先指定的 CAD 参数，直接对三维几何作优化。在 SimJEB 支架任务中，研究者以此前的获胜设计为起点，用有限元求解器评价变体，得到满足应力约束、质量低 18.5% 的设计。他们用自己的求解设置将整个数据集重新计算，因此百分比适用于同一设置下的数值比较。公开文章没有给出支架破坏试验。[技术博客原文及图 12–13](https://www.physicsx.ai/resources/building-beyond-cad-on-generative-optimization-for-engineering)
- **2026 年 10 月 8 日，开设新加坡亚太中心并公布 A*STAR 五年合作。** 当地已有 20 名员工。未来三年扩至逾 100 人是公司目标，联合研发经费对应双方五年的投入承诺。[新加坡中心与研发计划](https://www.physicsx.ai/resources/physicsx-launches-asia-pacific-hub-in-singapore-to-scale-ai-powered-industrial-engineering-across-the-region)
- **2026 年 10 月 21 日，GB1 公布新船体生成流程的早期结果。** 2027 年项目集中在规则允许的参数范围内寻优，新工作利用 2029 年规则开放的空间生成全新船体。已观察到的收益是设计评估加快和高保真仿真需求下降，船队未公布实船竞速结果。[船队报告](https://www.gb1.com/en/articles/785_GB1-and-PhysicsX-Unveil-AI-Powered-Approach-to-Americas-Cup-Yacht-Design.html)
- **2026 年 10 月 27 日，Fortescue 扩大合作。** 新的多年协议将原有研发合作延伸至采矿、冶金运营。公告未列出已投用的矿区或生产、能耗指标，因此尚不能量化运营效果。[原始公告](https://www.physicsx.ai/resources/physicsx-and-fortescue-expand-partnership-to-accelerate-industrial-innovation-with-ai)
- **2026 年 11 月 9 日，德国电信确认 PhysicsX 已使用慕尼黑工业 AI 云。** 双方在三年协议下于 2 月宣布平台上线。德国电信在 11 月扩容公告中将 PhysicsX 列为现有使用者，未单列其算力用量或终端客户数。机房扩容投资由德国电信披露。[2 月上线说明](https://www.physicsx.ai/newsroom/from-compute-to-capability-physicsx-goes-live-on-the-european-industrial-ai-cloud) · [11 月运营方公告](https://www.telekom.com/en/newsroom/latest-updates/media-information/2026/11/ai-demand-rises-deutsche-telekom-expands-ai-factory-in-munich)

## 相关链接

[官网与品牌标识](https://www.physicsx.ai/) · [工程研发平台](https://www.physicsx.ai/platform) · [英国公司注册档案](https://find-and-update.company-information.service.gov.uk/company/12134466) · [公司新闻与技术文章](https://www.physicsx.ai/resources)
