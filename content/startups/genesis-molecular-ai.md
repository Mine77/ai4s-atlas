---
title: "Genesis Molecular AI"
type: "startup"
logo: "/logos/genesis-molecular-ai.svg"
category: "制药与药物研发"
summary: "用 GEMS 为药物化学家选择下一批要合成的小分子，用 Pearl 预测药物与蛋白质的结合姿态，并在自有实验室和药企联合项目中检验设计。"
countries: ["美国"]
directions: ["Propose","Characterize"]
maturity: "实际部署"
---

## 公司与团队

Genesis Molecular AI 原名 Genesis Therapeutics，2019 年由 Evan Feinberg 与软件工程师 Ben Sklaroff 共同创办。其早期技术源于 Feinberg 在斯坦福大学 Vijay Pande 实验室合研的 PotentialNet，一种预测分子性质的图神经网络。公司在美国湾区和纽约开展 AI 研究，在圣迭戈设有湿实验室。Feinberg 现任 CEO，Sergey Edunov 任 CTO，Shifeng Pan 任首席科学官，Will McCarthy 任首席运营官。药物化学家与模型工程师共同参与自有及合作项目。[创立公告](https://www.biospace.com/genesis-therapeutics-unifying-ai-and-biotech-to-accelerate-and-optimize-drug-discovery-development-raises-4-1m-in-seed-funding-led-by-andreessen-horowitz) · [Feinberg 的研究背景](https://www.genesis.ml/team/evan-feinberg-ph-d) · [现任团队与董事会](https://www.genesis.ml/about) · [实验室与研发地点](https://www.genesis.ml/partners-pipeline)

截至 2026 年 11 月 20 日，公开资料显示公司仍独立运营、未上市。Incyte 在第三季度报告中将所持 Genesis 优先股列为没有可直接确定公允价值的股权投资。[Incyte 2026 年第三季度报告](https://incytecorp.gcs-web.com/static-files/819e0b8e-e2e9-4f14-b466-9ab8b97f914a)

## 产品

### GEMS 如何帮助药物化学家选择下一批分子

药物化学家给一个已有活性的小分子换一处结构，可能改善它与目标蛋白的结合，却损害溶解度或代谢稳定性。GEMS（Genesis Exploration of Molecular Space）让自有团队及合作药企的研究人员在同一个界面查看候选结构、预测的三维结合姿态、活性、选择性及 30 多项吸收、分布、代谢和排泄（ADME）相关性质。化学家比较各项预测，选出下一批要合成的分子，团队再用湿实验测量其性质。联合项目中，Genesis 的工程师与药物研发人员也参与解读预测及利用实测数据调整模型。[GEMS 产品与操作界面](https://www.genesis.ml/ai-platform) · [联合研发流程](https://www.genesis.ml/partners-pipeline)

### Pearl 的结构预测与验证

Pearl 预测蛋白质与小分子结合后的三维结构。团队以物理模拟生成的合成数据辅助训练，再把预测姿态与实验晶体结构比较。公司在 2025 年报告，在公共 Runs N’ Poses 基准上，取得准确且物理上合理姿态的成功率比 AlphaFold 3 **相对提高 15%**。在自有项目的晶体结构上，公司报告相对最接近的模型提升超过 40%。这些指标衡量结构预测质量。药物活性、选择性、安全性及人体疗效均需另外验证。[Pearl 技术公告与评测图表](https://www.genesis.ml/news/introducing-pearl)

### 自有小分子管线

披露最具体的是针对多种突变型 PI3Kα（由 PIK3CA 编码）的变构抑制剂项目，面向乳腺癌、结直肠癌等方向。官网称数个先导分子正接近开发候选物提名。公司另有促进肿瘤细胞凋亡的小分子项目，以及探索口服小分子治疗自身免疫疾病的项目。截至研究日，公开管线尚未披露这些项目的人体试验结果。[公司自有管线](https://www.genesis.ml/partners-pipeline)

## 产业伙伴与合作范围

| 伙伴 | 研发分工及交易条款 |
| --- | --- |
| Genentech | 2020 年签订多靶点协议，在多个疾病领域结合 Genesis 的图机器学习与 Genentech 的结构生物学、药物发现能力寻找候选物。合同含首付款、临床前至监管阶段的里程碑款及获批产品销售分成，金额未披露。[Genentech 合作公告](https://www.marketscreener.com/news/latest/Genesis-Therapeutics-Enters-AI-driven-Multi-Target-Drug-Discovery-Partnership-with-Genentech-31565221/) |
| Eli Lilly | 2022 年从三个靶点起步，Lilly 可付费再提名两个。首付款为 2,000 万美元。包含首付、提名费及有条件的临床前、开发、监管和销售里程碑款，潜在总额最高 6.7 亿美元，净销售额分成另计。[Lilly 合作公告](https://www.biospace.com/genesis-therapeutics-announces-strategic-collaboration-with-lilly-to-discover-novel-therapies-using-the-genesis-molecular-ai-platform) |
| Gilead | 2024 年从 Gilead 选择的三个靶点起步，双方共同设计、优化小分子，Gilead 可付费追加靶点。Genesis 确认已收取 3,500 万美元首付款。后续里程碑款及分级销售分成取决于研发和商业进展，金额未披露。[Gilead 公告](https://www.gilead.com/news/news-details/2024/gilead-and-genesis-therapeutics-announce-strategic-collaboration-to-discover-and-develop-novel-therapies) · [Genesis 管线页](https://www.genesis.ml/partners-pipeline) |
| NVIDIA | 2024 年双方宣布合作优化药物发现模型的计算方法。到 2026 年，Genesis 报告结合软件优化与更换硬件后，Pearl 在 B200 上的端到端推理较基准 H100 实现加速 2.3–2.8 倍。NVIDIA 随后披露 Genesis 正将 cuPotential 用于药物发现。合作研发费用未披露，NVentures 的股权投资列在融资记录中。[合作公告](https://www.businesswire.com/news/home/20241113952492/en/Genesis-Therapeutics-Announces-New-Equity-Investment-and-Collaboration-with-NVIDIA-to-Optimize-Key-Computational-Methods-for-AI-powered-Drug-Discovery) · [Pearl 性能实测](https://www.genesis.ml/news/zero-shot-pearl-system-surpasses-all-cofolding-models-on-openbind) · [NVIDIA 的 cuPotential 公告](https://blogs.nvidia.com/blog/cuda-x-libraries-agents-accelerate-scientific-discovery/) |
| Incyte | 2025 年从两个靶点起步，首付 3,000 万美元，可付费追加一个靶点，原协议每靶点各类里程碑款最高 2.95 亿美元。2026 年扩展协议至少增加五个靶点，Incyte 提供专有实验数据，并持续资助模型训练和推理。Genesis 负责用 GEMS 识别分子，Incyte 主导临床开发和全球商业化。扩展协议的 1.2 亿美元首期对价已付，其中 8,000 万美元为研发预付款，4,000 万美元为股权投资。新项目每个最高 2.32 亿美元里程碑款及获批后销售分成取决于相应条件。[初始协议](https://investor.incyte.com/news-releases/news-release-details/incyte-and-genesis-therapeutics-announce-strategic-ai-focused) · [扩展条款](https://www.genesis.ml/news/incyte-and-genesis-molecular-ai-expand-collaboration) · [付款方季报第 19 页](https://incytecorp.gcs-web.com/static-files/819e0b8e-e2e9-4f14-b466-9ab8b97f914a) |

## 融资记录

| 日期 | 公开披露 |
| --- | --- |
| 2019-11-21 | 种子轮 410 万美元，由 Andreessen Horowitz 领投，Felicis Ventures 为主要投资者。[创立与融资公告](https://www.biospace.com/genesis-therapeutics-unifying-ai-and-biotech-to-accelerate-and-optimize-drug-discovery-development-raises-4-1m-in-seed-funding-led-by-andreessen-horowitz) |
| 2020-12-02 | A 轮 5,200 万美元，由 Rock Springs Capital 领投，参与方包括 T. Rowe Price Associates 管理的资金、Andreessen Horowitz、Menlo Ventures 与 Radical Ventures。[公司融资公告](https://www.biospace.com/genesis-therapeutics-secures-52m-series-a-to-further-accelerate-ai-innovation-and-to-launch-drug-discovery-and-amp-development-pipeline) |
| 2022-12-23 | 公司向美国 SEC 申报已售出约 2,389 万美元证券，共 33 位投资者。申报文件未列明融资轮次。[公司 Form D](https://www.sec.gov/Archives/edgar/data/1775819/000177581922000001/xslFormDX01/primary_doc.xml) |
| 2023-08-21 | B 轮公告金额为 2 亿美元，由 a16z 与一家未具名的医疗健康投资基金共同领投，参与者包括 Fidelity、BlackRock 与 NVIDIA 旗下 NVentures。[公司交易律师](https://www.ropesgray.com/en/news-and-events/news/2023/08/ropes-gray-represents-genesis-therapeutics-oversubscribed-financing-drug-development-pipeline) · [公司融资沿革](https://www.genesis.ml/about) |
| 2024-11-13 | NVentures 追加股权投资，金额未披露。双方同时宣布优化用于药物发现模型的计算方法。公司在该公告中称累计融资超过 3 亿美元。[公司公告](https://www.businesswire.com/news/home/20241113952492/en/Genesis-Therapeutics-Announces-New-Equity-Investment-and-Collaboration-with-NVIDIA-to-Optimize-Key-Computational-Methods-for-AI-powered-Drug-Discovery) |
| 2026-05-20 | Incyte 的 4,000 万美元股权投资包含在本次扩展合作的 1.2 亿美元首期对价内。Incyte 以每股 9.332 美元购入约 430 万股 B-3 系列优先股。其余 8,000 万美元为研发预付款。[Incyte 季报](https://incytecorp.gcs-web.com/static-files/819e0b8e-e2e9-4f14-b466-9ab8b97f914a) |

上述公告未披露各轮公司估值，2022 年 Form D 申报额与具名轮次的关系也未披露。

## 公司动态

- **2019-11-21｜从斯坦福实验室走向公司研发。** Genesis 公布成立背景和首轮融资，用 PotentialNet 等研究成果搭建小分子发现平台。早期目标是预测分子改变后与靶点结合的差异，当时尚未披露药物候选物。[创立公告](https://www.biospace.com/genesis-therapeutics-unifying-ai-and-biotech-to-accelerate-and-optimize-drug-discovery-development-raises-4-1m-in-seed-funding-led-by-andreessen-horowitz) · [创始人研究经历](https://www.genesis.ml/team/evan-feinberg-ph-d)
- **2020-10-19｜与 Genentech 签约。** 双方宣布用图机器学习针对多个疾病领域寻找小分子，Genesis 在同期公告中描述了把蛋白运动纳入预测的 Dynamic PotentialNet。协议确认平台进入药企联合发现项目，具体靶点未披露。[Genentech 合作公告](https://www.marketscreener.com/news/latest/Genesis-Therapeutics-Enters-AI-driven-Multi-Target-Drug-Discovery-Partnership-with-Genentech-31565221/)
- **2020-12-02｜宣布启动自有药物管线。** 完成 5,200 万美元 A 轮后，公司将扩大 AI 团队与启动自有管线列为资金用途，确立与药企合作并行的研发路线。[公司融资公告](https://www.biospace.com/genesis-therapeutics-secures-52m-series-a-to-further-accelerate-ai-innovation-and-to-launch-drug-discovery-and-amp-development-pipeline)
- **2021-04-28｜增设首席商务官。** Will McCarthy 加入，在早期药企合作基础上负责业务拓展。他后来出任首席运营官，官网列有现职。[公司任命公告](https://www.biospace.com/genesis-therapeutics-expands-executive-team-with-addition-of-will-mccarthy-as-chief-business-officer) · [管理团队](https://www.genesis.ml/about)
- **2022-05-03｜Lilly 选用 Genesis 的分子设计平台。** 双方约定先就三个靶点研究，覆盖多种治疗领域。再增加两个靶点需由 Lilly 行使选择权。[Lilly 合作公告](https://www.biospace.com/genesis-therapeutics-announces-strategic-collaboration-with-lilly-to-discover-novel-therapies-using-the-genesis-molecular-ai-platform)
- **2023-08-21｜B 轮支持自有管线及模型研发。** 公司完成 2 亿美元融资，称将推动自有药物项目并扩展 AI 平台。交易律师确认本轮完成，公告所列研发目标仍需按各项目进度验证。[公司交易律师](https://www.ropesgray.com/en/news-and-events/news/2023/08/ropes-gray-represents-genesis-therapeutics-oversubscribed-financing-drug-development-pipeline) · [公司融资沿革](https://www.genesis.ml/about)
- **2024-09-10｜Gilead 将 GEMS 引入其发现项目。** Gilead 负责选择靶点，双方用平台提出并共同优化分子。公告将后续开发及商业化纳入交易安排，未公布具体化合物。[Gilead 公告](https://www.gilead.com/news/news-details/2024/gilead-and-genesis-therapeutics-announce-strategic-collaboration-to-discover-and-develop-novel-therapies)
- **2024-11-13｜与 NVIDIA 启动计算方法合作。** NVentures 在 B 轮后进一步投资，双方同时公布优化模拟与生成模型的计划。此后发布的 Pearl 使用了 NVIDIA 的 cuEquivariance 加速计算。[公司公告](https://www.businesswire.com/news/home/20241113952492/en/Genesis-Therapeutics-Announces-New-Equity-Investment-and-Collaboration-with-NVIDIA-to-Optimize-Key-Computational-Methods-for-AI-powered-Drug-Discovery) · [Pearl 技术说明](https://www.genesis.ml/news/introducing-pearl)
- **2024-12-11｜公布研发和工程团队任命。** Shifeng Pan 于同年 4 月加入并负责自有管线研发，Alla Ivanova 于 11 月加入并任工程高级副总裁。公告也确认 Paul A. Friedman 自 4 月担任董事长。[公司任命公告](https://www.biospace.com/press-releases/genesis-therapeutics-expands-leadership-team-with-appointments-of-chief-scientific-officer-svp-of-engineering-and-board-chairman)
- **2025-02-20｜与 Incyte 启动联合研究。** 初始项目由 Incyte 选择两个靶点，Genesis 负责用其平台设计小分子。协议划分了发现、开发和商业化职责，靶点名称未披露。[初始协议](https://investor.incyte.com/news-releases/news-release-details/incyte-and-genesis-therapeutics-announce-strategic-ai-focused)
- **2025-07-03｜公开针对突变型 PI3Kα 的专利申请。** 国际申请 WO2025144931A1 披露了化合物对突变型与野生型 PI3Kα 的选择性研究，为自有肿瘤方向提供了可查阅的技术资料。申请公开本身不能确定最终候选物或人体疗效。[专利申请全文](https://patents.google.com/patent/WO2025144931A1/en) · [公司自有管线](https://www.genesis.ml/partners-pipeline)
- **2025-10-28｜以 Genesis Molecular AI 名义发布 Pearl。** 公司披露模型的训练数据、与 AlphaFold 3 等模型的比较条件，以及自有项目晶体结构上的验证。公共数据与内部数据分别报告，后者的原始结构未在公告中公开。[Pearl 技术公告与评测图表](https://www.genesis.ml/news/introducing-pearl)
- **2025-12-02｜Sergey Edunov 加入基础模型团队。** Edunov 此前在 Meta 参与领导 Llama 2 和 Llama 3 开发，加入时获任基础模型高级副总裁，现任 CTO。[公司任命公告](https://www.businesswire.com/news/home/20251202150934/en/Genesis-Molecular-AI-Appoints-Sergey-Edunov-as-Senior-Vice-President-of-Foundation-Models-Further-Strengthening-Leadership-in-Machine-Learning) · [管理团队](https://www.genesis.ml/about)
- **2026-05-20｜Incyte 扩展合作并提供训练数据。** 在首批项目后，双方将 GEMS 扩展至至少五个新靶点，Incyte 同意开放其专有实验数据用于训练。Incyte 后续季报确认了首期付款，但双方未公布首批项目的分子或临床数据。[扩展条款](https://www.genesis.ml/news/incyte-and-genesis-molecular-ai-expand-collaboration) · [付款方季报第 19 页](https://incytecorp.gcs-web.com/static-files/819e0b8e-e2e9-4f14-b466-9ab8b97f914a)
- **2026-06-03｜在 OpenBind 检验 Pearl 的姿态排序。** 在单个靶点的 802 个化合物上，按公司零样本设定，每个分子最多考虑 25 个排好序的姿态，78% 至少有一个同时满足位置误差、物理合理性与局部相互作用三项标准。只取第一名时成功率降到 55%。这一区别影响化学家能否直接采用模型首选的姿态，跨靶点表现仍需更多数据。[公司原文、标准与排名曲线](https://www.genesis.ml/news/zero-shot-pearl-system-surpasses-all-cofolding-models-on-openbind)
- **2026-06-10｜发布 DeCAF-Pearl 蒸馏结果。** 学生模型直接跨过常规扩散过程的中间步骤，在 Runs N’ Poses 的 196 个留出结构上保持与教师模型 Pearl-2026.1.dev 相近的成功率。演示中扩散采样所需的模型调用约为原来的 1/20，计入其他固定计算后，完整推理加速约 5 倍。同样算力可筛查更多分子，真实合成和测量所需时间仍取决于实验条件。[技术原文与耗时口径](https://www.genesis.ml/news/genesis-model-distillation)
- **2026-10-29｜比较有限评分预算下的分子优化方法。** 加州理工学院、苏黎世联邦理工学院与 Genesis 的研究者比较了随反馈更新生成模型和固定模型后搜索两种做法。在六个小分子靶点上，前者平均调用评分模型 86 次，达到最强搜索基线约 5,000 次调用时的分数。指标衡量计算评分次数。真实的合成与测量轮数能否按同样比例减少，仍待湿实验检验。[技术原文与比较条件](https://www.genesis.ml/news/steering-discrete-diffusion-design-choices-for-feedback-efficient-molecular-optimization)
- **2026-11-16｜NVIDIA 披露 Genesis 采用 cuPotential。** NVIDIA 在新计算库公告中将 Genesis 列为正在药物发现中采用 cuPotential 的团队。Genesis 同日称其参与了测试和改进，配合 Pearl 使用时，其流程中的分子动力学结构精修约加速 4 倍。这一计时仅覆盖精修环节。[NVIDIA 原文](https://blogs.nvidia.com/blog/cuda-x-libraries-agents-accelerate-scientific-discovery/) · [Genesis 的测试说明](https://x.com/genesismolai/status/2122434569102414052)

## 相关链接

- [公司官网](https://www.genesis.ml/) · [GEMS 平台](https://www.genesis.ml/ai-platform) · [合作与管线](https://www.genesis.ml/partners-pipeline)
- [公司新闻与研究目录](https://www.genesis.ml/news) · [官网蓝色品牌图标](https://cdn.prod.website-files.com/69d6baace8258c456e8a0f87/69d6cac24a41d2fd7489669b_logomark.svg)
