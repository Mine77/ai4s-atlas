---
title: "天气预报与气候研究"
type: "field"
group: "earth"
order: 0
---

一场热带气旋刚在远海形成，港口想知道五天后要不要调整靠泊计划。预报中心要估计风暴中心将经过哪里，港口更关心泊位阵风会不会超过作业阈值。两者有关，却需要不同的观测来验证。理解这种差别，就能分辨一家天气公司究竟在卖探空数据、全球模型，还是适用于某个现场的决策服务。

## 老方法怎样从零散观测做出一张预报图

1. **先测到此刻的大气。** 地面站连续观测当地天气，探空气球提供不同高度的温度、湿度和风，卫星提供覆盖广但往往需要间接解释的观测。远海上空缺少固定站点，风暴周围的垂直结构尤其难以完整观测。[ECMWF 资料同化说明](https://www.ecmwf.int/en/about/media-centre/focus/2025/fact-sheet-earth-system-data-assimilation) · [气球观测研究](https://wgne.net/bluebook/uploads/2024/docs/06_Wu_Xingren_TropicalCycloneWindborneData.pdf)
2. **给全世界同一时刻补上一份起点。** 预报中心将上一轮短时预报与刚到的观测结合，依据两边的不确定性更新网格上的大气状态。得到的这一版估计叫「分析场」。例如，海上一处气压异常偏低，要先做质量检查，否则坏传感器也可能制造出一个虚假低压。[ECMWF 对分析场的定义](https://www.ecmwf.int/en/research/data-assimilation) · [漂流浮标造成虚假低压的实际案例](https://www.ecmwf.int/en/about/media-centre/aifs-blog/2026/observations-forecasts-bringing-ai-dop-real-time)
3. **从起点向前推演。** 数值天气预报用描述空气运动及热量、水分变化的方程逐步向前算。预报中心还会改变初始条件和模型中的部分过程，多跑一组合理的轨迹，得到集合预报。相邻两条可能路径分别从港口两侧经过时，集合平均路径可能正好穿过港口；使用者应留意整组轨迹的分散程度。[ECMWF 集合预报与不确定性](https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ensemble-ai-forecasts-become-operational)

## 学术试验和天气服务各自怎样验收

- **研究组先隔离一个变量。** 例如要知道远海气球值不值得投，先固定预报模型、起报时刻和其他观测，把相同的历史风暴重算两遍，只让其中一组吸收新增气球观测。事后用根据更完整资料重建的风暴最佳路径作参照，比较两组在相同提前量上的位置误差，并按海域报告。[联合回报试验](https://wgne.net/bluebook/uploads/2024/docs/06_Wu_Xingren_TropicalCycloneWindborneData.pdf) · [美国国家飓风中心对最佳路径的定义](https://www.nhc.noaa.gov/aboutgloss.shtml)
- **服务商要在决策截止前拿到数据。** 假设港口每天 18 时排次日班。一次重算允许使用后来才收到的观测，18 时的正式服务却只能使用当时已到的数据。试运行应同时保存发布时间、当时送达的预报版本和本地风速观测，才能回答「提前量够不够」以及「哪些阈值经常报错」。这也是历史回放和实时数据链测试要分别开展的原因。[ECMWF 实时起报试验](https://www.ecmwf.int/en/about/media-centre/aifs-blog/2026/observations-forecasts-bringing-ai-dop-real-time)

## 两条新路线分别替换哪一步

| 路线 | 交付给谁、替换哪一步 | 可以核实到哪一步 |
| --- | --- | --- |
| 公共研究机构训练全球预报模型 | 欧洲中期天气预报中心的 AIFS 从业务分析场起报，用学习到的演变规律预测未来天气。确定性版输出一条轨迹，集合版给出多种可能演变。下游可以拿其网格输出继续做地区或站点预报。 | v2 的中期有效波高用卫星高度计检验，均方根误差较同期物理系统约低 10%。这个指标针对波高，港口阵风需要另做站点检验。[AIFS 学术项目档案](/research/aifs/) · [ECMWF v2 检验报告](https://www.ecmwf.int/en/newsletter/187/news/implementation-aifs-v2) |
| 创业公司同时经营观测网与模型 | WindBorne 的长航时气球补测远海大气剖面。这些观测可供外部气象机构使用，公司也经营自己的 WeatherMesh 集合预报。购买一组新观测和购买整套预报，是两种可以分别验收的交付。 | 联合团队在同一 GFS 模型中增减气球数据。合并 2022、2023 两个气旋季，大西洋 132 小时路径预报改善约 12%，西北太平洋合并样本却退步。WeatherMesh 的公司回测同时改变了模型等条件，不能据此分离气球的贡献。[WindBorne 公司档案](/startups/windborne/) · [联合团队分海域结果](https://wgne.net/bluebook/uploads/2024/docs/06_Wu_Xingren_TropicalCycloneWindborneData.pdf) · [公司模型回测](https://windbornesystems.com/blog/introducing-wm-6) |

## 怎样读一句「预报更准」

- **先对齐任务和单位。** 路径误差可以用预报中心与事后重建中心之间的距离表示；风速误差用风速单位；超阈值概率则要看校准。例如在足够多次条件相似且给出约 30% 概率的预报中，事件应约有三成发生。仅列出一场命中的风暴，无法估计这一频率。[飓风中心的检验定义](https://www.nhc.noaa.gov/aboutgloss.shtml) · [ECMWF 集合检验说明](https://www.ecmwf.int/sites/default/files/elibrary/102025/81687-aifs-ens-becomes-operational.pdf)
- **再对齐地点和提前量。** 把同一天、同一风暴、相同提前量的样本成对比较，单独看不同海域和强风事件。还要看绝对误差。假设从 100 公里降至 88 公里，相对改善为 12%，但若两条路径都落在港口应急范围内，运营决定可能完全一样。
- **长期气候问题要换试验。** 问「这个港口未来几十年强风风险如何变化」，比较对象会变成历史时期和不同情景下的事件频率、强度分布及其不确定性。一套十五天业务预报在某个气旋季胜出，尚不能回答长期风险怎样变化。[IPCC 第六次评估报告第一工作组，第 11 章](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-11/)
