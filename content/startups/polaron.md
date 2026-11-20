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

## 产品

Polaron 为电池和材料制造商的研发、工艺与质量工程师提供显微图像分析软件。工程师输入样品截面和已知工艺条件，可以得到分相图、孔隙与颗粒的定量指标、用于仿真的三维结构，以及值得在生产线上试验的工艺参数。供应商评估可以只用图像分析，电极设计则需要把模型结果带回实验室验证。[平台功能](https://www.polaron.ai/platform) · [车企应用案例](https://www.polaron.ai/newsroom/quantifying-cracks)

### 从电极截面估计三维结构

即便化学组成相同，两块电极也可能在快速放电时表现不同。辊压会改变颗粒之间的孔道，电解液中的离子要沿这些孔道穿过电极。Polaron 的软件先在显微图像中分割颗粒、孔隙和黏结剂等组分，再根据二维截面生成统计上有代表性的三维结构，估计孔道曲折程度以及由此产生的传输阻力。一张截面可以对应多种内部排列，生成结果适合估算结构的统计性质，无法定位原样品中每一条孔道。[平台说明](https://www.polaron.ai/platform) · [重建方法与适用范围](https://www.polaron.ai/newsroom/launching-academic-partnerships)

### 虚拟 4680 电芯的能量与功率取舍

团队在《Matter》发表的研究将三维结构生成、传输参数计算和电化学模拟串联起来，用贝叶斯优化选择下一组制造参数。论文表 1 的两款虚拟 4680 电芯说明了为什么设计目标必须写清楚。在 10 W 放电时，面向能量优化的设计为 730 Wh/L，面向功率优化的设计为 624 Wh/L；功率提高到 200 W 时，两者分别降至 48 和 121 Wh/L。这些是指定工况下的模拟结果。最优电极随应用变化，单看活性材料所占比例会漏掉功率代价。[论文及表 1](https://doi.org/10.1016/j.matt.2024.08.014) · [公开全文](https://wrap.warwick.ac.uk/id/eprint/196284/1/PIIS2590238524004466.pdf)

### 华威大学的实物检验

在英国法拉第研究所资助的项目中，华威大学 WMG 的 Rebecca Sellers 和 Daniela Proprentner在中试线上制备了 27 个磷酸锰铁锂正极样品，改变混料时的固体与溶剂比例、混合时间和电极压实密度。Polaron 根据截面图像重建微结构，推荐三项参数的组合。WMG 用扣式电池的电化学测试验证了推荐结果。该项目公开了样品数、测试形式和验证方，未披露性能提升的百分比，实际验证范围是这批电极和扣式电池。[法拉第研究所项目报告](https://www.faraday.ac.uk/success-stories/ai-unlocks-the-manufacturing-secrets-of-lmfp/)

## 产业伙伴与合作范围

| 合作方 | 合作范围与已公开结果 |
| --- | --- |
| 华威大学 WMG、法拉第研究所 | 研究所资助 Industry Sprint 项目。WMG 制备电极、拍摄扫描电镜图像并开展扣式电池测试，Polaron 据此推荐 LMFP 正极的工艺组合。双方未披露合同金额。[资助方案例](https://www.faraday.ac.uk/success-stories/ai-unlocks-the-manufacturing-secrets-of-lmfp/) |
| AVL | AVL 提供拆解、成像和 CRUISE M 电芯仿真，Polaron 负责分割、三维重建和虚拟电极设计。双方发布技术白皮书及讲座，合作金额未披露。[AVL 联合技术讲座与白皮书](https://www.avl.com/en/webinars/battery-cell-design-insights-through-ai-and-simulation) |
| Watercycle Technologies、Recyclus、英国电池产业化中心（UKBIC） | Watercycle 牵头申请 ReCAM 资助，Recyclus 拟在伍尔弗汉普顿的工厂支持部署中试设备。Polaron 负责把再生正极材料的工艺条件与微结构和性能联系起来。联合体公布的每小时 250 公斤是设备的设计处理能力。[项目分工](https://www.polaron.ai/newsroom/recam-project-announcement) · [上市公司项目公告](https://data.fca.org.uk/artefacts/NSM/RNS/0d2543a2-b9a6-4afe-b12a-d54560bed01c.html) |
| 未具名电动车制造商 | 2026 年 2 月，Squires 表示部分客户已从试点转入企业部署。公司称，使用过其工具的工程师所在车企合计占全球电动车产量逾三分之一。这一比例描述车企规模，公告未列出客户名称、授权范围或采购额。[帝国理工学院访谈](https://www.imperial.ac.uk/news/articles/admin-services/enterprise/2026/materials-ai-spinout-polaron-raises-8-million-in-seed-funding/) · [公司公告](https://www.polaron.ai/newsroom/polaron-raises-8m-to-build-the-intelligence-layer-for-materials-science) |

## 融资记录

| 时间 | 资金性质与披露 |
| --- | --- |
| 2024 年 | Avonmore Developments 转发了 Simon Blakey 的说明。他以天使投资人身份参与种子前轮，并在 2026 年种子轮追加投资。种子前轮金额和估值未披露。英国公司注册处另有当年股份发行记录。[投资者说明](https://www.linkedin.com/posts/avonmore-developments-ltd_materials-ai-spinout-polaron-raises-8-million-activity-7424434541345460224-uX4E) · [公司申报记录](https://find-and-update.company-information.service.gov.uk/company/14882059/filing-history) |
| 2024 年 5 月、2025 年 3 月 | 入围首届 Manchester Prize 获 10 万英镑资助，次年 3 月 19 日获 100 万英镑大奖。英国政府年度报告确认奖金已发放，两笔均为公共资助。[入围公告](https://www.imperial.ac.uk/news/253733/ai-spinout-polaron-shortlisted-million-manchester/) · [政府颁奖公告](https://www.gov.uk/government/news/british-start-up-wins-1-million-ai-prize-for-breakthrough-slashing-materials-development-from-years-to-days) · [政府年度报告](https://assets.publishing.service.gov.uk/media/686e6c6afe1a249e937cbeb4/DSIT_ARA_2024-25_print_ready.pdf) |
| 2026-02-03 | 公布完成 **800 万美元种子轮**。由 Serena 与 makesense 共同管理的 Racine² 基金领投，Speedinvest、Futurepresent 和个人天使投资者参投。本轮估值未披露。公司计划用这笔资金扩充工程团队，加快生成式设计工具的部署。[公司融资公告](https://www.polaron.ai/newsroom/polaron-raises-8m-to-build-the-intelligence-layer-for-materials-science) · [帝国理工学院确认轮次](https://www.imperial.ac.uk/news/articles/admin-services/enterprise/2026/materials-ai-spinout-polaron-raises-8-million-in-seed-funding/) |
| 2026-05-05 | ReCAM 联合体公布获得英国 Battery Innovation Programme 支持。Recyclus 披露联合体合计获逾 300 万英镑，其中 Recyclus 约获 40 万英镑；Polaron 的份额未披露。4.52 亿英镑是整个政府计划的预算。[Recyclus 资助说明](https://recyclusgroup.com/advancing-uk-battery-circularity-recyclus-joins-innovate-uk-funded-recam-consortium/) · [联合项目公告](https://www.polaron.ai/newsroom/recam-project-announcement) |

## 公司动态

### 2026-11-02 · 充电时，硅基负极的膨胀去了哪里？

团队将 15 只电芯分成五组，比较不同荷电状态下石墨与亚氧化硅复合负极的截面。荷电状态由 0% 升至 50% 时，图像测得的平均孔隙占比从约 37% 降至 19%，此后一直在 17% 至 19% 之间。相反，涂层厚度到满电才明显增大，平均达 63.1 微米。两组读数提示，膨胀可能先占用内部孔隙，再体现为整体增厚。各组使用不同电极，无法追踪同一颗粒的变化。25% 荷电状态组有一件样品出现明显分层，研究者在相分数比较时将其排除。三维孔道的传输性质也要通过重建估计。[案例原文与样本说明](https://www.polaron.ai/newsroom/the-impact-of-state-of-charge-on-transport-in-silicon-anodes)

### 2026-08-12 · 与 AVL 把拆解数据接入电芯模型

AVL 负责拆解电芯、取得电极的扫描电镜图像。Polaron 从中估算孔隙率、颗粒尺寸和比表面积，重建三维结构，并改变孔隙率和活性材料载量来生成候选电极。AVL 再将这些结构的参数导入 CRUISE M，研究同样体积内多装活性材料时，增加的能量与下降的离子传输能力如何相互制约。合作把实物样品和虚拟设计接在同一条分析流程中，末端报告的是电芯级模拟。[Polaron 技术公告](https://www.polaron.ai/newsroom/battery-cell-design-insights) · [AVL 联合技术讲座](https://www.avl.com/en/webinars/battery-cell-design-insights-through-ai-and-simulation)

### 2026-08-12 · 换一批显微图像，分割结果还能信多少？

团队从硅负极截面的专家标注中留出一部分作测试，在该数据集上，训练使用的标注增加到约 25% 至 30% 时，准确率的收益开始趋缓。公司还介绍了名为 coherence 的指标，用来标记与训练图像差异较大的区域。例如一张截面上出现大裂缝和外露表面时，即使常规图像上的分割分数很好，也应优先请专家复核。该指标决定复核顺序，具体边界是否正确仍需参考专家标注。[博客原文与评测设计](https://www.polaron.ai/newsroom/trust-in-microstructure-quantification)

### 2026-07-14 · 固态电极里的颗粒有多少接触面？

固态电解质与活性颗粒接触，才有机会传输离子。团队用扫描电镜截面区分活性材料、固态电解质、导电网络与孔隙，再在重建体上估算各相的接触面积和连通体积分数。某颗粒即使在图中接触电解质，也可能仍与贯通的离子通道隔绝。案例给出的是界面几何与传输路径的估计，实际接触阻抗仍需电化学测量。[固态电极案例](https://www.polaron.ai/newsroom/quantifying-and-optimising-solid-state-battery-electrodes)

### 2026-05-13 · 车企将电极裂纹分析用于供应商评估

在一家未具名整车厂的项目中，软件将颗粒内裂纹与颗粒间孔隙分开，计算裂纹面积占比，并与专家标注对照。公司报告单样品分析时间从 8 小时降至不足 5 分钟；这个时间只涵盖裂纹分析，整套供应商认证仍有其他环节。[裂纹分割案例与对照图](https://www.polaron.ai/newsroom/quantifying-cracks)

### 2026-05-05 · ReCAM 将回收材料纳入电极验证

英国电池创新计划资助四方联合体开发从废旧电池黑粉到正极活性材料的回收工艺。Polaron 的任务是判断哪些回收工艺能得到适合制成电极的微结构。公告确认项目获资助，中试装置的部署和电池级材料验证属于后续目标。[联合项目公告](https://www.polaron.ai/newsroom/recam-project-announcement) · [Recyclus 项目说明](https://recyclusgroup.com/advancing-uk-battery-circularity-recyclus-joins-innovate-uk-funded-recam-consortium/)

### 2026-02-24 · 向高校实验室开放研究合作申请

Polaron 启动 Academic Partnerships，向首批合作团队提供平台提前使用许可、云计算资源及技术合作，研究者可共享分割模型、重建结果和候选设计。Cooper 也解释了工具的局限：制造者能控制的是压力、温度等工艺条件，只能间接改变每一批材料中颗粒的排列。公告发布时首批合作方仍在遴选。[Cooper 的计划说明](https://www.polaron.ai/newsroom/launching-academic-partnerships)

### 2026-02-03 · 从试点进入企业部署

公布种子轮的同时，公司披露一个新电极设计项目的能量密度提高逾 10%，CEO 在接受母校采访时确认客户已开始企业部署。公开资料未列出该项目的客户、基准及工况，也未将这项改善归属于华威大学 LMFP 试验。[公司公告](https://www.polaron.ai/newsroom/polaron-raises-8m-to-build-the-intelligence-layer-for-materials-science) · [帝国理工学院访谈](https://www.imperial.ac.uk/news/articles/admin-services/enterprise/2026/materials-ai-spinout-polaron-raises-8-million-in-seed-funding/)

### 2025-11-26 · 完成英国汽车技术加速计划

Polaron 与另外九家企业完成英国先进推进中心（APC）的第八期 Technology Developer Accelerator Programme，并在结项展示上获评委选为「最有潜力初创企业」。主办方确认的是加速计划结项与评审结果。[APC 结项公告](https://www.apcuk.co.uk/news-events/news/10-automotive-start-ups-graduate-accelerator-programme/)

### 2025-09 · 法拉第研究所公布华威大学的扣式电池验证结果

法拉第研究所公布 WMG 与 Polaron 的 LMFP 联合案例。联合优化混料和压实参数后，WMG 用扣式电池实测核验推荐组合，给出了从图像分析到电极制造决策的实物证据。报告未公开放大生产后的良率或寿命数据。[法拉第研究所项目报告](https://www.faraday.ac.uk/success-stories/ai-unlocks-the-manufacturing-secrets-of-lmfp/)

### 2025-03-19 · 获首届 Manchester Prize

Polaron 于 2024 年 5 月入选十支决赛团队，次年因显微图像驱动的材料设计方法获首奖。英国政府将这一应用纳入首届面向能源、环境及基础设施的公共利益 AI 竞赛。[入围公告](https://www.imperial.ac.uk/news/253733/ai-spinout-polaron-shortlisted-million-manchester/) · [政府颁奖公告](https://www.gov.uk/government/news/british-start-up-wins-1-million-ai-prize-for-breakthrough-slashing-materials-development-from-years-to-days)

### 2024-09-23 · 提出按具体工况设计电极的方法

三位创始人与合作者在《Matter》在线发表计算研究，用少量已知工艺的电极截面训练生成模型，再为不同功率下工作的 4680 电芯筛选制造参数。论文将结果换算成整芯能量密度，让高、低功率下的设计取舍可以直接比较。[论文及上线日期](https://wrap.warwick.ac.uk/id/eprint/196284/)

### 2024-01-16 · 帝国理工学院介绍早期产品与研究起源

学校介绍团队如何将 Dyson 设计工程学院的生成模型开发为制造商可用的软件，并将技术追溯到 Kench 在法拉第研究所多尺度建模项目中的博士研究。当时公开的是用工艺、微结构和性能之间的联系指导设计的路径。[帝国理工学院报道](https://www.imperial.ac.uk/news/250657/ai-spinout-polaron-accelerate-design-advanced/)

### 2023-05-19 · 注册公司，同年 11 月从帝国理工学院衍生

英国公司注册处记载了 Polaron Ltd 的法定成立日期。Henry Royce Institute 将团队从帝国理工学院衍生的时间记为同年 11 月，后者对应研究成果转向商业开发的节点。[公司注册](https://find-and-update.company-information.service.gov.uk/company/14882059) · [Henry Royce Institute 的团队背景](https://www.royce.ac.uk/news/polaron-manchester-prize-winners-mar25/)

## 相关链接

- [公司官网](https://www.polaron.ai/) · [平台功能](https://www.polaron.ai/platform) · [技术文章与案例目录](https://www.polaron.ai/newsroom)
- [WMG 电极实测案例](https://www.faraday.ac.uk/success-stories/ai-unlocks-the-manufacturing-secrets-of-lmfp/) · [电芯计算设计论文](https://doi.org/10.1016/j.matt.2024.08.014)
- [品牌标识原图（公司官网）](https://cdn.prod.website-files.com/66d080e234a782faccfa92f3/66d5c176630337f68bca45bb_Favicon-256w.png)
