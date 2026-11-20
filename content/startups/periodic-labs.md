---
title: "Periodic Labs"
type: "startup"
logo: "/logos/periodic-labs.png"
category: "材料研发"
summary: "在加州自建自动化材料实验室，用合成记录和衍射图谱训练科学模型，并为半导体研发团队定制数据分析工具。"
countries: ["美国"]
directions: ["Propose","Synthesize","Characterize"]
maturity: "实际部署"
---

## 公司做什么

Periodic Labs 成立于 2025 年，在美国加州门洛帕克建设高通量材料实验室，研究高温超导体和磁性材料。它同时投入实验设备、物理模拟和模型训练。三者服务于同一个问题：给定一种期望性能，应该尝试哪种材料、怎样制备，以及如何判断最终做出了什么？公司已让模型参与自有实验室的结果分析，正在研究如何让模型选择下一组实验。[公司介绍](https://periodic.com/) · [实验室运行情况](https://periodic.com/news/building-labs-that-learn)

## 创始人与团队

两位联合创始人共同担任 CEO。Liam Fedus 曾负责 OpenAI 的后训练工作，参与创建 ChatGPT。Ekin Doğuş Cubuk 曾领导 Google Brain 和 DeepMind 的材料与化学团队，其团队开发了用于预测稳定晶体的 GNoME。在 2026 年 9 月的访谈中，两人解释了为什么需要自建实验室：论文记录最终发表的发现，模型若要学习怎样选择下一步，还需要当时的实验条件、失败样品和决策过程。[创始人联合访谈](https://www.generalist.com/p/a-chatbot-walks-into-a-laboratory) · [a16z 对创始团队的介绍](https://a16z.com/announcement/investing-in-periodic-labs/)

创始团队还包括机器学习研究者 Dzmitry Bahdanau、材料科学家 Muratahan Aykol 和凝聚态物理学家 Joe Checkelsky。官网将科学顾问单独列出，成员包括斯坦福大学物理学家 Steve Kivelson、沈志勋和西北大学材料科学家 Chris Wolverton。公司评测图谱时，由材料领域专家先标注并校准评分标准，再用模型给大量分析结果打分。这项工作把实验科学家的判断引入了训练过程。[团队及科学顾问名单](https://periodic.com/) · [评测设计](https://periodic.com/news/nature-is-our-learning-environment)

## 实验设施、模型与客户

| 设施或服务 | 使用者与进展 |
| --- | --- |
| 自动化材料实验室 | 团队用机器人混合和加热粉末原料，再测量产物。公司于 2026 年 9 月披露，门洛帕克实验室已可全天候运行，物理模拟与实测数据共同用于研究超导体和磁体。[实验室公告](https://periodic.com/news/building-labs-that-learn) · [粉末合成设施说明](https://a16z.com/announcement/investing-in-periodic-labs/) |
| Periodic Neon | 自有实验室使用这款万亿参数模型解释粉末 X 射线衍射（XRD）结果。它读取制样条件和相邻实验的记录，调用晶体结构数据库、模拟结果和图谱拟合软件，判断混合样品里出现了哪些晶相。官网提供可浏览的分析示例。[模型报告与示例](https://periodic.com/news/nature-is-our-learning-environment) |
| 工业研发定制服务 | 一家半导体制造商在研究芯片散热问题。Periodic 为其工程师和研究员训练定制智能体，帮助他们分析实验数据。官网未披露客户名称、合同金额或散热性能改善幅度。[公司披露的合作案例](https://periodic.com/) |

公司将提高超导材料工作温度列为长期目标。现有部署证据覆盖实验室持续运行和 Neon 内部使用。工业合作的公开材料尚未说明客户是否采购了 Neon，亦未公布可单独核算的软件销售收入。[公司介绍](https://periodic.com/) · [部署公告](https://periodic.com/news/building-labs-that-learn)

## 最近三篇公司博客

截至 2026 年 11 月 20 日，公司新闻目录中最新三篇文章均发表于 2026 年 9 月 15 日，分别披露实验室运作方式、模型评测与计算成本。[官方发布目录](https://periodic.com/news)

### 2026-09-15 · Building Labs that Learn

从提出材料假设到取得实物，单轮实验可能耗时数天。团队在等待新样品时，复用已经采集的衍射图谱和制样记录，训练模型解释上一次得到了什么。这样可以在增加仪器或供电之前，先缓解人工分析跟不上制样速度的问题。公司把设计合成步骤、选择下一项实验和指挥一系列实验列为下一阶段任务。此次披露的内部部署集中在结果分析。[阅读公司原文](https://periodic.com/news/building-labs-that-learn)

### 2026-09-15 · Nature Is Our Learning Environment

混合样品的衍射峰会相互重叠。两组候选晶体都可能拟合曲线，而只有一组与加热气氛和原料相符。团队以 Kimi K2.6 为起点，做科学数据中期训练和强化学习，再用 134 个专家也需花数小时解读的内部样品评测。在相同工具环境中，分析成功率从基座模型的 2.7% 提高到 Neon 的 55.3%。两种模型组成的评审组按专家量表评分，与专家共识的一致率为 84%。这两个百分比分别衡量分析能否达标，以及评分方法有多可靠。[原始报告及评测图表](https://periodic.com/news/nature-is-our-learning-environment)

团队还测试了 198 份来自训练时留出的化学体系的图谱。该实验检验对新化学体系的迁移能力，样品和仪器仍来自同一家公司。由此可以评估公司扩大内部分析规模的依据，其他实验室采用时的准确率仍有待外部验证。[留出化学体系实验](https://periodic.com/news/nature-is-our-learning-environment)

### 2026-09-15 · AI Infrastructure at Periodic

一次复杂分析可能超过一小时，模型会反复调用科学软件。为避免训练集群等待工具返回，团队将推理与训练分开异步运行，把科学软件放到 GPU 节点空闲的 CPU 上。最终训练峰值为 1,300 块 H200。公司在相同 GPU 和自身长序列任务上测得训练吞吐量达到 Megatron 基线的 4.1 倍。这一指标量化了训练端节省的计算时间。从制样到验证材料性能的全程还受实验周期约束。[工程原文、基线与硬件口径](https://periodic.com/news/ai-infrastructure-at-periodic)

## 融资记录

| 日期 | 金额与投资者 | 公开依据 |
| --- | --- | --- |
| 2025-09-30 | 3 亿美元种子轮，a16z 领投。参与方包括 Felicis、DST、NVentures、Accel，以及 Jeff Bezos、Elad Gil、Eric Schmidt 和 Jeff Dean 等个人。 | 领投方和公司交易律师均确认金额及轮次。[a16z 公告](https://a16z.com/announcement/investing-in-periodic-labs/) · [Wilson Sonsini 交易说明](https://www.wsgr.com/en/insights/wilson-sonsini-advises-periodic-labs-on-dollar300-million-seed-round.html) |
| 2026-05-07 | 《福布斯》报道，公司在与 AMP 就至少 5 亿美元新融资进行后期谈判，讨论估值为 75 亿美元。 | 金额来自知情人，报道描述的是谈判时的拟议条款。[《福布斯》报道](https://www.forbes.com/sites/iainmartin/2026/05/07/former-openai-researcher-to-raise-500-million-for-ai-science-startup/) |
| 2026-06-03 | 私募股权平台 Forge 将 A 轮主档列为 7.5 亿美元、投后估值 75 亿美元，主要投资者为 AMP PBC。同日另有 A-1 与 A-2 两档记录。 | Forge 按股份类别披露数据。截至核查日，官网新闻目录未见新一轮交割公告，最终实收金额仍待公司或交易方确认。[Forge 融资明细](https://forgeglobal.com/periodic-labs_ipo/) · [公司新闻目录](https://periodic.com/news) |

## 相关链接

- [公司官网与团队名单](https://periodic.com/) · [官方新闻与研究目录](https://periodic.com/news)
- [2026 年 9 月两位创始人联合访谈](https://www.generalist.com/p/a-chatbot-walks-into-a-laboratory)
- 品牌标识采用公司官网浅色主题的放射状图标。[官网](https://periodic.com/) · [官方图标原图](https://framerusercontent.com/images/YQP9pmvqJp9zbLVAiY4KdsHfIs.png)
