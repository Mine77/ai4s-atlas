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

Genesis Molecular AI 原名 Genesis Therapeutics，2019 年由 Evan Feinberg 与软件工程师 Ben Sklaroff 共同创办，技术源于斯坦福大学的研究。公司在美国湾区和纽约开展 AI 研究，在圣迭戈设有湿实验室。Feinberg 现任 CEO，Sergey Edunov 任 CTO，Shifeng Pan 任首席科学官。药物化学家与模型工程师共同参与自有及合作项目。截至 2026 年 11 月 20 日，公开资料显示公司仍独立运营、未上市。合作方 Incyte 在最新季报中将所持 Genesis 股份列为没有可直接确定公允价值的股权投资。[创立公告](https://www.biospace.com/genesis-therapeutics-unifying-ai-and-biotech-to-accelerate-and-optimize-drug-discovery-development-raises-4-1m-in-seed-funding-led-by-andreessen-horowitz) · [现任团队与董事会](https://www.genesis.ml/about) · [实验室与研发地点](https://www.genesis.ml/partners-pipeline) · [Incyte 2026 年第三季度报告](https://incytecorp.gcs-web.com/static-files/819e0b8e-e2e9-4f14-b466-9ab8b97f914a)

## 科学问题与产品

药物化学家面对的选择往往是，给一个已有活性的小分子换一处结构，能否让它更好地结合目标蛋白，同时维持溶解度和代谢稳定性？Genesis 的 GEMS 平台提出候选结构，用 Pearl 预测蛋白与小分子结合后的三维姿态，再用其他模型估计活性、选择性及 30 多项吸收、分布、代谢和排泄相关性质。化学家比较这些可能互相冲突的预测，选择值得合成的分子。团队用湿实验检验结果，项目实测数据也能用于调整模型。[GEMS 产品与操作界面](https://www.genesis.ml/ai-platform) · [联合研发流程](https://www.genesis.ml/partners-pipeline)

Pearl 的一项实际检验是先预测分子如何嵌入蛋白，再与实验测得的晶体结构对照。公司在 2025 年的发布报告中称，在公共 Runs N’ Poses 基准上，相比 AlphaFold 3，得到准确且物理上合理的结合姿态的成功率相对提高 15%。在自有项目的晶体结构上，公司报告相对最接近的对手提升超过 40%。这些指标衡量结构预测质量，药物的活性、安全性和人体疗效仍需各自的实验。[Pearl 技术公告与评测图表](https://www.genesis.ml/news/introducing-pearl)

自有管线中，披露最具体的是针对多种突变型 PIK3CA 的变构抑制剂项目，面向乳腺癌、结直肠癌等方向。官网称数个先导分子正接近开发候选物提名。公司另有促进肿瘤细胞凋亡和自身免疫疾病的小分子项目，公开管线尚未披露这些项目进入人体试验的结果。[公司自有管线](https://www.genesis.ml/partners-pipeline)

## 最近三篇技术博客

### 2026-10-29 · Steering Discrete Diffusion: Design Choices for Feedback-Efficient Molecular Optimization

当每个候选分子都要交给成本较高的评分模型时，怎样决定下一个该评估谁？Genesis 与加州理工学院比较了持续更新生成模型和固定模型后搜索两种做法。在六个小分子靶点上，前者平均调用评分模型 86 次，达到最强搜索基线约 5,000 次调用时的分数。这里计数的是向计算模型索取预测分数的次数。研究尚未验证，真实合成与测量轮数能否按同样比例减少。[技术原文与比较条件](https://www.genesis.ml/news/steering-discrete-diffusion-design-choices-for-feedback-efficient-molecular-optimization)

### 2026-06-10 · Genesis Model Distillation

常规 Pearl 要多次修正原子位置，才能给出一个蛋白与配体的三维结构。团队训练 DeCAF-Pearl 学习跨越中间步骤，在 Runs N’ Poses 评测中保持与教师模型相近的结构成功率。其示例中，扩散采样部分的模型调用次数减少约 20 倍。计入处理输入等固定开销，完整推理加速约 5 倍。对化学团队而言，直接收益是同样计算预算能容纳更多候选分子。[技术原文与耗时口径](https://www.genesis.ml/news/genesis-model-distillation)

### 2026-06-03 · Zero-shot Pearl System Surpasses All Cofolding Models on OpenBind

公司用 OpenBind 发布的实验数据检查 Pearl 的预测。在单个靶点的 802 个化合物上，按原文的零样本设定，每个分子最多考虑 25 个排好序的姿态，78% 至少有一个同时满足位置误差、物理合理性与局部相互作用三项标准。若只取排名第一的预测，这个比例降到 55%。对据此决定合成什么的化学家而言，第一名有多可信，与候选列表里有没有正确答案，是两个不同的问题。该测试集中在一个靶点，跨靶点表现仍需更多数据。[公司原文、标准与排名曲线](https://www.genesis.ml/news/zero-shot-pearl-system-surpasses-all-cofolding-models-on-openbind)

## 药企合作与付款

| 合作方 | 范围、分工与披露金额 |
| --- | --- |
| Genentech、Eli Lilly | Genesis 在 2020 年宣布与 Genentech 开展多靶点合作，2022 年与 Lilly 公布覆盖最多五个靶点的交易。Lilly 合作首付款为 2,000 万美元，6.7 亿美元为包括首付及有条件款项的潜在总额。[Genentech 合作公告](https://www.marketscreener.com/news/latest/Genesis-Therapeutics-Enters-AI-driven-Multi-Target-Drug-Discovery-Partnership-with-Genentech-31565221/) · [Lilly 合作公告](https://www.biospace.com/genesis-therapeutics-announces-strategic-collaboration-with-lilly-to-discover-novel-therapies-using-the-genesis-molecular-ai-platform) |
| Gilead | 2024 年 9 月，双方从三个靶点开始合作。Genesis 披露已收取 3,500 万美元首付款。Gilead 可付费追加靶点，后续里程碑及销售分成取决于研发和商业进展。[Gilead 公告](https://www.gilead.com/news/news-details/2024/gilead-and-genesis-therapeutics-announce-strategic-collaboration-to-discover-and-develop-novel-therapies) · [Genesis 管线页](https://www.genesis.ml/partners-pipeline) |
| Incyte | 2025 年 2 月，双方从两个靶点起步，首付款 3,000 万美元。2026 年 5 月扩展协议至少增加五个靶点，并引入 Incyte 的专有实验数据训练 GEMS。Incyte 负责合作产品临床开发与商业化；其季报确认扩展协议已支付 8,000 万美元研发预付款及 4,000 万美元股权投资。每个新项目最高 2.32 亿美元的里程碑款另受成功条件约束。[初始协议](https://investor.incyte.com/news-releases/news-release-details/incyte-and-genesis-therapeutics-announce-strategic-ai-focused) · [扩展条款](https://www.genesis.ml/news/incyte-and-genesis-molecular-ai-expand-collaboration) · [付款方季报第 19 页](https://incytecorp.gcs-web.com/static-files/819e0b8e-e2e9-4f14-b466-9ab8b97f914a) |

## 融资记录

| 日期 | 公开披露 |
| --- | --- |
| 2019-11-21 | 种子轮 410 万美元，由 Andreessen Horowitz 领投，Felicis Ventures 为主要投资者。[创立与融资公告](https://www.biospace.com/genesis-therapeutics-unifying-ai-and-biotech-to-accelerate-and-optimize-drug-discovery-development-raises-4-1m-in-seed-funding-led-by-andreessen-horowitz) |
| 2020-12-02 | A 轮 5,200 万美元，由 Rock Springs Capital 领投，参与方包括 T. Rowe Price Associates 管理的资金、Andreessen Horowitz、Menlo Ventures 与 Radical Ventures。[公司融资公告](https://www.biospace.com/genesis-therapeutics-secures-52m-series-a-to-further-accelerate-ai-innovation-and-to-launch-drug-discovery-and-amp-development-pipeline) |
| 2022-12-23 | 公司向美国 SEC 申报已售出约 2,389 万美元证券，共 33 位投资者。申报文件未列明融资轮次。[公司 Form D](https://www.sec.gov/Archives/edgar/data/1775819/000177581922000001/xslFormDX01/primary_doc.xml) |
| 2023-08-21 | B 轮公告金额为 2 亿美元，由 a16z 与一家未具名的医疗健康投资基金共同领投，参与者包括 Fidelity、BlackRock 与 NVIDIA 旗下 NVentures。[公司交易律师](https://www.ropesgray.com/en/news-and-events/news/2023/08/ropes-gray-represents-genesis-therapeutics-oversubscribed-financing-drug-development-pipeline) · [公司融资沿革](https://www.genesis.ml/about) |
| 2024-11-13 | NVentures 追加股权投资，金额未披露。双方同时宣布优化用于药物发现模型的计算方法。公司在该公告中称累计融资超过 3 亿美元。[公司公告](https://www.businesswire.com/news/home/20241113952492/en/Genesis-Therapeutics-Announces-New-Equity-Investment-and-Collaboration-with-NVIDIA-to-Optimize-Key-Computational-Methods-for-AI-powered-Drug-Discovery) |
| 2026-05-20 | Incyte 的 4,000 万美元股权投资包含在本次扩展合作的 1.2 亿美元首期对价内。其余 8,000 万美元为研发预付款。[Incyte 季报](https://incytecorp.gcs-web.com/static-files/819e0b8e-e2e9-4f14-b466-9ab8b97f914a) |

## 相关链接

- [公司官网](https://www.genesis.ml/) · [GEMS 平台](https://www.genesis.ml/ai-platform) · [合作与管线](https://www.genesis.ml/partners-pipeline)
- [公司新闻与研究目录](https://www.genesis.ml/news) · [官网蓝色品牌图标](https://cdn.prod.website-files.com/69d6baace8258c456e8a0f87/69d6cac24a41d2fd7489669b_logomark.svg)
