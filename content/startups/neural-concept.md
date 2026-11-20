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

## 从自行车整流罩到工业研发软件

Neural Concept 总部位于瑞士洛桑，源自洛桑联邦理工学院（EPFL）计算机视觉实验室。Pierre Baqué 与 François Fleuret、Pascal Fua 共同创办公司，Baqué 担任 CEO。团队在 2018 年已与法国安纳西的工程团队设计竞速自行车，近年的公司公告将创立年份列作 2019 年。瑞士联邦企业登记显示 Neural Concept SA 为活跃法人。截至 2026 年 11 月 20 日，最近一轮公开融资是私募 C 轮，未见上市或被收购的公开公告。[创始团队说明](https://www.neuralconcept.com/press-release/neural-concept-raises-series-a) · [EPFL 同期报道](https://actu.epfl.ch/news/artificial-intelligence-helps-design-an-ultra-aero/) · [联邦企业登记](https://www.uid.admin.ch/Detail.aspx?lang=en&uid_id=CHE213105804) · [公司融资公告](https://www.neuralconcept.com/press-release/neural-concept-closes-100m-funding-round)

改动车身曲面的一处凸起，整个表面的压力分布都可能变化。逐个方案做计算流体力学（CFD）模拟耗时，工程师通常只能详查少数形状。Baqué、Edoardo Remelli、Fleuret 与 Fua 在 ICML 2018 发表的方法，用流体仿真结果训练几何神经网络，直接从三维网格预测表面压力和阻力，再利用阻力对几何参数的梯度寻找更低阻力的形状。工业平台沿用这种思路，用客户已有的仿真结果训练模型，把高精度计算和实物验证留给入围设计。[ICML 原始论文](https://proceedings.mlr.press/v80/baque18a.html) · [公司对模型适用范围的说明](https://www.neuralconcept.com/post/physics-informed-ai)

## 哪些设计经过了实物检验

| 项目 | AI 参与的决定 | 可验证的结果 |
| --- | --- | --- |
| 安纳西理工学院 Altaïr 人力自行车 | 设计师给定车身最大长宽和骑手、车轮、传动系统所需空间，由软件比较整流罩外形，包括车身最宽处应放在哪里。 | 2019 年世界人力车速度挑战赛中，Ilona Peltier 在 200 米计时段骑出 126.5 公里/小时，创当时女子纪录。Fabian Canal 以 136.7 公里/小时创男子大学组纪录。车手训练和后续形状微调也有贡献，比赛成绩无法分离 AI 单独带来的增益。[研发过程](https://actu.epfl.ch/news/artificial-intelligence-helps-design-an-ultra-aero/) · [EPFL 赛后记录](https://actu.epfl.ch/news/bike-designed-with-artificial-intelligence-break-5/) |
| 马勒（MAHLE）汽车空调离心风机 | 工程师从企鹅鳍肢获得叶片造型灵感，设定能耗、噪声及安装空间要求。团队评估超过 3,000 万个虚拟设计后制造样机。 | 马勒在 2025 年展出产品，报告相较同类风机效率约提高 15%、噪声低 4 分贝。虚拟方案数衡量搜索规模，公开资料未给出全部工况及原始测量数据。[马勒产品公告](https://www.mahle.com/en/investor-relations/financial-news/mahle-is-set-for-the-future-production-ready-innovations-for-sustainable-mobility-110144) · [Neural Concept 合作案例](https://www.neuralconcept.com/industry-stories/mahle-radial-blower-neural-concept) |

## 工业客户如何使用模型

**捷豹路虎（JLR）用它筛选整车外形。** 其空气动力学团队在 NVIDIA GTC 2026 介绍了生产流程。模型用逾 2 万次既有仿真训练，工程师用 CFD 和风洞验证预测，再决定哪些设计值得投入下一轮。JLR 技术专家 Chris Johnston 报告，每日可评估的方案从约 50 个增至约 1,500 个。这个数字衡量设计吞吐量，公开案例没有给出逐车型的风阻系数预测误差或最终续航增幅。[客户演讲与案例](https://www.neuralconcept.com/industry-stories/jlr-nvidia-gtc-aerodynamic-engineering)

**三菱化学集团用它解释材料试验。** 从 2020 年开始，双方围绕汽车安全气囊所用热塑性弹性体开发模型。不同温度、应变速率下的实测曲线是输入，工程师需要找出能复现这些曲线的材料本构关系，交给车企进行碰撞仿真。模型先学习不同参数下的仿真响应，再反推适合试验数据的参数。三菱化学的 Jan Klein 表示，向客户给出经过核实的答复从数周缩至一天。案例中“数秒”指单次优化计算所用时间。[三菱化学负责人证言与工作流](https://www.neuralconcept.com/industry-stories/mitsubishi-chemical-material-characterization)

## 近期公司技术文章与动态

### 2026-11-19 · Physics-informed AI: What it is and why it matters for engineering

作者 Anthony Massobrio 解释了产品里“物理”从哪里来。训练样本来自求解器算出的压力场或应力场，网络结构适合表示三维形状。若新零件的形状超出训练范围，工程师根据不确定性决定是否回到 CFD 或有限元求解器，并将新的解加入后续训练。每次设计评审要问的是某个几何变化是否已有足够的数据覆盖。[技术原文](https://www.neuralconcept.com/post/physics-informed-ai)

### 2026-11-11 · Neural Concept Connect US brought peers together for Engineering AI’s hard questions

客户与工程负责人讨论了将 AI 纳入正式设计评审的条件。系统需要记录调用过的软件、依据的企业数据和作出决定的步骤，让签字人知道哪里还需要工程判断。文章记录了会议各方对部署的经验和分歧，尤其是当一个代理要跨越多个团队时，谁有权访问数据、谁负责验收。[会议原文](https://www.neuralconcept.com/post/neural-concept-connect-us-recap)

### 2026-10-26 · Why human-like AI fails without quantitative grounding

文章从开模前的决定切入。工程师需要知道预测误差是否小于设计容差。自然语言模型可以转述目标或解释输出，压力、应力等数值仍要与可信仿真或测量比较。若模型没有给出经过验证的误差范围，团队可能要重做传统分析才能批准方案，快速生成答案所省的时间便会消失。[技术原文](https://www.neuralconcept.com/post/why-human-like-ai-fails-without-quantitative-grounding)

### 2026-10-19 · Neural Concept Launches MCP Bridge

MCP Bridge 把设计代理接入 CAD、网格和仿真软件，让它在工程师设定目标后执行几何清理、准备网格等工作。公司举例称，一个轮辋几何清理任务约三分钟完成，传统人工流程约需一天。这个案例量化的是仿真前处理，无法据此推算完整车型开发周期。[产品发布与客户说明](https://www.neuralconcept.com/press-release/neural-concept-launches-mcp-bridge)

## 融资记录

| 披露时间 | 投资与口径 |
| --- | --- |
| 2019–2020 | 2019 年 5 月，投资方 HTGF 宣布与 Constantia New Business 投入七位数资金。公司随后在 B 轮公告中回顾，2020 年种子轮金额为 200 万美元。两次披露的关系未说明，不能据此相加。[投资方公告](https://htgffin.com/en/computer-aided-engineering-in-the-age-of-ai-neural-concept-sa-raises-a-seven-digit-investment-from-constantia-new-business-and-htgf/) · [公司融资回顾](https://www.neuralconcept.com/press-release/neural-concept-raises-27m-series-b) |
| 2022-03-22 | A 轮 910 万美元，Alven 领投，Aster、CNB 与 HTGF 参投。[投资方公告](https://www.htgf.de/en/htgf-neural-concept-series-a/) |
| 2024-06-03 | B 轮 2,700 万美元，Forestay Capital 领投，D. E. Shaw group、Alven、CNB Capital、HTGF 和 Aster Capital 参投。[公司公告](https://www.neuralconcept.com/press-release/neural-concept-raises-27m-series-b) |
| 2025-12-18 | C 轮 1 亿美元，Goldman Sachs Alternatives 旗下成长股权投资团队领投，Forestay Capital、Alven、HTGF、D. E. Shaw Ventures 和 Aster Capital 参投。公告确认该轮已完成，未披露估值。[公司公告](https://www.neuralconcept.com/press-release/neural-concept-closes-100m-funding-round) |

## 相关链接

- [公司官网](https://www.neuralconcept.com/) · [技术文章与研究目录](https://www.neuralconcept.com/resources) · [品牌图标原图](https://www.neuralconcept.com/assets/brand/nc-favicon.svg)
- [ICML 2018 论文与全文入口](https://proceedings.mlr.press/v80/baque18a.html) · [EPFL 对实车验证的记录](https://actu.epfl.ch/news/bike-designed-with-artificial-intelligence-break-5/)
