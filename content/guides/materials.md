---
title: "材料研发：从候选配方到客户验证"
type: "field"
group: "materials"
order: 0
---

一家电机制造商希望少用稀土，又担心磁体在电机工作时失去磁性。研发团队要解决三个相连的问题：**该做哪种材料、这次实际做出了什么、做出来的磁体能否满足客户要求**。同一化学配方经过不同加工，可能形成不同的晶相、孔隙和晶粒，最终表现也会不同。下面沿着 Altrove 公开的无稀土电机磁体项目，拆解这些决策。涉及保密的配方和客户规格，以下只说明检验思路。[磁体项目原文](https://www.altrove.ai/resources/magnetic-optimization-for-global-automation-leader)

## 学术实验室怎样从一个假设得到结论

1. **把性能拆成可测的量。** 矫顽力描述磁体抵抗反向磁场退磁的能力。最大磁能积从退磁曲线上读出，用来比较磁体可提供的磁能密度。两者衡量不同性质。若假设某种配方能提高矫顽力，就要在相同测量条件下记录整条退磁曲线，同时检查磁能积是否下降。[IEC 永磁材料测量标准](https://webstore.iec.ch/en/publication/22142)
2. **从已有材料中选基线。** 研究者先找结构和组成相近、已有实验记录的材料，再用相图判断候选是否容易分解成几种竞争晶相。这里的“相”指具有特定结构和成分的一部分材料。[Materials Project](/research/materials-project/) 的常用相图比较接近零温的计算能量。候选靠近稳定区域，说明值得做实验，实际加热、冷却后形成什么仍需测量。[相图计算与假设](https://docs.materialsproject.org/methodology/materials-methodology/thermodynamic-stability/phase-diagrams-pds)
3. **用对照拆开成分与工艺。** 例如先固定加工条件，比较原配方和候选配方，再将两种配方都放到另一组加工条件下重做。如果只有其中一批原料做出的样品提高了矫顽力，就要检查批次效应。把基准样品分布到各批实验中，并记录批次、样品和测试条件，才有机会把配方作用和设备、原料波动分开。[NIST 分组实验设计](https://www.itl.nist.gov/div898/handbook/pri/section3/pri3333.htm)
4. **先确认样品身份，再解释性能。** 粉末 X 射线衍射（XRD）把实测图谱与候选结构的模拟峰对照。弱峰可能来自少量目标相，强峰则来自其他相。某个样品即使表现好，也还需要追查是谁贡献了性能。Altrove 的另一项氧化物实验中，16 个完成表征的样品有 7 个检出目标结构，其中一个样品的目标相只占约 3.3%。这组数据揭示了“命中结构”和“制得高纯材料”之间的距离。[实验结果与拟合](https://arxiv.org/html/2511.01790v1#S3.SS2) · [MatDiffract 学术档案](/research/matdiffract/)

## 工业团队怎样决定要不要换材料

电机企业已有正在使用的磁体。换材料意味着改工艺、重做测试，还可能改变整机设计。常见做法是先约定与现有产品比较的条件，再逐步扩大投入。Altrove 的客户要求提高矫顽力，同时维持磁能积和预计制造成本。这三项约束共同决定哪些候选值得送样。[客户项目说明](https://www.altrove.ai/resources/magnetic-optimization-for-global-automation-leader)

| 研发决定 | 需要的交付物 | 结果会怎样改变下一步 |
| --- | --- | --- |
| 是否继续研究这套配方 | 基准和候选的制样记录、衍射图、磁性能曲线 | 目标相很少时，先查制备过程。目标相充分但性能仍差时，再考虑换组成或调整微结构。 |
| 是否接受研发样品 | 按客户约定条件测得的多项性能、重复制样结果、成本估算的原料与工艺假设 | 同时比较各项规格。某个指标的最佳样品如果很难复现，优先测试它附近的工艺范围。 |
| 是否进入放大和器件试验 | 更大批次的离散程度、成形与加工表现，以及在实际部件上的测试计划 | 用客户设备和工况重新验证。小样性能、首轮交付和批量采购对应三种不同进展。 |

Altrove 披露首轮耗时 12 周，以主动学习选择实验，将样品压制成磁体，再用衍射和磁性测量指导下一轮。公司确认向客户交付了结果，后续工作包括工艺放大。公告没有公开性能提升幅度或量产订单。由此可以确认的进展是研发交付。[Altrove 公司档案](/startups/altrove/) · [首轮工作记录](https://www.altrove.ai/resources/magnetic-optimization-for-global-automation-leader)

## 新公司主要改变哪一步

**提出候选（Propose）、制得样品（Synthesize）、测量与解释（Characterize）构成一次循环。** 决定下一批做什么时，团队会在两类样品间取舍：一类最可能达到目标，另一类能区分两种尚无定论的解释。要看清一家公司的价值，先找出谁选样、谁制样、谁测量，以及测量结果有没有改变下一轮选择。[高通量实验与主动选样案例](https://www.altrove.ai/approach)

| 常见切入点 | 已有公司的不同做法 | 能从公开结果中确认什么 |
| --- | --- | --- |
| 在已知工艺中选下一组配方 | [Citrine Informatics](/startups/citrine-informatics/) 用客户的工艺与测试记录推荐候选。Dorfner 将其用于涂料填料。[MaterialsZone](/startups/materialszone/) 帮助 CONSTAB 同时处理薄膜厚度与摩擦系数要求。 | CONSTAB 案例中的五周从收到新规格算起，此前已有约一年实验数据。评估新客户的导入成本时，这一年很重要。[Dorfner 的使用记录](https://dorfner.com/en/applications/coatings/ai-and-colors/) · [CONSTAB 案例原文](https://www.materials.zone/customers/constab-ger) |
| 从目标性质反推结构，再交给产业伙伴测试 | [CuspAI](/startups/cuspai/) 为 Kemira 筛水处理吸附剂。[Orbital Industries](/startups/orbital-industries/) 将原子模拟用于筛选，也把研发软件授权给巴斯夫旗下 ECMS。 | Kemira 收到逾 5,000 个设计，选出约 20 个优先候选；水厂工况下的去除率与寿命仍需验证。ECMS 的软件授权证明了实际使用，催化剂的性能改善要看单独的测试。[Kemira 公告](https://www.kemira.com/news-and-stories/newsroom/releases/new-ai-designed-materials-show-promising-potential-to-remove-forever-chemicals-from-drinking-water-in-industry-first-breakthrough/) · [ECMS 授权公告](https://www.orbitalindustries.com/news/press/basf-ecms-ai-materials-discovery-platform) |
| 把选样、加工和测量放进同一实验流程 | [鼎犀智创](/startups/dingxi/) 与北大合作优化复合纤维，[创材深造](/startups/deep-material/) 将合金成分与金属打印工艺一起筛选，[深度原理](/startups/deep-principle/) 在自有实验室测量候选反应的结果。[Altrove](/startups/altrove/) 交付的是前述磁体研发项目。 | 应比较各自的实物与重复性。例如北大报告纤维最佳断裂强度为 41.2 cN/dtex，重复制备的批间变异系数低于 5%。这是针对特定纤维与拉伸指标的复验。[北大实测记录](https://sam.pkusz.edu.cn/info/1011/2625.htm) |
| 缩短一次表征的分析时间 | [Periodic Labs](/startups/periodic-labs/) 用合成历史与模拟谱解释混相粉末的衍射数据。[Polaron](/startups/polaron/) 从电极截面推断三维微结构的统计特征，再推荐可调整的制造参数。 | 前者报告内部困难样品的图谱分析成功率；后者的建议由华威大学在中试线上制样、用扣式电池测试。两个结果解决不同实验决策。[Periodic 原始评测](https://periodic.com/news/nature-is-our-learning-environment) · [法拉第研究所验证报告](https://www.faraday.ac.uk/success-stories/ai-unlocks-the-manufacturing-secrets-of-lmfp/) |
| 联合设计材料和设备工艺 | [Entalpic](/startups/entalpic/) 筛选半导体薄膜前驱体，与 ATLANT 3D 合作建立沉积反应器模型。 | 已公开设备商与模型团队的分工。要判断是否提升生产良率，还需要候选在设备上的实测薄膜和器件数据。[设备商公告](https://atlant3d.com/atlant-3d-and-entalpic-partner-to-build-ai-driven-digital-twins-for-ald-processes/) |

## 读到“发现新材料”时，怎样复核

- **算出来的是哪项性质？** [MatterGen](/research/mattergen/) 的无条件生成评测中，38.57% 的样本同时通过指定的计算稳定性、唯一性与新颖性判据。这个分母是生成样本。若要估计实验命中率，需要另报尝试合成的候选数和实测命中数。[模型卡与评估口径](https://huggingface.co/microsoft/mattergen)
- **同一份原始数据还有其他解释吗？** MatterGen 的钽铬氧化物实验公开了衍射数据，后续研究提出已有的无序晶相也能解释图谱。这时最有价值的下一次实验，是取得能区分两种晶体结构的证据，优先于反复比较同一条拟合曲线。[原论文](https://doi.org/10.1038/s41586-025-08628-5) · [独立复核](https://doi.org/10.1039/D6MH00268D)
- **把指标放回真正的交付物。** 对电极，接着问“性能在什么尺寸和工况的电芯上验证”；对芯片薄膜，问“哪一处结构测过、是否跨过晶圆和批次”。两种追问会引向完全不同的实验计划。[电极与储能系统指南](/guides/energy/) · [薄膜与晶圆工艺指南](/guides/semiconductors/)
