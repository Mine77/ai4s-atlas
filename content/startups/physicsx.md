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

## 公司概览

改动一个车身或船体后，工程师要知道阻力会上升还是下降，还要找出哪些表面和尾流区域造成变化。伦敦公司 PhysicsX 把这两件事做成企业工程软件：先用数值求解器生成一批有物理量标注的设计，再训练模型预测新几何形状的性能。工程师可以让模型筛选候选，把有限的高精度计算和实物试验用在最值得验证的方案上。[平台说明](https://www.physicsx.ai/platform) · [GB1 船队的使用记录](https://www.gb1.com/en/articles/785_GB1-and-PhysicsX-Unveil-AI-Powered-Approach-to-Americas-Cup-Yacht-Design.html)

英国 Companies House 显示，PHYSICSX LIMITED（编号 12134466）于 2019 年 8 月 1 日注册。截至 2026 年 11 月 20 日，该实体登记为存续的私人有限公司，重大控制权登记中没有列出的控股法人。公司以 PhysicsX 名义完成多轮融资，在伦敦、纽约和新加坡设有办公室，公开记录支持将其归为英国独立未上市企业。[公司注册](https://find-and-update.company-information.service.gov.uk/company/12134466) · [控制权登记](https://find-and-update.company-information.service.gov.uk/company/12134466/persons-with-significant-control) · [公司与办公地点](https://www.physicsx.ai/)

## 创始人与团队

- **Robin Tuluie，创始人兼董事长。** 曾在雷诺和梅赛德斯一级方程式车队负责研发，并任宾利车辆技术总监。他带来的经验是，在研发周期和试验次数受限时，如何用仿真判断机械设计改动是否值得试制。[创始人背景](https://www.physicsx.ai/resources/physicsx-raises-135m-series-b-to-usher-in-a-new-era-of-ai-native-engineering-and-manufacturing)
- **Jacomo Corbo，联合创始人兼 CEO。** 曾共同创办 QuantumBlack 并任首席科学家，也曾任雷诺一级方程式车队首席比赛策略师。公司在 2026 年 6 月披露团队超过 300 人，10 月宣布新加坡团队已有 20 人，承担亚太地区应用研发和工程交付。[C 轮公告](https://www.physicsx.ai/resources/physicsx-announces-300m-series-c-to-accelerate-physics-ai-for-industrial-engineering) · [新加坡办公室公告](https://www.physicsx.ai/resources/physicsx-launches-asia-pacific-hub-in-singapore-to-scale-ai-powered-industrial-engineering-across-the-region)
- **Dael Williamson，首席技术与平台官。** 2026 年 10 月从 Databricks 加入，曾任其欧洲、中东和非洲地区 CTO，负责将物理模型、工程数据和企业软件连接到客户已有工作流。[任命公告](https://www.physicsx.ai/resources/dael-williamson-joins-physicsx-as-chief-technology-and-platform-officer)

## 产品与科学任务

**设计生成（Propose）。** 以 GB1 船体为例，大型几何模型先学习三维形状，再用船队的设计空间微调，按需求产生多种船体候选。大型物理模型对候选快速评分，工程师据此挑选值得送入高保真求解器的设计。生成与性能评估由不同模型负责，因此一个看起来合理的形状仍需单独核验。[船队技术说明](https://www.gb1.com/en/articles/785_GB1-and-PhysicsX-Unveil-AI-Powered-Approach-to-Americas-Cup-Yacht-Design.html)

**性能表征（Characterize）。** 汽车模型 PX-Car-Aero-v1 从车身表面几何预测升力、阻力、表面压力与壁面剪切应力，也可以在指定空间点预测气流速度。工程师既能比较两个造型的阻力差，也能从流场中追查差异来自哪里。客户可用自己的车型和求解设置进一步训练模型。商业平台提供仿真任务管理、模型开发部署和面向工程师的应用。[汽车模型技术文档](https://www.physicsx.ai/resources/scaling-physics-ai-for-automotive-aerodynamics-part-ii-meet-px-car-aero-v1) · [企业平台架构](https://www.physicsx.ai/resources/engineering-in-the-age-of-physics-ai-the-platform-driving-the-shift)

## 技术验证与局限

| 验证对象 | 如何比较 | 结果能支持什么判断 |
| --- | --- | --- |
| 汽车外部气动 | PXNetCar 包含 444 种基础车型及其变体，共 33,203 次仿真。团队在训练时未见的车型和其他求解设置上，将预训练后微调与相同架构从零训练比较。 | 公司报告在所测 SUV 任务中，达到相近表现所需的目标仿真数据约少 80%。在第三方 DrivAerML 数据上，节省幅度随指标目标变为 30%–70%。这些数字衡量逼近计算流体力学（CFD）结果所需的数据量；实际车辆的风洞误差仍需独立测量。[实验设置、误差曲线与对照](https://www.physicsx.ai/resources/scaling-physics-ai-for-automotive-aerodynamics-part-ii-meet-px-car-aero-v1) |
| 一米翼展滑翔机 | 团队从 LGM-Aero 的候选中选出经常规仿真筛选的设计，3D 打印实物，在机库和室外试飞。首轮短暂离地，调整试验装置后观察到平顺滑翔，并公开多次测试视频。 | 这项演示证明一个生成设计能够制成并滑翔，也暴露了实际试验条件与设计条件之间的偏差。模型只计算纵向稳定性，文章没有给出横向稳定性结果，也没有报告实测升阻比与预测的定量误差。[2025 年 3 月 13 日团队试验记录](https://www.physicsx.ai/resources/from-code-to-sky-the-journey-of-our-ai-designed-3d-printed-glider) |
| 帆船设计流程 | GB1 在实际研发计划中采用平台，将部分高成本流体仿真转为模型推理，并保留高保真计算作复核。 | 船队在 2026 年 10 月报告，早期工作所需的高保真雷诺平均纳维–斯托克斯（RANS）仿真降至约五分之一，设计评估最快提速 100 倍。指标衡量设计阶段的用时与计算量；尚未披露可归因于模型的实船航速增益。[GB1 工程团队公告](https://www.gb1.com/en/articles/785_GB1-and-PhysicsX-Unveil-AI-Powered-Approach-to-Americas-Cup-Yacht-Design.html) |

## 客户与商业进展

英国美洲杯帆船队 **GB1** 是具名平台使用方。双方最初针对 2027 年赛季做参数优化，随后扩展到为 2029 年规则生成新的船体形状。矿业与能源企业 **Fortescue** 已与团队合作超过两年，2026 年 10 月签署新的多年协议，拟把既有研发合作延伸至采矿、冶金运营。公告未披露合同金额、已覆盖矿区数或现场节能量。[GB1 客户公告](https://www.gb1.com/en/articles/785_GB1-and-PhysicsX-Unveil-AI-Powered-Approach-to-Americas-Cup-Yacht-Design.html) · [Fortescue 合作公告](https://www.physicsx.ai/resources/physicsx-and-fortescue-expand-partnership-to-accelerate-industrial-innovation-with-ai)

新加坡科技研究局 **A*STAR** 与 PhysicsX 承诺在五年内共同投入 4,000 万新元，推进海事工程、先进制造等领域的仿真研究。这笔钱是合作研发预算。公司另在 C 轮公告中称确认收入同比翻倍，但没有披露收入绝对值、毛利或上述各机构的付费额。[联合研发说明](https://www.physicsx.ai/resources/physicsx-launches-asia-pacific-hub-in-singapore-to-scale-ai-powered-industrial-engineering-across-the-region) · [收入披露口径](https://www.physicsx.ai/resources/physicsx-announces-300m-series-c-to-accelerate-physics-ai-for-industrial-engineering)

## 近期博客与公告

- **2026 年 8 月 25 日，《Building Beyond CAD》。** Daniel Owen-Lloyd 和 Sanmitra Ghosh 讨论如何绕开预先指定的 CAD 参数，直接对三维几何作优化。在 SimJEB 支架任务中，研究者以此前的获胜设计为起点，用有限元求解器评价变体，得到满足应力约束、质量低 18.5% 的设计。他们用自己的求解设置将整个数据集重新计算，因此百分比适用于同一设置下的数值比较。公开文章没有给出支架破坏试验。[技术博客原文及图 12–13](https://www.physicsx.ai/resources/building-beyond-cad-on-generative-optimization-for-engineering)
- **2026 年 8 月 11 日，《How an AI Agent Cracked an Industry Benchmark》。** 团队研究了 PLAID 的二维拉伸任务，发现只用给定样本也能重建与原数值模型高度一致的模拟行为。榜单的高分因而需要结合测试样本与模型的关系解读。对工业客户，另一种载荷、另一批材料或不同求解器上的独立验证更能检验迁移能力。[技术博客原文](https://www.physicsx.ai/resources/how-an-ai-agent-cracked-an-industry-benchmark)
- **2026 年 10 月 27 日，Fortescue 扩大合作。** 截至 11 月 20 日，这是公司资源页列出的最新公告。新的多年协议明确了扩大合作的业务范围，后续若披露特定矿区的部署数量、产量或能耗对照，才能衡量运营端效果。[公告原文](https://www.physicsx.ai/resources/physicsx-and-fortescue-expand-partnership-to-accelerate-industrial-innovation-with-ai) · [官方文章索引](https://www.physicsx.ai/resources)

## 融资记录

| 公布日期 | 轮次与金额 | 已披露投资方 |
| --- | --- | --- |
| 2023-11-27 | A 轮，3,200 万美元 | General Catalyst 领投，Standard Investments、NGP、Radius Capital、Henry Kravis 等参投。[领投方说明](https://www.generalcatalyst.com/stories/our-investment-in-physicsx) · [公司公告](https://www.physicsx.ai/resources/physicsx-raises-32m-to-give-engineers-ai-superpowers-to-accelerate-design-of-advanced-technologies) |
| 2025-06-22 | B 轮，1.35 亿美元 | Atomico 领投，Temasek、西门子、Applied Materials、July Fund 及既有投资方参与。[B 轮公告](https://www.physicsx.ai/resources/physicsx-raises-135m-series-b-to-usher-in-a-new-era-of-ai-native-engineering-and-manufacturing) |
| 2025-11-19 | B 轮扩展后，同轮总额超过 1.55 亿美元，估值接近 10 亿美元 | NVIDIA 旗下 NVentures 加入。轮次总额已包含 6 月宣布的融资。[B 轮扩展公告](https://www.physicsx.ai/resources/physicsx-announces-extension-to-series-b-round) |
| 2026-06-08 | C 轮，3 亿美元，估值约 24 亿美元 | Temasek 领投，M&G Investments 和 Intrepid Growth Partners 新加入，Applied Materials、Atomico、General Catalyst、July Fund、NGP、NVIDIA、Radius、西门子等跟投。[C 轮公告](https://www.physicsx.ai/resources/physicsx-announces-300m-series-c-to-accelerate-physics-ai-for-industrial-engineering) |

## 相关链接

[官网与品牌标识](https://www.physicsx.ai/) · [工程研发平台](https://www.physicsx.ai/platform) · [英国公司注册档案](https://find-and-update.company-information.service.gov.uk/company/12134466)
