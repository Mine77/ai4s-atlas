---
title: "AIFS"
type: "research"
collection: "研究模型与方法"
logo: "/logos/aifs.png"
category: "天气与地球系统"
format: "预报服务"
region: "跨国"
countries: ["英国", "意大利", "德国"]
areas: ["地球与气候"]
stages: []
directions: []
maturity: "实际部署"
summary: "将数据驱动天气预报投入业务运行，提供确定性与集合预报产品。"
---

## 项目与团队

欧洲中期天气预报中心（ECMWF）从 2023 年夏季开始研发人工智能预报系统（AIFS），研究能否从数十年气象资料中学习全球天气演变，同时估计预报的不确定性。截至 2026 年 11 月 20 日，AIFS Single v2 和 AIFS ENS v2 与中心的物理数值预报系统 IFS 并行业务运行。两者都预报未来 15 天的天气。以风暴为例，Single 给出低压中心的一条可能路径，ENS 用 51 条轨迹估计不同地区出现强风的概率。[首个试验版本](https://www.ecmwf.int/en/about/media-centre/aifs-blog/2023/ECMWF-unveils-alpha-version-of-new-ML-model) · [ECMWF 业务数据说明](https://www.ecmwf.int/en/forecasts/datasets/aifs-machine-learning-data)

ECMWF 是政府间研究和业务机构，总部位于英国雷丁，在意大利博洛尼亚和德国波恩设有站点。中心负责全球 AIFS 的研发、定时生产及全天候支持。Matthew Chantry 担任机器学习战略负责人和创新平台负责人，推动 AIFS 研发并协调成员国共建 Anemoi 软件。Simon Lang、Mihai Alexe 等人发表了确定性模型及集合模型的研究，Mariana Clare 研究预报不确定性，Lang、Martin Leutbecher 和 Pedro Maciel 开发了 ENS v2 采用的多尺度概率评分方法。[机构概况](https://www.ecmwf.int/en/about/media-centre/key-facts-and-figures) · [Chantry 个人资料](https://www.ecmwf.int/en/about/who-we-are/staff-profiles/matthew-chantry) · [团队访谈](https://stories.ecmwf.int/machine-learning-vacancies-at-ecmwf/) · [多尺度评分论文](https://doi.org/10.1002/qj.70291)

## 研究成果与工具

### 技术路线与开放工具

**确定性预报。** IFS 将观测和短时预报结合，估计当前全球天气状态，所得“分析场”是业务 AIFS 的初始条件。Single v2 先用 1979—2022 年 ERA5 再分析资料预训练，再用覆盖 2018—2024 年的业务分析和新版 IFS 的试验分析微调。图神经网络把输入映射到内部网格，滑动窗口 Transformer 计算状态演变，再解码回输出网格。模型每次向前推六小时，迭代至第 15 天。公开权重和推理示例可以用于复算预报。微调所用的 IFS 50r1 试验分析未公开，从头复现训练仍受限制。[原始模型论文](https://arxiv.org/abs/2406.01465) · [Single v2 模型卡](https://huggingface.co/ecmwf/aifs-single-2.0)

**概率预报。** ENS 通过初始条件扰动和模型内的随机扰动产生不同轨迹。其 51 个成员包括 50 个扰动初值成员和一个控制初值成员，后者在积分过程中也包含随机性。训练时采用连续分级概率评分（CRPS）的变体，让整组预测的分布与实况吻合。v2 在多个空间尺度上计算评分，还为部分变量施加非负或取值范围约束，减少虚假的微量降水。[集合方法论文](https://arxiv.org/abs/2412.15832) · [集合业务技术说明](https://www.ecmwf.int/sites/default/files/elibrary/102025/81687-aifs-ens-becomes-operational.pdf) · [ENS v2 模型卡](https://huggingface.co/ecmwf/aifs-ens-2.0)

**预报数据。** 两套系统均在协调世界时 00、06、12、18 时起报，以 0.25° 经纬网格发布开放数据。用户可以查看图表、下载格点预报，也可按访问权限查询 MARS 历史归档。预报数据采用 CC BY 4.0 许可，适用 ECMWF 使用条款，允许在署名条件下再分发和商用。[数据、图表与授权](https://www.ecmwf.int/en/forecasts/datasets/aifs-machine-learning-data)

### 验证结果与适用范围

- **波高。** 以卫星高度计实测为参照，Single v2 的中期有效波高均方根误差比同期物理模式 IFS 50r1 约低 10%。这一数字衡量的是波高误差。在北极，新旧系统各自以同期分析场为参照时，部分区域的 2 米气温评分退步。若都从新版分析场起报，经过适配的 v2 又优于旧版。[波高检验](https://www.ecmwf.int/en/newsletter/187/news/implementation-aifs-v2) · [北极不同参照的检验](https://www.ecmwf.int/en/about/media-centre/aifs-blog/2026/adapting-aifs-50r1)
- **热带气旋。** 路径误差与强度误差需要分别检验。约 31 公里的业务网格对风暴内核分辨不足，确定性模型也会平滑强风。在未参与训练的 2025 年气旋样本中，原始模型对最大风速的全球平均偏差接近 −29 节，加入试验性强度订正后约为 −2 节。这个结果适用于订正模型与该季样本。[气旋订正试验](https://www.ecmwf.int/en/about/media-centre/aifs-blog/2026/ai-tropical-cyclone-forecasts)
- **集合概率。** 除了核查各成员误差，还要检验例如“30% 强风概率”在足够多次预报中是否对应约 30% 的发生频率。AIFS-CRPS 论文在多数中期变量和预报时效上优于其物理集合基线。到了次季节尺度，用距平消除系统偏差后，两者表现相近。ECMWF 2026 年 9 月的年度评估另给出业务系统按高空和近地面变量拆分的评分。[集合验证论文](https://arxiv.org/abs/2412.15832) · [年度预报验证报告](https://www.ecmwf.int/en/elibrary/81748-evaluation-ecmwf-forecasts)

## 合作机构与分工

| 机构或团队 | 具体工作 |
| --- | --- |
| ECMWF 与各国气象部门 | 共同维护开源框架 Anemoi，用于准备数据、训练和运行多个机构各自的模型。2024 年成立的机器学习合作项目由挪威气象研究所（MET Norway）与瑞士联邦气象与气候局（MeteoSwiss）牵头，ECMWF 与 17 家国家气象部门参与，围绕确定性建模、集合、资料同化、部署基础设施、培训支持五项工作共享方法及 GPU。[合作项目与分工](https://www.ecmwf.int/en/about/media-centre/aifs-blog/2026/building-shared-foundations-machine-learned-weather-prediction) |
| ECMWF 的 AIFS 团队与海洋团队 | Lorenzo Zampieri、Sara Hahner 等人将大气、波浪、海冰和海表状态纳入一个模型，通过逐项加入变量检验耦合效果。公开结果包括冰缘附近的波浪预报和海面高度的系统偏差。[Marine 预印本](https://arxiv.org/abs/2604.25559) · [AIFS Marine 研究记录](https://www.ecmwf.int/en/about/media-centre/aifs-blog/2026/aifs-marine) |
| ECMWF、MET Norway 与马拉维气候变化与气象服务部（DCCMS） | ECMWF 提供 Forecast-in-a-Box 软件，MET Norway 提供基于 AIFS 的 Bris 模型，马拉维气象人员提供本地知识，参与非洲区域调校和本地试运行。世界气象组织认可这一试点。[合作方联合公告](https://www.ecmwf.int/en/about/media-centre/news/2026/forecast-box-piloting-portable-solution-running-ai-weather-forecasts) |

## 经费与资源

| 公开口径 | 额度与用途 |
| --- | --- |
| AIFS 项目级算力 | EuroHPC 在 Leonardo Booster 分区核配 **10 万节点小时**，授权期为 2024 年 3 月 4 日至 2025 年 3 月 3 日，用于提高模型分辨率和探索集合预报。[AIFS 核配记录](https://www.eurohpc-ju.europa.eu/aifs_en) |
| AIFS-ensemble 项目级算力 | EuroHPC 单列 **40 万节点小时**，授权期为 2024 年 10 月至 2025 年 10 月，面向业务集合模型的大规模训练，项目负责人为 ECMWF 的 Christian Lessig。两项核配记录均以节点小时计量，未披露实际使用量或折算金额。[AIFS-ensemble 核配记录](https://www.eurohpc-ju.europa.eu/aifs-ensemble_en) |
| ECMWF 机构收入 | 2024 年成员国与合作国缴款合计 6,270 万英镑，外部机构资助 8,230 万英镑，数据和产品销售收入略低于 1,260 万英镑。数字覆盖整个中心，公开资料未分列 AIFS 年度预算或单次推理成本。[ECMWF 财务说明](https://www.ecmwf.int/en/about/media-centre/key-facts-and-figures) |
| 区域试点软件经费 | Forecast-in-a-Box 由 ECMWF 和欧盟委员会资助，委员会的支持来自 Destination Earth（DestinE）与非洲区域卓越中心（ArcX）计划。公告未列金额，所述经费用于便携式软件。[试点资助说明](https://www.ecmwf.int/en/about/media-centre/news/2026/forecast-box-piloting-portable-solution-running-ai-weather-forecasts) |

## 研究动态

- **2023 年 10 月 13 日｜首次公开实时试验图。** 团队发布确定性模型 v0.1，以约 1° 网格产生全球预报，供研究人员与 IFS 和其他机器学习模型对照。实时初始条件仍来自 IFS 资料同化。[首发公告](https://www.ecmwf.int/en/about/media-centre/aifs-blog/2023/ECMWF-unveils-alpha-version-of-new-ML-model)
- **2024 年 1 月 10 日｜确定性试验模型升级至约 0.25°。** 新版采用带注意力的图网络和滑动窗口 Transformer。相较约 111 公里网格的首版，团队观测到 10 米风速和 2 米气温评分改善。6 月 3 日发布的模型预印本记录了训练和验证方法。[版本更新](https://www.ecmwf.int/en/about/media-centre/aifs-blog/2024/first-update-aifs) · [方法论文](https://arxiv.org/abs/2406.01465)
- **2024 年 6 月 21 日｜首次实时试验集合预报。** 早期集合以扩散模型逐步去噪生成预报，在约 1° 网格上运行 51 个成员，提供 12 小时间隔的输出，用来检验同一起报时刻可能出现的不同天气演变。[试验说明](https://www.ecmwf.int/en/about/media-centre/aifs-blog/2024/enter-ensembles)
- **2024 年 12 月 20 日｜公布 AIFS-CRPS 集合模型。** 团队直接以概率评分训练随机模型，在中期和次季节回报试验中比较了预报质量。这一路线随后用于业务 ENS。[集合预印本](https://arxiv.org/abs/2412.15832) · [业务实现](https://www.ecmwf.int/sites/default/files/elibrary/102025/81687-aifs-ens-becomes-operational.pdf)
- **2025 年 2 月 25 日｜Single v1 进入业务。** ECMWF 将单条轨迹预报纳入日常生产，并与 IFS 并行发布，用户可以从相同起报时间比较两套预报。[Single 上线公告](https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ai-forecasts-become-operational)
- **2025 年 7 月 1 日｜ENS 进入业务。** 用户开始定时收到 51 个成员的全球集合预报，可以据此估计超阈值概率。当时 AIFS 水平分辨率约 31 公里，同期物理集合约 9 公里，局地强风和精细地形需要结合高分辨率资料判断。[ENS 上线公告](https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ensemble-ai-forecasts-become-operational)
- **2025 年 8 月 27 日｜Single v1.1 修正孤立降水伪影。** 团队发现土壤湿度在训练中的权重过高，导致模型学到土壤湿度与降水之间不合理的关系。降低权重后，这类虚假雨点减少，总体评分与上版相近。[版本记录](https://confluence.ecmwf.int/spaces/UDOC/pages/599165907/AIFS%2BVersion%2BHistory) · [v1.1 模型卡](https://huggingface.co/ecmwf/aifs-single-1.1)
- **2026 年 5 月 12 日｜Single 和 ENS 同步升级至 v2。** IFS 50r1 改变了海气耦合及海冰上积雪的表示，旧模型使用新分析场时误差增大。团队以五个月的试验分析检验适配方案，发现与原业务资料混合微调更稳健。上线的两个模型均新增了 11 个波浪变量、积雪覆盖及 10 hPa 气压层。[正式上线](https://www.ecmwf.int/en/about/media-centre/news/2026/ifs-cycle-50r1-aifsv2-live) · [适配实验](https://www.ecmwf.int/en/about/media-centre/aifs-blog/2026/adapting-aifs-50r1)
- **2026 年 10 月 12 日｜AIFS Marine 公布联合预报试验。** 原型结合 ERA5 大气资料、波浪后报和 ORAS6 海洋再分析训练。显式表示海冰后，冰缘附近的波浪预报有所改善。对已检验的多项海洋变量，原型达到同等误差的预报时效通常比物理基线长约一天。海面高度则随时效延长出现负偏差。海表和海冰联合预报仍属研究原型。[Marine 原文与对比图](https://www.ecmwf.int/en/about/media-centre/aifs-blog/2026/aifs-marine)
- **2026 年 10 月 16 日｜AIFS-COMPO 开放实验预报图。** 该模型利用哥白尼大气监测服务（CAMS）资料联合预测天气、气溶胶和反应性气体，预报长达 10 天。以 2024 年夏季地面站观测检验，在与业务物理系统共有的前 5 天，试验系统的气溶胶光学厚度均方根误差较低。模型尚未将随时间变化的排放量作为显式输入。[COMPO 预印本](https://arxiv.org/abs/2604.03300) · [AIFS-COMPO 公告与对照图](https://www.ecmwf.int/en/about/media-centre/news/2026/aifs-compo-ai-atmospheric-composition-forecasting)
- **2026 年 11 月 3 日｜AI-DOP 接入实时观测。** 团队用 AIFS 的观测驱动变体从最近 30 小时观测起报。部分漂流浮标的气压比先前短时预报低逾 10 hPa，曾制造虚假低压，经质量检查后消失。在 10 月风暴 Boelo 个例中，模型提前三天预报出低压附近的强风带和暖空气输送。单次个例检验了实时流程，观测中断和跨季节表现仍待评估。[观测驱动预测方法论文](https://arxiv.org/abs/2412.15687) · [实时原型与验证](https://www.ecmwf.int/en/about/media-centre/aifs-blog/2026/observations-forecasts-bringing-ai-dop-real-time)
- **2026 年 11 月 19 日｜披露马拉维本地推理试点。** 当地气象部门通过 Forecast-in-a-Box 在桌面级设备上运行面向非洲调校的 Bris 模型。试点验证了预训练模型的本地运行能力，初始条件和训练仍依赖高性能计算，公告未量化预警准确率或减灾成效。[试点联合公告](https://www.ecmwf.int/en/about/media-centre/news/2026/forecast-box-piloting-portable-solution-running-ai-weather-forecasts)

## 相关链接

- [ECMWF 业务数据与获取入口](https://www.ecmwf.int/en/forecasts/datasets/aifs-machine-learning-data)
- [Single v2 权重与推理示例](https://huggingface.co/ecmwf/aifs-single-2.0) · [ENS v2 权重与推理示例](https://huggingface.co/ecmwf/aifs-ens-2.0)
- [AIFS 官方技术博客](https://www.ecmwf.int/en/about/media-centre/aifs-blog) · [ECMWF 机构介绍](https://www.ecmwf.int/en/about)
