---
title: "MatterGen"
type: "research"
collection: "研究模型与方法"
logo: "/logos/mattergen.png"
category: "材料研发"
format: "科学模型"
region: "跨国"
countries: ["英国", "德国", "美国", "荷兰", "中国"]
areas: ["材料科学"]
stages: ["Propose · 提出候选"]
directions: ["Propose"]
maturity: "公开可用"
summary: "按目标性质生成无机晶体候选，再由实验团队验证选定样品。"
---

## 项目与团队

如果目标是一种体积模量接近 200 GPa 的材料，哪些元素可能组成这样的晶体，原子又该如何排列？微软研究院 AI for Science 的 MatterGen 从目标性质出发，提出可供计算筛选和实验检验的无机晶体结构。研究团队公开了模型、权重和评估代码，还公开了首个钽铬氧化物样品的衍射和力学数据。此后有研究者用同一份衍射数据对样品的晶相归属提出了不同解释。[微软材料研究项目](https://www.microsoft.com/en-us/research/project/materials/) · [《Nature》原始论文](https://doi.org/10.1038/s41586-025-08628-5) · [独立复核](https://doi.org/10.1039/D6MH00268D)

Tian Xie 与 Ryota Tomioka 共同领导研究，并与 Claudio Zeni、Robert Pinsler、Daniel Zügner、Andrew Fowler、Matthew Horton 共同设计方法、开展计算实验。Xiang Fu 负责性质适配模块，Aliaksandra Shysheya 实现对称性约束，Jake Smith 实现带隙计算流程，Ziheng Lu 等五人开发机器学习力场。原论文作者单位分布在英国剑桥、德国柏林、美国雷德蒙德、荷兰阿姆斯特丹，以及中国上海、北京和深圳。[作者单位](https://pubmed.ncbi.nlm.nih.gov/39821164/) · [作者贡献](https://pmc.ncbi.nlm.nih.gov/articles/PMC11922738/#notes3)

## 研究成果与工具

### 技术方法与公开工具

MatterGen 是一个有 4,680 万个参数的扩散模型。它从随机晶胞出发，逐步确定元素种类、原子在晶胞内的相对坐标和晶格矢量。基础模型使用约 60.8 万个来自 Materials Project 和 Alexandria 的结构。带有性质标签的数据则用于训练适配模块，使研究者能指定元素体系、空间群、体积模量、带隙或磁性。训练和评估限于每个原胞至多 20 个原子的无机晶体。对于标签覆盖稀少的极端目标值，模型的可靠性会下降。[技术论文](https://doi.org/10.1038/s41586-025-08628-5) · [模型卡](https://huggingface.co/microsoft/mattergen)

官方仓库提供 MIT 许可的实现、训练与微调数据、考虑元素占位无序的结构匹配程序，以及实验样品的晶体结构文件、衍射谱、光电子能谱和纳米压痕数据。研究者可以下载预训练权重，也可以在 Microsoft Foundry 目录查阅模型。[代码与数据说明](https://github.com/microsoft/mattergen#data-release) · [模型权重](https://huggingface.co/microsoft/mattergen) · [Foundry 模型目录](https://ai.azure.com/catalog/models/MatterGen)

### 计算验证：38.57% 衡量什么

作者无条件生成 1,024 个样本，其中 **38.57%** 同时满足三项判据：能量高出参考凸包不足 0.1 eV/原子、在生成批次内无重复、按作者的结构匹配规则在参考库中找不到对应结构。这个比例衡量的是计算候选的质量，实验可合成率需另行测定。公开的参考集含 845,997 个结构。受许可限制，论文用于对照的约 4,400 个有序和 117,700 个无序 ICSD 结构未随库分发，因此第三方用公开数据复算的新颖性比例可能不同。[模型卡与评估定义](https://huggingface.co/microsoft/mattergen) · [评估数据说明](https://github.com/microsoft/mattergen#data-release)

### 实验验证：抗压缩性质与晶相归属

作者分别以 50、100、150、200 GPa 为目标，每组生成 8,192 个候选。计算筛选留下 75 个，专家选出 4 个尝试合成。团队报告其中一个钽铬氧化物样品与预测相关。对目标为 200 GPa 的有序 TaCr₂O₆，密度泛函理论（DFT）给出的体积模量为 222 GPa。实验团队用纳米压痕测量杨氏模量，再用计算得到的泊松比 0.30 换算体积模量。四次结果为 **158 ± 11 GPa**，最高为 **169 GPa**。作者认为粉末可能未压实，选取最高值作为最佳估计。由此算得与设计目标相差 15.5%，即发布博客所说的“低于 20%”。[论文图 6 与实验说明](https://pmc.ncbi.nlm.nih.gov/articles/PMC11922738/) · [实验原始数据](https://github.com/microsoft/mattergen/tree/main/data-release)

**是否合成了新晶相，取决于钽、铬在晶格中的占位。** Zeni 等将衍射结果解释为预测有序结构的无序形式 Ta₁/₃Cr₂/₃O₂。随后，Mikkel Juelsholt 重新分析公开的粉末 X 射线衍射数据，发现 1971 年已有报道、且训练数据已包含其对应结构的 Ta₁/₂Cr₁/₂O₂ 亦能解释图谱。他据此将样品归为已知相。两项研究对实物身份给出了不同结论。纳米压痕得到的力学数据本身无法鉴别这两种占位解释。[原研究](https://doi.org/10.1038/s41586-025-08628-5) · [《Materials Horizons》晶体学复核](https://doi.org/10.1039/D6MH00268D)

## 合作机构与分工

| 机构 | 研究职责与证据 |
| --- | --- |
| 微软研究院 AI for Science | 开发生成模型、条件适配器和评估方法，用机器学习力场和 DFT 筛选候选。Materials Project 团队提供反馈，其数据库和 Alexandria 数据集均用于模型训练。[作者贡献与致谢](https://www.nature.com/articles/s41586-025-08628-5_reference.pdf) |
| 中国科学院深圳先进技术研究院 | Wenjie Li 团队参与钽铬氧化物的制备和表征。原论文将实验合成和表征归于 Zilong Wang、Chunlei Yang 和 Wenjie Li 三位负责人。[微软实验报道](https://www.microsoft.com/en-us/research/blog/mattergen-a-new-paradigm-of-materials-design-with-generative-ai/) |
| 约翰斯·霍普金斯大学应用物理实验室（APL） | 通过研究访问计划测试模型、向微软反馈结果，关注氧化物超导材料从提出候选到制样与测量的衔接。[APL 研究公告](https://www.jhuapl.edu/news/news-releases/250402-artificial-intelligence-advance-robotics-materials-discovery) |

## 经费与资源

原论文致谢微软 AI on Xbox 团队提供部分算力。模型卡给出了实际计算规模：在 8 张 NVIDIA A100 上训练约 60 万个样本一个轮次约需 6 分钟，在单张 V100 上生成 1,000 个结构约需 2 小时。原论文未披露 MatterGen 专项经费金额。[论文致谢](https://www.nature.com/articles/s41586-025-08628-5_reference.pdf) · [模型卡算力说明](https://huggingface.co/microsoft/mattergen)

微软 2026 年公布的 **6,000 万美元**支持美国能源部整个 Genesis Mission，包括三年内提供的 **4,000 万美元 Azure 计算与 AI 额度**和 **2,000 万美元工程支持服务**。使用 MatterGen 的 APL 自主实验室是公告列举的多个方向之一，分配给这一方向的额度未单列。[微软资助公告](https://blogs.microsoft.com/blog/2026/07/22/powering-americas-genesis-mission-microsofts-commitment-to-scientific-discovery/)

## 研究动态

以下按研究进程排列，资料截至 2026 年 11 月 20 日。

- **2023 年 12 月 6 日｜首次公开性质引导生成方法。** 预印本展示按组成、对称性或性质生成晶体，以及同时约束磁性与元素供应风险的计算实验。团队次日说明，这一阶段主要以 DFT 检验生成结果。[arXiv 首版](https://arxiv.org/abs/2312.03687v1) · [微软研究博客](https://www.microsoft.com/en-us/research/blog/mattergen-property-guided-materials-design/)
- **2025 年 1 月 16 日｜发表同行评议论文，公开模型与钽铬氧化物实验。** 团队在原有计算验证上增加合成、衍射和纳米压痕结果，并发布权重和数据，使外部研究者能够复核样品的结构解释。[《Nature》论文](https://doi.org/10.1038/s41586-025-08628-5) · [微软发布说明](https://www.microsoft.com/en-us/research/blog/mattergen-a-new-paradigm-of-materials-design-with-generative-ai/)
- **2025 年 4 月 2 日｜APL 公布研究访问测试。** APL 确认正在测试 MatterGen，并将氧化物超导材料的预测、制备和测量列为研究方向。公告报道测试安排，未给出新样品或转变温度。[APL 原文](https://www.jhuapl.edu/news/news-releases/250402-artificial-intelligence-advance-robotics-materials-discovery)
- **2025 年 6 月 19 日至 2026 年 4 月 20 日｜独立晶相复核从预印本进入期刊。** Juelsholt 于 2025 年 6 月发布初稿，2026 年 1 月 5 日补充训练集中钽铬氧化物的结构比较，4 月在《Materials Horizons》发表。复核把争议定位到已知无序相能否解释原数据，所用衍射谱来自原研究。[预印本版本记录](https://www.cambridge.org/engage/chemrxiv/article-details/694d24f36e8e74030e9067de) · [期刊论文](https://doi.org/10.1039/D6MH00268D)
- **2026 年 7 月 22 日｜微软披露与 APL 的自主实验室合作方向。** 双方正探索将负责生成的 MatterGen 与负责模拟的 MatterSim 接入结构材料和超导体实验流程。公告未给出连续运行产量或由此测得的超导性质。[微软 Genesis 公告](https://blogs.microsoft.com/blog/2026/07/22/powering-americas-genesis-mission-microsofts-commitment-to-scientific-discovery/)
- **2026 年 9 月 10 日｜深圳先进院发表 MatBrain 工具集成研究。** 喻学锋团队将 MatterGen 接入 Mat-T1 可调用的工具集，与数据库检索和性质计算配合。电催化案例中，完整流程生成约 3 万个候选，48 小时内筛出 38 个重点候选，随后开展实验。这些数字衡量 MatBrain 流程的产出。[原始论文](https://doi.org/10.1038/s42256-026-01298-6) · [深圳先进院报道](https://www.siat.ac.cn/siatxww/kyjz/202609/t20260910_8280613.html) · [团队工具说明](https://cxqjzx.siat.ac.cn/siat/iamse/yjsgk/kyjz/2026091114590445627/index.html)
- **2026 年 10 月 16 日｜东京大学介绍独立派生模型 MatterGen-e⁻。** Ibuki Okuda、Teruyasu Mizoguchi 等将逐原子的 Bader 电荷与电子态密度描述符纳入模型。在带隙、形成能任务中，同时满足有效、稳定、唯一和新颖四项计算判据的候选增多。将描述符换成噪声或无物理意义的变量后，改进消失，为电子信息的作用提供了对照。[东京大学原文](https://www.iis.u-tokyo.ac.jp/en/news/5168/) · [研究论文](https://doi.org/10.1038/s41524-026-02322-4)

## 相关链接

- [微软材料设计团队主页](https://www.microsoft.com/en-us/research/project/materials/)
- [MatterGen 代码、训练集与实验数据](https://github.com/microsoft/mattergen)
- [Hugging Face 模型卡与权重](https://huggingface.co/microsoft/mattergen)
- [《Nature》原始论文与补充材料](https://doi.org/10.1038/s41586-025-08628-5)
- [《Materials Horizons》对实验样品的晶体学复核](https://doi.org/10.1039/D6MH00268D)
- [MatterGen 项目标识](https://github.com/microsoft/mattergen/blob/main/assets/MatterGenlogo_.png)
