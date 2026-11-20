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

## 公司与团队

给定一个目标分子，计算模型可以提出结构相近的许多候选。药物和材料团队接下来面对的是另外几个问题：哪些候选做得出来，样品里实际有什么，测得的性质是否值得继续投入？Chemify 在格拉斯哥经营自动化化学实验室 Chemifarm，让合作方围绕这些问题委托一系列设计、合成和测试。其首座设施于 2025 年 6 月在 Maryhill 启用。公开合作覆盖日本材料企业瑞翁（Zeon）及美国生物技术企业 Sanacor、Dewpoint Therapeutics。[首座设施启用公告](https://chemify.reportablenews.com/pr/chemify-launches-the-world-s-first-chemputation-facility-revolutionizing-molecular-design-and-manufacture) · [合作方式](https://www.chemify.io/ways-we-work)

英国 Companies House 将 CHEMIFY LIMITED（SC645290）列为存续的私人有限公司，注册日为 2019 年 10 月 24 日。2022 年 3 月，公司从格拉斯哥大学分拆，官网将 2022 年列为创办年份。截至 2026 年 11 月 20 日，公司仍以独立、未上市企业开展业务；英国登记册披露，公司认为不存在须登记的重大控制人或相关法人。[公司登记](https://find-and-update.company-information.service.gov.uk/company/SC645290) · [重大控制人登记](https://find-and-update.company-information.service.gov.uk/company/SC645290/persons-with-significant-control) · [格拉斯哥投资促进机构的分拆记录](https://www.investglasgow.com/resources/news/214-chemify-announces-36m-funding-to-digitise-chemistry)

### 创始人与团队

**Lee Cronin，创始人兼 CEO。** 他担任格拉斯哥大学皇家化学讲席教授，研究团队长期研究如何把化学操作写成可在不同设备上执行、可复核的程序。早期支持者 David Cleevely 是 Abcam 的联合创始人，目前担任 Chemify 董事长。公司的技术与运营分别由 CTO Knut Sauer 和 COO Neil McCourt 负责，前者有软件和机器人平台开发经验，后者曾负责亚马逊欧洲运营。这一分工对应着两项不同的交付要求：让程序在设备上正确运行，以及按多个客户的时间表稳定提供样品。[公司团队](https://www.chemify.io/about) · [早期投资与大学分拆背景](https://www.investglasgow.com/resources/news/214-chemify-announces-36m-funding-to-digitise-chemistry)

## 产品

### Genesis 的交付方式

**Genesis** 是合作方使用这套设施的入口。客户可以提交一个确定的结构并约定样品量、分析报告和交付要求，也可以只提出希望达到的材料性能或药物研发目标。后者涉及多轮候选选择和实测。双方事先约定实验容量、使用周期、交付物、数据访问权和知识产权。公司把分配给项目的并行实验容量称为 *threads of chempute*。[合作与交付条款说明](https://www.chemify.io/ways-we-work)

| 科学任务 | 平台实际处理的问题 | 可检查的输出 |
| --- | --- | --- |
| 提出候选（Propose） | 分子建模和搜索提出结构，ASSEMBLER 结合逆合成与已知反应知识排序，优先安排具有可行路线的目标。 | 待评估的分子及其候选路线。[技术说明](https://www.chemify.io/technology) |
| 合成（Synthesize） | 使用化学描述语言 χDL 将操作、参数与设备关联起来，在 Chemifarm 的机器人系统上执行合成、后处理和纯化。 | 物理样品、数字化程序和运行记录。[技术说明](https://www.chemify.io/technology) · [设施与 Curie 系统](https://www.chemify.io/about) |
| 表征及反馈（Characterize） | 将产物分析记录与具体批次和程序关联起来，按项目约定由 Chemify 或合作方测定活性和性能。 | 化学分析及约定的功能测试结果，可据此决定下一轮制备哪些分子。[技术说明](https://www.chemify.io/technology) · [合作方式](https://www.chemify.io/ways-we-work) |

### 实际交付与验证

在与 Lgenia 的两个结核病靶点项目中，Chemify 负责设计和合成，Lgenia 主导活性测试。据公司案例，第一个项目合成逾 250 个化合物，其中 5% 达到双方所定的活性目标，项目由发现命中物进入先导优化的起点。第二个项目合成约 100 个化合物，其中一个系列的活性提高数倍。这些数字说明团队如何从实物筛选出值得继续优化的系列，衡量的是早期药物发现结果。[公司案例](https://www.chemify.io/case-studies/design-exquisite-molecules-that-are-makeable)

### 技术验证与适用边界

2026 年的两项同行评议研究分别回答了“程序能否驱动设备”和“论文能否直接变成可执行程序”。Cronin 等在《美国国家科学院院刊》报告，模块化化学机器人执行了逾 100 个 χDL 程序，覆盖单步和多步合成。《Communications Chemistry》的另一项研究给出了从既有文献出发、在两种机器人平台上实际运行的六个合成实例。作者还记录了翻译时遗漏或错排步骤的问题：程序能通过语法检查和硬件模拟，仍须用实物及其分析数据检验结果。两篇论文出自创始人所在研究团队，验证范围可追溯到各自使用的程序和装置。[PNAS 论文](https://doi.org/10.1073/pnas.2511080123) · [Communications Chemistry 论文全文](https://pmc.ncbi.nlm.nih.gov/articles/PMC13219472/)

就商业设施而言，公司披露在同一平台上演示过从 1 毫克到超过 40 克的制备，并称反应模板映射的虚拟设计空间超过 10 的 40 次方。前一项是实物制备范围，后一项是模型所表示的理论组合数。对具体委托项目，判断能否交付仍需知道指定分子、目标纯度、批次重复性和周期。公开材料未给出涵盖全部商业项目的命中率、单位成本或跨客户对照数据。本页将成熟度列为“实际部署”，依据是 Maryhill 设施已运行且有具名合作方。[公司能力数据](https://www.chemify.io/) · [瑞翁对既有设施的说明](https://www.zeon.ventures/news/zeon-makes-strategic-investment-in-chemify-to-accelerate-digital-chemistry-innovation-drive-development-of-new-materials-through-state-of-the-art-automated-molecular-design-and-synthesis)

## 产业伙伴与合作范围

| 伙伴 | 研究分工、权益与进展 |
| --- | --- |
| Dewpoint Therapeutics | Dewpoint 提出肿瘤和神经退行性疾病管线中的生物分子凝聚体靶点，Chemify 设计并交付化合物。Dewpoint 有权选择收购相应化合物，合同设置与临床及监管里程碑挂钩的付款和分级特许权使用费。金额、行权情况及获批产品均未披露。[Dewpoint 公告](https://dewpointx.com/dewpoint-therapeutics-partners-with-chemify-to-apply-groundbreaking-chemistry-ai-to-radically-accelerate-the-discovery-of-molecules-targeting-cancer-and-neurodegeneration/) |
| Prepaire Labs | 双方扩展原有合作，启动 Toxifree，探索成瘾风险较低的镇痛药及阿片类药物成瘾治疗。Chemify 设计候选分子，Prepaire 提供药物发现平台。公告列出至少 3,000 万美元的付款，并约定按所开发分子的临床及监管进展支付里程碑款，若产品上市另付个位数百分比的特许权使用费。公告未披露已收金额。[联合公告](https://www.chemify.io/news/prepaire-chemify-partnership) |
| Lgenia | 双方共同确定抗结核药物的设计与优化方向，Chemify 制备样品，Lgenia 提供靶点背景并主导活性测试。已披露的交付及结果见上文。项目获得盖茨基金会补助，双方之间的商业付款未披露。[合作公告](https://www.businesswire.com/news/home/20251210618626/en/Chemify-Receives-an-Additional-Grant-to-Accelerate-Digital-Chemistry-Small-Molecule-Discovery-for-Tuberculosis) · [项目结果](https://www.chemify.io/case-studies/design-exquisite-molecules-that-are-makeable) |
| 日本瑞翁（Zeon） | 材料研发部门将与 Chemify 共同设计并制备新化合物和材料。瑞翁称从构思到合成的用时有望缩短至十分之一，未披露该项目的实测周期、材料牌号、性能数据或研发付款金额。[瑞翁公告](https://www.zeon.ventures/news/zeon-makes-strategic-investment-in-chemify-to-accelerate-digital-chemistry-innovation-drive-development-of-new-materials-through-state-of-the-art-automated-molecular-design-and-synthesis) |
| Sanacor | 合作开发面向心脏代谢疾病的口服小分子，首个方向为糖尿病相关心血管疾病。Sanacor 提供疾病生物学研究基础，Chemify 负责设计和合成。公告列举的临床前证据出自 Sanacor 团队，联合项目处于发现阶段，合同金额未披露。[联合公告](https://www.businesswire.com/news/home/20260225083560/en/Chemify-and-Sanacor-Collaborate-to-Discover-and-Develop-Small-Molecule-Therapies-for-Cardiometabolic-Diseases) |

## 融资记录

### 股权投资

| 时间 | 交易及口径 |
| --- | --- |
| 2023-08 | 公司公布 4,300 万美元资金，涵盖 Triatomic Capital 领投的 A 轮和英国政府 Innovation Accelerators 计划。BlueYard Capital 继续投资，其他投资者包括 Horizons Ventures、Rocketship、Possible Ventures、Alix Ventures 和 Eos。公告未单列纯股权募集额或估值。[公司公告](https://www.businesswire.com/news/home/20230802317135/en/Chemify-Announces-43-Million-of-Funding-to-Digitize-Chemistry) |
| 2025-10 至 2026-09 | B 轮首次公布超过 5,000 万美元，由 Wing Venture Capital、Insight Partners 共同领投。参与方包括 8VC、Triatomic、BlueYard、Rockspring 和 Eos。2026 年 9 月公司将同一轮扩募后的总额更新为 5,190 万英镑（约 7,000 万美元），未披露估值。公司称历次募集资金合计超过 1.1 亿英镑（约 1.5 亿美元），此数包括补助。[B 轮公告](https://www.businesswire.com/news/home/20251021496528/en/Chemify-Raises-More-Than-%2450-Million-in-Oversubscribed-Series-B-to-Drive-Global-Expansion-of-Digital-Chemistry-and-Discovery) · [扩募公告](https://www.businesswire.com/news/home/20260916311056/en/Chemify-Becomes-the-First-Chemistry-Hyperscaler-with-%C2%A322-Million-in-Grants-from-Scottish-Enterprise-and-the-UK-Government) |
| 2026-02 | 瑞翁通过 Zeon Ventures 战略投资 Chemify，同时启动材料研发合作。投资金额、估值及所属轮次未披露。[瑞翁公告](https://www.zeon.ventures/news/zeon-makes-strategic-investment-in-chemify-to-accelerate-digital-chemistry-innovation-drive-development-of-new-materials-through-state-of-the-art-automated-molecular-design-and-synthesis) |

### 项目补助与设施预算

- **盖茨基金会。** 基金会文件列示 2024 年首笔资助 1,597,178 美元，2025 年 10 月承诺续资 1,601,895 美元，为期 12 个月。公司在 2025 年 12 月公布续资时，将两期合计表述为约 320 万美元。[基金会 2024 年申报表，第 261 项](https://docs.gatesfoundation.org/documents/2024_gf_990pf_pd.pdf) · [基金会续资记录](https://www.gatesfoundation.org/about/committed-grants/2025/10/inv-093734) · [公司公告](https://www.businesswire.com/news/home/20251210618626/en/Chemify-Receives-an-Additional-Grant-to-Accelerate-Digital-Chemistry-Small-Molecule-Discovery-for-Tuberculosis)
- **Maryhill 首座设施。** 2025 年启用公告列出的项目总额为 1,200 万英镑，获得由 Innovate UK 实施的 Glasgow City Region Innovation Accelerator 支持，其中 Scottish Enterprise 的项目补助为 110 万英镑。[设施公告](https://chemify.reportablenews.com/pr/chemify-launches-the-world-s-first-chemputation-facility-revolutionizing-molecular-design-and-manufacture)
- **格拉斯哥扩建。** 2026 年 9 月，Scottish Enterprise 和英国政府分别承诺资助 1,600 万和 600 万英镑，加上 Chemify 拟投入的 6,790 万英镑，项目预算为 8,990 万英镑。[Scottish Enterprise 项目预算](https://www.scottish-enterprise-mediacentre.com/news/gbp-89-9m-boost-for-scotlands-life-sciences-sector)

## 公司动态

| 日期 | 事项与进展 |
| --- | --- |
| 2019-10-24 | **公司注册。** CHEMIFY LIMITED 在英国登记为私人有限公司，注册时间早于团队从格拉斯哥大学分拆。[Companies House](https://find-and-update.company-information.service.gov.uk/company/SC645290) |
| 2022-03 | **从格拉斯哥大学分拆。** Cronin 团队开始将该校数字化学实验室的可编程合成研究用于企业研发项目。官网将这一年列为公司创办年份。[分拆记录](https://www.investglasgow.com/resources/news/214-chemify-announces-36m-funding-to-digitise-chemistry) · [公司历史](https://www.chemify.io/about) |
| 2023-08 | **公布 A 轮及配套资金。** 公司披露包括股权投资和政府计划在内的 4,300 万美元资金，用于将数字设计和化学制造能力提供给制药、生物技术及工业企业。[公司公告](https://www.businesswire.com/news/home/20230802317135/en/Chemify-Announces-43-Million-of-Funding-to-Digitize-Chemistry) |
| 2023-09-12 | **与 Dewpoint 签署发现合作。** 凝聚体生物学团队提出靶点，Chemify 承担分子设计和交付，Dewpoint 保留后续收购选择权。[Dewpoint 公告](https://dewpointx.com/dewpoint-therapeutics-partners-with-chemify-to-apply-groundbreaking-chemistry-ai-to-radically-accelerate-the-discovery-of-molecules-targeting-cancer-and-neurodegeneration/) |
| 2024-01-18 | **与 Prepaire 将合作扩展至 Toxifree。** 双方公布镇痛与成瘾治疗的早期探索项目及付款安排，当时尚未披露临床候选物。[联合公告](https://www.chemify.io/news/prepaire-chemify-partnership) |
| 2024-08-14 | **任命 Kevin McGowan 为首席商务官。** 其当时的职责包括拓展美国药企客户和平台合作，公司借此为商业扩张配置人员。[公司公告](https://www.businesswire.com/news/home/20240814059159/en/Chemify-Hires-Kevin-McGowan-as-Chief-Business-Officer-to-Scale-Commercial-and-Business-Growth-of-Digital-Chemistry-Technology) |
| 2024-10-01 | **公布盖茨基金会首期资助。** 项目拟围绕结核病与疟疾筛选小分子，Chemify 承担设计和制备，后续评估由伙伴负责。当期公告未具名后续研究方。[公司公告](https://www.businesswire.com/news/home/20241001111190/en/Chemify-Receives-Grant-to-Design-and-Discover-New-Drug-Leads-for-Tuberculosis-and-Malaria-Using-Digital-Chemistry-Technology) |
| 2025-06-20 | **Maryhill 首座 Chemifarm 启用。** 格拉斯哥设施面积 21,500 平方英尺，设有生产、研发及设备制造区域，将原本分散的设计、合成与分析集中于一处。[启用公告](https://chemify.reportablenews.com/pr/chemify-launches-the-world-s-first-chemputation-facility-revolutionizing-molecular-design-and-manufacture) |
| 2025-10-21 | **完成超过 5,000 万美元的 B 轮。** 两家领投机构的代表 Ansuman Satpathy 与 Aiden Aceves 加入董事会。公告亦提出建设硅谷设施，当时仍属扩张计划。[B 轮公告](https://www.businesswire.com/news/home/20251021496528/en/Chemify-Raises-More-Than-%2450-Million-in-Oversubscribed-Series-B-to-Drive-Global-Expansion-of-Digital-Chemistry-and-Discovery) |
| 2025-12-10 | **获续资推进与 Lgenia 的抗结核研究。** 追加约 160 万美元后，第二阶段聚焦结核病小分子，并公开双方在化合物设计、合成与评价上的分工。[公司公告](https://www.businesswire.com/news/home/20251210618626/en/Chemify-Receives-an-Additional-Grant-to-Accelerate-Digital-Chemistry-Small-Molecule-Discovery-for-Tuberculosis) |
| 2026-02-12 | **瑞翁确认战略投资及新材料合作。** 这是从药物发现延伸至材料企业的具名合作，公告提出缩短开发周期的目标，未公布量产材料。[瑞翁公告](https://www.zeon.ventures/news/zeon-makes-strategic-investment-in-chemify-to-accelerate-digital-chemistry-innovation-drive-development-of-new-materials-through-state-of-the-art-automated-molecular-design-and-synthesis) |
| 2026-02-25 | **与 Sanacor 启动心脏代谢疾病药物发现。** 双方拟将 Sanacor 的线粒体生物学研究用于选择口服小分子，首先面向糖尿病相关心血管疾病。[联合公告](https://www.businesswire.com/news/home/20260225083560/en/Chemify-and-Sanacor-Collaborate-to-Discover-and-Develop-Small-Molecule-Therapies-for-Cardiometabolic-Diseases) |
| 2026-04-09 | **汇总三篇有关可编程化学的研究。** 两篇论文分别检验程序能否跨反应执行、文献步骤能否转成有效实验；第三篇依据结直肠癌临床前模型中的测量结果迭代激酶抑制剂。这些论文呈现了大学团队的研究结果，商业项目的成功率和临床疗效仍需单独验证。[公司公告](https://www.businesswire.com/news/home/20260409370277/en/Chemify-Founder-Publishes-Three-Papers-Validating-Chemputation-To-Reimagine-New-Chemical-Discovery-and-Development) · [肿瘤研究论文](https://doi.org/10.1038/s42003-026-09873-8) |
| 2026-09-16 | **获 2,200 万英镑公共补助，公布第二代 Chemifarm 扩建方案。** 项目拟在 Govan 的大学健康创新中心设立全球总部和研发中心。同期公司更新了 B 轮总额并介绍 Genesis；当时已运行的设施为 Maryhill。[公司公告](https://www.businesswire.com/news/home/20260916311056/en/Chemify-Becomes-the-First-Chemistry-Hyperscaler-with-%C2%A322-Million-in-Grants-from-Scottish-Enterprise-and-the-UK-Government) · [Scottish Enterprise 公告](https://www.scottish-enterprise-mediacentre.com/news/gbp-89-9m-boost-for-scotlands-life-sciences-sector) |
| 2026-10-22 | **Rima Alameddine 加入董事会。** 这位曾在 IonQ 和 NVIDIA 负责商业业务的独立非执行董事，将协助公司向大型研发企业推广实验容量。公告未披露新客户合同。[公司公告](https://www.businesswire.com/news/home/20261022773136/en/Chemify-Appoints-Rima-Alameddine-to-Its-Board-of-Directors) |

## 相关链接

[官网与品牌标识](https://www.chemify.io/) · [团队](https://www.chemify.io/about) · [产品与技术](https://www.chemify.io/technology) · [合作方式](https://www.chemify.io/ways-we-work) · [实验设施启用公告](https://chemify.reportablenews.com/pr/chemify-launches-the-world-s-first-chemputation-facility-revolutionizing-molecular-design-and-manufacture) · [公司新闻档案](https://www.chemify.io/news)

资料截至 2026 年 11 月 20 日。
