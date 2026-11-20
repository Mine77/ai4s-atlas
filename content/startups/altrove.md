---
title: "Altrove"
type: "startup"
logo: "/logos/altrove.png"
category: "材料研发"
summary: "在巴黎用机器学习选择可合成的无机晶体，经自动化制样、衍射和磁性测量验证，已为工业客户优化无稀土电机磁体。"
countries: ["法国"]
directions: ["Propose","Synthesize","Characterize"]
maturity: "实际部署"
---

## 公司与团队

Altrove 为设备制造商开发关键无机材料的替代品。一家电机企业若想减少对稀土的依赖，仍需保住磁体的抗退磁能力、储存的磁能和成本优势。Altrove 从这些约束出发选择候选配方，在自有实验室制成样品，将测量结果用于决定下一轮实验。其项目还覆盖传感器与执行器使用的无铅压电材料。[公司研发流程](https://www.altrove.ai/approach) · [电机磁体项目](https://www.altrove.ai/resources/magnetic-optimization-for-global-automation-leader) · [材料方向](https://www.altrove.ai/resources/seed-announcement)

公司于 2024 年 1 月在法国巴黎登记为 Altrove Tech，由 CEO Thibaud Martin 与 CTO Joonatan Laulainen 共同创办。Laulainen 拥有材料科学博士学位，专长是材料表征，亦是公司可合成性研究的作者。法国政府在 2026 年 10 月公布的 French Tech 2030 队列将其列入能源与脱碳领域。至 2026 年 11 月 20 日，公共登记仍列公司在营，投资方仍将其列作投资组合企业，未查到收购或上市公告。[法国企业登记](https://annuaire-entreprises.data.gouv.fr/entreprise/983830084) · [创始人采访](https://techcrunch.com/2024/07/03/altrove-uses-ai-models-and-lab-automation-to-create-new-materials/) · [早期投资方档案](https://www.cventures.vc/founder/altrove/) · [French Tech 2030 名单](https://lafrenchtech.gouv.fr/fr/programme/french-tech-2030/)

## 从预测晶体到测得目标晶相

材料计算常用低温下的能量估计判断晶体是否稳定，工业实验还要面对成相路径、原料和杂相。Altrove 与慕尼黑工业大学研究者将化学组成和晶体结构分别评分，再综合两项排序。只看组成时，同一化学式对应的不同晶型容易混淆。团队早期用仅看组成的模型选了九个候选，实验均未制得目标晶相。[研究方法与对照实验](https://arxiv.org/html/2511.01790v1)

在随后公开的实验中，团队从约 440 万个计算结构出发，筛选高分氧化物，预测合成路线。三天实验后，完成表征的 16 个样品中，7 个检出目标结构，2 个形成其他晶型，7 个未检出目标。这里的 7 个命中包含已知材料，且命中不等于高纯度。例如，一种钇锰铁氧化物的目标晶相在混合物中只占约 3.3%。部分数据库把已有实验记录的结构标作理论预测，因而“此前未收录”和“首次合成”也需要分别查证。[原始结果与衍射拟合](https://arxiv.org/html/2511.01790v1#S3.SS2)

## 客户与合作证据

| 项目 | 已完成的工作与公开边界 |
| --- | --- |
| 匿名工业自动化企业的铁氧体电机 | 客户希望在维持最大磁能积与预计制造成本的同时提高矫顽力，并避免使用稀土。Altrove 用主动学习选择实验，将粉末制成压制磁体，再把 X 射线衍射和磁性能测量反馈给模型。首轮历时 12 周。公司披露已向客户交付结果，后续拟开展第二轮优化和放大测试，未给出客户名称、性能增幅或批量订单金额。[公司项目记录，2025-10-09](https://www.altrove.ai/resources/magnetic-optimization-for-global-automation-leader) |
| Synopsys 的磁性材料计算合作 | 双方合作一年。Synopsys 提供 QuantumATK 第一性原理计算，Altrove 负责提出候选、推断制备路线和实验验证。公开身份是研发伙伴，公告未列采购合同金额。[双方人员署名表态的项目公告](https://www.altrove.ai/resources/altrove-demonstrates-an-end-to-end-high-throughput-workflow-for-next-generation-inorganic-materials-using-synopsys-quantumatk) |

Altrove 在种子轮公告中称已签署超过十二项协议，但未逐项列出客户、交付状态或金额。公告把两年内从克级走向千克级描述为资金用途和生产目标。已有证据支持其为客户开展实际研发，批量供货规模仍待披露。[公司融资与产业进展公告](https://www.altrove.ai/resources/seed-announcement)

## 最近发布与技术动态

官网资源目录最近三项更新分别是两条获奖消息和一份技术合作报告。另有一篇实验论文披露了从候选筛选到衍射验证的完整数据。[官方发布目录](https://www.altrove.ai/resources)

### 2026-04-22 · 获法国汽车俱乐部 ACF AutoTech 大奖

主办方将 Altrove 列为 2026 年大奖得主。对电动汽车供应链而言，减少稀土用量的价值取决于磁体性能及制造成本能否同时满足电机要求。奖项说明这一研发方向获得汽车行业评委关注；关于样品如何制备、测试和交付的证据，来自此前公开的铁氧体项目。[主办方获奖名单](https://www.grandprixacfautotech.com/) · [对应的电机研发案例](https://www.altrove.ai/resources/magnetic-optimization-for-global-automation-leader)

### 2026-03-09 · Materials Week Europe 年度创业公司

主办方将年度创业公司奖授予 Altrove，理由是将 AI 与自动化实验室用于在净零目标下寻找替代材料。评奖说明没有给出单位产量碳排放、基线工艺或生命周期边界，因此还无法从中量化一种替代配方的减排幅度。[主办方奖项说明](https://materialsweekeurope.com/award-winners-2026/)

### 2026-02-18 · 用 QuantumATK 筛选磁性材料

磁晶各向异性反映磁化方向改变的难易，公开数据集对该性质的覆盖有限。Altrove 先从超过 20 万个候选中筛出约 3 万个，再用 QuantumATK 逐步提高计算精度。项目约完成 3 万次各向异性计算、1,000 次交换相互作用计算和 200 次高精度基态计算。逐层筛选使昂贵计算能集中在少数候选上。原文披露最后进行了实物合成，但把数量留为“X”，无法据此计算实验成功率。[公司技术公告](https://www.altrove.ai/resources/altrove-demonstrates-an-end-to-end-high-throughput-workflow-for-next-generation-inorganic-materials-using-synopsys-quantumatk)

### 2025-11-06 · 用可合成性排序决定先做哪些材料

公司在这一天收录了 11 月 3 日提交的预印本。研究人员把实验衍射谱与预测结构对照，并在附录给出拟合曲线。结果显示，某个候选可以在预期位置产生衍射峰，同时与大量其他晶相共存。这使读者可以区分“样品中检出了目标”和“样品达到所需纯度”，也说明为何面向器件的项目还必须单独测量磁性或压电性能。[论文及补充数据](https://arxiv.org/html/2511.01790v1) · [提交日期](https://arxiv.org/abs/2511.01790)

## 融资

| 公布时间 | 轮次与金额 | 投资方及用途 |
| --- | --- | --- |
| 2024 年 7 月 | 种子前轮，约 400 万美元（同期报道为 370 万欧元） | Contrarian Ventures 领投，Emblem 参投。两种币值是对同一笔融资的披露。[同期创始人采访](https://techcrunch.com/2024/07/03/altrove-uses-ai-models-and-lab-automation-to-create-new-materials/) · [公司对前轮的确认](https://www.altrove.ai/resources/seed-announcement) |
| 2025 年 10 月 31 日 | 种子轮，公司披露 1,000 万美元，累计融资 1,400 万美元 | Alven 领投，Contrarian Ventures、Bpifrance Digital Venture、Emblem 和 Entrepreneur First 参与。公司计划扩建自动化合成与表征能力，并推进材料放大。领投方律师以 770 万欧元披露本轮；两份公告未解释口径差异，此处沿用公司的美元累计数。[公司公告](https://www.altrove.ai/resources/seed-announcement) · [领投方律师公告](https://www.goodwinlaw.com/en/news-and-events/news/2025/11/announcements-technology-vc-alven-capital-invests-altrove-tech-seed-financing) |

## 相关链接

[官网与品牌标识](https://www.altrove.ai/) · [研发与制造流程](https://www.altrove.ai/approach) · [实验论文](https://arxiv.org/abs/2511.01790) · [法国政府企业档案](https://annuaire-entreprises.data.gouv.fr/entreprise/983830084)
