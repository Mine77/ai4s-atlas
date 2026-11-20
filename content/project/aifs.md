---
title: "ECMWF｜AIFS"
type: "project"
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

## 项目概览

欧洲中期天气预报中心（ECMWF）的人工智能预报系统 AIFS，每天四次发布未来 15 天的全球天气预报。AIFS Single 给出一条演变轨迹，AIFS ENS 给出 51 条可能轨迹。以风暴为例，预报员可以用前者查看低压中心可能经过的位置，再用后者估计强风超过某个阈值的概率。两套模型与中心的物理数值预报系统 IFS 并行业务运行。截至 2026 年 11 月 20 日，业务版本均为 v2。这个项目交付的是未来地球系统状态预报，因此未归入实验设计、合成或表征环节。[业务数据说明](https://www.ecmwf.int/en/forecasts/datasets/aifs-machine-learning-data) · [集合产品说明](https://huggingface.co/ecmwf/aifs-ens-2.0)

## 研究团队与分工

ECMWF 是政府间机构，总部位于英国雷丁，在意大利博洛尼亚及德国波恩设有站点。国家筛选按机构所在地标注。ECMWF 负责全球 AIFS 的研发、定时生产和全天候业务支持。成员国气象部门与中心共同开发的 Anemoi 软件框架，同时服务多个机构各自的预报模型。[机构概况](https://www.ecmwf.int/en/about/media-centre/key-facts-and-figures) · [业务上线公告](https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ai-forecasts-become-operational)

| 人员或团队 | 公开资料可确认的工作 |
| --- | --- |
| Matthew Chantry | ECMWF 机器学习战略负责人、创新平台负责人，统筹中心内机器学习应用，推动 AIFS 研发，并协调成员国共同开发 Anemoi。[个人资料](https://www.ecmwf.int/en/about/who-we-are/staff-profiles/matthew-chantry) |
| Mariana Clare、Simon Lang 等 | Clare 的工作包括为 AIFS 预报量化不确定性。Lang、Martin Leutbecher 和 Pedro Maciel 研究多尺度概率损失函数，ENS v2 将其用于训练。[团队访谈](https://stories.ecmwf.int/machine-learning-vacancies-at-ecmwf/) · [v2 技术说明](https://www.ecmwf.int/en/newsletter/187/news/implementation-aifs-v2) |
| AIFS 与海洋团队 | Lorenzo Zampieri、Sara Hahner 与两组同事共同测试在同一模型中预报大气、波浪、海冰和海表状态，并分别检验各类变量。[海洋团队技术记录](https://www.ecmwf.int/en/about/media-centre/aifs-blog/2026/aifs-marine) |
| ECMWF 与各国气象部门 | 机器学习合作项目将任务分为确定性建模、集合、资料同化、部署与基础设施、培训与支持五项，共享 GPU 和实验方法。Anemoi 覆盖数据准备、训练和推理。[合作项目工作说明](https://www.ecmwf.int/en/about/media-centre/aifs-blog/2026/building-shared-foundations-machine-learned-weather-prediction) |

## 技术与验证

**从观测到全球网格。** 业务 AIFS 的起点是 ECMWF 综合观测和物理模型形成的当前天气估计，即分析场。Single v2 先在 1979—2022 年 ERA5 再分析上预训练，再利用覆盖 2018—2024 年的业务分析和新 IFS 版本试验数据微调。图神经网络将全球网格编码至内部网格，滑动窗口 Transformer 计算状态演变，解码器再映射回输出网格。模型每次向前推六小时，用自己的上一时刻预报继续推算。官方开放了推理权重及示例，但用于微调的部分 IFS 50r1 试验分析未对用户开放，影响从头复现。[Single v2 模型卡](https://huggingface.co/ecmwf/aifs-single-2.0)

**为什么需要另训集合模型。** 多条同样平滑的轨迹容易低估天气变化幅度。AIFS ENS 在模型内部引入随机扰动，训练时用连续分级概率评分（CRPS）评价整组预报分布与实况的吻合程度。v2 进一步在多个空间尺度上优化概率预报，并为水分等变量施加物理边界，以减少虚假的微量降水。验证既要看误差，也要看概率是否可信，例如多次预报给出相似降水概率的地点和日期，实际发生频率是否接近该概率。[集合方法与检验](https://www.ecmwf.int/sites/default/files/elibrary/102025/81687-aifs-ens-becomes-operational.pdf) · [v2 方法更新](https://www.ecmwf.int/en/newsletter/187/news/implementation-aifs-v2)

## 项目进展与近期技术博客

### 2025 年 2 月 25 日及 7 月 1 日｜两类产品先后进入业务

Single 于 2 月纳入正式生产，ENS 于 7 月上线，加入 50 个扰动初值成员和一个控制初值成员。后者的控制成员在预报过程中也含模型随机性。预报员因此既可以比较路径和强度，也可以查看集合分歧。上线时 AIFS 的水平分辨率约 31 公里，同期物理集合约 9 公里，精细地形和局地强风的判断仍需较高分辨率资料。[Single 公告](https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ai-forecasts-become-operational) · [ENS 公告](https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ensemble-ai-forecasts-become-operational)

### 2026 年 5 月 12 日｜初始条件变了，模型也要跟着更新

Single 和 ENS 均升级至 v2，并随 IFS 50r1 切换新的业务分析。新分析改变了海气耦合与海冰上积雪的表示，旧模型在新的输入分布上出现误差。团队试用五个月原型资料，发现将新资料与原业务资料混合微调，比最后单用原型资料微调更稳健。新系统增加了波浪、积雪覆盖和 10 hPa 高度层，Single v2 的中期有效波高均方根误差相对 IFS 50r1 约降低 10%，检验参照为卫星高度计。北极部分区域的近地面气温在新旧版本与各自分析场的对比中仍出现退步。这组结果说明预报升级需要按区域、变量及验证参照解释。[初始条件适配实验](https://www.ecmwf.int/en/about/media-centre/aifs-blog/2026/adapting-aifs-50r1) · [波高检验与新增变量](https://www.ecmwf.int/en/newsletter/187/news/implementation-aifs-v2)

### 2026 年 10 月 12 日｜从业务海浪预报扩展到海表联合预报

AIFS Marine 原型将 ERA5 大气资料、海浪后报和 ORAS6 海洋再分析用于联合训练。团队逐项加入波浪、海冰和海表变量，以检验联合预报是否有益。例如，显式表示海冰改善了冰缘附近的波浪预报。在已检验的多项海洋变量上，原型达到相近误差的时间通常比物理基线晚约一天。海面高度却随预报时长增加而出现负偏差。业务 v2 已提供海浪，博客中新加入的海表和海冰联合预报仍属研究原型。[AIFS Marine 原文与对比图](https://www.ecmwf.int/en/about/media-centre/aifs-blog/2026/aifs-marine)

### 2026 年 11 月 3 日｜用实时观测直接起报

实时 AIFS-DOP 原型直接读取最新观测，探索省去业务分析场这一步。团队发现，个别漂流浮标报告的海平面气压比前一次短时预报低逾 10 hPa，足以在高压区制造虚假低压。以先前预报做质量检查后，这些低压消失。在 10 月风暴 Boelo 个例中，原型提前三天预报出低压周边的强风带和暖空气输送。这个例子检验了实时资料链能否工作。仪器突然停报的影响及跨季节预报质量仍需持续评估。该原型与依赖业务分析场的 AIFS v2 分别运行。[AI-DOP 原文与站点观测对比](https://www.ecmwf.int/en/about/media-centre/aifs-blog/2026/observations-forecasts-bringing-ai-dop-real-time)

## 资金与实际应用

**项目级算力与机构经费。** EuroHPC 为 AIFS 在 Leonardo Booster 上核配了 **10 万节点小时**，授权期为 2024 年 3 月 4 日至 2025 年 3 月 3 日。这是可核实的项目级算力额度，实际用量和货币价值未在该记录中列出。作为机构经费参照，2024 年 ECMWF 的成员国及合作国缴款合计 6,270 万英镑，外部机构资助为 8,230 万英镑，数据和产品销售收入略低于 1,260 万英镑。该披露覆盖整个中心，无法据此推算 AIFS 的年度预算或单次推理成本。[EuroHPC 核配记录](https://www.eurohpc-ju.europa.eu/aifs_en) · [ECMWF 财务口径](https://www.ecmwf.int/en/about/media-centre/key-facts-and-figures)

**日常交付。** Single 和 ENS 在协调世界时 00、06、12、18 时起报，以 0.25° 经纬网格发布开放数据。用户可从图表目录直接查看，也可下载格点预报或注册访问 MARS 历史归档。预报数据采用 CC BY 4.0 许可，并适用 ECMWF 使用条款，允许署名后再分发与商用。中心 2026 年 9 月的验证报告将 AIFS 纳入高空及近地面指标对比，可用于按变量核查业务表现。[数据与授权](https://www.ecmwf.int/en/forecasts/datasets/aifs-machine-learning-data) · [年度预报验证报告](https://www.ecmwf.int/en/elibrary/81748-evaluation-ecmwf-forecasts)

**2026 年 11 月 19 日，马拉维本地推理试点。** ECMWF 提供 Forecast-in-a-Box 软件，挪威气象研究所提供基于 AIFS 的 Bris 区域变体，马拉维气候变化与气象服务部门参与非洲区域调校和本地测试。预训练模型可以在当地设备生成面向本地的预报。训练和底层初始条件仍依赖高性能计算。试点软件由 ECMWF 和欧盟委员会通过 DestinE、ArcX 等渠道支持。公开公告确认了本地运行，尚未量化它对马拉维预警准确率或减灾结果的影响。[马拉维试点联合公告](https://www.ecmwf.int/en/about/media-centre/news/2026/forecast-box-piloting-portable-solution-running-ai-weather-forecasts)

## 相关链接

- [ECMWF 业务数据与获取入口](https://www.ecmwf.int/en/forecasts/datasets/aifs-machine-learning-data)
- [Single v2 权重与推理示例](https://huggingface.co/ecmwf/aifs-single-2.0) · [ENS v2 权重与推理示例](https://huggingface.co/ecmwf/aifs-ens-2.0)
- [AIFS 官方技术博客](https://www.ecmwf.int/en/about/media-centre/aifs-blog)
