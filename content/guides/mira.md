---
title: "MIRA：医疗模型、单细胞工具与材料研发平台"
type: "field"
group: "intro"
order: 1
---

在 AI 科研资料中，MIRA 这个名称指向多个独立项目。其中确实有一个可以复用的基座模型，针对的是医疗时间序列。材料公司公开的同名产品承担的是另外两类工作。判断一篇文章说的是哪一个，最直接的线索是开发团队和它处理的数据。

| 名称或出处 | 类型 | 输入与输出 |
| --- | --- | --- |
| microsoft/MIRA，NeurIPS 2025 | 医疗时间序列基座模型 | 根据带时间戳的临床测量值，预测指定时刻的数值 |
| cistrome/MIRA，Nature Methods 2022 | 单细胞数据分析工具 | 联合分析基因表达与染色质开放程度，推断细胞状态变化中的调控关系 |
| CuspAI 的 MIRA | 工业材料设计平台 | 根据客户的性能要求生成候选结构，并筛选值得进入实验的材料 |
| 深度原理的 Mira Science | 科研智能体平台 | 将研究任务分配给模型和计算工具，产出可检查的代码、图表和运行记录 |

## 医疗时间序列基座模型

医院记录的心率可能每分钟有一个读数，某项化验却可能隔几个小时才测一次。两个相邻读数之间实际过了多久，会影响对变化趋势的判断。微软研究团队等人开发的 MIRA 同时利用测量值和时间信息，处理采样间隔不规则、采样频率不同或有缺测的记录。

这里的“基座”指预先在大量医疗记录上训练一套参数，再把这套参数用于新的时序预测任务。作者报告的预训练数据超过 4,540 亿个观测时间点。论文用未参与训练的数据集评估迁移后的预测误差，代码仓库给出了包含序列、时间戳和缺失标记的输入示例。[NeurIPS 论文](https://proceedings.neurips.cc/paper_files/paper/2025/hash/8e12ba543adc673da5b89c9311fcf72c-Abstract-Conference.html) · [微软代码仓库](https://github.com/microsoft/MIRA)

## 单细胞调控分析工具

2022 年发表在《Nature Methods》的 MIRA，全称为 *Multimodal models for Integrated Regulatory Analysis*。它以 Python 软件包形式提供。研究人员可以对照两类测量：细胞里哪些基因正在表达，以及哪些 DNA 区域处于较开放、容易被读取的状态。软件利用这些信号，推断细胞状态变化时可能参与调控的因素。遇到 RNA-seq、ATAC-seq 或 cistrome/MIRA 等关键词，通常指这套工具。[原始论文](https://www.nature.com/articles/s41592-022-01595-z) · [软件文档](https://mira-multiome.readthedocs.io/en/latest/) · [组学领域指南](/guides/omics/)

## 材料研发中的两个同名商业产品

**CuspAI 的 MIRA** 面向有明确材料需求的企业。平台根据性能要求生成结构，调用模拟工具筛选，再通过实验合作伙伴推进合成与测量。水处理公司 Kemira 披露，双方针对三种含氟污染物得到超过 5,000 个材料设计，约 20 个优先候选进入后续开发和测试。这组数字描述的是设计阶段的交付进度。[投资方对 MIRA 的说明](https://www.nea.com/blog/from-algorithms-to-atoms-part-ii-doubling-down-on-cuspai) · [Kemira 公告](https://www.kemira.com/news-and-stories/newsroom/releases/new-ai-designed-materials-show-promising-potential-to-remove-forever-chemicals-from-drinking-water-in-industry-first-breakthrough/) · [CuspAI 公司档案](/startups/cuspai/)

**深度原理的 Mira Science** 供研究人员组织和执行科研任务。以公司公开的聚合物案例为例，Mira 调用分子动力学软件，在两次独立模拟中比较聚合物链随温度变化的形态，保留了图表、代码和计算记录。这个结果可以用于选择后续实验。材料受力时产生电信号的能力是否改善，还要做实物测量。公司文档里的 **Hydrogen-1.0** 是可与 Mira 搭配的科学模型，**Mira Science** 是研究人员操作的整套软件。[产品演示](https://blog.deepprinciple.com/introducing-mira-science-zh/) · [模型说明](https://blog.deepprinciple.com/introducing-hydrogen-1.0/) · [深度原理公司档案](/startups/deep-principle/)

另有一个拼作 **Mirai** 的医学影像模型，末尾多一个字母 i。它根据乳腺 X 线影像预测未来乳腺癌风险，在七家医疗机构的数据上做过验证。医学文献同时出现 *mammography* 和 *Mirai* 时，对应的是这个影像项目。[多机构验证论文](https://pubmed.ncbi.nlm.nih.gov/34767469/) · [临床研究指南](/guides/clinical/)
