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

## 公司与创始人

Atinary Technologies 成立于 2019 年，团队分布在美国和瑞士。两位创始人于 2017 年开始合作。当时，经济学家、现任 CEO Hermann Tribukait 在 Mission Innovation 牵头推动加速材料发现，化学家、现任 CTO Loïc Roch 在哈佛大学从事机器学习与化学的博士后研究。他们把一个常见的实验室决定做成了产品：当仪器本周只来得及测几十个样品时，哪几组实验最值得做？MIT 化学教授 Stephen Buchwald 担任公司科学顾问，关注交叉偶联反应的实验数据。[创办经过](https://atinary.com/news/atinary-secures-5m-seed-round-to-turbocharge-rd/) · [顾问及研究方向](https://ir.bruker.com/press-releases/press-release-details/2026/Bruker-Announces-Strategic-Collaboration-with-Atinary-Technologies-to-Advance-Self-Driving-Laboratories/default.aspx)

截至 2026 年 11 月 20 日，公开资料支持其独立、未上市的创业公司身份。Atinary 在 2026 年 6 月入选世界经济论坛的 Technology Pioneers，该项目要求企业独立且由私人持有。8 月，仪器厂商 Bruker 确认取得 Atinary 的少数股权。[入选公告](https://atinary.com/news/atinary-named-a-world-economic-forum-2026-technology-pioneer/) · [世界经济论坛遴选条件](https://initiatives.weforum.org/innovator-communities/techpioneers) · [Bruker 投资公告](https://ir.bruker.com/press-releases/press-release-details/2026/Bruker-Announces-Strategic-Collaboration-with-Atinary-Technologies-to-Advance-Self-Driving-Laboratories/default.aspx)

## SDLabs 与波士顿实验室

研究者在 SDLabs 中指定可调变量、实验约束与目标。以催化反应为例，既要提高目标产物的比例，又要控制贵金属成本。软件用已有测量拟合概率模型，估计尚未尝试的条件可能取得什么结果、估计有多不确定，再挑选下一批实验。研究者可以在自己的实验台执行建议，也可以把软件连接到能接收指令并回传数据的自动化设备。[实验决策原理](https://atinary.com/blog/how-ai-powered-molecular-discovery-software-accelerates-research/) · [产品与部署方式](https://atinary.com/blog/evaluation-map-navigating-the-landscape-of-ai-driven-rd-and-sdlabs/)

2026 年 2 月，Atinary 在波士顿海港区启用自有实验室，初期研究小分子合成与催化。一套平台将 Chemspeed 合成机器人接入 Bruker 在线核磁共振仪，另一套使用两台 ABB 机械臂、梅特勒托利多精密仪器和安捷伦液相色谱–质谱设备。两套平台均由 SDLabs 调度，反应产生的测量值可直接进入下一轮推荐。波士顿展示了从合成到分析的实物闭环；在瑞士巴塞尔附近，公司另与 Chemspeed 设有联合演示实验室。[波士顿开幕公告](https://atinary.com/news/opening-atinary-self-driving-labs-boston/) · [两套平台的现场图解](https://atinary.com/blog/from-vision-to-reality-reflections-on-the-atinary-self-driving-labs-grand-opening/) · [Bruker 对两地设施的说明](https://ir.bruker.com/press-releases/press-release-details/2026/Bruker-Announces-Strategic-Collaboration-with-Atinary-Technologies-to-Advance-Self-Driving-Laboratories/default.aspx)

## 客户、实验结果与边界

| 使用团队 | 研究问题与实测结果 |
| --- | --- |
| 帝斯曼–芬美意（dsm-firmenich） | 双方在《ACS Catalysis》发表氢甲酰化研究。研究者用 FalconGPBO 算法在七个变量、约 29 亿种可能组合中选择了 88 次实验。与前期高催化剂用量的筛选条件相比，他们在保持转化率和直链产物选择性的同时，将反应时间减半，将铑用量降至原来的约 1/10 至 1/30。论文中 95% 和 97% 的成本降幅分别对应两种配体条件下每公斤产品的**铑成本**。论文没有测算产品总制造成本的降幅。[同行评议论文](https://doi.org/10.1021/acscatal.5c06595) · [具名客户案例](https://atinary.com/use-cases/accelerating-hydroformylation-rd-with-ai-for-resource-efficiency/) |
| 武田制药 | 在一个化学脱保护步骤中，初始效率约 50%，五项变量构成约 600 种组合。按具名案例页的记录，研究者完成两批各 16 次实验后，软件推荐的多组条件取得了超过 90% 的收率。这是单个反应步骤的指标。双方于 2024 年宣布扩大合作，公开材料没有披露合同金额。[武田项目及实验批次](https://atinary.com/use-cases/takeda-pharmaceuticals/) · [合作公告](https://atinary.com/news/launch-of-the-atinary-lab/) |
| MIT Buonassisi 实验室 | 研究者使用 SDLabs 选取制备钙钛矿太阳能电池的环境条件，自己操作制备装置，整项实验共测试 33 组条件。湿度和溶剂蒸气的交互作用会改变薄膜结晶，团队以原位结构表征验证了这一发现。这一案例说明，实验室即使保留人工制样，也能用算法选择样品并研究影响器件性能的因素。[MIT 研究报道](https://www.rle.mit.edu/disentangling-environmental-effects-on-perovskite-solar-cell-performance-via-interpretable-machine-learning/) · [项目作者访谈](https://atinary.com/blog/ai-driven-experimentation-in-solar-cell-research/) |

商业模式已有具名以外的直接披露。Tribukait 在 2023 年接受 AgFunderNews 采访时说，公司在 2019 年末签下首个客户，此前收入主要来自付费试点，到采访时已签订首批年度订阅合同。采访没有列出各订阅方及对应收入。MIT 的论文证明了科研使用，Bruker 和 ABB 的角色则分别有投资或设备集成公告可查。[CEO 访谈](https://agfundernews.com/atinary-technologies-raises-5m-seed-round-to-turbocharge-rd-process) · [设备合作说明](https://atinary.com/news/atinary-abb-robotics-raya-award-2026/)

## 最近的公司技术动态与博客

### 2026-10-26 · Atinary 与 ABB 的实验室机器人应用获奖

公司与 ABB 获得国际制药工程协会地区组织 RAYA 的“未来软件趋势／物理 AI”奖项。其分工在波士顿平台上清晰可见：ABB 的机械臂负责在设备之间转运和操作样品，SDLabs 根据测量结果安排新的实验。奖项确认的是两家公司在实验室自动化上的联合应用，公告未提供设施利用率或连续无人值守的运行时长。[公司公告](https://atinary.com/news/atinary-abb-robotics-raya-award-2026/) · [主办方获奖记录](https://en.ispe-dach.org/raya-2026-from-technology-to-pharmaceutical-application/)

### 2026-06-29 · 分子发现软件如何选实验

这篇技术博客区分了两个常被合并的步骤：预测一个条件可能取得的结果，以及在实验预算有限时决定要不要试它。文章进一步讨论了底物改变后怎么办。在公司与纽约大学阿布扎比分校的案例中，团队先用 120 次实验建立参照数据，再将所学用于新底物，文中报告在所测试的新底物上最多追加四次实验即找到相应优化条件。后一个数字依赖前一阶段的数据投入和专家限定的搜索范围。[公司博客](https://atinary.com/blog/how-ai-powered-molecular-discovery-software-accelerates-research/) · [文章引用的研究预印本](https://doi.org/10.26434/chemrxiv.15001213/v1)

### 2026-06-26 · 与 AWS 拆解云端平台如何连接实验台

SDLabs 从 2024 年 7 月起托管在 AWS，2025 年 9 月成为 AWS 合作伙伴。文章把部署方式与实验室现状对应起来：人工实验室可以只使用选点功能，已能上传测量数据并接收指令的实验室则可进一步自动衔接批次。作者以武田和 MIT 举例，说明同一套云端软件如何服务于合成工艺与光伏材料两个不同的问题。[公司博客](https://atinary.com/blog/atinary-aws-self-driving-labs/) · [AWS 与 Atinary 合著的技术文章](https://aws.amazon.com/blogs/physical-ai/atinarys-ai-self-driving-labs-on-aws-accelerate-rd-for-takeda-and-mit/)

### 2026-05-18 · 如何评估 AI 实验平台

公司把实验室采购中容易遗漏的问题列得很具体：已有仪器能否接收编程接口指令，测量数据能否进入实验室信息管理系统和电子实验记录本，研究者能否在模型推荐之后调整约束。这篇文章解释了为什么部署同一个优化算法的两个实验室可能达到不同程度的自动化。文中关于开源软件与 SDLabs 的比较属于供应商的产品评估，未提供统一条件下的性能测试。[公司博客](https://atinary.com/blog/evaluation-map-navigating-the-landscape-of-ai-driven-rd-and-sdlabs/)

## 融资记录

| 日期 | 类型、金额与投资者 |
| --- | --- |
| 2023 年 9 月以前 | 据创始人受访时的报道，来自私人投资者的种子前融资略超 200 万美元，另获接近 300 万美元的资助金。报道未列出各笔日期与出资人；资助金与股权融资分别统计。[AgFunderNews 采访](https://agfundernews.com/atinary-technologies-raises-5m-seed-round-to-turbocharge-rd-process) |
| 2023-09-26 | 500 万美元种子轮，AgFunder 领投，Cherubic Ventures 参投。公司在 10 月 5 日刊载了落款为 9 月 26 日的公告。[公司融资公告](https://atinary.com/news/atinary-secures-5m-seed-round-to-turbocharge-rd/) · [领投方说明](https://agfundernews.com/why-we-invested-in-atinary-a-glimpse-into-the-future-of-chemistry-rd) |
| 2026-08-11 | Bruker 宣布已完成少数股权投资，金额、持股比例及估值未披露。双方还计划深化 SDLabs 与 Bruker 分析设备、Chemspeed 自动化平台及 SciY 软件的集成，公告未给出另行支付的合作费用或里程碑上限。[Bruker 投资者公告](https://ir.bruker.com/press-releases/press-release-details/2026/Bruker-Announces-Strategic-Collaboration-with-Atinary-Technologies-to-Advance-Self-Driving-Laboratories/default.aspx) |

## 相关链接

- [公司官网](https://atinary.com/) · [自驱动实验室技术](https://atinary.com/technology/self-driving-labs/) · [公开研究论文](https://atinary.com/publications/)
- [公司博客](https://atinary.com/blog/) · [新闻与伙伴公告](https://atinary.com/news/) · [官网品牌图标原图](https://atinary.com/wp-content/uploads/2022/07/apple-icon.png)
