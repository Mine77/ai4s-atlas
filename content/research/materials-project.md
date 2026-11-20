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

## 项目概览

实验室要从几千种晶体中选出值得制备的几种，通常无法先测完每一种。Materials Project（MP）将高通量计算得到的晶体结构、形成能、电子结构等性质公开，供研究者在实验前比较候选，在得到样品后对照模拟谱图。研究者既可以在网站上查看单个晶体，也可以通过 API 批量提取结构和性质，训练或检验材料模型。[项目综述](https://doi.org/10.1038/s41563-025-02272-0) · [表征方法论文](https://www.nature.com/articles/sdata2018151)

项目于 2011 年 10 月对外上线。伯克利实验室在 2026 年 1 月披露，平台累计注册用户超过 65 万，此前两年交付了 465 TB 数据；当时计算数据覆盖超过 20 万种材料，并另收录超过 57.7 万种分子。注册数衡量累计覆盖人群，数据传输量反映使用规模，两者都不能换算成已完成的材料实验数。[项目沿革](https://research.lbl.gov/2020/10/07/how-the-ldrd-turned-an-idea-into-a-success-kristin-perssons-story/) · [伯克利实验室专题](https://newscenter.lbl.gov/2026/01/13/accelerating-discovery-how-the-materials-project-is-helping-to-usher-in-the-ai-revolution-for-materials-science/)

## 组织与团队

项目源于麻省理工学院（MIT）的电池电极筛选合作。Kristin Persson 回忆，2004 年一家美国电池制造商提供经费和超级计算机时，让团队能把逐个分析化合物改为并行筛选。她加入劳伦斯伯克利国家实验室后，与博士后 Michael Kocher、实验室研究人员和 MIT 合作者搭建第一版公共平台。项目后来成为伯克利实验室材料科学部门的核心研究计划。[Persson 访谈](https://newscenter.lbl.gov/2020/05/08/materials-project-qa-persson/) · [实验室项目史](https://research.lbl.gov/2020/10/07/how-the-ldrd-turned-an-idea-into-a-success-kristin-perssons-story/)

伯克利实验室 2026 年公布的管理分工中，联合创始人、主任 Kristin Persson 同时任职于伯克利实验室和加州大学伯克利分校，Anubhav Jain 任副主任，计算工程师 Patrick Huck 任技术负责人。团队在国家能源研究科学计算中心（NERSC）运行高通量计算，通过云服务向公众分发数据。外部研究者还可以经 MPContribs 发布自己的数据集，读者可据提交者和数据集说明追溯来源。[团队与基础设施](https://newscenter.lbl.gov/2026/01/13/accelerating-discovery-how-the-materials-project-is-helping-to-usher-in-the-ai-revolution-for-materials-science/) · [MPContribs](https://mpcontribs.org/)

## 技术与证据

**怎样筛候选。** 以锂、铁、氧体系为例，研究者用密度泛函理论（DFT）计算晶体能量，将各相的形成能按组成画在同一张相图上。给定一个候选，比较它与相同总组成下能量最低的竞争相组合，即可算出“高于凸包的能量”。数值为零表示在已纳入的结构和所用计算方法下预测稳定；正值则给出分解可降低的单位原子能量。默认相图近似于零温，实验温度、未收录的竞争相以及反应动力学，都可能影响实际产物。复核候选排序时，应同时记录数据库版本、材料标识、化学体系和能量校正方案。[相图计算方法](https://docs.materialsproject.org/methodology/materials-methodology/thermodynamic-stability/phase-diagrams-pds) · [能量校正](https://docs.materialsproject.org/methodology/materials-methodology/thermodynamic-stability/thermodynamic-stability)

**怎样辅助表征。** 平台从晶体结构计算粉末 X 射线衍射峰，研究者可将实测峰位和相对强度与候选结构对照。团队也发表了 X 射线吸收谱工具，可为上传的实验谱检索相近的模拟谱，缩小吸收原子局域环境的解释范围。理想晶体的模拟谱不能单独确定实际样品的物相、缺陷或纯度，相关判断仍需结合实验条件与其他测量。[衍射谱方法](https://docs.materialsproject.org/methodology/materials-methodology/diffraction-patterns) · [吸收谱数据库与实验谱匹配](https://www.nature.com/articles/sdata2018151)

## 近期博客与技术进展

### 2026 年 10 月 19 日 · 修正混合方法相图的可重复性问题

截至 2026 年 11 月 20 日，官方数据库日志最新条目为 `v2026.09.28`，正式上线日为 10 月 19 日。旧代码按字符串哈希排列部分计算条目，Python 在不同进程中会改变这些哈希值，导致同一批输入可能生成不同的混合热力学结果。社区贡献者定位并修复了问题。修订涉及 `GGA_GGA+U_R2SCAN` 混合方法的热力学记录、相图及汇总数据，项目方称仅少部分材料受影响，多数原本已标为不稳定。曾以该混合方法、按接近凸包的阈值入选材料的研究，可以依据随公告发布的分析笔记本复查边界候选。[项目团队技术说明及复核笔记本](https://matsci.org/t/fixes-for-inconsistencies-in-mixing-scheme-thermo-data/67571) · [数据库日志](https://docs.materialsproject.org/changes/database-versions)

### 2026 年 6 月 8 日 · 增加 GNoME 候选的计算验证，开放批量读取

`v2026.04.13` 于 4 月 13 日开放测试、6 月 8 日正式上线。该版新增 74,052 个用 r²SCAN 泛函计算的 GNoME 来源候选，使此来源的累计收录量达到约 11.7 万。这一数量衡量经计算处理的候选结构；确认其中某个结构能否制备，仍需要相应的实验记录。另一项针对既有核心材料的 r²SCAN 重算，在该次发布时覆盖约 26% 的目标集合，暂时只进入单次计算记录，尚未汇入材料摘要。核心数据同时迁至 S3 上的 Delta 表，批量用户可通过 Arrow 接口按需读取。[版本原文](https://docs.materialsproject.org/changes/database-versions.md) · [批量数据访问说明](https://docs.materialsproject.org/materials-project-data-lakehouse)

### 2026 年 1 月 13 日 · 从公共计算数据到产业模型

伯克利实验室的专题列举了两种具体用法。丰田研究院长期在材料研发中使用 MP 的开放数据与工具，微软使用其材料数据训练无机晶体生成模型 MatterGen。后者说明这类数据库还会影响下一代候选的产生：训练所用数据的覆盖范围，以及模型预测后采用哪种独立方法验证，都关系到如何解读生成结果。[伯克利实验室原文](https://newscenter.lbl.gov/2026/01/13/accelerating-discovery-how-the-materials-project-is-helping-to-usher-in-the-ai-revolution-for-materials-science/)

## 经费与应用

| 支持来源 | 可核实的金额与用途 |
| --- | --- |
| 产业伙伴与实验室种子经费 | 早期电池筛选获得企业研究经费与计算机时，随后伯克利实验室的自主研发计划（LDRD）支持公共平台原型。访谈和实验室回顾均未给出这两笔经费金额。[创始人访谈](https://newscenter.lbl.gov/2020/05/08/materials-project-qa-persson/) · [LDRD 回顾](https://research.lbl.gov/2020/10/07/how-the-ldrd-turned-an-idea-into-a-success-kristin-perssons-story/) |
| 美国能源部（DOE）中心资助 | 初创期之后，DOE 提供 **五年合计 1,100 万美元**，用于建立 Materials Project Center for Functional Electronic Materials Design 并扩展项目。金额对应这一轮中心资助。[实验室披露](https://research.lbl.gov/2020/10/07/how-the-ldrd-turned-an-idea-into-a-success-kristin-perssons-story/) |
| 持续运营与算力 | 2026 年专题确认 DOE 科学办公室支持项目，NERSC 为团队提供高性能计算设施。该文未披露当年运营预算、累计总经费或机时折算金额。[伯克利实验室说明](https://newscenter.lbl.gov/2026/01/13/accelerating-discovery-how-the-materials-project-is-helping-to-usher-in-the-ai-revolution-for-materials-science/) |

磁热材料研究给出了可以追到实物的案例。加州大学圣塔芭芭拉分校、阿贡国家实验室和伯克利实验室的研究人员从超过 5,000 种化合物的筛选中选出锰锑体系，合成并测量 Mn₁₊ₓSb。随间隙锰含量变化，研究者将居里温度从 577 K 调至约 318 K（x = 0.2），并测量了磁熵变。筛选解释了研究者为何选择这一体系，样品测量则给出了工作温区随组成变化的实验证据；该研究报告的性能限于材料样品。[候选筛选来源](https://newscenter.lbl.gov/2026/01/13/accelerating-discovery-how-the-materials-project-is-helping-to-usher-in-the-ai-revolution-for-materials-science/) · [实验论文](https://doi.org/10.1021/acs.chemmater.9b04643)

## 相关链接

- [Materials Project 数据库与分析工具](https://materialsproject.org/)
- [数据库版本与已知修订](https://docs.materialsproject.org/changes/database-versions)
- [项目团队综述 · Nature Materials](https://doi.org/10.1038/s41563-025-02272-0)
- [Materials Project 官方标识](https://docs.materialsproject.org/)
