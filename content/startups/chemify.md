---
title: "Chemify"
type: "startup"
logo: "/logos/chemify.png"
category: "化学与催化"
summary: "将分子设计转成机器人可执行的合成程序，在格拉斯哥 Chemifarm 为合作方制备、表征化合物，再用实测结果选择下一轮候选。"
countries: ["英国"]
directions: ["Propose", "Synthesize", "Characterize"]
maturity: "实际部署"
---

## 公司概览

给定一个目标分子，计算模型可以提出结构相近的许多候选。药物和材料团队接下来面对的是另外几个问题：哪些候选做得出来，样品里实际有什么，测得的性质是否值得继续投入？Chemify 在格拉斯哥经营自动化化学实验室 Chemifarm，让合作方围绕这些问题委托一系列设计、合成和测试。其首座设施于 2025 年 6 月在 Maryhill 启用。公开合作覆盖日本材料企业瑞翁（Zeon）及美国生物技术企业 Sanacor、Dewpoint Therapeutics。[首座设施启用公告](https://chemify.reportablenews.com/pr/chemify-launches-the-world-s-first-chemputation-facility-revolutionizing-molecular-design-and-manufacture) · [合作方式](https://www.chemify.io/ways-we-work)

英国 Companies House 将 CHEMIFY LIMITED（SC645290）列为存续的私人有限公司，注册日为 2019 年 10 月 24 日。2022 年 3 月，公司从格拉斯哥大学分拆，官网将 2022 年列为创办年份。截至 2026 年 11 月 20 日，公司仍以独立、未上市企业开展业务；英国登记册披露，公司认为不存在须登记的重大控制人或相关法人。[公司登记](https://find-and-update.company-information.service.gov.uk/company/SC645290) · [重大控制人登记](https://find-and-update.company-information.service.gov.uk/company/SC645290/persons-with-significant-control) · [格拉斯哥投资促进机构的分拆记录](https://www.investglasgow.com/resources/news/214-chemify-announces-36m-funding-to-digitise-chemistry)

## 创始人与团队

**Lee Cronin，创始人兼 CEO。** 他担任格拉斯哥大学皇家化学讲席教授，研究团队长期研究如何把化学操作写成可在不同设备上执行、可复核的程序。早期支持者 David Cleevely 是 Abcam 的联合创始人，目前担任 Chemify 董事长。公司的技术与运营分别由 CTO Knut Sauer 和 COO Neil McCourt 负责，前者有软件和机器人平台开发经验，后者曾负责亚马逊欧洲运营。这一分工对应着两项不同的交付要求：让程序在设备上正确运行，以及按多个客户的时间表稳定提供样品。[公司团队](https://www.chemify.io/about) · [早期投资与大学分拆背景](https://www.investglasgow.com/resources/news/214-chemify-announces-36m-funding-to-digitise-chemistry)

## 产品与工作流程

**Genesis** 是合作方使用这套设施的入口。客户可以提交一个确定的结构并约定样品量、分析报告和交付要求，也可以只提出希望达到的材料性能或药物研发目标。后者涉及多轮候选选择和实测。双方事先约定实验容量、使用周期、交付物、数据访问权和知识产权。公司把分配给项目的并行实验容量称为 *threads of chempute*。[合作与交付条款说明](https://www.chemify.io/ways-we-work)

| 科学任务 | 平台实际处理的问题 | 可检查的输出 |
| --- | --- | --- |
| 提出候选（Propose） | 分子建模和搜索提出结构，ASSEMBLER 结合逆合成与已知反应知识排序，优先安排具有可行路线的目标。 | 待评估的分子及其候选路线。[技术说明](https://www.chemify.io/technology) |
| 合成（Synthesize） | 使用化学描述语言 χDL 将操作、参数与设备关联起来，在 Chemifarm 的机器人系统上执行合成、后处理和纯化。 | 物理样品、数字化程序和运行记录。[技术说明](https://www.chemify.io/technology) · [设施与 Curie 系统](https://www.chemify.io/about) |
| 表征及反馈（Characterize） | 将产物分析记录与具体批次和程序关联起来，按项目约定由 Chemify 或合作方测定活性和性能。 | 化学分析及约定的功能测试结果，可据此决定下一轮制备哪些分子。[技术说明](https://www.chemify.io/technology) · [合作方式](https://www.chemify.io/ways-we-work) |

## 验证与适用边界

2026 年的两项同行评议研究分别回答了“程序能否驱动设备”和“论文能否直接变成可执行程序”。Cronin 等在《美国国家科学院院刊》报告，模块化化学机器人执行了逾 100 个 χDL 程序，覆盖单步和多步合成。《Communications Chemistry》的另一项研究给出了从既有文献出发、在两种机器人平台上实际运行的六个合成实例。作者还记录了翻译时遗漏或错排步骤的问题：程序能通过语法检查和硬件模拟，仍须用实物及其分析数据检验结果。两篇论文出自创始人所在研究团队，验证范围可追溯到各自使用的程序和装置。[PNAS 论文](https://doi.org/10.1073/pnas.2511080123) · [Communications Chemistry 论文全文](https://pmc.ncbi.nlm.nih.gov/articles/PMC13219472/)

就商业设施而言，公司披露在同一平台上演示过从 1 毫克到超过 40 克的制备，并称反应模板映射的虚拟设计空间超过 10 的 40 次方。前一项是实物制备范围，后一项是模型所表示的理论组合数。对具体委托项目，判断能否交付仍需知道指定分子、目标纯度、批次重复性和周期。公开材料未给出涵盖全部商业项目的命中率、单位成本或跨客户对照数据。本页将成熟度列为“实际部署”，依据是 Maryhill 设施已运行且有具名合作方。[公司能力数据](https://www.chemify.io/) · [瑞翁对既有设施的说明](https://www.zeon.ventures/news/zeon-makes-strategic-investment-in-chemify-to-accelerate-digital-chemistry-innovation-drive-development-of-new-materials-through-state-of-the-art-automated-molecular-design-and-synthesis)

## 客户、合作与融资

- **瑞翁，材料设计与合成。** 2026 年 2 月 12 日，瑞翁确认通过 Zeon Ventures 战略投资，并将与 Chemify 共同设计、制备新化合物和材料。瑞翁提到研发时间具有缩短潜力，尚未披露该合作交付的材料牌号、实测性能或投资金额。[瑞翁原始公告](https://www.zeon.ventures/news/zeon-makes-strategic-investment-in-chemify-to-accelerate-digital-chemistry-innovation-drive-development-of-new-materials-through-state-of-the-art-automated-molecular-design-and-synthesis)
- **Sanacor，心血管代谢疾病药物发现。** 2026 年 2 月 25 日，双方宣布合作寻找口服小分子，首先面向糖尿病相关心血管疾病。Sanacor 提供疾病生物学研究基础，Chemify 负责设计和合成。公告列举的临床前研究来自 Sanacor 团队，双方披露的共同项目处于发现阶段。[联合公告](https://www.businesswire.com/news/home/20260225083560/en/Chemify-and-Sanacor-Collaborate-to-Discover-and-Develop-Small-Molecule-Therapies-for-Cardiometabolic-Diseases)
- **Dewpoint Therapeutics，凝聚体药物发现。** Dewpoint 于 2023 年 9 月确认，双方将针对其肿瘤和神经退行性疾病项目设计并自动合成分子。合作方公开了研发范围，未披露合同金额或获批产品。[Dewpoint 公告](https://dewpointx.com/dewpoint-therapeutics-partners-with-chemify-to-apply-groundbreaking-chemistry-ai-to-radically-accelerate-the-discovery-of-molecules-targeting-cancer-and-neurodegeneration/)
- **股权融资。** 2023 年公司公布约 4,300 万美元资金，涉及 Triatomic Capital 领投的 A 轮。2025 年 10 月公布的 B 轮超过 5,000 万美元，由 Wing Venture Capital 与 Insight Partners 联合领投。2026 年更新的同一轮扩募后总额为 5,190 万英镑，约合 7,000 万美元。公司同时披露累计获得逾 1.1 亿英镑资金，这一累计口径包括补助。[2023 年公告](https://www.businesswire.com/news/home/20230802317135/en/Chemify-Announces-43-Million-of-Funding-to-Digitize-Chemistry) · [B 轮公告](https://www.businesswire.com/news/home/20251021496528/en/Chemify-Raises-More-Than-%2450-Million-in-Oversubscribed-Series-B-to-Drive-Global-Expansion-of-Digital-Chemistry-and-Discovery) · [2026 年扩募及补助公告](https://www.businesswire.com/news/home/20260916311056/en/Chemify-Becomes-the-First-Chemistry-Hyperscaler-with-%C2%A322-Million-in-Grants-from-Scottish-Enterprise-and-the-UK-Government)

## 近期公司公告

| 日期 | 公告与解读 |
| --- | --- |
| 2026-10-22 | **Rima Alameddine 加入董事会。** 公司任命曾在 IonQ 和 NVIDIA 负责商业工作的 Alameddine 为独立非执行董事。这次任命针对如何向大型研发企业销售实验容量，公告没有披露新的客户合同。[公司公告原文](https://www.businesswire.com/news/home/20261022773136/en/Chemify-Appoints-Rima-Alameddine-to-Its-Board-of-Directors) |
| 2026-09-16 | **获得 2,200 万英镑政府补助，扩建格拉斯哥研发设施。** Scottish Enterprise 提供 1,600 万英镑，英国政府提供 600 万英镑；加上公司拟投入的 6,790 万英镑，扩建项目总额为 8,990 万英镑。该公告把 Govan 新设施列为扩建项目，当时已持续运营的是 Maryhill 首座设施。[公司公告原文](https://www.businesswire.com/news/home/20260916311056/en/Chemify-Becomes-the-First-Chemistry-Hyperscaler-with-%C2%A322-Million-in-Grants-from-Scottish-Enterprise-and-the-UK-Government) · [Scottish Enterprise 项目预算](https://www.scottish-enterprise-mediacentre.com/news/gbp-89-9m-boost-for-scotlands-life-sciences-sector) |
| 2026-04-09 | **汇总三篇有关可编程化学的研究。** 公司将程序化合成、文献复现和肿瘤研究应用放在同一篇公告中。前两项可回到论文核查机器人执行过哪些程序；药物探索的研发价值仍须由后续候选物数据检验。[公司公告原文](https://www.businesswire.com/news/home/20260409370277/en/Chemify-Founder-Publishes-Three-Papers-Validating-Chemputation-To-Reimagine-New-Chemical-Discovery-and-Development) · [公司新闻目录](https://www.chemify.io/news) |

## 相关链接

[官网与品牌标识](https://www.chemify.io/) · [团队](https://www.chemify.io/about) · [实验设施启用公告](https://chemify.reportablenews.com/pr/chemify-launches-the-world-s-first-chemputation-facility-revolutionizing-molecular-design-and-manufacture)
