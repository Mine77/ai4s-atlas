---
title: "Materials Project"
type: "research"
collection: "开放数据库"
logo: "/logos/materials-project.png"
category: "科研数据基础设施"
format: "开放数据库"
region: "美国"
areas: ["材料科学"]
stages: ["Propose · 提出候选"]
summary: "公开材料结构和计算性质，为筛选候选及比较结果提供数据。"
countries: ["美国"]
directions: ["Propose","Characterize"]
maturity: "实际部署"
---

## 项目与团队

Materials Project（MP）是劳伦斯伯克利国家实验室牵头的开放材料数据库。项目公开晶体结构、形成能、能带和模拟谱图，帮助研究者判断哪些材料值得制备、哪些结构可能解释已有测量。研究者可以在网页上查看一个晶体，也可以通过 API 批量提取结构与性质，训练或检验材料模型。[数据库](https://materialsproject.org/) · [项目团队综述](https://doi.org/10.1038/s41563-025-02272-0)

项目源于麻省理工学院（MIT）的电池电极筛选研究。Kristin Persson 后来把这一做法带到伯克利实验室，与 MIT 的 Gerbrand Ceder 共同发起 MP。博士后 Michael Kocher、实验室科研人员和 MIT 合作者搭建了第一版公共平台。项目后来成为伯克利实验室材料科学部门的核心研究计划。2026 年实验室公布的分工中，Persson 任项目主任，并任教于加州大学伯克利分校，Anubhav Jain 任副主任，计算工程师 Patrick Huck 任技术负责人。[联合发起人介绍](https://ceder.berkeley.edu/publications/2013_Ceder_Scientific_American.pdf) · [实验室项目史](https://research.lbl.gov/2020/10/07/how-the-ldrd-turned-an-idea-into-a-success-kristin-perssons-story/) · [团队现况](https://newscenter.lbl.gov/2026/01/13/accelerating-discovery-how-the-materials-project-is-helping-to-usher-in-the-ai-revolution-for-materials-science/)

## 研究成果与工具

Materials Explorer 支持按组成或性质检索，Phase Diagram 用于比较同一化学体系中的不同结构。需要重做分析时，可以用 Python 客户端 `mp-api` 下载原始计算条目和汇总性质，再用开源库 pymatgen 处理结构、组成和相图。一个材料可能对应多次计算，引用单个性质时可追溯到对应的计算任务。[平台工具](https://materialsproject.org/) · [API 文档](https://docs.materialsproject.org/downloading-data/using-the-api/getting-started) · [pymatgen](https://pymatgen.org/)

### 技术方法：用形成能比较候选晶体

以锂、铁、氧体系为例，研究者用密度泛函理论（DFT）计算晶体能量，将各相的形成能按组成画在同一张相图上。给定一个候选，比较它与相同总组成下能量最低的竞争相组合，即可算出“高于凸包的能量”。数值为零表示在已纳入的结构和所用计算方法下预测稳定。正值则给出分解可降低的单位原子能量。默认相图近似于零温，实验温度、未收录的竞争相以及反应动力学，都可能影响实际产物。复核候选排序时，应同时记录数据库版本、材料标识、化学体系和能量校正方案。[相图计算方法](https://docs.materialsproject.org/methodology/materials-methodology/thermodynamic-stability/phase-diagrams-pds) · [能量校正](https://docs.materialsproject.org/methodology/materials-methodology/thermodynamic-stability/thermodynamic-stability)

### 表征工具：用实测谱图检索候选结构

平台从晶体结构计算粉末 X 射线衍射峰，研究者可将实测峰位和相对强度与候选结构对照。团队也发表了 X 射线吸收谱工具，可为上传的实验谱检索相近的模拟谱，缩小吸收原子局域环境的解释范围。理想晶体的模拟谱不能单独确定实际样品的物相、缺陷或纯度，相关判断仍需结合实验条件与其他测量。[衍射谱方法](https://docs.materialsproject.org/methodology/materials-methodology/diffraction-patterns) · [吸收谱数据库与实验谱匹配](https://www.nature.com/articles/sdata2018151)

### 实验验证：锰锑化合物的磁热响应

2020 年，加州大学圣塔芭芭拉分校、阿贡国家实验室和伯克利实验室的研究人员从超过 5,000 种化合物的筛选中选出锰锑体系，合成并测量 Mn₁₊ₓSb。随间隙锰含量变化，研究者将居里温度从 577 K 调至约 318 K（x = 0.2），并测量了磁熵变。筛选解释了研究者为何选择这一体系，样品测量则给出了工作温区随组成变化的实验证据。该研究测量的是材料样品的性能，器件制冷效率需要另行测试。[候选筛选来源](https://newscenter.lbl.gov/2026/01/13/accelerating-discovery-how-the-materials-project-is-helping-to-usher-in-the-ai-revolution-for-materials-science/) · [实验论文](https://doi.org/10.1021/acs.chemmater.9b04643)

## 合作机构与分工

| 机构或团队 | 具体工作 |
| --- | --- |
| 伯克利实验室与 MIT | 两方共同建立公共平台。伯克利实验室的计算研究部门参与早期软件与架构设计，国家能源研究科学计算中心（NERSC）为批量计算材料性质提供超级计算资源。[联合发布](https://energy.mit.edu/news-events/news/first-its-kind-search-engine-will-speed-materials-research) · [创始人访谈](https://newscenter.lbl.gov/2020/05/08/materials-project-qa-persson/) |
| Google DeepMind 与 MP | DeepMind 用 MP 数据训练 GNoME，并向 MP 提供模型预测的晶体结构。MP 团队分批用自己的计算流程重算，研究者可分辨预测的来源及其对应的计算方法。[合作公告](https://newscenter.lbl.gov/2023/11/29/google-deepmind-new-compounds-materials-project/) · [数据库日志](https://docs.materialsproject.org/changes/database-versions.md) |
| 加州大学圣塔芭芭拉分校、阿贡国家实验室与伯克利实验室 | 三方研究人员将候选筛选与样品制备、磁性表征结合，发表了上述锰锑体系的实验结果。[实验论文](https://doi.org/10.1021/acs.chemmater.9b04643) |
| 开放数据贡献者与基础设施合作方 | 外部团队可通过 MPContribs 发布自己的数据集，并保留来源说明。Huck 团队与 Amazon Web Services、MongoDB 和 Datadog 合作迁移云端服务，支持在线检索和批量下载。[MPContribs](https://mpcontribs.org/) · [基础设施分工](https://newscenter.lbl.gov/2026/01/13/accelerating-discovery-how-the-materials-project-is-helping-to-usher-in-the-ai-revolution-for-materials-science/) |

## 经费与资源

| 支持来源 | 可核实的金额与用途 |
| --- | --- |
| 产业伙伴与实验室种子经费 | 早期电池筛选获得企业研究经费与计算机时，随后伯克利实验室的自主研发计划（LDRD）支持公共平台原型。访谈和实验室回顾均未给出这两笔经费金额。[创始人访谈](https://newscenter.lbl.gov/2020/05/08/materials-project-qa-persson/) · [LDRD 回顾](https://research.lbl.gov/2020/10/07/how-the-ldrd-turned-an-idea-into-a-success-kristin-perssons-story/) |
| 美国能源部（DOE）中心资助 | 初创期之后，DOE 提供 **五年合计 1,100 万美元**，用于建立 Materials Project Center for Functional Electronic Materials Design 并扩展项目。金额对应这一轮中心资助。[实验室披露](https://research.lbl.gov/2020/10/07/how-the-ldrd-turned-an-idea-into-a-success-kristin-perssons-story/) |
| 持续运营与算力 | 2026 年专题确认 DOE 科学办公室支持项目，NERSC 为团队提供高性能计算设施。该文未披露当年运营预算、累计总经费或机时折算金额。[伯克利实验室说明](https://newscenter.lbl.gov/2026/01/13/accelerating-discovery-how-the-materials-project-is-helping-to-usher-in-the-ai-revolution-for-materials-science/) |

## 研究动态

### 2026 年 10 月 19 日 · 修正混合方法相图的可重复性问题

截至 2026 年 11 月 20 日，官方数据库日志最新条目为 `v2026.09.28`，正式上线日为 10 月 19 日。旧代码按字符串哈希排列部分计算条目，Python 在不同进程中会改变这些哈希值，导致同一批输入可能生成不同的混合热力学结果。社区贡献者定位并修复了问题。修订涉及 `GGA_GGA+U_R2SCAN` 混合方法的热力学记录、相图及汇总数据，项目方称仅少部分材料受影响，多数原本已标为不稳定。曾以该混合方法、按接近凸包的阈值入选材料的研究，可以依据随公告发布的分析笔记本复查边界候选。[项目团队技术说明及复核笔记本](https://matsci.org/t/fixes-for-inconsistencies-in-mixing-scheme-thermo-data/67571) · [数据库日志](https://docs.materialsproject.org/changes/database-versions)

### 2026 年 6 月 8 日 · 复算 GNoME 候选并开放批量读取

`v2026.04.13` 于 4 月 13 日开放测试、6 月 8 日正式上线。该版新增 74,052 个用 r²SCAN 泛函计算的 GNoME 来源候选，使此来源的累计收录量达到约 11.7 万。这一数量衡量经计算处理的候选结构。确认其中某个结构能否制备，仍需要相应的实验记录。另一项针对既有核心材料的 r²SCAN 重算，在该次发布时覆盖约 26% 的目标集合，暂时只进入单次计算记录，尚未汇入材料摘要。核心数据同时迁至 S3 上的 Delta 表，批量用户可通过 Arrow 接口按需读取。[版本原文](https://docs.materialsproject.org/changes/database-versions.md) · [批量数据访问说明](https://docs.materialsproject.org/materials-project-data-lakehouse)

### 2026 年 1 月 13 日 · 披露数据库规模与外部使用案例

伯克利实验室披露，平台注册用户超过 65 万，此前两年共向用户传输了 465 TB 数据。此时数据库覆盖超过 20 万种材料，另收录超过 57.7 万种分子。丰田研究院长期使用其数据与开源工具，微软也用其材料数据训练生成无机晶体的模型 MatterGen。注册数和数据传输量衡量服务覆盖范围，生成结构的可制备性则需要单独验证。[伯克利实验室专题](https://newscenter.lbl.gov/2026/01/13/accelerating-discovery-how-the-materials-project-is-helping-to-usher-in-the-ai-revolution-for-materials-science/)

### 2023 至 2025 年 · 接收模型候选，校验性质数据

- **2025 年 9 月 25 日。** 团队修复了构建嵌入型电极数据集时的筛选错误，增加约 1,200 条电极记录，并统一采用 GGA/GGA+U 热力学凸包。此前按该集合比较电极的研究会受条目缺失或参照能量不一致影响。[版本记录](https://docs.materialsproject.org/changes/database-versions.md)
- **2025 年 7 月 3 日。** 项目团队在线发表《Nature Materials》综述，梳理公开数据和配套软件怎样用于材料筛选、实验表征与机器学习，并讨论计算和实验数据如何相互补充。[综述原文](https://doi.org/10.1038/s41563-025-02272-0)
- **2024 年 12 月 20 日。** 正式上线的数据库新增 15,483 个经 r²SCAN 计算的 GNoME 来源材料，开始接受仅有该类计算的结构。研究者可检索这一批结构，并须遵循该批贡献数据的非商业使用许可。[版本记录](https://docs.materialsproject.org/changes/database-versions.md)
- **2023 年 11 月 29 日。** 伯克利实验室和 Google DeepMind 公布 GNoME 合作。DeepMind 从其生成的 220 万个晶体结构中选出约 38 万个预测稳定的候选，提供给 MP 分批处理。这个数对应模型选出的结构，后续数据库版本另报已经复算入库的数量。[联合研究说明](https://newscenter.lbl.gov/2023/11/29/google-deepmind-new-compounds-materials-project/) · [研究论文](https://doi.org/10.1038/s41586-023-06735-9)

### 2004 至 2022 年 · 从电极筛选扩展到多种计算性质

- **2022 年 10 月。** 版本 `v2022.10.28` 开放 (r²)SCAN 系列预发布数据，使用者可在网页或 API 中与既有 GGA(+U) 结果比较。当时网站和接口仍默认显示旧方法，复现该时期的结果应注明采用的泛函。[版本记录](https://docs.materialsproject.org/changes/database-versions.md)
- **2021 年 5 月。** 版本 `v2021.05.13` 更新形成能校正。项目报告，与实验相比，数据库形成能的总体误差较旧方案降低 7%。即使底层计算相同，校正改变也会使某些相图和排序发生变化。[版本记录与复算示例](https://docs.materialsproject.org/changes/database-versions.md)
- **2018 年 7 月 31 日。** 团队公开 50 多万条计算得到的 K 边 X 射线近边吸收谱，覆盖超过 4 万种材料，并提供与实验谱的匹配工具。同一种材料可以包含多个不等价的吸收位点，所以谱条数多于材料数。[数据论文](https://www.nature.com/articles/sdata2018151) · [谱图匹配方法](https://www.nature.com/articles/s41524-018-0067-x)
- **2015 年 3 月 17 日。** de Jong 等发布 1,181 种无机化合物的完整计算弹性张量，记录各方向的应力与应变关系，扩展了可供比较的力学性质。原论文说明了计算方法及精度检验。[数据论文](https://doi.org/10.1038/sdata.2015.9)
- **2013 年 7 月 18 日。** Jain 等发表平台方法论文，说明如何将高通量计算、网页分析和程序接口连接起来。公开这些方法使读者可以核对数据的生成方式，并在自己的程序中调用同一套材料记录。[平台论文](https://doi.org/10.1063/1.4812323)
- **2011 年 10 月至 11 月。** 第一版网站于 10 月上线，MIT 于 11 月 8 日发布联合启动消息。实验室当年报告记载，网站已收录近 1.6 万种计算化合物，开放后首月注册者超过 500 人。[实验室年度报告](https://www2.lbl.gov/dir/assets/docs/11LDRD-PUB_LBNL-5435E.pdf) · [MIT 发布](https://energy.mit.edu/news-events/news/first-its-kind-search-engine-will-speed-materials-research)
- **2004 年。** 一家美国电池制造商资助 MIT 研究团队寻找电极材料，并提供超级计算机时。团队由研究单个化合物转向并行筛选，其积累的数据成为公共平台的起点。[Persson 访谈](https://newscenter.lbl.gov/2020/05/08/materials-project-qa-persson/)

## 相关链接

- [Materials Project 数据库与分析工具](https://materialsproject.org/)
- [数据库版本与已知修订](https://docs.materialsproject.org/changes/database-versions)
- [API 和数据下载指南](https://docs.materialsproject.org/downloading-data/using-the-api/getting-started)
- [项目团队综述 · Nature Materials](https://doi.org/10.1038/s41563-025-02272-0)
- [Materials Project 官方文档](https://docs.materialsproject.org/)
