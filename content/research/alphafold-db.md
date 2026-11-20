---
title: "AlphaFold Protein Structure Database"
type: "research"
collection: "开放数据库"
logo: "/logos/alphafold-db.png"
category: "生命科学"
format: "开放数据库"
region: "跨国"
areas: ["生命科学"]
stages: ["Propose · 提出候选"]
summary: "将预测蛋白质结构与置信度开放给研究者查阅和下载。"
countries: ["英国","美国","韩国"]
directions: ["Propose"]
maturity: "实际部署"
---

## 项目概览

研究者拿到一条蛋白质序列，常常先想知道它折成什么形状、哪几段可能一起工作。AlphaFold Protein Structure Database（AFDB）把预先算好的三维结构、置信度和序列标识一起发布，研究者可以直接查阅一个模型，也可以下载整个蛋白质组做比较。2021 年 7 月首发时有逾 35 万个预测，2026 年 9 月官方报告收录超过 2.6 亿个蛋白质及复合物预测。同一蛋白质可能对应不同的异构体、片段或来源，因此模型数量不能直接换算成独立蛋白质的数量。[首发公告](https://www.ebi.ac.uk/about/news/announcements/alphafold-database-launch/) · [2026 年规模说明](https://www.ebi.ac.uk/about/news/technology-and-innovation/alphafold-database-adds-viral-protein-complexes-to-support-pandemic-preparedness/) · [条目标识说明](https://alphafold.ebi.ac.uk/faq)

**一个实际用途是辨认晶体里的未知蛋白。** 布鲁克海文国家实验室的研究者在两份结晶样品中遇到意外结晶的蛋白质，手头只有衍射数据。他们逐一尝试数据库中超过 4,000 个大肠杆菌预测结构作为分子置换的搜索模型，成功辨认出 YncE 和 YadF，并用衍射数据求得结构。数据库在这里提供候选形状，实验测量决定哪一个能解释样品。这两例也说明了这种搜索的适用条件：要有衍射数据，候选集合中还须有足够接近晶体构象的模型。[应用论文](https://doi.org/10.3390/cryst11101227)

## 团队与分工

- **英国欣克斯顿的 EMBL-EBI 与伦敦的 Google DeepMind** 是建库双方。DeepMind 开发预测方法并提供大规模模型，EMBL-EBI 的欧洲蛋白质结构数据库团队（PDBe）参与建库、数据管理、可视化和发布。Sameer Velankar 领导的团队是资源的共同创建者，亦负责实验结构数据资源，使预测模型可以和已有结构记录相互参照。双方于 2025 年 10 月宣布续约。[建库案例](https://www.embl.org/news/science/alphafold-using-open-data-and-ai-to-discover-the-3d-protein-universe/) · [Velankar 团队](https://www.ebi.ac.uk/people/person/sameer-velankar/) · [续约公告](https://www.ebi.ac.uk/about/news/technology-and-innovation/google-deepmind-partnership-renewal/)
- **美国 NVIDIA 与韩国首尔大学 Martin Steinegger 实验室** 共同开发了复合物批量预测方法，加速多序列比对与模型推理。NVIDIA 提供计算基础设施并扩大推理规模，EMBL-EBI 协调合作、分析数据，与 DeepMind 共同将结果接入数据库。这一分工适用于 2026 年复合物合作。[四方项目说明](https://www.ebi.ac.uk/about/news/technology-and-innovation/first-complexes-alphafold-database/)
- **专题数据贡献者** 对各自的数据集负责。2026 年 2 月起，领域团队可以提交满足科学理由和建模方法要求的大规模预测。数据库在条目、下载文件的元数据和合作方页面标出提供者，同一蛋白质的不同来源模型因此可以追溯比较。[社区数据政策](https://www.ebi.ac.uk/about/news/updates-from-data-resources/alphafold-database-community-datasets/)

## 技术与证据解读

AFDB 将预测坐标与 UniProt 序列关联。查条目时先核对物种、序列、异构体、来源与模型版本，再看三维视图和误差图。同一个基因的不同剪接产物可能增减一段结构域，单看基因名会把位置编号或结构结论套到另一条序列上。记录的模型和版本也可以通过 API、蛋白质组归档或云端数据集取得。[条目导航](https://www.ebi.ac.uk/training/online/courses/navigating-alphafold-database/what-is-the-afdb/) · [数据版本与访问论文](https://doi.org/10.1093/nar/gkaf1226)

| 研究问题 | 可用证据及其边界 |
| --- | --- |
| 这段链折得可靠吗？ | pLDDT 是每个残基的局部置信度，范围为 0 至 100。连续低分可能见于柔性或无序区域，也可能来自预测困难，仅凭低分无法区分原因。 |
| 两个结构域的朝向可靠吗？ | PAE 表示以一处为对齐基准时，模型预计另一处有多大位置误差，单位为埃。两个结构域内部都可有高 pLDDT，而跨域 PAE 仍很高，此时不宜据图断言它们具有固定夹角。 |
| 两条链在细胞中会结合吗？ | 跨链 PAE 和界面置信度有助于评估候选界面的几何排布。是否发生结合、在什么条件下结合、亲和力多大，需要独立的相互作用证据。 |

这些指标是模型对不同层面误差的估计。用于解释样品时，还要考虑实验条件、蛋白所处的构象和其他结合伙伴。[置信度说明](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/evaluating-alphafolds-predicted-structures-using-confidence-scores/) · [复合物界面评分](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/evaluating-alphafolds-predicted-structures-using-confidence-scores/confidence-scores-in-alphafold-multimer/)

## 项目进展与近期文章分析

### 2026 年 10 月：从模型中的一个残基查回实验文献

截至 2026 年 11 月 20 日，数据库首页最近一项注明月份的技术更新是残基级文献注释。团队用文本识别模型抽取论文中提到的残基和点突变，通过 SIFTS 对应实验结构中的位置与 UniProt 序列，再把文献链接显示在预测模型的对应位置。研究者因此可以判断某个残基究竟在哪项实验、哪种样品中被研究过。配套方法论文在独立测试集上报告实体识别 F1 为 0.91，采用允许部分匹配的评价方式。这个分数衡量文字识别，具体的功能结论仍需读原始论文；映射到某个位点的实验证据也只支持相应观察。[数据库更新](https://alphafold.ebi.ac.uk/) · [文本挖掘方法原文](https://doi.org/10.1038/s41597-024-03841-9)

### 2026 年 9 月 24 日：专题复合物扩展

EMBL-EBI 公布一批覆盖 2,800 多种病毒的复合物模型，并介绍了团队如何汇集经过整理的蛋白质组和基准数据，再统一公开预测。这次发布的基础设施意义在于，网站能同时承载通用预测和多机构专题数据。其结果可用于查询结构假设；构象、相互作用及其生物学意义仍需在具体体系中验证。[EMBL-EBI 公告原文](https://www.ebi.ac.uk/about/news/technology-and-innovation/alphafold-database-adds-viral-protein-complexes-to-support-pandemic-preparedness/)

### 2026 年 3 月 16 日发布、5 月 19 日更新：哪些二聚体能在网页上查到

3 月发布时，约 170 万个高置信度同源二聚体预测进入数据库，另有约 1,800 万个较低置信度同源二聚体可批量下载。5 月的更新增加近 8 万个高置信度异源二聚体，另提供 810 万个较低置信度异源二聚体供批量下载。文章用黏菌的一个转录延伸因子举例：模型中的单链看似无序，两条相同链共同折叠时各贡献半个结构域。这给出了可检验的装配假设。网页展示经过置信度筛选，用网页条目估计不同蛋白形成二聚体的比例会产生选择偏差。[发布公告及 5 月增补原文](https://www.ebi.ac.uk/about/news/technology-and-innovation/first-complexes-alphafold-database/)

### 2026 年 2 月 17 日：开放社区数据集收录

团队开始收录外部研究者生成的预测，首批包括 AllTheBacteria 提供的 1,700 多万个细菌蛋白结构。公告当时要求投稿采用 AlphaFold 2 并说明其科学价值，发布时保留来源信息。这种做法让专业团队能够补足通用序列库的覆盖缺口，也让同一条目可能出现多个模型。跨数据集比较应核对来源、输入序列与版本。[社区数据发布原文](https://www.ebi.ac.uk/about/news/updates-from-data-resources/alphafold-database-community-datasets/)

### 2025 年 11 月 22 日在线发表：让序列、结构域与预测版本对应

Bertoni 等人的数据库论文记录了 AFDB 与 UniProt 2025_03 重新同步，并提供异构体预测、建模用多序列比对及其深度。条目还纳入 TED 的结构域划分：三种方法对边界形成共识，再将预测结构域与 CATH 分类比对。超过 3.61 亿条结构域注释覆盖超过 1.65 亿个蛋白。研究者现在可以把一个结构域的边界、预测可靠性和分类依据放在同一条目里比较；算法对边界的一致程度与该结构域的功能是否已被证实，仍是两个不同问题。论文编入 2026 年 1 月的数据库专刊。[数据库论文原文](https://doi.org/10.1093/nar/gkaf1226)

## 经费与资源投入

数据库论文明确将 **Google DeepMind 与欧洲分子生物学实验室（EMBL）列为 AFDB 的出资方**。论文另列支持作者研究的专项，包括英国生物技术与生物科学研究理事会给 Sameer Velankar 的 BB/Y000455/1、Wellcome 给他的 310300/Z/24/Z，以及支持 Christine Orengo 和首尔大学团队的其他项目。论文将这些课题资助与数据库出资分开列示，未公布 AFDB 年度预算或双方分摊金额。EMBL 另承担该论文的开放发表费。[论文经费披露](https://doi.org/10.1093/nar/gkaf1226)

复合物项目另有可核查的实物投入：NVIDIA 提供基础设施并扩展推理流水线。EMBL-EBI 估算，重新生成这批集中托管的数据需要约 1,700 万 GPU 小时。该数值衡量重算工作量，公告未给出对应的现金支出。[计算投入说明](https://www.ebi.ac.uk/about/news/technology-and-innovation/first-complexes-alphafold-database/)

## 相关链接

- [AlphaFold DB 入口与 CC BY 4.0 数据许可](https://alphafold.ebi.ac.uk/)
- [批量数据、下载格式与版本](https://alphafold.ebi.ac.uk/download)
- [AlphaFold DB API 文档](https://alphafold.ebi.ac.uk/api-docs)
- [EMBL-EBI 数据库导航教程](https://www.ebi.ac.uk/training/online/courses/navigating-alphafold-database/)
- [AlphaFold DB 网站图标](https://alphafold.ebi.ac.uk/)
