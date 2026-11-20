---
title: "Periodic Labs｜Periodic Neon"
type: "project"
category: "材料研发"
format: "科学模型"
region: "美国"
areas: ["材料科学","物理与工程"]
stages: ["Characterize · 表征分析"]
summary: "结合实验上下文解释粉末衍射图谱，识别混合样品中的晶相。"
countries: ["美国"]
directions: ["Characterize"]
maturity: "实际部署"
---

## 项目概览

Periodic Labs 在美国加州门洛帕克建设自动化材料实验室，研究超导体和磁性材料。它发布的 Periodic Neon 解决一个直接影响下一次实验的问题：把几种原料制成粉末后，研究员怎么知道究竟做出了什么？Neon 结合实验记录与粉末 X 射线衍射（XRD）图谱，给出样品可能含有的晶相及解释。公司已将它部署在自己的实验室。这里的「实际部署」指内部科研使用。 [公司产品公告](https://periodic.com/news/building-labs-that-learn)

全公司的研究覆盖提出候选、合成材料和表征分析。**Neon 的项目标签是 Characterize**，因为其公开评测衡量的是解释已取得的图谱。指导整场科研、设计合成程序和选择下一项实验，是公司在产品公告中列出的后续方向。 [团队对三个科研环节的定义](https://periodic.com/news/building-labs-that-learn)

## 公司与团队

2025 年创办公司的两位联合 CEO 带来了两种专长。Liam Fedus 此前在 OpenAI 领导后训练工作，参与创建 ChatGPT。Ekin Doğuş Cubuk 曾领导 Google Brain 和 DeepMind 的材料与化学团队，长期用机器学习和计算模拟研究晶体及非晶材料。他们公开讨论的难点是：论文主要记录成功后的发现，而研发决策还需要失败样品、实验历史和当时可用的不完整证据。 [两位创始人的联合访谈](https://www.generalist.com/p/a-chatbot-walks-into-a-laboratory) · [Physics Today 对 Cubuk 的访谈](https://physicstoday.aip.org/news/ekin-dogus-cubuk-runs-a-startup-to-accelerate-physics-r-d-using-ai)

团队分工体现在交付物上。实验人员生成并复核样品数据，材料研究者评判解释能否成立，模型与系统工程团队将这些判断转为训练信号，并维护数据库、科学软件和推理集群。投资方还记录了团队中物理学家与机器学习研究员的共同研讨。公司官网列有创始成员名单。 [团队与公司介绍](https://periodic.com/) · [创始投资方对团队的介绍](https://a16z.com/announcement/investing-in-periodic-labs/)

## 产品如何工作

一个材料配方在高温下反应后，粉末中可能同时含有目标晶相、剩余原料和副产物。它们的衍射峰叠加，多个结构模型都可能拟合出接近的曲线。研究员还要问：样品里有哪些元素？它接触过空气或水分吗？相同条件下的另一批样品得到什么结果？这些信息能排除数学上吻合、化学上却难以形成的候选物。Neon 将这类判断与查结构库、运行分析软件结合，原文附有模型推断晶相的交互示例。 [研究报告及样例](https://periodic.com/news/nature-is-our-learning-environment)

**同类工具如何比较？** 传统流程由专家缩小候选范围，再用数据库和精修软件拟合图谱。国内的 MatDiffract 同样支持多物相识别与自动精修。Periodic 的特点是能利用自有实验室的样品历史、模拟和私有数据。要比较两种方案，应让它们处理相同的盲测样品，控制可访问的数据，再比较识别结果和人工复核时间。目前两方采用各自的评测条件。 [高能所的 MatDiffract 发布说明](https://www.ihep.cas.cn/xwdt2022/gnxw/hotnews/2026/202606/t20260605_8215895.html) · [Periodic 的工具对照实验](https://periodic.com/news/nature-is-our-learning-environment)

## 最近三篇技术博客怎么读

截至 2026 年 11 月 20 日，官网新闻页最新列出的三篇文章均发布于 2026 年 9 月 15 日。它们分别回答为什么建设实验室、怎么判定分析成功、怎样负担持续迭代的计算成本。 [官方发布目录](https://periodic.com/news)

### Building Labs that Learn｜为什么先解衍射图

公司解释了选题顺序：一次真实实验可能耗时数日，还需要仪器和电力。团队可以保存图谱与实验上下文，在等待下一批样品时，反复检验模型对已有结果的解释。物理实验因此同时产生两种价值：对眼前样品的认识，以及可供后续模型反复学习的记录。同行评估这一路线时，应同时追踪每批数据带来的模型收益，以及模型反馈是否改变了下一轮实验的选择。 [博客原文](https://periodic.com/news/building-labs-that-learn)

### Nature Is Our Learning Environment｜55.3% 究竟衡量什么

团队以 Kimi K2.6 为起点进行科学数据中期训练和强化学习。在公司挑选的 134 个高难样品上，基座的分析成功率为 2.7%，Neon 为 55.3%。成功由两种模型组成的裁判按专家量表评定。对照实验中，裁判与专家共识的一致率为 84%。因此，55.3% 表示特定难题集上达到评审标准的比例；新发现材料的数量和实验研发周期需要单独测量。 [评测方法与原始结果](https://periodic.com/news/nature-is-our-learning-environment)

公司又测试了 198 份来自保留化学体系的图谱。这个实验考察模型能否迁移到训练阶段留出的体系，测试数据仍来自自有设施。若采购方使用其他仪器和数据格式，还需要拿自己的样品验证。成本图也有两个口径：外部模型以公开 API 价格估算，Neon 用 H200 吞吐量折算单次推理成本。曲线可以比较推理方案，单个实验室的总成本仍需加上制样、测量及人工复核。 [迁移评测与成本口径](https://periodic.com/news/nature-is-our-learning-environment)

### AI Infrastructure at Periodic｜成本花在哪

一次分析会在语言推理和科学软件计算之间来回切换，有时持续一小时以上。团队把训练与推理异步运行，科学计算则使用 GPU 节点上的空闲 CPU。公司报告最后一轮训练的峰值用量为 1,300 块 H200，并给出特定工作负载上的训练与解码对照。这里的工程收益是减少模型等待工具、集群等待样品期间的空转；论文报告的吞吐提升还要结合具体任务和硬件理解。 [博客原文与工程测量](https://periodic.com/news/ai-infrastructure-at-periodic)

## 融资、客户与商业进展

| 时间 | 公开记录 | 如何理解 |
| --- | --- | --- |
| 2025-09-30 | a16z 声明领投 **3 亿美元创始轮**。公司列出的其他投资者包括 Felicis、DST、NVentures、Accel，以及 Jeff Bezos 等个人投资者。 | 资金属于 Periodic Labs 整家公司，覆盖团队、实验室和模型研发。 [领投方公告](https://a16z.com/announcement/investing-in-periodic-labs/) · [公司投资人名单](https://periodic.com/) |
| 2026-06-03 | 私募股权交易平台 Forge 在融资历史中将 A 轮主档列为 **7.5 亿美元**，将 AMP PBC 列为主要投资者，投后估值为 **75 亿美元**。同日另列 A-1 和 A-2 两档。 | 这是第三方股份档案的口径。官网截至核查日公开的新闻目录中未见该轮交割公告，各股份档位也不能直接作为公司实收现金加总。 [Forge 融资明细](https://forgeglobal.com/periodic-labs_ipo/) · [公司公告目录](https://periodic.com/news) |

公司披露的产业案例是一家面临芯片散热问题的半导体制造商。团队为对方的研究人员定制实验数据分析智能体。客户名称、合同金额、验收指标均未公开。投资方还提到其他行业接触，现有材料不足以计算经常性收入、付费客户数或 Neon 的独立销售额。理解其商业进展时，最有辨别力的后续证据是具名客户的重复采购、节省的工程师工时，以及经过客户复核的研发周期变化。 [公司对客户项目的表述](https://periodic.com/) · [投资方对产业应用的说明](https://a16z.com/announcement/investing-in-periodic-labs/)

## 相关链接

- 查看团队和产业合作对象的公开描述。 [公司官网](https://periodic.com/)
- 查看最新发布、研究报告和工程博客。 [官方新闻目录](https://periodic.com/news)
- 直接检查评测定义、图表和交互式样例。 [Neon 研究报告](https://periodic.com/news/nature-is-our-learning-environment)
- 阅读两位创始人对材料合成、实验数据和公司战略的完整讨论。 [创始人访谈](https://www.generalist.com/p/a-chatbot-walks-into-a-laboratory)
