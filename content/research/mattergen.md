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

## 项目概览

给定一个目标，例如希望材料抗压缩的程度达到 200 GPa，MatterGen 可以提出一批无机晶体的元素组成和三维结构。研究者随后计算哪些候选值得做，并选择样品合成、测量。模型、权重和评估代码已公开。判断其发现能力时有两项不同的证据：计算基准显示它能高效提出候选，首个合成样品是否代表新晶相则有公开的晶体学争议。以下进展截至 2026 年 11 月 20 日。[微软材料研究项目](https://www.microsoft.com/en-us/research/project/materials/) · [原始论文](https://doi.org/10.1038/s41586-025-08628-5) · [独立复核](https://doi.org/10.1039/D6MH00268D)

## 机构与团队分工

微软研究院 AI for Science 的材料设计团队开发了模型。原始论文列有英国剑桥、德国柏林、美国雷德蒙德、荷兰阿姆斯特丹，以及中国上海、北京和深圳的作者单位。Tian Xie 与 Ryota Tomioka 共同领导研究，与 Claudio Zeni、Robert Pinsler、Daniel Zügner、Andrew Fowler、Matthew Horton 共同设计方法并开展计算实验。Xiang Fu 主导性质适配模块，Aliaksandra Shysheya 实现对称性约束，Jake Smith 实现带隙计算流程，Ziheng Lu 等五人开发机器学习力场。[作者单位](https://pubmed.ncbi.nlm.nih.gov/39821164/) · [论文作者贡献](https://pmc.ncbi.nlm.nih.gov/articles/PMC11922738/#notes3)

中国科学院深圳先进技术研究院参与样品验证。原文将合成和表征归于 Zilong Wang、Chunlei Yang 和 Wenjie Li 三位负责人。美国约翰斯·霍普金斯大学应用物理实验室（APL）是后续研究测试方，通过研究访问计划向微软反馈模型在氧化物超导材料研究中的表现。[微软实验报道](https://www.microsoft.com/en-us/research/blog/mattergen-a-new-paradigm-of-materials-design-with-generative-ai/) · [APL 合作公告](https://www.jhuapl.edu/news/news-releases/250402-artificial-intelligence-advance-robotics-materials-discovery)

## 技术与验证

基础模型从约 60.8 万个 Materials Project 和 Alexandria 结构学习。它从随机晶胞出发，逐步确定元素种类、原子在晶胞内的相对坐标和晶格矢量。若研究者要指定某种性质，可用带标签的结构训练附加的适配模块，再按元素体系、空间群、体积模量、带隙或磁性等约束采样。公开模型的训练和评估范围限于每个原胞至多 20 个原子的无机晶体。性质标签稀少时，模型卡提示极端目标值的可靠性会下降。[技术论文](https://doi.org/10.1038/s41586-025-08628-5) · [模型卡](https://huggingface.co/microsoft/mattergen)

**怎样读 38.57% 的成功率？** 作者无条件生成 1,024 个样本，其中 38.57% 同时通过三项计算判据：能量距参考凸包低于 0.1 eV/原子、在生成批次内不重复、与参考库中的结构不匹配。这个指标衡量给定数据库和匹配规则下的候选质量。实验可合成率需要另行测定。代码库给出了评估程序，但因许可限制，未分发论文用于对照的完整 ICSD 晶体结构集，第三方复算的新颖性比例可能不同。[模型卡](https://huggingface.co/microsoft/mattergen) · [官方评估数据说明](https://github.com/microsoft/mattergen#data-release)

## 项目进展与近期博客

### 2026 年 10 月 16 日｜东京大学用电子信息改进条件生成

东京大学生产技术研究所发布独立扩展 MatterGen-e⁻。Ibuki Okuda、Teruyasu Mizoguchi 等把每个原子的 Bader 电荷和电子态密度描述符加入生成过程，让模型同时学习原子排布和局部电子环境。在带隙和形成能任务中，满足有效、稳定、唯一及新颖四项计算判据的结构数量增加；将描述符换成噪声或无物理意义的变量，改进随之消失。这项对照支持电子信息对条件生成的作用。该研究报告的是东京大学派生模型的计算表现。[东京大学原文](https://www.iis.u-tokyo.ac.jp/en/news/5168/) · [研究论文](https://doi.org/10.1038/s41524-026-02322-4)

### 2026 年 9 月 11 日｜深圳 MatBrain 将 MatterGen 接入研究工具链

深圳先进院喻学锋团队说明，MatBrain 的执行模型 Mat-T1 可以调用 MatterGen 生成晶体，也可以调用 Materials Project 查询结构、调用其他软件计算性质。其电催化案例从候选结构经过多阶段筛选推进到实验，提供了外部团队将生成器嵌入实际研究流程的例子。公布的约 3 万个候选以及后续实验是整套 MatBrain 流程的结果，不能据此推算 MatterGen 单独的实验命中率。[深圳先进院原文](https://cxqjzx.siat.ac.cn/siat/iamse/yjsgk/kyjz/2026091114590445627/index.html)

### 2026 年 7 月 22 日｜微软披露与 APL 的自主实验室合作方向

APL 早在 2025 年 4 月 2 日就已确认测试 MatterGen，并计划在氧化物超导材料上研究提出候选、制样和测量的衔接。微软在 Genesis Mission 公告中进一步说明，双方正支持将 MatterGen 和负责模拟的 MatterSim 接入面向结构材料、超导体的自主实验室。两份公告证实了研究访问与集成方向，均未披露由此制得的超导材料、转变温度或连续运行产量。[APL 原文](https://www.jhuapl.edu/news/news-releases/250402-artificial-intelligence-advance-robotics-materials-discovery) · [微软 Genesis 公告](https://blogs.microsoft.com/blog/2026/07/22/powering-americas-genesis-mission-microsofts-commitment-to-scientific-discovery/)

### 2026 年 4 月 20 日｜独立复核质疑首个样品的新颖性

Mikkel Juelsholt 在《Materials Horizons》重新分析公开的粉末 X 射线衍射数据。他发现训练集中已有的无序钽铬氧化物 Ta₁/₂Cr₁/₂O₂ 也能很好解释图谱，并据此判断实验样品属于已知相。争议涉及钽和铬是否共享晶格位置，以及实验数据能否支持预测的占位和组成。原工作留下了可复查的样品数据；只用模型生成式和参考库自动匹配结果，尚不足以确认发现了独立新相。[复核论文](https://doi.org/10.1039/D6MH00268D) · [原研究数据](https://github.com/microsoft/mattergen/tree/main/data-release)

### 2025 年 1 月 16 日｜公开模型和钽铬氧化物实验

微软发布模型与代码，并在《Nature》报告了目标体积模量为 200 GPa 的 TaCr₂O₆ 候选。有序预测结构的密度泛函计算值为 222 GPa。实验团队用纳米压痕测量杨氏模量，再用计算得到的泊松比 0.30 换算体积模量。四次估算为 **158 ± 11 GPa**，最高为 **169 GPa**。作者考虑到粉末样品可能未压实，选取最高值作为最佳估计，得到与目标相差约 15.5% 的结论。这个口径解释了博客中“误差低于 20%”的由来，也保留了测量离散程度。[微软发布博客](https://www.microsoft.com/en-us/research/blog/mattergen-a-new-paradigm-of-materials-design-with-generative-ai/) · [论文图 6 与实验说明](https://pmc.ncbi.nlm.nih.gov/articles/PMC11922738/)

## 资金与业务

微软支持基础模型研发，论文致谢 AI on Xbox 团队提供部分算力。微软 2026 年公布的 **6,000 万美元**面向美国能源部整个 Genesis Mission，含三年内提供的 **4,000 万美元 Azure 计算与 AI 额度**及 **2,000 万美元工程支持服务**。公告列出多家实验室及多个研究方向，未给出分配给 MatterGen 或 APL 材料任务的金额。原始论文及项目公告亦未披露模型专属预算或独立融资轮次。[论文致谢](https://pmc.ncbi.nlm.nih.gov/articles/PMC11922738/) · [微软资金公告](https://blogs.microsoft.com/blog/2026/07/22/powering-americas-genesis-mission-microsofts-commitment-to-scientific-discovery/)

交付方式包括 MIT 许可的实现、可下载权重与微调数据，以及 Microsoft Foundry 模型目录。材料建模团队可以自行运行，实验机构也可将其接入既有研究流程。APL 的测试、深圳的工具集成和东京大学的派生模型都有机构公开记录；这些记录未披露付费合同、模型收入或工业生产规模。[官方仓库](https://github.com/microsoft/mattergen) · [Foundry 目录](https://ai.azure.com/catalog/models/MatterGen)

## 相关链接

- [微软材料设计团队主页](https://www.microsoft.com/en-us/research/project/materials/)
- [MatterGen 代码、训练集与实验数据](https://github.com/microsoft/mattergen)
- [Hugging Face 模型卡与权重](https://huggingface.co/microsoft/mattergen)
- [《Nature》原始论文与补充材料](https://doi.org/10.1038/s41586-025-08628-5)
- [《Materials Horizons》对实验样品的晶体学复核](https://doi.org/10.1039/D6MH00268D)
- [MatterGen 项目标识](https://github.com/microsoft/mattergen/blob/main/assets/MatterGenlogo_.png)
