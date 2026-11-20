---
title: "Neural Concept"
type: "startup"
logo: "/logos/neural-concept.svg"
category: "物理与工程"
summary: "用三维几何模型筛选低阻力、低噪声设计，从材料实测曲线反推力学参数。工业案例涵盖整车风洞验证、汽车空调风机和安全气囊材料。"
countries: ["瑞士"]
directions: ["Propose","Characterize"]
maturity: "实际部署"
---

## 公司与团队

Neural Concept 总部位于瑞士洛桑，源自洛桑联邦理工学院（EPFL）计算机视觉实验室。2018 年 7 月，EPFL 已将团队称为衍生公司。A 轮公告记载 Pierre Baqué 与 François Fleuret、Pascal Fua 于 2018 年共同创办公司，现行公司简介则采用 2019 年。瑞士联邦企业登记将 Neural Concept SA（CHE-213.105.804）列为活跃法人。截至 2026 年 11 月 20 日，最近一次公开股权融资为 C 轮，公司仍为非上市企业。[EPFL 同期报道](https://actu.epfl.ch/news/artificial-intelligence-helps-design-an-ultra-aero/) · [A 轮公告](https://www.neuralconcept.com/press-release/neural-concept-raises-series-a) · [联邦企业登记](https://www.uid.admin.ch/Detail.aspx?lang=en&uid_id=CHE213105804) · [C 轮公告](https://www.neuralconcept.com/press-release/neural-concept-closes-100m-funding-round)

Baqué 担任 CEO。公司现行团队页还将技术负责人 Théophile Allard、首席科学家 Jonathan Donier、美国业务总经理 Thomas von Tschammer 列为联合创始人。运营负责人为 Philippe Cuendet，首席营收官为 Pietro Cervellera，行业解决方案高级副总裁为 Alex Read。[公司团队与办公室](https://www.neuralconcept.com/who-we-are)

## 产品

Neural Concept 向整车厂、零部件供应商等制造企业交付三维设计与仿真软件。计算机辅助工程（CAE）团队用已有的几何和仿真数据训练预测模型，设计师随后可以修改形状、查看压力等物理量，并把入围方案送回求解器或试验台复核。AI Design Copilot 从设计意图生成可进入 CAD 软件的候选几何，MCP Bridge 则能让代理在企业已有的设计、网格和求解软件中执行工程师批准的操作。平台支持云端、企业本地及隔离网络部署。[平台](https://www.neuralconcept.com/platform) · [Design Copilot](https://www.neuralconcept.com/press-release/neural-concept-ai-design-copilot) · [MCP Bridge](https://www.neuralconcept.com/press-release/neural-concept-launches-mcp-bridge) · [部署选项](https://www.neuralconcept.com/press-release/neural-concept-nvidia-accelerated-computing)

### 从几何预测物理量

改动车身曲面的一处凸起，整个表面的压力分布都可能变化。逐个方案做计算流体力学（CFD）模拟耗时，工程师通常只能详查少数形状。Baqué、Edoardo Remelli、Fleuret 与 Fua 在 ICML 2018 发表的方法，用流体仿真结果训练几何神经网络，直接从三维网格预测表面压力和阻力，再利用阻力对几何参数的梯度寻找更低阻力的形状。工业平台沿用这种思路，用客户已有的仿真结果训练模型，把高精度计算和实物验证留给入围设计。[ICML 原始论文](https://proceedings.mlr.press/v80/baque18a.html) · [公司对模型适用范围的说明](https://www.neuralconcept.com/post/physics-informed-ai)


### 实物测试与工程应用

| 项目 | AI 参与的决定 | 可验证的结果 |
| --- | --- | --- |
| 安纳西理工学院 Altaïr 人力自行车 | 设计师给定车身最大长宽和骑手、车轮、传动系统所需空间，由软件比较整流罩外形，包括车身最宽处应放在哪里。 | 2019 年世界人力车速度挑战赛中，Ilona Peltier 在 200 米计时段骑出 126.5 公里/小时，创当时女子纪录。Fabian Canal 以 136.7 公里/小时创男子大学组纪录。车手训练和后续形状微调也有贡献，比赛成绩无法分离 AI 单独带来的增益。[研发过程](https://actu.epfl.ch/news/artificial-intelligence-helps-design-an-ultra-aero/) · [EPFL 赛后记录](https://actu.epfl.ch/news/bike-designed-with-artificial-intelligence-break-5/) |
| 马勒（MAHLE）汽车空调离心风机 | 工程师从企鹅鳍肢获得叶片造型灵感，设定能耗、噪声及安装空间要求。团队评估超过 3,000 万个虚拟设计后制造样机。 | 马勒在 2025 年展出产品，报告相较同类风机效率约提高 15%、噪声低 4 分贝。虚拟方案数衡量搜索规模，公开资料未给出全部工况及原始测量数据。[马勒产品公告](https://www.mahle.com/en/investor-relations/financial-news/mahle-is-set-for-the-future-production-ready-innovations-for-sustainable-mobility-110144) · [Neural Concept 合作案例](https://www.neuralconcept.com/industry-stories/mahle-radial-blower-neural-concept) |

**捷豹路虎（JLR）用它筛选整车外形。** 其空气动力学团队在 NVIDIA GTC 2026 介绍了生产流程。模型用逾 2 万次既有仿真训练，工程师用 CFD 和风洞验证预测，再决定哪些设计值得投入下一轮。JLR 技术专家 Chris Johnston 报告，每日可评估的方案从约 50 个增至约 1,500 个。这个数字衡量设计吞吐量，公开案例没有给出逐车型的风阻系数预测误差或最终续航增幅。[客户演讲与案例](https://www.neuralconcept.com/industry-stories/jlr-nvidia-gtc-aerodynamic-engineering)

**三菱化学集团用它解释材料试验。** 从 2020 年开始，双方围绕汽车安全气囊所用热塑性弹性体开发模型。不同温度、应变速率下的实测曲线是输入，工程师需要找出能复现这些曲线的材料本构关系，交给车企进行碰撞仿真。模型先学习不同参数下的仿真响应，再反推适合试验数据的参数。三菱化学的 Jan Klein 表示，向客户给出经过核实的答复从数周缩至一天。案例中“数秒”指单次优化计算所用时间。[三菱化学负责人证言与工作流](https://www.neuralconcept.com/industry-stories/mitsubishi-chemical-material-characterization)

## 产业伙伴与合作范围

以下协议与案例涉及软件许可、联合研发、产品集成及分销。所引公告未披露合同金额。

| 伙伴 | 合作范围 |
| --- | --- |
| 法国安纳西大学技术学院（IUT Annecy）、马勒 | 安纳西团队负责工程约束、车辆制造和比赛，马勒负责风机需求与样机；两项合作均有实物结果，见上文。[EPFL](https://actu.epfl.ch/news/bike-designed-with-artificial-intelligence-break-5/) · [马勒](https://www.mahle.com/en/investor-relations/financial-news/mahle-is-set-for-the-future-production-ready-innovations-for-sustainable-mobility-110144) |
| 三菱化学、捷豹路虎 | 三菱化学与公司共同开发材料本构参数反演模型；捷豹路虎将空气动力学模型接入内部设计评审，并以 CFD 和风洞结果校核。[三菱化学项目](https://www.neuralconcept.com/industry-stories/mitsubishi-chemical-material-characterization) · [捷豹路虎项目](https://www.neuralconcept.com/industry-stories/jlr-nvidia-gtc-aerodynamic-engineering) |
| 空中客车 | 从机身外表面压力预测开始，2021 年续签多年合作与软件许可协议，覆盖流体、结构和电磁工程。公开的推理耗时仅对应外表面压力任务。[续约公告](https://www.neuralconcept.com/press-release/neural-concept-airbus-collaboration) |
| CYBERNET、德国航空航天中心（DLR） | CYBERNET 合作面向日本制造业的 CAE 客户推广平台。与 DLR 的项目则为城市车辆研究设计碰撞吸能盒，并以有限元仿真检验候选件。[CYBERNET 公告](https://www.neuralconcept.com/press-release/neural-concept-cybernet-japan-partnership) · [DLR 联合研究](https://www.neuralconcept.com/post/improving-crash-box-performance-by-10-with-deep-learning) |
| NVIDIA、西门子数字化工业软件 | NVIDIA 合作集中于 GPU 和 CUDA 上的模型训练及部署。与西门子的接口连接 NX 和 Simcenter STAR-CCM+，让工程师在平台内发起 CFD 计算。[NVIDIA 合作](https://www.neuralconcept.com/press-release/neural-concept-nvidia-accelerated-computing) · [西门子合作](https://www.neuralconcept.com/press-release/neural-concept-siemens-collaboration) |
| Leonardo | 从 2023 年直升机部门的单项工程应用扩至航空和数字解决方案部门，使用 Leonardo 自有软件与工程数据。[合作公告](https://www.neuralconcept.com/post/leonardo-neural-concept-engineering-ai-aerospace) |

## 融资记录

| 披露时间 | 投资与口径 |
| --- | --- |
| 2019–2020 | 2019 年 5 月，投资方 HTGF 宣布与 Constantia New Business 投入七位数资金。公司随后在 B 轮公告中回顾，2020 年种子轮金额为 200 万美元。两次披露的关系未说明，不能据此相加。[投资方公告](https://htgffin.com/en/computer-aided-engineering-in-the-age-of-ai-neural-concept-sa-raises-a-seven-digit-investment-from-constantia-new-business-and-htgf/) · [公司融资回顾](https://www.neuralconcept.com/press-release/neural-concept-raises-27m-series-b) |
| 2021-02-23 | CNB 和 HTGF 追加种子轮投资，金额未披露。公司同时设立顾问委员会，成员包括 Evrard Van Zuylen 与 Roberto Schettler。[CNB 同期公告](https://www.cnb.capital/with-additional-funding-raised-and-a-new-advisory-board-neural-concept-is-getting-ready-for-a-strong-year-2021) · [公司公告](https://www.neuralconcept.com/press-release/neural-concept-funding-advisory-board-2021) |
| 2022-03-22 | A 轮 910 万美元，Alven 领投，Aster、CNB 与 HTGF 参投。[投资方公告](https://www.htgf.de/en/htgf-neural-concept-series-a/) |
| 2024-06-03 | B 轮 2,700 万美元，Forestay Capital 领投，D. E. Shaw group、Alven、CNB Capital、HTGF 和 Aster Capital 参投。[公司公告](https://www.neuralconcept.com/press-release/neural-concept-raises-27m-series-b) |
| 2025-12-18 | C 轮 1 亿美元，Goldman Sachs Alternatives 旗下成长股权投资团队领投，Forestay Capital、Alven、HTGF、D. E. Shaw Ventures 和 Aster Capital 参投。公告确认该轮已完成，未披露估值。[公司公告](https://www.neuralconcept.com/press-release/neural-concept-closes-100m-funding-round) |

各轮所引公告均未披露估值。早期融资的统计口径存在差异，因此不据上述数字推算累计融资额。

## 公司动态

### 2018-07 · ICML 论文与自行车整流罩

团队在 ICML 公开从三维形状预测气动力并优化外形的方法。同月 EPFL 展示了安纳西团队采用软件设计的整流罩：研究方法已经进入实车设计，当时的报道写于比赛前。[ICML 论文](https://proceedings.mlr.press/v80/baque18a.html) · [EPFL 同期报道](https://actu.epfl.ch/news/artificial-intelligence-helps-design-an-ultra-aero/)

### 2019-09 · 安纳西团队创两项速度纪录

9 月 12 日至 13 日，Fabian Canal 和 Ilona Peltier 分获男子大学组与女子速度纪录。EPFL 的赛后记录把软件参与的外形设计与车手训练、后续微调一起列为成绩的背景。[EPFL 赛后记录](https://actu.epfl.ch/news/bike-designed-with-artificial-intelligence-break-5/)

### 2020-04 · 与三菱化学开始材料表征合作

双方开始建立连接材料试验与碰撞仿真的模型，使客户可以按试验条件索取适用的材料参数。案例确认了合作起始时间，并回顾后续达到的单日交付速度。[三菱化学案例](https://www.neuralconcept.com/industry-stories/mitsubishi-chemical-material-characterization)

### 2021-09-15 · 与空中客车续签多年软件许可

双方在 2019 年 NeurIPS 展示过机身外表面压力场的代理模型，报告单次预测平均耗时由约一小时降至 30 毫秒。续约将合作延伸至多个设计问题；该数字描述特定模型的推理速度，训练和设计验证另计。[续约公告](https://www.neuralconcept.com/press-release/neural-concept-airbus-collaboration)

### 2022-06-17 · 在日本与 CYBERNET 合作

Neural Concept 借助当地 CAE 软件与技术服务商接触制造企业研发、设计部门。公告说明合作渠道及服务对象，未披露由此带来的订单额。[合作原文](https://www.neuralconcept.com/press-release/neural-concept-cybernet-japan-partnership)

### 2023-06-08 · DLR 公布汽车碰撞吸能盒研究结果

研究团队以吸收能量和最大侵入量为优化目标。相较基准设计，入围方案的比吸能和侵入量指标均改善约 10%，并经后续有限元仿真复核。研究未报告整车实撞结果。[联合研究与论文信息](https://www.neuralconcept.com/post/improving-crash-box-performance-by-10-with-deep-learning)

### 2024-06-27 · 接通西门子设计与流体仿真软件

公司宣布 Simcenter STAR-CCM+ 集成已可使用，客户可从平台调用云端高性能计算资源运行 CFD。工程团队因而可以在同一套软件中调用高精度求解器，生成额外的训练或核验数据。[集成公告](https://www.neuralconcept.com/press-release/neural-concept-siemens-collaboration)

### 2025-04 · 马勒在上海车展推出仿生风机

马勒将企鹅鳍肢的形状用于车用空调风机叶片，经过逾 3,000 万种虚拟设计筛选后制造样机，并在上海车展首次展出。马勒报告的效率与降噪数字属于风机部件级比较。[马勒首展公告](https://www.mahle.com/global/media/global_news/2025/04-bionics-optimizes-air-conditioning/20250421_mahle_pr_bionics-optimizes-air-conditioning-systems.pdf) · [合作案例](https://www.neuralconcept.com/industry-stories/mahle-radial-blower-neural-concept)

### 2025-09-10 · 公开 DrivAerNet++ 基准测试

团队使用含 8,000 个汽车外形、39 TB 流体仿真数据的公开数据集，按官方训练与测试划分评估压力场、速度场与阻力预测，并报告一周内从数据处理走到可用工作流程。参照值是数据集中的 CFD 结果，实车风洞验证属另一项试验。[测试协议、误差指标与结果](https://www.neuralconcept.com/post/from-dataset-to-design-impact-how-neural-concept-set-a-new-benchmark-on-mits-drivaernet)

### 2026-01-07 · 在 CES 发布 AI Design Copilot

公司展示从工程师设计意图生成可进入 CAD 的三维候选几何，再用多物理场模型比较其性能。发布时公司说明将在当季扩大访问范围，未给出所有用户同步上线的日期。[产品公告](https://www.neuralconcept.com/press-release/neural-concept-ai-design-copilot)

### 2026-03 · 捷豹路虎展示整车气动工作流程

捷豹路虎在 NVIDIA GTC 介绍风洞和 CFD 怎样与模型预测配合，以及设计评估量如何从每日约 50 个增至约 1,500 个。案例衡量了候选设计的评估量，最终选型仍由工程团队完成。[客户演讲及案例](https://www.neuralconcept.com/industry-stories/jlr-nvidia-gtc-aerodynamic-engineering) · [会议报道](https://www.neuralconcept.com/post/ai-native-aerodynamic-engineering-in-practice-at-nvidia-gtc)

### 2026-06 至 09 · 在首尔及印度设立本地团队

6 月 2 日公司宣布首个亚太办公室在首尔开设。9 月 10 日又宣布在班加罗尔和浦那成立直接服务当地客户的商业团队。公告确认当地团队已设立，未披露当地收入。[首尔公告](https://www.neuralconcept.com/press-release/neural-concept-opens-seoul-office) · [印度公告](https://www.neuralconcept.com/press-release/neural-concept-expands-in-india)

### 2026-10-19 · Neural Concept Launches MCP Bridge

MCP Bridge 把设计代理接入 CAD、网格和仿真软件，让它在工程师设定目标后执行几何清理、准备网格等工作。公司举例称，一个轮辋几何清理任务约三分钟完成，传统人工流程约需一天。这个案例量化的是仿真前处理，无法据此推算完整车型开发周期。[产品发布与客户说明](https://www.neuralconcept.com/press-release/neural-concept-launches-mcp-bridge)

### 2026-10-21 · Leonardo 将合作扩至三个部门

Leonardo 从直升机部门的单个应用开始，逐步将自有数据和工具接入平台，合作范围扩至航空和数字解决方案部门。披露的是部门层面的采用范围，未公布全公司工程软件的覆盖比例。[合作公告](https://www.neuralconcept.com/post/leonardo-neural-concept-engineering-ai-aerospace)

### 2026-10-26 · Why human-like AI fails without quantitative grounding

文章从开模前的决定切入。工程师需要知道预测误差是否小于设计容差。自然语言模型可以转述目标或解释输出，压力、应力等数值仍要与可信仿真或测量比较。若模型没有给出经过验证的误差范围，团队可能要重做传统分析才能批准方案，快速生成答案所省的时间便会消失。[技术原文](https://www.neuralconcept.com/post/why-human-like-ai-fails-without-quantitative-grounding)

### 2026-11-11 · Neural Concept Connect US brought peers together for Engineering AI’s hard questions

客户与工程负责人讨论了将 AI 纳入正式设计评审的条件。系统需要记录调用过的软件、依据的企业数据和作出决定的步骤，让签字人知道哪里还需要工程判断。文章记录了会议各方对部署的经验和分歧，尤其是当一个代理要跨越多个团队时，谁有权访问数据、谁负责验收。[会议原文](https://www.neuralconcept.com/post/neural-concept-connect-us-recap)

### 2026-11-19 · Physics-informed AI: What it is and why it matters for engineering

作者 Anthony Massobrio 解释了产品里“物理”从哪里来。训练样本来自求解器算出的压力场或应力场，网络结构适合表示三维形状。若新零件的形状超出训练范围，工程师根据不确定性决定是否回到 CFD 或有限元求解器，并将新的解加入后续训练。每次设计评审要问的是某个几何变化是否已有足够的数据覆盖。[技术原文](https://www.neuralconcept.com/post/physics-informed-ai)

## 相关链接

- [公司官网](https://www.neuralconcept.com/) · [技术文章与研究目录](https://www.neuralconcept.com/resources) · [品牌图标原图](https://www.neuralconcept.com/assets/brand/nc-favicon.svg)
- [ICML 2018 论文与全文入口](https://proceedings.mlr.press/v80/baque18a.html) · [EPFL 对实车验证的记录](https://actu.epfl.ch/news/bike-designed-with-artificial-intelligence-break-5/)
- [公司新闻档案](https://www.neuralconcept.com/newsroom/company-news) · [历年公告](https://www.neuralconcept.com/newsroom/press-releases) · [产业案例](https://www.neuralconcept.com/industry-stories)
