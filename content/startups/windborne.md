---
title: "WindBorne Systems"
type: "startup"
logo: "/logos/windborne.svg"
category: "气象与地球科学"
summary: "用长航时探空气球测量海洋上空的大气剖面，把实测数据纳入 WeatherMesh 集合预报，并用气旋路径回报试验检验新增观测的价值。"
countries: ["美国"]
directions: ["Characterize"]
maturity: "实际部署"
---

## 公司与团队

WindBorne Systems 源自斯坦福学生航天项目 ValBal。团队自 2015 年起研究怎样延长探空气球的飞行时间，2019 年在加州帕洛阿尔托创立公司，现位于雷德伍德城的 Redwood Shores。早期加速器 Cardinal Ventures 的创始人访谈记载了 Paige Brown 参与创业的经历。公司当前媒体包列出的四位联合创始人为首席执行官 John Dean、首席技术官 Andrey Sushko、首席产品工程师 Kai Marshland 和 AI 负责人 Joan Creus-Costa。截至 2026 年 11 月 20 日，公司为风险投资支持的非上市独立企业，公开披露的最近一轮股权融资为 B 轮。[早期团队访谈](https://cardinalventures.medium.com/founder-spotlight-windborne-192baa528c01) · [创始团队与职务](https://windbornesystems.com/ext/press) · [公司 B 轮披露](https://windbornesystems.com/blog/windborne-systems-raises-37-million-to-build-the-worlds-weather-intelligence-infrastructure) · [股权状态](https://pitchbook.com/profiles/company/314957-53)

## 产品

### Atlas 大气观测数据

热带气旋可能在远海形成，此时附近很少有地面或高空气象站。要估计风暴会往哪里走，需要知道它周围不同高度的风、温度和湿度。WindBorne 的 Atlas 气球网在飞行中多次改变高度，沿途测量气压、温度、湿度和风，得到随高度变化的剖面。一枚气球可以在不同时间和位置重复采样。观测也可单独交付给气象机构，供其检验或修正自己的天气模型。[观测研究与变量说明](https://ams.confex.com/ams/105ANNUAL/webprogram/Paper451314.html) · [美国国家环境预报中心数据说明](https://www.nco.ncep.noaa.gov/pmb/docs/restricted_data/sounding_balloons/)

气象机构和研究团队可以按地理范围、高度和时间订购观测。公司按“等效探空次数”计量交付量，每累计 10 公里垂直采样距离计作一次，不同气球在不同高度取得的剖面可以合计。该指标衡量数据量，一次等效探空可能由多个未贯通整层大气的剖面组成。[数据计量与交付示例](https://windbornesystems.com/blog/sounding-equivalents-delivering-atmospheric-data-on-a-constellation-scale)

### WeatherMesh、MetaMesh 与天气事件接口

WeatherMesh-6 的数据同化系统把新观测与已有的大气状态估计结合，生成一组可能的起始状态，用于表达测量不全带来的不确定性。全球版按 0.25° 网格每小时更新一次，预报未来 15 天。128 个集合成员可以给出某地降水超过指定阈值的概率。另一款产品 MetaMesh 将 WeatherMesh 和多个公共气象模型的输出加权，权重随变量、地点、季节和预报时效改变，向用户提供地点预报。[WeatherMesh-6 发布与概率预报示例](https://windbornesystems.com/blog/introducing-wm-6) · [产品说明与数据获取](https://windbornesystems.com/faq)

另有 3 公里分辨率的 WM-6，针对更小尺度的天气，吸收卫星云图和雷达观测，每 15 分钟更新一次，预报未来 72 小时。用户可通过 REST API 读取 Zarr 网格数据，或用 Weather Events 接口按事件追踪高温、寒潮、大气河和锋面。公司称交易机构是首批商业用户之一，未公布客户名单及使用预报后的财务收益。[WM-6 产品规格](https://windbornesystems.com/blog/introducing-wm-6) · [事件接口](https://windbornesystems.com/blog/introducing-windborne-weather-events) · [公司业务披露](https://windbornesystems.com/blog/windborne-systems-raises-37-million-to-build-the-worlds-weather-intelligence-infrastructure)

### 观测质量、增量价值与模型对比

| 研究问题 | 试验与结果 |
| --- | --- |
| 气球测得的大气结构是否可靠？ | ECMWF 研究者 Bruce Ingleby 以该中心的短期预报作为参照，比较不同平台报告的高度。在 2025 年 6 至 8 月、900 至 250 百帕范围内，WindBorne 高度与参照值之差的标准差约为 6 位势米。这项独立比较测量的是高度的一致性，参照场自身也含误差。[世界气象组织刊载的原始分析，图 26](https://wmo.int/media/magazine-article/wmo-abo-newsletter-volume-27) |
| 同一模型多用一组气球数据，能否改善气旋路径预报？ | NOAA 环境建模中心相关研究者与公司团队用 GFS v16 重算 2022、2023 年两个气旋季。合并样本后，大西洋路径预报在 36 至 144 小时时效改善，132 小时处改善约 12%。西北太平洋的 2023 年结果反而变差，合并两季后该海域仍有退步。全球总体校验指标在两组之间很接近。[联合研究报告](https://wgne.net/bluebook/uploads/2024/docs/06_Wu_Xingren_TropicalCycloneWindborneData.pdf) |
| WeatherMesh 自身相对其他模型表现怎样？ | 公司在 2025 年 7 月至 2026 年 3 月的回测中，将 WM-6 的 128 成员集合平均与 ECMWF 两套 51 成员集合平均比较。其报告的均方根误差降幅，对 IFS 最高为 38%，对 AIFS 最高为 32%。这些是被测变量和预报时效中的最大值。模型版本、成员数和初始状态均有差异，这组比较无法单独量出自有气球数据的贡献。[公司评测窗口、曲线与比较条件](https://windbornesystems.com/blog/introducing-wm-6) |

## 产业伙伴与合作范围

**美国国家海洋和大气管理局（NOAA）与 Synoptic。** NOAA 天气项目办公室的观测项目资助了长航时探空气球研发，并在 2023 年为环境建模中心追加支持，用 GFS 评估这些观测对飓风和大气河预报的影响。另有实际的数据交付渠道，美国国家气象局的承包商 Synoptic 将温、湿、风剖面编码为 BUFR 并转交预报中心。NCEP 在 2025 年 6 月确认数据已入库，正评估同化与检验用途。WindBorne 在 2026 年 8 月称 NOAA 的业务 GFS 已同化其数据。所引项目及交付说明未披露合同金额。[NOAA 研发项目](https://wpo.noaa.gov/windborne-weather-balloon-reaches-new-heights/) · [NOAA 年度总结](https://wpo.noaa.gov/wp-content/uploads/2024/05/WPO-Annual-Accomplishments_2023_508c_PR.pdf) · [预报中心交付说明](https://www.nco.ncep.noaa.gov/pmb/docs/restricted_data/sounding_balloons/) · [2026 年业务公告](https://windbornesystems.com/blog/windborne-systems-raises-37-million-to-build-the-worlds-weather-intelligence-infrastructure)

**加州大学圣迭戈分校斯克里普斯海洋研究所 CW3E 中心。** 双方合作采集北太平洋冬季大气河观测，并把公司传感器与 Vaisala RS41 探空仪搭载在同一气球上做比对，另行放飞两枚并行气球。三组试验均取得数据，公司在公布试验时仍在核对差异。所引材料未披露合作金额。[CW3E 观测资料](https://cw3e.ucsd.edu/arrecon_data_globalsoundingballoons) · [传感器试验记录](https://windbornesystems.com/blog/validating-our-sensors-a-windborne-x-cw3e-collaboration)

**盖茨基金会与肯尼亚气象局。** 盖茨基金会于 2024 年 10 月承诺向公司拨款 451.03 万美元，项目期 20 个月，用非洲实地观测和深度学习改善面向小农户的中长期天气预报。肯尼亚气象局参与当地观测部署。已公布的进展包括首飞、飞行时数和地面设施更新，农户端预测误差和农业收益仍需后续评估。[基金会拨款记录](https://www.gatesfoundation.org/about/committed-grants/2024/12/inv-079110) · [肯尼亚项目进展](https://windbornesystems.com/blog/closing-the-data-gap-how-windbornes-weather-balloons-are-changing-the-forecast-system-in-africa)

## 融资记录

| 披露时间 | 轮次与金额 | 投资者 |
| --- | --- | --- |
| 2019 年 | Pre-seed，Cardinal Ventures 记录截至 5 月初已筹 19.5 万美元，整轮总额未披露 | 公司后来确认该年 Pre-seed 由 Khosla Ventures 领投。[同期访谈](https://cardinalventures.medium.com/founder-spotlight-windborne-192baa528c01) · [公司后续回顾](https://windbornesystems.com/blog/windborne-raises-15-million-to-scale-its-balloon-constellation-and-bring-ai-weather-modeling-to-the-fight-against-climate-change) |
| 2023-06-22 | 种子轮，600 万美元 | Footwork 领投，投资方披露 Khosla Ventures、Pear VC、Ubiquity Ventures、Harvest Ventures 和 Humba Ventures 参与。[投资方公告](https://susaventures.substack.com/p/our-investment-in-windborne-systems-c6dcc0c3519d) |
| 2024-06-03 | A 轮，1,500 万美元 | Khosla Ventures 领投，Footwork、Pear VC、Convective Capital 等参与。公告披露 Khosla Ventures 将获得一个董事席位。[公司公告](https://windbornesystems.com/blog/windborne-raises-15-million-to-scale-its-balloon-constellation-and-bring-ai-weather-modeling-to-the-fight-against-climate-change) |
| 2026-08-05 | B 轮，3,700 万美元，公司披露累计融资超过 6,200 万美元 | Khosla Ventures 与 Galvanize 共同领投，Translink Capital、Biprogy、Lux Capital 及原投资者参与。[公司公告](https://windbornesystems.com/blog/windborne-systems-raises-37-million-to-build-the-worlds-weather-intelligence-infrastructure) |

上述公告均未披露投前或投后估值。盖茨基金会的专项拨款列于合作项目。

## 公司动态

### 2019-04 · 从斯坦福学生项目成立公司

团队于同年 1 月把 ValBal 项目转为 WindBorne，3 月加入 Cardinal Ventures，4 月下旬注册成立公司。早期试验的核心问题是气球能在空中停留多久。成立公司后，团队将连续采集大气数据作为产品方向。[加速器同期访谈](https://cardinalventures.medium.com/founder-spotlight-windborne-192baa528c01)

### 2022-02 至 03 · 北太平洋冬季大气河观测

研究团队从韩国和夏威夷放飞 60 枚气球，在太平洋沿途测量水汽与风场。CW3E 记载，合计 2021、2022 两个冬季有 101 次飞行专用于这项任务。2022 年 8 月，NOAA 介绍当时气球的平均飞行时间为 7 天、最长 16 天，为在海上连续采集剖面提供了实测依据。[研究者会议摘要，编号 145](https://cw3e.ucsd.edu/wp-content/uploads/IARC2024/IARC2024-BookofAbstracts_withappendix.pdf) · [CW3E 飞行记录](https://cw3e.ucsd.edu/arrecon_data_globalsoundingballoons) · [NOAA 研发记录](https://wpo.noaa.gov/windborne-weather-balloon-reaches-new-heights/)

### 2023-11 至 2024-03 · 扩大冬季观测

研究者报告，该季在北半球执行了 370 次气球飞行，过半飞越太平洋，为既有大气河观测增加了海上覆盖。会议摘要给出了飞行范围和数量，当时仍在评估新增资料对预报的影响。[国际大气河会议研究摘要，编号 145](https://cw3e.ucsd.edu/wp-content/uploads/IARC2024/IARC2024-BookofAbstracts_withappendix.pdf)

### 2024-02 · 公布第一代 WeatherMesh

WindBorne 将业务从出售观测扩展到自行生成全球中期预报。到 5 月，公司披露模型已实际用于气球网的日常气象判断，并向商业伙伴开放预报。首版对外报道的精度来自公司的模型比较。[首版技术说明](https://windbornesystems.com/blog/how-we-built-our-record-breaking-ai-model-weathermesh) · [首批应用](https://windbornesystems.com/blog/meet-windbornes-three-part-tech-stack)

### 2024-10-10 · 为飓风 Milton 采集下投剖面

公司记录显示，气球携带的两枚下投探空仪分别在佛罗里达州 Sebring 和 Cocoa Beach 一带记录温、湿、压和风。试验验证了另一种取得风暴垂直剖面的方式。单次风暴观测不足以独立衡量这批数据对路径预报的贡献。[Milton 观测记录](https://windbornesystems.com/blog/how-windborne-navigated-first-ever-balloon-deployed-dropsondes-directly-into-hurricane-milton)

### 2025-03-28 · 发布 WeatherMesh-3 技术预印本

团队在模型的内部表示上逐步推演天气，只在输出时将其解码为气象变量。作者报告，单张 RTX 4090 在 12 秒内可生成 0.25° 分辨率的 14 天全球预报。这是模型推理用时，业务用户收到预报还取决于观测到达、预处理和分发。[arXiv 预印本](https://arxiv.org/abs/2503.22235)

### 2025-10-16 · UA1093 事件与气球改造

美国国家运输安全委员会（NTSB）初步报告记载，美联航 1093 航班在犹他州上空遭物体撞击后备降，机长受轻伤，WindBorne 有一枚气球在事发区域失联。公司 11 月 20 日更新称已实施四项安全改进。NTSB 初步报告未对事故原因作最终认定。[NTSB 初步报告](https://data.ntsb.gov/carol-repgen/api/Aviation/ReportMain/GenerateNewestReport/201877/pdf) · [公司改进说明](https://windbornesystems.com/blog/ua1093-update)

### 2025-12-01 · WM-5c 将全球集合预报更新间隔缩短至 20 分钟

团队公布了从接收新观测到重新起报的流程。在公司给出的硬件配置上，8 张 GPU 并行计算 24 个成员耗时 16 分钟，可以在 20 分钟内交付下一轮预报。该指标描述产品更新的频率，与可向前预报多少天是两个指标。[WM-5c 发布说明](https://windbornesystems.com/blog/weathermesh-5c-release-notes)

### 2026-01-28 · 肯尼亚项目公布实地部署进展

自 2024 年 9 月 26 日首次放飞以来，公司统计气球在肯尼亚上空累计飞行逾 8,231 小时，当地团队也完成了制氢设备改造。报告量化的是高空观测覆盖，尚未给出使用这些预报的农户增收或减损数据。[肯尼亚项目报告](https://windbornesystems.com/blog/closing-the-data-gap-how-windbornes-weather-balloons-are-changing-the-forecast-system-in-africa)

### 2026-05-04 · MetaMesh 开始提供多模型地点预报

MetaMesh 将自有 WeatherMesh 与多套公共 AI 和数值预报加权，任一输入模型有新版输出时即可更新，交付未来 15 天的逐小时地点预报。在气象站有长期观测的地点，模型还能利用历史偏差进行校正。[MetaMesh 方法与验证](https://windbornesystems.com/blog/introducing-metamesh)

### 2026-06-01 · WM-6 同时发布全球版和 3 公里版

全球版提供 128 个集合成员和降水超过阈值的概率，高分辨率版引入雷达和卫星观测。公司还用美国本土航空气象站数据检验了 3 公里版的地面温度和风速，这一结果的地理范围限于所测站点。[WM-6 发布与验证](https://windbornesystems.com/blog/introducing-wm-6)

### 2026-09-30 · Atlas 同时在空气球超过 700 枚

公司称，同时运行的气球由 2024 年 9 月的 14 枚增至 2026 年 8 月超过 600 枚、9 月超过 700 枚。9 月 3 日至 10 日的样本中，689 枚气球采集了逾 9,000 段升降剖面，折合 5,741 次等效探空。前者计剖面段数，后者计累计垂直采样距离。[8 月规模披露](https://windbornesystems.com/blog/windborne-systems-raises-37-million-to-build-the-worlds-weather-intelligence-infrastructure) · [9 月观测计量报告](https://windbornesystems.com/blog/sounding-equivalents-delivering-atmospheric-data-on-a-constellation-scale)

### 2026-10-26 · 观测西北太平洋台风的风眼

气象科学家 Tomer Burg 回顾西北太平洋多个台风的观测，包括进入台风 Dolphin 和 Saudel 风眼的两个案例。在 Saudel 快速增强期间，两次剖面给出的中心最低海平面气压估计值从约 959.5 降至 956.0 百帕。文章也收录了仅在离中心数十公里处取得观测的案例，并提供温、湿、压、风剖面数据的申请入口，方便研究者重新分析气旋结构。[观测记录与数据申请](https://windbornesystems.com/blog/windborne-tropical-cyclone-intercepts-expanding-our-capabilities)

### 2026-10-29 · 推出天气事件追踪接口

气象团队把内部使用的事件追踪器做成 API，可在 WM-6 集合平均场上追踪热浪、寒潮、大气河与锋面。例如，热浪要求陆地最高气温连续至少三天超过当地该日历史分布的第 85 百分位。系统为同一事件保留标识，使用者可以逐小时回看预报范围怎样扩大、减小或分裂。第一版仍属实验产品，其中锋面的识别最初步。[产品定义、标准与示例](https://windbornesystems.com/blog/introducing-windborne-weather-events)

### 2026-11-10 · 改进实时天气图的等压线绘制

Kaimana Cook 以北太平洋海平面气压图为例，介绍如何在 GPU 上实时绘制和标注等值线。相邻两帧之间的等压线可能分叉或消失，逐条匹配轮廓容易造成跳动。作者先对连续时刻的气压场做插值，再逐帧绘线，并优先保留上一帧仍适用的标签位置。其绘图基准显示，预先计算气压场导数可缩短约 15% 的等值线图层 GPU 用时，代价是每帧源纹理占用四倍内存。[工程原文](https://windbornesystems.com/blog/real-time-gpu-isolines-with-labels-a-maps-how-to)

## 相关链接

- [公司官网](https://windbornesystems.com/) · [公司新闻归档](https://windbornesystems.com/newsroom) · [研究与工程博客](https://windbornesystems.com/blog) · [预报产品文档](https://api.windbornesystems.com/)
- [公司基准评测](https://benchmarks.windbornesystems.com/) · [官方媒体包](https://windbornesystems.com/ext/press) · [品牌图标原图](https://windbornesystems.com/press-kit/WindBorne-Mark-Black.svg)
