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

## 项目与团队

AlphaFold Protein Structure Database（AFDB）是 Google DeepMind 与欧洲分子生物学实验室欧洲生物信息学研究所（EMBL-EBI）共同维护的开放数据库。两家团队从 2021 年起把预先计算的蛋白质三维坐标、对应序列和置信度一道公开。研究者可以按序列找到一个模型、核对某个结构域的可靠性，也可以下载一个物种的蛋白质组，比较不同蛋白的折叠。2026 年 9 月的公告统计了超过 2.6 亿个蛋白质及复合物预测。一条蛋白质序列可能有多个来源的模型，也可能出现在复合物中，因此这个数字统计的是预测记录。[建库公告](https://www.ebi.ac.uk/about/news/announcements/alphafold-database-launch/) · [数据库规模](https://www.ebi.ac.uk/about/news/technology-and-innovation/alphafold-database-adds-viral-protein-complexes-to-support-pandemic-preparedness/) · [条目标识说明](https://alphafold.ebi.ac.uk/faq)

John Jumper 等人开发的 AlphaFold 2 为首批预测提供了方法基础。Sameer Velankar 领导的欧洲蛋白质结构数据库（PDBe）团队参与创建 AFDB，把预测结果与已有的序列、实验结构记录联系起来。双方于 2025 年 10 月宣布续约，继续开放并更新数据。[方法论文](https://doi.org/10.1038/s41586-021-03819-2) · [Velankar 团队](https://www.ebi.ac.uk/people/person/sameer-velankar/) · [建库纪实](https://www.embl.org/news/science/alphafold-using-open-data-and-ai-to-discover-the-3d-protein-universe/) · [续约公告](https://www.ebi.ac.uk/about/news/technology-and-innovation/google-deepmind-partnership-renewal/)

## 研究成果与工具

### 技术与数据访问

每条预测记录都给出建模的序列、坐标、来源和版本。把预测与实验对照时，需要核对物种、序列和异构体。不同剪接产物可能增减一个结构域，使用同一基因名称也不能保证残基编号相同。条目页面可以联动查看三维模型、预测误差图和结构域边界。API 适合按条目读取数据，FTP 提供蛋白质组归档，Google Cloud Public Datasets 提供大规模数据访问。引用某次分析时，记录条目标识和数据版本才能区分序列变更、坐标更新与元数据修订。[条目导航](https://www.ebi.ac.uk/training/online/courses/navigating-alphafold-database/what-is-the-afdb/) · [数据库论文](https://doi.org/10.1093/nar/gkaf1226) · [版本说明](https://www.ebi.ac.uk/pdbe/news/alphafold-database-release-notes)

### 预测置信度与实验验证

| 研究问题 | 可读出的信息 | 解释边界 |
| --- | --- | --- |
| 一段链的局部结构有多可靠？ | pLDDT 按残基计分，范围为 0 至 100，分值越高表示模型对局部几何形状越有把握。 | 连续低分可能来自柔性、无序或建模困难，单凭分数无法区分。 |
| 两个结构域的相对朝向有多可靠？ | 预测对齐误差（PAE）以埃为单位，估计对齐一个位置后另一个位置的误差。 | 两个域各自的 pLDDT 可以很高，跨域 PAE 仍可能很大，此时域间夹角缺乏约束。 |
| 两条链在细胞中是否结合？ | 跨链 PAE 和界面置信度可以用于判断模型对装配几何形状的把握。 | 结合是否发生、所需条件和亲和力，需要独立的相互作用证据。 |

首批人类蛋白质组研究说明了覆盖率与置信度的差别。当时 98.5% 的人类蛋白有预测，按全部氨基酸残基计算，达到可信标准的占 58%，其中达到很高置信度的占全部残基的 36%。评估特定样品时还要考虑构象、实验条件和结合伙伴。[人类蛋白质组原始研究](https://doi.org/10.1038/s41586-021-03828-1) · [置信度教程](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/evaluating-alphafolds-predicted-structures-using-confidence-scores/) · [复合物评分](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/evaluating-alphafolds-predicted-structures-using-confidence-scores/confidence-scores-in-alphafold-multimer/)

2021 年，布鲁克海文国家实验室的研究者遇到两份意外结晶的蛋白质样品。他们将超过 4,000 个大肠杆菌预测模型与衍射数据比较，通过分子置换辨认出 YncE 和 YadF，并用实验数据求得结构。两次鉴定均依赖实测衍射数据，也依赖候选库中存在与晶体构象足够接近的模型。[晶体学应用论文](https://doi.org/10.3390/cryst11101227)

## 合作机构与分工

| 团队 | 对数据库的贡献 |
| --- | --- |
| Google DeepMind 与 EMBL-EBI | DeepMind 提供预测方法和大规模模型。EMBL-EBI 负责结构生物数据的管理与服务，双方共同开发数据库、维护网页和公开数据。[首篇数据库论文](https://doi.org/10.1093/nar/gkab1061) |
| 伦敦大学学院（UCL）的 TED 团队 | 为预测结构划分结构域，并与 CATH 结构分类比对。AFDB 将边界、分类和质量指标展示在对应条目。[TED 原始论文](https://doi.org/10.1126/science.adq4946) · [整合论文](https://doi.org/10.1093/nar/gkaf1226) |
| 首尔大学 Martin Steinegger 实验室与 NVIDIA | 在 2026 年二聚体合作中共同开发适于大规模计算的方法。NVIDIA 提供基础设施并扩展推理计算，EMBL-EBI 协调合作和分析数据，再与 DeepMind 将结果接入数据库。[四方合作公告](https://www.ebi.ac.uk/about/news/technology-and-innovation/first-complexes-alphafold-database/) |
| 专题数据贡献团队 | 领域团队提供各自生成的预测。AFDB 在条目、下载文件元数据和合作方页面标明出处，同一序列上的多个预测可以追溯到各自的提供者。[社区数据政策](https://www.ebi.ac.uk/about/news/updates-from-data-resources/alphafold-database-community-datasets/) |

## 经费与资源

数据库论文将 **Google DeepMind 和欧洲分子生物学实验室（EMBL）** 列为 AFDB 的出资方，未列数据库年度预算或双方分摊额。论文另披露支持作者工作的研究资助，包括英国生物技术与生物科学研究理事会的 BB/Y000455/1 和 Wellcome 的 310300/Z/24/Z（均列在 Sameer Velankar 名下），以及支持 Christine Orengo 与首尔大学研究者的项目。EMBL 另承担这篇论文的开放发表费。[论文经费披露](https://doi.org/10.1093/nar/gkaf1226)

复合物合作还披露了计算资源的规模。NVIDIA 提供计算基础设施，团队集中发布结果供研究者复用。EMBL-EBI 在 2026 年 3 月估计，重新生成该批数据需要约 1,700 万 GPU 小时。这个数字衡量重算工作量，公告没有给出实际现金支出。[计算投入说明](https://www.ebi.ac.uk/about/news/technology-and-innovation/first-complexes-alphafold-database/)

## 研究动态

- **2021 年 7 月 15 日｜公开首批入库模型的方法依据。** Jumper 等人发表 AlphaFold 2 方法论文，报告其在 2020 年 CASP14 盲测中与实验结构的比较。盲测衡量的是当届目标上的预测精度，具体数据库条目仍需读取自身的置信度。[AlphaFold 2 方法论文](https://doi.org/10.1038/s41586-021-03819-2)
- **2021 年 7 月 22 日｜数据库首发。** 两家机构开放超过 35 万个预测，覆盖人类和模式生物。同日发表的人类蛋白质组论文逐残基报告置信度，使研究者能判断一条有预测的序列究竟有多少区域可用。[首发公告](https://www.ebi.ac.uk/about/news/announcements/alphafold-database-launch/) · [覆盖分析](https://doi.org/10.1038/s41586-021-03828-1)
- **2022 年 7 月 28 日｜从近百万个模型扩至超过 2 亿个。** 数据库此前已收录经人工审校的 Swiss-Prot 序列和新增蛋白质组，此次将预测扩展至当时绝大多数已编目的蛋白质序列，并开放批量访问。覆盖范围受当时序列库的收录情况限制。[扩容公告](https://www.ebi.ac.uk/about/news/technology-and-innovation/alphafold-200-million/)
- **2023 年 9 至 11 月｜从查单个蛋白到查同类结构。** 9 月 13 日发表的 Foldseek 聚类研究在库中找到约 230 万个包含至少两个成员的结构簇。10 月 26 日，网站上线按序列相似性搜索及结构簇成员展示。11 月 2 日在线发表的数据库论文记录了超过 2.14 亿条预测及其在 UniProt、InterPro 等资源中的整合。一个结构簇可以提供功能研究线索，簇内蛋白的具体作用仍需分别确认。[结构聚类论文](https://doi.org/10.1038/s41586-023-06510-w) · [功能上线公告](https://www.ebi.ac.uk/about/news/updates-from-data-resources/alphafold-database-update-sequence-based-search/) · [数据库论文](https://doi.org/10.1093/nar/gkad1011)
- **2024 年 9 月 12 日｜接入 Foldseek 结构搜索。** 研究者可以从三维结构相似性出发寻找候选，即使两条序列已经明显分化。结构相似程度可用于提出比较对象，功能解释还要结合实验和进化证据。[功能发布公告](https://www.ebi.ac.uk/about/news/updates-from-data-resources/alphafold-foldseek/)
- **2025 年 10 月 7 日及 21 日｜续约、序列同步与版本说明。** 双方宣布续约并与 UniProt 2025_03 同步。随后发布的 v6 说明列出 241,070,489 个结构预测，含 40,054 个异构体预测。约 1.75 亿个序列未变的条目沿用 v4 的坐标，因此同一条目版本号升级后，仍需核实坐标是否更新。[续约公告](https://www.ebi.ac.uk/about/news/technology-and-innovation/google-deepmind-partnership-renewal/) · [v6 发布说明](https://www.ebi.ac.uk/pdbe/news/alphafold-database-release-notes)
- **2025 年 11 月 22 日｜数据库论文公开结构域注释的覆盖范围。** Bertoni 等人记录了超过 3.61 亿个 TED 结构域注释，覆盖超过 1.65 亿个蛋白。TED 综合三种方法确定边界，再与 CATH 分类比较。条目还提供建模用多序列比对和比对深度，让研究者同时检查序列支持程度和边界共识。此文编入 2026 年 1 月数据库专刊。[数据库论文](https://doi.org/10.1093/nar/gkaf1226)
- **2026 年 2 月 17 日｜开始收录社区数据集。** 首批包含 AllTheBacteria 提供的 1,700 多万个细菌蛋白结构预测。当时的投稿规则要求使用 AlphaFold 2 并说明科学价值。外部数据扩大了通用序列库的覆盖面，也使来源和版本成为跨数据集比较的必要条件。[社区数据发布公告](https://www.ebi.ac.uk/about/news/updates-from-data-resources/alphafold-database-community-datasets/)
- **2026 年 3 月 16 日、5 月 19 日｜分批公开同源和异源二聚体。** 3 月约 170 万个高置信度同源二聚体进入数据库，另约 1,800 万个较低置信度模型可批量下载。公告用黏菌的转录延伸因子举例，两条相同链在模型中各贡献半个结构域，提出了单链模型难以揭示的装配假设。5 月新增近 8 万个高置信度异源二聚体，另有 810 万个较低置信度模型可批量下载。网页经过置信度筛选，单用网页条目估算二聚体的发生比例会产生选择偏差。[首发公告与 5 月增补](https://www.ebi.ac.uk/about/news/technology-and-innovation/first-complexes-alphafold-database/)
- **2026 年 9 月 24 日｜扩展专题复合物数据。** AFDB 收录覆盖 2,800 多种病毒的复合物预测。多机构合作的数据和瑞典隆德大学独立计算的数据在同次发布中开放，说明统一的数据库可以保存多个来源的预测。具体构象及相互作用仍需实验验证。[专题发布公告](https://www.ebi.ac.uk/about/news/technology-and-innovation/alphafold-database-adds-viral-protein-complexes-to-support-pandemic-preparedness/)
- **2026 年 10 月｜从模型中的残基回查文献。** 数据库首页新增残基级注释，通过 SIFTS 将实验结构中有文献记录的位点映射到 UniProt 序列和预测模型。2024 年配套研究在允许部分匹配的评价中报告实体识别 F1 为 0.91。这一指标衡量从论文识别文字标注的效果。要判断具体残基的功能，还须回到原始实验及其样品条件。截至 2026 年 11 月 20 日，首页将这次更新标为 10 月，未给出具体日期。[数据库更新](https://alphafold.ebi.ac.uk/) · [文本挖掘原始研究](https://doi.org/10.1038/s41597-024-03841-9) · [位点映射与验证](https://doi.org/10.1107/S2059798326000021)

## 相关链接

- [AlphaFold DB 检索入口与 CC BY 4.0 数据许可](https://alphafold.ebi.ac.uk/)
- [批量数据、下载格式与版本](https://alphafold.ebi.ac.uk/download)
- [AlphaFold DB API 文档](https://alphafold.ebi.ac.uk/api-docs)
- [EMBL-EBI 数据库导航教程](https://www.ebi.ac.uk/training/online/courses/navigating-alphafold-database/)
