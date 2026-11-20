---
title: "Polaron"
type: "startup"
logo: "/logos/polaron.png"
category: "材料研发"
summary: "从显微图像估计电极内部的三维孔道和颗粒分布，推荐可调的制造参数。华威大学已用中试线制备的电极和扣式电池检验其建议。"
countries: ["英国"]
directions: ["Propose","Characterize"]
maturity: "实际部署"
---

## 公司与团队

Polaron 是位于伦敦的帝国理工学院衍生公司。英国公司注册处记录显示，Polaron Ltd 于 2023 年 5 月 19 日注册，截至 2026 年 11 月 20 日仍为存续的私人有限公司。登记的两位具有重大控制权的人士是联合创始人 Isaac Squires 和 Steve Kench。Squires 任 CEO，Kench 任 CTO，第三位创始人 Sam Cooper 任首席科学家，并在帝国理工学院研究材料设计中的人工智能。[公司注册](https://find-and-update.company-information.service.gov.uk/company/14882059) · [控制权登记](https://find-and-update.company-information.service.gov.uk/company/14882059/persons-with-significant-control) · [团队介绍](https://www.polaron.ai/about-us) · [Cooper 介绍研究起源](https://www.polaron.ai/newsroom/launching-academic-partnerships)

## 从电极截面到制造决策

即便化学组成相同，两块电极也可能在快速放电时表现不同。辊压会改变颗粒之间的孔道，电解液中的离子要沿这些孔道穿过电极。Polaron 的软件先在显微图像中分割颗粒、孔隙和黏结剂等组分，再根据二维截面生成统计上有代表性的三维结构，估计孔道曲折程度以及由此产生的传输阻力。一张截面可以对应多种内部排列，生成结果适合估算结构的统计性质，无法定位原样品中每一条孔道。[平台说明](https://www.polaron.ai/platform) · [重建方法与适用范围](https://www.polaron.ai/newsroom/launching-academic-partnerships)

**哪些工艺值得实测？** 团队在《Matter》发表的研究将三维结构生成、传输参数计算和电化学模拟串联起来，用贝叶斯优化选择下一组制造参数。论文表 1 的两款虚拟 4680 电芯说明了为什么设计目标必须写清楚。在 10 W 放电时，面向能量优化的设计为 730 Wh/L，面向功率优化的设计为 624 Wh/L；功率提高到 200 W 时，两者分别降至 48 和 121 Wh/L。这些是指定工况下的模拟结果。最优电极随应用变化，单看活性材料所占比例会漏掉功率代价。[论文及表 1](https://doi.org/10.1016/j.matt.2024.08.014) · [公开全文](https://wrap.warwick.ac.uk/id/eprint/196284/1/PIIS2590238524004466.pdf)

**哪些建议经过实物检验？** 在英国法拉第研究所资助的项目中，华威大学 WMG 团队在中试线上制备了 27 个磷酸锰铁锂正极样品，改变混料时的固体与溶剂比例、混合时间和电极压实密度。Polaron 根据截面图像重建微结构，推荐三项参数的组合。WMG 用扣式电池的电化学测试验证了推荐结果。该项目公开了样品数、测试形式和验证方，未披露性能提升的百分比，实际验证范围是这批电极和扣式电池。[法拉第研究所项目报告](https://www.faraday.ac.uk/success-stories/ai-unlocks-the-manufacturing-secrets-of-lmfp/)

## 客户与合作

2026 年 2 月，Squires 在帝国理工学院访谈中表示，已有客户从试点转入企业部署。公司披露，其工具已由多家电动车制造商的工程师使用，未在融资公告中列出这些车企的名称或采购额。具名合作包括下方的 AVL 电芯建模项目，以及 ReCAM 电池回收项目。后者由 Watercycle Technologies、Recyclus、英国电池产业化中心和 Polaron 参与，Polaron 负责将再生正极材料的工艺条件与微结构和性能联系起来。[帝国理工学院访谈](https://www.imperial.ac.uk/news/articles/admin-services/enterprise/2026/materials-ai-spinout-polaron-raises-8-million-in-seed-funding/) · [公司融资公告](https://www.polaron.ai/newsroom/polaron-raises-8m-to-build-the-intelligence-layer-for-materials-science) · [ReCAM 分工](https://www.polaron.ai/newsroom/recam-project-announcement)

## 最近三篇技术动态

### 2026-11-02 · 充电时，硅基负极的膨胀去了哪里？

团队将 15 只电芯分成五组，比较不同荷电状态下石墨与亚氧化硅复合负极的截面。电荷由 0% 增至 50% 时，图像测得的平均孔隙占比从约 37% 降至 19%，此后一直在 17% 至 19% 之间。相反，涂层厚度到满电才明显增大，平均达 63.1 微米。两组读数提示，膨胀可能先占用内部孔隙，再体现为整体增厚。各组使用不同电极，无法追踪同一颗粒的变化；三维孔道的传输性质也要通过重建估计。[案例原文与样本说明](https://www.polaron.ai/newsroom/the-impact-of-state-of-charge-on-transport-in-silicon-anodes)

### 2026-08-12 · 与 AVL 把拆解数据接入电芯模型

AVL 负责拆解电芯、取得电极的扫描电镜图像。Polaron 从中估算孔隙率、颗粒尺寸和比表面积，重建三维结构，并改变孔隙率和活性材料载量来生成候选电极。AVL 再将这些结构的参数导入 CRUISE M，研究同样体积内多装活性材料时，增加的能量与下降的离子传输能力如何相互制约。合作把实物样品和虚拟设计接在同一条分析流程中，末端报告的是电芯级模拟。[Polaron 技术公告](https://www.polaron.ai/newsroom/battery-cell-design-insights) · [AVL 联合技术讲座](https://www.avl.com/en/webinars/battery-cell-design-insights-through-ai-and-simulation)

### 2026-08-12 · 换一批显微图像，分割结果还能信多少？

团队从硅负极截面的专家标注中留出一部分作测试，在该数据集上，训练使用的标注增加到约 25% 至 30% 时，准确率的收益开始趋缓。公司还介绍了名为 coherence 的指标，用来标记与训练图像差异较大的区域。例如一张截面上出现大裂缝和外露表面时，即使常规图像上的分割分数很好，也应优先请专家复核。该指标决定复核顺序，具体边界是否正确仍需参考专家标注。[博客原文与评测设计](https://www.polaron.ai/newsroom/trust-in-microstructure-quantification)

## 融资与公共资助

| 时间 | 资金性质与披露 |
| --- | --- |
| 2024 年 | Avonmore Developments 发布的投资者说明提到参与种子前轮，未给出该轮金额。英国公司注册处另有当年股份发行记录。[投资者说明](https://www.linkedin.com/posts/avonmore-developments-ltd_materials-ai-spinout-polaron-raises-8-million-activity-7424434541345460224-uX4E) · [公司申报记录](https://find-and-update.company-information.service.gov.uk/company/14882059/filing-history) |
| 2024 年 5 月、2025 年 3 月 | 入围首届 Manchester Prize 获 10 万英镑资助，次年 3 月 19 日获 100 万英镑大奖。英国政府年度报告确认奖金已发放，两笔均为公共资助。[入围公告](https://www.imperial.ac.uk/news/253733/ai-spinout-polaron-shortlisted-million-manchester/) · [政府颁奖公告](https://www.gov.uk/government/news/british-start-up-wins-1-million-ai-prize-for-breakthrough-slashing-materials-development-from-years-to-days) · [政府年度报告](https://assets.publishing.service.gov.uk/media/686e6c6afe1a249e937cbeb4/DSIT_ARA_2024-25_print_ready.pdf) |
| 2026-02-03 | 公布完成 **800 万美元种子轮**。由 Serena 与 makesense 共同管理的 Racine² 基金领投，Speedinvest、Futurepresent 和个人天使投资者参投。资金用于扩充工程团队和推出生成式设计工具。[公司融资公告](https://www.polaron.ai/newsroom/polaron-raises-8m-to-build-the-intelligence-layer-for-materials-science) · [帝国理工学院确认轮次](https://www.imperial.ac.uk/news/articles/admin-services/enterprise/2026/materials-ai-spinout-polaron-raises-8-million-in-seed-funding/) |
| 2026-05-05 | ReCAM 联合体公布获得英国 Battery Innovation Programme 支持。公告提到的 4.52 亿英镑是整个政府计划的预算，Polaron 在该项目中分得的金额未披露。[联合项目公告](https://www.polaron.ai/newsroom/recam-project-announcement) |

## 相关链接

- [公司官网](https://www.polaron.ai/) · [平台功能](https://www.polaron.ai/platform) · [技术文章与案例目录](https://www.polaron.ai/newsroom)
- [WMG 电极实测案例](https://www.faraday.ac.uk/success-stories/ai-unlocks-the-manufacturing-secrets-of-lmfp/) · [电芯计算设计论文](https://doi.org/10.1016/j.matt.2024.08.014)
- [品牌标识原图（公司官网）](https://cdn.prod.website-files.com/66d080e234a782faccfa92f3/66d5c176630337f68bca45bb_Favicon-256w.png)
