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

WindBorne Systems 于 2019 年创立于美国加州帕洛阿尔托，现位于雷德伍德城的 Redwood Shores。四位联合创始人来自斯坦福大学的学生航天项目。John Dean 任首席执行官，Andrey Sushko 任首席技术官，Kai Marshland 任首席产品工程师，Joan Creus-Costa 负责 AI。团队同时运营气球观测网和天气预报模型。2026 年 8 月，公司披露已有超过 600 个探空气球同时运行。截至 2026 年 11 月 20 日，公开资料将其列为获得风险投资的非上市独立公司，最近一轮股权融资为 B 轮。[创始团队与职务](https://windbornesystems.com/ext/press) · [公司 B 轮披露](https://windbornesystems.com/blog/windborne-systems-raises-37-million-to-build-the-worlds-weather-intelligence-infrastructure) · [股权状态](https://pitchbook.com/profiles/company/314957-53)

## 从海上探空到十五天预报

热带气旋可能在远海形成，此时附近很少有地面或高空气象站。要估计风暴会往哪里走，需要知道它周围不同高度的风、温度和湿度。WindBorne 的 Atlas 气球网在飞行中多次改变高度，沿途测量气压、温度、湿度和风，得到随高度变化的剖面。一枚气球可以在不同时间和位置重复采样。观测也可单独交付给气象机构，供其检验或修正自己的天气模型。[观测研究与变量说明](https://ams.confex.com/ams/105ANNUAL/webprogram/Paper451314.html) · [美国国家环境预报中心数据说明](https://www.nco.ncep.noaa.gov/pmb/docs/restricted_data/sounding_balloons/)

WeatherMesh-6 的数据同化系统把新观测与已有的大气状态估计结合，生成一组可能的起始状态，用于表达测量不全带来的不确定性。全球版按 0.25° 网格每小时更新一次，预报未来 15 天。128 个集合成员可以给出某地降水超过指定阈值的概率。另一款产品 MetaMesh 将 WeatherMesh 和多个公共气象模型的输出加权，权重随变量、地点、季节和预报时效改变，向用户提供地点预报。[WeatherMesh-6 发布与概率预报示例](https://windbornesystems.com/blog/introducing-wm-6) · [产品说明与数据获取](https://windbornesystems.com/faq)

## 怎样验证新增观测和模型

| 研究问题 | 试验与结果 |
| --- | --- |
| 气球测得的大气结构是否可靠？ | ECMWF 研究者 Bruce Ingleby 以该中心的短期预报作为参照，比较不同平台报告的高度。在 2025 年 6 至 8 月、900 至 250 百帕范围内，WindBorne 高度与参照值之差的标准差约为 6 位势米。这项独立比较测量的是高度的一致性，参照场自身也含误差。[世界气象组织刊载的原始分析，图 26](https://wmo.int/media/magazine-article/wmo-abo-newsletter-volume-27) |
| 同一模型多用一组气球数据，能否改善气旋路径预报？ | NOAA 环境建模中心相关研究者与公司团队用 GFS v16 重算 2022、2023 年两个气旋季。合并样本后，大西洋路径预报在 36 至 144 小时时效改善，132 小时处改善约 12%。西北太平洋的 2023 年结果反而变差，合并两季后该海域仍有退步。全球总体校验指标在两组之间很接近。[联合研究报告](https://wgne.net/bluebook/uploads/2024/docs/06_Wu_Xingren_TropicalCycloneWindborneData.pdf) |
| WeatherMesh 自身相对其他模型表现怎样？ | 公司在 2025 年 7 月至 2026 年 3 月的回测中，将 WM-6 的 128 成员集合平均与 ECMWF 两套 51 成员集合平均比较。其报告的均方根误差降幅，对 IFS 最高为 38%，对 AIFS 最高为 32%。这些是被测变量和预报时效中的最大值。模型版本、成员数和初始状态均有差异，这组比较无法单独量出自有气球数据的贡献。[公司评测窗口、曲线与比较条件](https://windbornesystems.com/blog/introducing-wm-6) |

## 用户与科研合作

美国国家气象局通过承包商 Synoptic 接收 WindBorne 的气球剖面。美国国家环境预报中心 2025 年 6 月的说明确认数据已入库，并在评估同化和验证用途。WindBorne 在 2026 年 8 月公告中进一步称，观测已用于 NOAA 的全球预报系统 GFS。另有一项仪器比对合作来自加州大学圣迭戈分校斯克里普斯海洋研究所的 CW3E 中心，两方把公司传感器与 Vaisala RS41 探空仪搭载在同一气球上，也放飞两枚并行气球。三组试验均取得数据，公司在公布试验时仍在核对差异。[预报中心交付说明](https://www.nco.ncep.noaa.gov/pmb/docs/restricted_data/sounding_balloons/) · [2026 年业务公告](https://windbornesystems.com/blog/windborne-systems-raises-37-million-to-build-the-worlds-weather-intelligence-infrastructure) · [传感器试验记录](https://windbornesystems.com/blog/validating-our-sensors-a-windborne-x-cw3e-collaboration)

盖茨基金会于 2024 年 10 月承诺向公司拨款 451.03 万美元，项目期 20 个月，研究怎样结合非洲的现场观测和深度学习，为小农户改善中长期天气预报。基金会公开的是承诺金额与研究目标，农户端预测误差和农业收益需由后续评估衡量。[基金会拨款记录](https://www.gatesfoundation.org/about/committed-grants/2024/12/inv-079110)

## 最近三篇公司博客

### 2026-11-10 · Real-time GPU isolines with labels: a maps how-to

Kaimana Cook 以北太平洋海平面气压图为例，介绍如何在 GPU 上实时绘制和标注等值线。相邻两帧之间的等压线可能分叉或消失，逐条匹配轮廓容易造成跳动。作者先对连续时刻的气压场做插值，再逐帧绘线，并优先保留上一帧仍适用的标签位置。其绘图基准显示，预先计算气压场导数可缩短约 15% 的等值线图层 GPU 用时，代价是每帧源纹理占用四倍内存。[工程原文](https://windbornesystems.com/blog/real-time-gpu-isolines-with-labels-a-maps-how-to)

### 2026-10-29 · Introducing: WindBorne Weather Events

气象团队把内部使用的事件追踪器做成 API，可在 WM-6 集合平均场上追踪热浪、寒潮、大气河与锋面。例如，热浪要求陆地最高气温连续至少三天超过当地该日历史分布的第 85 百分位。系统为同一事件保留标识，使用者可以逐小时回看预报范围怎样扩大、减小或分裂。第一版仍属实验产品，其中锋面的识别最初步。[产品定义、标准与示例](https://windbornesystems.com/blog/introducing-windborne-weather-events)

### 2026-10-26 · WindBorne Tropical Cyclone Intercepts: Expanding Our Capabilities

气象科学家 Tomer Burg 回顾西北太平洋多个台风的观测，包括进入台风 Dolphin 和 Saudel 风眼的两个案例。在 Saudel 快速增强期间，两次剖面给出的中心最低海平面气压估计值从约 959.5 降至 956.0 百帕。文章也收录了仅在离中心数十公里处取得观测的案例，并提供温、湿、压、风剖面数据的申请入口，方便研究者重新分析气旋结构。[观测记录与数据申请](https://windbornesystems.com/blog/windborne-tropical-cyclone-intercepts-expanding-our-capabilities)

## 股权融资

| 披露时间 | 轮次与金额 | 投资者 |
| --- | --- | --- |
| 2019 年 | Pre-seed，公告未列金额 | Khosla Ventures 领投。[公司后续回顾](https://windbornesystems.com/blog/windborne-raises-15-million-to-scale-its-balloon-constellation-and-bring-ai-weather-modeling-to-the-fight-against-climate-change) |
| 2023-06-22 | 种子轮，600 万美元 | Footwork 领投，投资方披露 Khosla Ventures、Pear VC、Ubiquity Ventures、Harvest Ventures 和 Humba Ventures 参与。[投资方公告](https://susaventures.substack.com/p/our-investment-in-windborne-systems-c6dcc0c3519d) |
| 2024-06-03 | A 轮，1,500 万美元 | Khosla Ventures 领投，Footwork、Pear VC、Convective Capital 等参与。[公司公告](https://windbornesystems.com/blog/windborne-raises-15-million-to-scale-its-balloon-constellation-and-bring-ai-weather-modeling-to-the-fight-against-climate-change) |
| 2026-08-05 | B 轮，3,700 万美元，公司披露累计融资超过 6,200 万美元 | Khosla Ventures 与 Galvanize 共同领投，Translink Capital、Biprogy、Lux Capital 及原投资者参与。[公司公告](https://windbornesystems.com/blog/windborne-systems-raises-37-million-to-build-the-worlds-weather-intelligence-infrastructure) |

## 相关链接

- [公司官网](https://windbornesystems.com/) · [研究与工程博客](https://windbornesystems.com/blog) · [预报产品文档](https://api.windbornesystems.com/)
- [公司基准评测](https://benchmarks.windbornesystems.com/) · [官方媒体包](https://windbornesystems.com/ext/press) · [品牌图标原图](https://windbornesystems.com/press-kit/WindBorne-Mark-Black.svg)
