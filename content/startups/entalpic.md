---
title: "Entalpic"
type: "startup"
logo: "/logos/entalpic.jpg"
category: "材料研发"
summary: "用生成模型和原子尺度模拟筛选半导体薄膜前驱体，与设备商合作开发能预测沉积结果的工艺模型，并通过 LeMaterial 开放晶体数据和生成模型评测工具。"
countries: ["法国"]
directions: ["Propose", "Characterize"]
maturity: "公开可用"
---

## 公司与团队

在芯片表面生长一层均匀的超薄膜，需要找到能在合适温度下输送、在表面发生预期反应并形成洁净薄膜的前驱体分子。巴黎公司 Entalpic 把这个问题拆成两步。它先用原子尺度模拟和机器学习筛选分子，再与设备和实验室伙伴研究这些分子在实际沉积条件下的表现。2024 年创立时，公司关注工业催化与脱碳。2026 年 5 月，团队明确把**半导体原子层沉积（ALD）前驱体**列为优先商业方向。[公司技术说明](https://entalpic.ai/) · [创始团队对 ALD 选题的说明](https://entalpic.ai/why-we-are-focusing-on-atomic-layer-deposition-2/)

法国企业名录显示，Entalpic 于 2024 年 5 月 6 日成立，登记为法国简化股份公司（SAS），SIREN 为 928 981 596，总部位于巴黎，实体状态为在营。公司官网时间线记载，2025 年团队已扩大到 25 人。截至 2026 年 11 月 20 日，公开材料支持其独立未上市初创公司的身份。NVIDIA 于 10 月宣布计划参股，媒体报道为少数股权投资，双方没有公布交易比例。[法国政府登记](https://annuaire-entreprises.data.gouv.fr/etablissement/92898159600010) · [公司时间线](https://entalpic.ai/) · [NVIDIA 公告](https://blogs.nvidia.com/blog/france-ecosystem-agentic-computing/) · [少数股权报道](https://ca.investing.com/news/stock-market-news/nvidia-invests-in-four-french-technology-startups-les-echos-reports-4878885)

### 创始人与团队

| 联合创始人 | 背景与职责 |
| --- | --- |
| Mathieu Galtier，CEO | 毕业于巴黎高科矿业学院，博士研究涉及机器学习与神经科学，曾任 Owkin 首席数据与平台官，负责过研发数据平台。[创立公告](https://www.cathaycapital.com/entalpic-raises-e8-5-million-to-pioneer-ai-solutions-for-decarbonizing-industrial-chemistry/) |
| Victor Schmidt，CTO | 曾就读法国巴黎综合理工学院及伦敦大学学院，在蒙特利尔 Mila 从事用机器学习研究气候变化的博士工作。他也是公司开放晶体轨迹数据集 LeMat-Traj 的论文作者。[创立公告](https://www.cathaycapital.com/entalpic-raises-e8-5-million-to-pioneer-ai-solutions-for-decarbonizing-industrial-chemistry/) · [论文](https://arxiv.org/abs/2508.20875) |
| Alexandre Duval，首席科学官 | 在 CentraleSupélec 和 Inria 研究面向材料的机器学习，曾在 Amazon 研究大语言模型。其署名研究包括晶体生成模型评测和电催化筛选指标的不确定性。[创立公告](https://www.cathaycapital.com/entalpic-raises-e8-5-million-to-pioneer-ai-solutions-for-decarbonizing-industrial-chemistry/) · [研究目录](https://entalpic.ai/publications/) |

## 产品

Entalpic 面向半导体材料和设备研发团队提供联合研发。它按薄膜及工艺要求，用专有引擎对候选前驱体排序，供合作方做沉积实验。与设备商共同开发的反应器模型仍处于研发阶段。对外可下载的产品来自 LeMaterial，材料科学家和机器学习工程师可以使用其中的晶体数据、模型和工具来训练原子间势或比较晶体生成算法。[公司技术说明](https://entalpic.ai/) · [开放项目目录](https://lematerial.org/publications/)

### 候选材料如何筛选

**从材料规格提出候选。** 专有的 Atomistic Discovery Engine 把晶体表示为带三维坐标的原子图。几何图神经网络预测形成能、吸附能等性质，生成流网络（GFlowNet）则可以依次选择空间群、元素和晶格参数，生成多种满足约束的候选。文献与专利提供已知的配方和可行条件。主动学习据预测性能及不确定性，选择值得投入下一次密度泛函理论（DFT）计算或实物实验的候选。[技术白皮书，第 3–6 页](https://entalpic.ai/wp-content/uploads/2025/10/Entalpic_Business_White_Paper.pdf)

### 已验证的预测精度与适用范围

 Entalpic 团队发布的 LeMat-Traj 整合了 Materials Project、Alexandria 和 OQMD 的逾 1.2 亿个原子构型。论文表 2 显示，在预留的 PBE 晶体结构弛豫测试集上，用这套数据微调已在 OMat24 上预训练的 MACE 模型，原子力的平均绝对误差从 **42.7 降至 27.2 meV/Å**，约降低 36%。数据以量子计算的几何优化轨迹为主。该指标衡量模型对计算所得原子力的预测精度。要判断前驱体是否适用于某台反应器，还需要薄膜纯度、均匀性和可用温度范围等实测结果。[原论文表 2 及局限性章节](https://arxiv.org/html/2508.20875v2) · [数据与模型入口](https://huggingface.co/LeMaterial)

**催化研究给出了筛选失灵的具体原因。** Duval 等人分析 Open Catalyst Project 的 OC20、OC22 数据，估算第一性原理计算中单个吸附能预测值的不确定性约为 0.3–0.5 eV。对析氢、析氧反应，仅据吸附自由能推算过电位，能找回铂和氧化铱等已知候选，也会把大量其他材料判为有希望。作者因此主张结合可合成性、稳定性、寿命和成本筛选。另一项 LeMat-GenBench 研究比较了 12 种晶体生成模型，发现平均而言，更高的稳定性常伴随较低的新颖性和多样性。两项研究都给出了读者可以独立检查的模型选择依据。[电催化预印本](https://arxiv.org/abs/2512.05938) · [晶体生成基准论文](https://arxiv.org/abs/2512.04562)

### 从计算预测到实验验证

 公司白皮书描述了由合作实验室合成候选材料、用 X 射线衍射检查晶相、用 X 射线荧光及电子显微镜检查组成与形貌，再测催化活性、选择性和稳定性的流程。ALD 项目的目标是依据设备实验训练反应器模型。已公开的是实验分工，以及可下载的 LeMaterial 数据和评测工具。本页据此标为“公开可用”。专有引擎通过合作项目对接，公开公告尚未给出晶圆厂量产良率或具名前驱体的认证结果。[白皮书](https://entalpic.ai/wp-content/uploads/2025/10/Entalpic_Business_White_Paper.pdf) · [设备合作方说明](https://atlant3d.com/atlant-3d-and-entalpic-partner-to-build-ai-driven-digital-twins-for-ald-processes/) · [开放资源](https://huggingface.co/LeMaterial)

## 产业伙伴与合作范围

| 机构 | 研究任务与披露进度 |
| --- | --- |
| ATLANT 3D，丹麦设备商 | 计划用其 DALP 局部原子层加工设备和 NANOFABRICATOR 平台生成结构化实验数据，由 Entalpic 训练 ALD 反应器的数字孪生，研究材料选择和沉积条件如何影响加工结果。双方公布了联合开发安排，未披露采购合同、模型预测误差或客户产线部署。[设备商公告](https://atlant3d.com/atlant-3d-and-entalpic-partner-to-build-ai-driven-digital-twins-for-ald-processes/) |
| OCP Group 的 Specialty Products & Solutions（SPS），摩洛哥 | 共同研究磷酸铁锂（LFP）正极应用，以及如何从 OCP 的磷酸盐原料和副产物中提取有价值的元素。Entalpic 加入 OCP 的 ChemTech x AI 项目。合作公告给出了研究对象，尚无回收率、循环寿命或授权收入数据。[合作公告](https://entalpic.ai/entalpic-and-ocp-sps-join-forces-to-advance-innovation-in-battery-materials-and-chemical-extraction/) · [公司项目说明](https://www.linkedin.com/posts/entalpic_ocp-partnership-deeptech-activity-7374450370158301184-Bdc7) |
| Centrale Lille 的 REALCAT 实验平台，法国 | 双方公布为期 18 个月的催化剂筛选方法研发。Entalpic 选择候选与实验条件，REALCAT 提供高通量合成和反应测试能力，其固定床系统可并行筛选多相催化剂。项目公告未披露具体催化剂的实测性能。[合作公告](https://entalpic.ai/entalpic-and-centrale-lilles-realcat-platform-partner-to-accelerate-catalyst-discovery-with-ai/) · [项目公告与研发期限](https://www.linkedin.com/posts/entalpic_partnership-aiforscience-catalysis-activity-7376903378855174145-SzPo) · [REALCAT 设备清单](https://www.realcat.fr/en/equipments/) |
| Hugging Face | 与 Entalpic 共同发起 LeMaterial，首项成果 LeMat-Bulk 统一了三个数据库的字段，供社区下载、去重及比较材料性质。[联合发布说明](https://huggingface.co/blog/lematerial) |
| IFPEN、CentraleSupélec | 分别在多相催化表面选择、图神经网络与材料计算流程两个方向参与 CIFRE 产学联合博士研究。[研究人员与分工](https://entalpic.ai/entalpic-ifpen-and-centralesupelec-hightlight-cifre-partnerships-in-ai-driven-materials-research-2/) |

各研发项目的合同金额、付费客户数与经常性收入均未披露。NVIDIA 单独披露了投资计划。[LeMaterial 一周年回顾](https://entalpic.ai/celebrating-one-year-of-lematerial-how-open-collaboration-is-accelerating-materials-discovery-2/) · [投资公告](https://entalpic.ai/nvidia-invests-in-entalpic/)

## 融资记录

| 公告日期 | 轮次、金额与投资方 |
| --- | --- |
| 2024-09-05 | **种子轮，850 万欧元。** Breega、Cathay Innovation 和 Felicis 共同领投。投资方说明资金用于发展材料与分子发现平台，早期重点包括工业电化学和催化。本轮估值未披露。[领投方原文](https://www.cathaycapital.com/entalpic-raises-e8-5-million-to-pioneer-ai-solutions-for-decarbonizing-industrial-chemistry/) |
| 2026-10-12 | **NVIDIA 宣布计划投资。** 双方未披露 Entalpic 单笔金额、轮次名称、估值或交割日期。NVIDIA 同篇提到的近 100 亿美元是其对整个欧洲科技生态的承诺，不能计入 Entalpic 累计融资。[NVIDIA 公告](https://blogs.nvidia.com/blog/france-ecosystem-agentic-computing/) · [Entalpic 公告](https://entalpic.ai/nvidia-invests-in-entalpic/) |

## 公司动态

| 日期 | 事件与进展 |
| --- | --- |
| 2026-11-09 | **晶体生成基准发布第三版论文。** LeMat-GenBench 项目在 2 月公布公开排行榜，11 月修订论文汇集 12 种生成模型的比较结果。研究者可以按稳定性、新颖性与多样性分别选模型；排名无法替代对生成晶体的合成验证。[论文及版本记录](https://arxiv.org/abs/2512.04562v3) · [项目发布记录](https://lematerial.org/) |
| 2026-10-12 | **NVIDIA 宣布拟投资。** Entalpic 将 ALD 前驱体列为资金支持方向，也提出研究用于高速、低功耗电子互连的表面及界面材料。后者是公告提出的研发机会，双方均未披露芯片型号或供货协议。[Entalpic 原文](https://entalpic.ai/nvidia-invests-in-entalpic/) · [NVIDIA 原文](https://blogs.nvidia.com/blog/france-ecosystem-agentic-computing/) |
| 2026-09-17 | **为什么减排潜力大的材料很难先卖给能源企业。** 团队以氨生产催化剂为例，解释工厂停机风险、长期服役验证和既有供应链如何影响采用决策。先进芯片对少量高纯材料有不同的价格容忍度，这是公司优先进入半导体的商业判断。以后转用于电池或能源催化，还要重新取得相应的测试数据。[战略文章](https://entalpic.ai/climate-techs-scale-trap/) |
| 2026-06-29 | **LeMaterial 发布 Atompack。** 项目把原子构型及其标签打包为可分发的数据文件，支持训练时随机读取和批量加载。它解决的是数据读取开销，其性能测试不能用于估算晶体性质预测误差。[项目发布记录](https://lematerial.org/) · [代码与使用示例](https://github.com/LeMaterial/atompack) |
| 2026-05-21 | **将原子层沉积选为首要应用。** 前驱体的热稳定温区、能否制备和实际薄膜质量共同约束分子设计。公司把预测可合成性及工艺兼容性列为当前计算工作的目标，也解释了为什么在催化、电解和电池应用之外，先围绕芯片薄膜建立实验能力。[技术与市场分析](https://entalpic.ai/why-we-are-focusing-on-atomic-layer-deposition-2/) |
| 2026-04-29 | **两个法国 CIFRE 产学联合博士课题。** Amandine Rossello 与 IFPEN 研究多相催化的材料表面选择，Ali Ramlaoui 与 CentraleSupélec 研究图神经网络怎样进入实际材料计算流程。公告具名披露了人员及研究分工，可用于追踪后续论文。[合作说明](https://entalpic.ai/entalpic-ifpen-and-centralesupelec-hightlight-cifre-partnerships-in-ai-driven-materials-research-2/) |
| 2026-03-25 | **与 ATLANT 3D 开发反应器数字孪生。** 项目把分子候选推进到具体设备条件下考察。设备端提供沉积与测试能力，模型端学习实验条件与加工结果的关系。公告使用的是开发目标，尚未随文发布训练数据或预测性能。[联合公告](https://entalpic.ai/atlant-3d-and-entalpic-partner-to-build-ai-driven-digital-twins-for-ald-processes/) |
| 2025-12-05 | **报告电催化吸附能筛选的局限。** 团队用 OC20、OC22 检查析氢和析氧候选，发现即使能重现已知催化剂的排名，只依赖吸附能仍会选出大量候选，难以分辨哪些值得合成。这解释了团队为何在筛选中同时考虑稳定性、寿命和成本。[研究原文](https://arxiv.org/abs/2512.05938) |
| 2025-12-02 | **LeMaterial 发布周年回顾。** LeMat-Bulk 整理晶体结构记录，LeMat-Traj 提供原子弛豫轨迹，LeMat-Synth 从论文提取合成信息，LeMat-GenBench 比较生成模型。读者可以按科学问题选择数据，也可以直接查证每项资源的论文和版本。[项目回顾](https://entalpic.ai/celebrating-one-year-of-lematerial-how-open-collaboration-is-accelerating-materials-discovery-2/) |
| 2025-09-24 | **与 Centrale Lille 启动 REALTALPIC。** 双方约定以 18 个月联合开发催化剂筛选方法，将候选选择同高通量实验衔接。该期限属于研发安排，公告未给出催化剂服役寿命或生产试验数据。[项目具名公告](https://www.linkedin.com/posts/entalpic_partnership-aiforscience-catalysis-activity-7376903378855174145-SzPo) · [官网新闻档案](https://entalpic.ai/news/) |
| 2025-09-18 | **与 OCP SPS 确定两项研发任务。** 合作同时考察如何改进磷酸铁锂正极，以及能从磷矿原料和副产物中提取哪些高价值元素。材料和原料由此有了具体应用场景，回收率和电池测试结果仍未披露。[双方访谈](https://www.youtube.com/watch?v=e7xoqkJv51M) · [公司说明](https://www.linkedin.com/posts/entalpic_ocp-partnership-deeptech-activity-7374450370158301184-Bdc7) |
| 2025-09-05 | **技术白皮书说明候选如何进入实验。** 公司描述了从文献和专利抽取信息、用生成模型提出候选、以量子计算复核并送合作实验室表征的方法。白皮书也给出回流实验结果的设计，未附带晶圆产线验收数据。[白皮书](https://entalpic.ai/wp-content/uploads/2025/10/Entalpic_Business_White_Paper.pdf) |
| 2025-08-28 | **发布 LeMat-Traj 预印本与开放数据。** 研究把逾 1.2 亿个原子构型整理为统一格式，保留同一结构在几何优化过程中的中间状态。研究者可以借此训练对原子受力的预测，并复核微调前后的误差。[论文及数据入口](https://arxiv.org/abs/2508.20875) |
| 2024-12-10 | **与 Hugging Face 发起 LeMaterial。** 首版 LeMat-Bulk 将 Materials Project、Alexandria 和 OQMD 的约 670 万条记录和 7 项材料性质统一格式，并提供结构指纹辅助跨库去重。该数字指记录数，同一材料可有多次计算。[联合发布说明](https://huggingface.co/blog/lematerial) |
| 2024-09-05 | **公开工业化学研发方向与首轮资金。** 三家投资机构共同领投种子轮，披露公司将先从催化和工业脱碳入手开发材料发现平台。这一时期的公开目标与后来优先研究的芯片薄膜可分别追溯。[投资方公告](https://www.cathaycapital.com/entalpic-raises-e8-5-million-to-pioneer-ai-solutions-for-decarbonizing-industrial-chemistry/) |
| 2024-05-06 | **在巴黎创立。** 法国登记记录给出创立日期及企业识别号，为团队后续的研发和融资公告提供法人身份依据。[法国登记记录](https://annuaire-entreprises.data.gouv.fr/etablissement/92898159600010) · [企业登记摘要](https://www.pappers.fr/entreprise/entalpic-928981596) |

## 相关链接

[公司官网](https://entalpic.ai/) · [官方新闻](https://entalpic.ai/news/) · [出版物目录](https://entalpic.ai/publications/) · [LeMaterial 数据与模型](https://huggingface.co/LeMaterial) · [法国政府登记](https://annuaire-entreprises.data.gouv.fr/etablissement/92898159600010) · [官网品牌图标原图](https://entalpic.ai/wp-content/uploads/2025/03/cropped-Icon-gradient-v1-scaled-1-192x192.jpg)
