---
title: "Atinary Technologies"
type: "startup"
logo: "/logos/atinary.png"
category: "实验室自动化与服务"
summary: "用贝叶斯优化选择下一组化学实验，在波士顿自有实验室接通机器人和分析仪器。与帝斯曼–芬美意合作的 88 次实验降低了氢甲酰化所需的铑用量。"
countries: ["美国","瑞士"]
directions: ["Propose","Synthesize","Characterize"]
maturity: "实际部署"
---

## 公司与团队

Atinary Technologies 成立于 2019 年，团队分布在美国和瑞士。两位创始人于 2017 年开始合作。当时，经济学家、现任 CEO Hermann Tribukait 在 Mission Innovation 牵头推动加速材料发现，化学家、现任 CTO Loïc Roch 在哈佛大学从事机器学习与化学的博士后研究。2024 年 7 月，公司披露团队有 16 人，专业覆盖软件工程、机器学习、化学和物理等领域。MIT 化学教授 Stephen Buchwald 担任公司科学顾问，关注交叉偶联反应的实验数据。[五周年团队介绍](https://atinary.com/news/atinary-celebrates-5-years-of-innovation/) · [创办经过](https://atinary.com/news/atinary-secures-5m-seed-round-to-turbocharge-rd/) · [顾问及研究方向](https://ir.bruker.com/press-releases/press-release-details/2026/Bruker-Announces-Strategic-Collaboration-with-Atinary-Technologies-to-Advance-Self-Driving-Laboratories/default.aspx)

截至 2026 年 11 月 20 日，公开资料支持其独立、未上市的创业公司身份。Atinary 在 2026 年 6 月入选世界经济论坛的 Technology Pioneers，该项目要求企业独立且由私人持有。8 月，仪器厂商 Bruker 确认取得 Atinary 的少数股权。[入选公告](https://atinary.com/news/atinary-named-a-world-economic-forum-2026-technology-pioneer/) · [世界经济论坛遴选条件](https://initiatives.weforum.org/innovator-communities/techpioneers) · [Bruker 投资公告](https://ir.bruker.com/press-releases/press-release-details/2026/Bruker-Announces-Strategic-Collaboration-with-Atinary-Technologies-to-Advance-Self-Driving-Laboratories/default.aspx)

## 产品

### SDLabs 实验决策软件

SDLabs 是面向工艺化学家和材料研发团队的云端软件，无需编程即可为下一批实验选择条件。研究者指定可调变量、实验约束与目标。以催化反应为例，既要提高目标产物的比例，又要控制贵金属成本。软件用已有测量拟合概率模型，估计尚未尝试的条件可能取得什么结果、估计有多不确定，再挑选下一批实验。研究者可以在自己的实验台执行建议，也可以把软件连接到能接收指令并回传数据的自动化设备。[实验决策原理](https://atinary.com/blog/how-ai-powered-molecular-discovery-software-accelerates-research/) · [产品与部署方式](https://atinary.com/blog/evaluation-map-navigating-the-landscape-of-ai-driven-rd-and-sdlabs/)

Tribukait 在 2023 年接受 AgFunderNews 采访时说，公司在 2019 年末签下首个客户，早期收入主要来自付费试点，到采访时已签订首批年度订阅合同。采访没有列出各订阅方及对应收入。[CEO 访谈](https://agfundernews.com/atinary-technologies-raises-5m-seed-round-to-turbocharge-rd-process)

### 波士顿与瑞士的实验设施

2026 年 2 月，Atinary 在波士顿海港区启用自有实验室，初期研究小分子合成与催化。一套平台将 Chemspeed 合成机器人接入 Bruker Fourier 80 台式核磁共振仪，用于在线分析，另一套使用两台 ABB 机械臂、梅特勒托利多精密仪器和安捷伦液相色谱–质谱设备。两套平台均由 SDLabs 调度，反应产生的测量值可直接进入下一轮推荐。波士顿展示了从合成到分析的实物闭环；在瑞士巴塞尔附近，公司另与 Chemspeed 设有联合演示实验室。[波士顿开幕公告](https://atinary.com/news/opening-atinary-self-driving-labs-boston/) · [两套平台的现场图解](https://atinary.com/blog/from-vision-to-reality-reflections-on-the-atinary-self-driving-labs-grand-opening/) · [Bruker 对两地设施的说明](https://ir.bruker.com/press-releases/press-release-details/2026/Bruker-Announces-Strategic-Collaboration-with-Atinary-Technologies-to-Advance-Self-Driving-Laboratories/default.aspx)

### 研发团队的实测结果

| 使用团队 | 研究问题与实测结果 |
| --- | --- |
| 帝斯曼–芬美意（dsm-firmenich） | 双方在《ACS Catalysis》发表氢甲酰化研究。研究者用 FalconGPBO 算法在七个变量、约 29 亿种可能组合中选择了 88 次实验。与前期高催化剂用量的筛选条件相比，他们在保持转化率和直链产物选择性的同时，将反应时间从 16 小时缩至 8 小时，将铑用量降至原来的约 1/10 至 1/30。论文中 95% 和 97% 的成本降幅分别对应两种配体条件下每公斤产品的**铑成本**。论文没有测算产品总制造成本的降幅。[同行评议论文](https://doi.org/10.1021/acscatal.5c06595) · [具名客户案例](https://atinary.com/use-cases/accelerating-hydroformylation-rd-with-ai-for-resource-efficiency/) |
| 武田制药 | 在一个化学脱保护步骤中，初始效率约 50%，五项变量构成约 600 种组合。按具名案例页的记录，研究者完成两批各 16 次实验后，软件推荐的多组条件取得了超过 90% 的收率。这是单个反应步骤的指标。[武田项目及实验批次](https://atinary.com/use-cases/takeda-pharmaceuticals/) · [合作公告](https://atinary.com/news/launch-of-the-atinary-lab/) |
| MIT Buonassisi 实验室 | 研究者使用 SDLabs 选取制备钙钛矿太阳能电池的环境条件，自己操作制备装置，整项实验共测试 33 组条件。湿度和溶剂蒸气的交互作用会改变薄膜结晶，团队以原位结构表征验证了这一发现。这一案例说明，实验室即使保留人工制样，也能用算法选择样品并研究影响器件性能的因素。[MIT 研究报道](https://www.rle.mit.edu/disentangling-environmental-effects-on-perovskite-solar-cell-performance-via-interpretable-machine-learning/) · [项目作者访谈](https://atinary.com/blog/ai-driven-experimentation-in-solar-cell-research/) |

## 产业伙伴与合作范围

| 伙伴 | 分工与已披露范围 |
| --- | --- |
| 芬美意（后为 dsm-firmenich） | 芬美意的工艺化学团队提供实验问题、仪器和专业判断，Atinary 提供 Falcon 算法与 SDLabs。双方先公告合作优化原料生产工艺，后来共同发表氢甲酰化实验。[合作公告](https://atinary.com/news/collaboration-with-firmenich/) · [联合论文](https://doi.org/10.1021/acscatal.5c06595) |
| 武田制药 | 双方从脱保护反应优化扩大到实验室自动化演示，武田可借此现场评估合成、分析和算法之间的衔接。公开材料未披露项目费用。[合作范围](https://atinary.com/news/launch-of-the-atinary-lab/) |
| IBM Research、ACD/Labs | IBM 与 Atinary 的联合研究以 RoboRXN 机器人验证了反应条件和路线的联合优化。ACD/Labs 的独立合作面向高通量及并行化学实验，拟把 SDLabs 的实验设计接入分析数据软件。公告未披露费用或交付日期。[IBM 联合论文](https://pubs.rsc.org/en/content/articlehtml/2024/sc/d3sc05607d) · [ACD/Labs 公告](https://www.acdlabs.com/resource/acd-labs-and-atinary-technologies-announce-an-artificial-intelligence-ai-informatics-partnership/) |
| Chemspeed、Bruker | Chemspeed 自动化平台可接收 SDLabs 的指令并回传数据，Bruker 提供在线核磁分析。在现有两地演示设施基础上，双方还计划扩大分析设备集成并接入 SciY 科学软件。合作费用及里程碑金额未披露。[Chemspeed 集成公告](https://atinary.com/news/atinary-and-chemspeed-teaming-up-for-self-driving-labs/) · [Bruker 公告](https://ir.bruker.com/press-releases/press-release-details/2026/Bruker-Announces-Strategic-Collaboration-with-Atinary-Technologies-to-Advance-Self-Driving-Laboratories/default.aspx) |
| ABB Robotics、梅特勒托利多、安捷伦 | ABB 负责机械臂与自动化，梅特勒托利多提供精密测量仪器，安捷伦提供分析仪器。三方参与波士顿实验室建设，公告未披露采购或合同金额。[建设公告](https://atinary.com/news/atinary-abb-mettler-toledo-and-agilent-are-building-the-first-self-learning-and-self-driving-lab-of-its-kind/) · [设备合作说明](https://atinary.com/news/atinary-abb-robotics-raya-award-2026/) |
| AWS | 提供 SDLabs 托管、计算及数据存储，并通过合作伙伴网络支持部署。联合技术文章明确将 Bedrock 用作对话界面，将 Aurora PostgreSQL 用于保存实验数据。[AWS 技术文章](https://aws.amazon.com/blogs/physical-ai/atinarys-ai-self-driving-labs-on-aws-accelerate-rd-for-takeda-and-mit/) |

## 融资记录

| 日期 | 类型、金额与投资者 |
| --- | --- |
| 2023 年 9 月以前 | 据创始人受访时的报道，来自私人投资者的种子前融资略超 200 万美元，另获接近 300 万美元的资助金。报道未列出各笔日期与出资人；资助金与股权融资分别统计。[AgFunderNews 采访](https://agfundernews.com/atinary-technologies-raises-5m-seed-round-to-turbocharge-rd-process) |
| 2023-09-26 | 500 万美元种子轮，AgFunder 领投，Cherubic Ventures 参投。估值未披露。公司在 10 月 5 日刊载了落款为 9 月 26 日的公告。[公司融资公告](https://atinary.com/news/atinary-secures-5m-seed-round-to-turbocharge-rd/) · [领投方说明](https://agfundernews.com/why-we-invested-in-atinary-a-glimpse-into-the-future-of-chemistry-rd) |
| 2026-08-11 | Bruker 宣布已完成少数股权投资，金额、持股比例及估值未披露。[Bruker 投资者公告](https://ir.bruker.com/press-releases/press-release-details/2026/Bruker-Announces-Strategic-Collaboration-with-Atinary-Technologies-to-Advance-Self-Driving-Laboratories/default.aspx) |

## 公司动态

### 2026-10-26 · Atinary 公布与 ABB 的实验室机器人项目获奖

国际制药工程协会德奥瑞分会（ISPE D/A/CH）10 月 13 日已公布获奖名单，将双方的 Autonomous Data Factory 列为软件与人工智能类获奖项目。Atinary 在 10 月 26 日的公告中称这一类别为“未来软件趋势／物理 AI”。其分工在波士顿平台上清晰可见：ABB 的机械臂负责在设备之间转运和操作样品，SDLabs 根据测量结果安排新的实验。奖项确认的是两家公司在实验室自动化上的联合应用，公告未提供设施利用率或连续无人值守的运行时长。[公司公告](https://atinary.com/news/atinary-abb-robotics-raya-award-2026/) · [主办方获奖记录](https://en.ispe-dach.org/raya-2026-from-technology-to-pharmaceutical-application/)

### 2026-08-11 · Bruker 入股并扩大技术合作

Bruker 确认少数股权投资已完成，并说明巴塞尔附近和波士顿的演示平台已落地。接入更多分析设备、SciY 软件及客户应用是公告所列的下一阶段。[Bruker 原文](https://ir.bruker.com/press-releases/press-release-details/2026/Bruker-Announces-Strategic-Collaboration-with-Atinary-Technologies-to-Advance-Self-Driving-Laboratories/default.aspx)

### 2026-06-29 · 分子发现软件如何选实验

这篇技术博客区分了两个常被合并的步骤：预测一个条件可能取得的结果，以及在实验预算有限时决定要不要试它。文章进一步讨论了底物改变后怎么办。在公司与纽约大学阿布扎比分校的案例中，团队先用 120 次实验建立参照数据，再将所学用于新底物，文中报告在所测试的新底物上最多追加四次实验即找到相应优化条件。后一个数字依赖前一阶段的数据投入和专家限定的搜索范围。[公司博客](https://atinary.com/blog/how-ai-powered-molecular-discovery-software-accelerates-research/) · [文章引用的研究预印本](https://doi.org/10.26434/chemrxiv.15001213/v1)

### 2026-06-26 · 与 AWS 拆解云端平台如何连接实验台

SDLabs 从 2024 年 7 月起托管在 AWS，2025 年 9 月成为 AWS 合作伙伴。文章把部署方式与实验室现状对应起来：人工实验室可以只使用选点功能，已能上传测量数据并接收指令的实验室则可进一步自动衔接批次。作者以武田和 MIT 举例，说明同一套云端软件如何服务于合成工艺与光伏材料两个不同的问题。[公司博客](https://atinary.com/blog/atinary-aws-self-driving-labs/) · [AWS 与 Atinary 合著的技术文章](https://aws.amazon.com/blogs/physical-ai/atinarys-ai-self-driving-labs-on-aws-accelerate-rd-for-takeda-and-mit/)

### 2026-05-18 · 如何评估 AI 实验平台

公司把实验室采购中容易遗漏的问题列得很具体：已有仪器能否接收编程接口指令，测量数据能否进入实验室信息管理系统和电子实验记录本，研究者能否在模型推荐之后调整约束。这篇文章解释了为什么部署同一个优化算法的两个实验室可能达到不同程度的自动化。文中关于开源软件与 SDLabs 的比较属于供应商的产品评估，未提供统一条件下的性能测试。[公司博客](https://atinary.com/blog/evaluation-map-navigating-the-landscape-of-ai-driven-rd-and-sdlabs/)

### 2026-02-09 · 波士顿自驱动实验室启用

公司在落款 2 月 9 日的公告中宣布实验室启用，两套实物平台接通合成和分析，用于小分子合成与催化。后续现场图解列出不同平台的仪器组合。[开幕公告](https://atinary.com/news/opening-atinary-self-driving-labs-boston/) · [现场回顾](https://atinary.com/blog/from-vision-to-reality-reflections-on-the-atinary-self-driving-labs-grand-opening/)

### 2026-02-02 · MIT 披露太阳能电池制备研究

MIT 报道研究者如何控制溶剂分压、绝对湿度和温度，绘制它们与器件效率的关系，并用原位表征验证湿度与溶剂共同影响结晶。作者访谈说明 SDLabs 负责建议条件，制样由研究者操作。[MIT 研究报道](https://www.rle.mit.edu/disentangling-environmental-effects-on-perovskite-solar-cell-performance-via-interpretable-machine-learning/) · [项目作者访谈](https://atinary.com/blog/ai-driven-experimentation-in-solar-cell-research/)

### 2025-11-15 · 与帝斯曼–芬美意发表工业催化结果

《ACS Catalysis》在线刊出联合研究。以 88 次实验优化的两种配体条件为例，每公斤产品的铑成本分别由 102 欧元降至 5 欧元、由 127 欧元降至 4 欧元。该核算仅覆盖铑对成本的贡献。[论文原文](https://pubs.acs.org/doi/10.1021/acscatal.5c06595)

### 2025-07-23 · 研究何时值得加入低成本测量

Atinary 与洛桑联邦理工学院、剑桥大学等机构在《Nature Computational Science》发表多保真贝叶斯优化研究。作者比较两类选点方法，在两个合成问题及三个实际发现问题上检验了低成本数据何时能帮助决策。能否节省预算，取决于粗略测量与精确测量的成本差以及前者提供的信息量。[论文](https://www.nature.com/articles/s43588-025-00822-9) · [研究团队解读](https://atinary.com/publications/atinarys-multi-fidelity-ml-algorithm-now-published/)

### 2025-06-23 · 与 Chemspeed 完成双向控制集成

瑞士团队报告两套平台已接通，SDLabs 能控制可配置自动化设备并接收测量结果。当天公告将带有 Bruker 核磁仪的演示设施列为后续工作。[集成公告](https://atinary.com/news/atinary-and-chemspeed-teaming-up-for-self-driving-labs/)

### 2024-11-07 · 与武田扩大合作，公布实验室计划

此前发布的武田案例已记录两批各 16 次的脱保护实验。11 月公告提出设立演示实验室，初拟地点为剑桥 Kendall Square，2026 年实际开幕的设施位于波士顿海港区。[武田案例](https://atinary.com/use-cases/takeda-pharmaceuticals/) · [当时的计划](https://atinary.com/news/launch-of-the-atinary-lab/) · [开幕回顾](https://atinary.com/blog/from-vision-to-reality-reflections-on-the-atinary-self-driving-labs-grand-opening/)

### 2024-07-23 · 与 ACD/Labs 签订科学软件合作

双方公布的首个项目覆盖高通量及并行化学实验的设计、规划和分析，目标是让实验选择与化学分析数据在两套软件间衔接。公告时项目处于合作开发阶段。[ACD/Labs 原文](https://www.acdlabs.com/resource/acd-labs-and-atinary-technologies-announce-an-artificial-intelligence-ai-informatics-partnership/)

### 2024-04-29 · 与 IBM Research 发表机器人合成研究

在末端炔烃碘化的研究中，IBM 的 RoboRXN 执行实验，Atinary 的算法根据反馈选择下一组条件。团队同时探索反应路线和各路线的工艺参数，验证了 SDLabs 接入外部合成平台的能力。[Chemical Science 论文](https://pubs.rsc.org/en/content/articlehtml/2024/sc/d3sc05607d) · [Atinary 研究说明](https://atinary.com/publications/new-publication-for-atinary-and-ibm-research/)

### 2023-09-26 · 完成种子轮，订阅模式开始落地

500 万美元种子轮用于扩充团队和部署 SDLabs。同日受访时，CEO 确认已有年度订阅，未披露经常性收入或续约率。[融资公告](https://atinary.com/news/atinary-secures-5m-seed-round-to-turbocharge-rd/) · [同期访谈](https://agfundernews.com/atinary-technologies-raises-5m-seed-round-to-turbocharge-rd-process)

### 2023-03-01 · 芬美意开放工艺研发合作

双方将 Falcon 与 SDLabs 用于芬美意研发实验室的原料工艺优化。公告界定了合作目标，后续量化结果见 2025 年联合论文。[合作原文](https://atinary.com/news/collaboration-with-firmenich/)

### 2022-07-07 · 洛桑团队展示电解液配方原型

CTO 在 Biopôle 访谈中介绍了一台使用 3D 打印部件的实验装置。团队以简化的电解液配方为例，让软件安排实验、执行并读取结果。公司技术沿革将首台自建原型追溯到 2021 年。[园区对 CTO 的访谈](https://www.biopole.ch/story/the-power-of-artificial-intelligence-ai-to-fast-track-rd/) · [公司技术沿革](https://atinary.com/technology/self-driving-labs/)

### 2019-11 · 瑞士实体登记，年末签下首位客户

瑞士商业登记公告记载，洛桑公司以 ChemOS Sàrl 名义设立，后于 2021 年更名为 Atinary Technologies Sàrl。创始人回忆，公司在 2019 年末签下首个客户，未公布名称。[瑞士登记公告记录](https://prospex.ch/fr/entreprises/atinary-technologies-sarl-che-484-854-091/) · [创始人访谈](https://agfundernews.com/atinary-technologies-raises-5m-seed-round-to-turbocharge-rd-process)

## 相关链接

- [公司官网](https://atinary.com/) · [自驱动实验室技术](https://atinary.com/technology/self-driving-labs/) · [公开研究论文](https://atinary.com/publications/)
- [公司博客](https://atinary.com/blog/) · [新闻与伙伴公告](https://atinary.com/news/) · [官网品牌图标原图](https://atinary.com/wp-content/uploads/2022/07/apple-icon.png)
