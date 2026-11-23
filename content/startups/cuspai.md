---
title: "CuspAI"
type: "startup"
logo: "/logos/cuspai.svg"
category: "材料研发"
summary: "用生成模型和分子模拟设计满足客户规格的材料，再与实验室筛选和验证候选，已向 Kemira 交付用于去除水中 PFAS 的候选吸附剂。"
countries: ["英国", "荷兰"]
directions: ["Propose", "Synthesize", "Characterize"]
maturity: "实际部署"
---

## 公司与团队

如果要从潮湿空气中捕集二氧化碳，材料必须在大量水蒸气和其他气体共存时，仍能选择性吸附目标分子。CuspAI 把这种工业需求写成设计条件，用 AI 提出可能满足条件的材料，再通过模拟和实验缩小范围。公司总部位于英国剑桥，联合创始人分别在剑桥和阿姆斯特丹建立团队，后者位于科学园区的 Lab42。2026 年 7 月，公司披露已设新加坡办公室，在柏林、东京和美国也有团队成员。英国 Companies House 记录显示，CUSP AI LIMITED 于 2024 年 3 月 9 日注册，公司编号为 15549537。截至 2026 年 11 月 20 日，该实体登记为存续的私人有限公司，公开资料未见已上市或已被收购的公告。[公司注册记录](https://find-and-update.company-information.service.gov.uk/company/15549537) · [公司官网](https://cusp.ai/) · [全球团队分布](https://cusp.ai/blog/launching-our-ai-materials-foundry-and-450-million-series-b/) · [投资方对荷兰团队的说明](https://www.invest-nl.nl/en/news/invest-nl-is-investing-in-cuspai-to-stimulate-ai-driven-development-of-new-materials)

- **Chad Edwards，联合创始人兼 CEO。** 化学家出身，曾在 BASF、Google 和量子计算行业从事技术商业化，曾负责 Cambridge Quantum 的商业发展。其在公司负责的工业合作，需要把客户提出的成本、稳定性、使用环境等约束转成研发任务。[英国政府投资方介绍](https://www.sovereignai.gov.uk/post/sovereign-ai-invests-in-cuspai-to-reinvent-how-the-world-discovers-new-materials) · [创立公告](https://cusp.ai/blog/cuspai-secures-30m-to-combat-climate-change-with-ai-designed-materials/)
- **Max Welling，联合创始人兼首席技术官（CTO）。** 阿姆斯特丹大学教授，曾在高通和微软研究院担任研究领导职务。官网现列其为 CTO，创立公告使用的头衔是首席 AI 官。他在创立公告里用选择性结合二氧化碳为例，说明如何从目标性质反推结构，并用实验检查候选材料能否合成、是否稳定。[创立公告](https://cusp.ai/blog/cuspai-secures-30m-to-combat-climate-change-with-ai-designed-materials/)
- **科学与产业团队。** 材料科学家 Aron Walsh 担任首席科学官，同时在帝国理工学院担任材料设计教授。顾问包括 Materials Project 创始人 Kristin Persson、Geoffrey Hinton 和 ASML 前总裁兼 CTO Martin van den Brink。2026 年 11 月，京都大学的北川进（Susumu Kitagawa）加入顾问委员会，带来多孔晶体合成和气体吸附方面的经验。[帝国理工学院介绍](https://www.imperial.ac.uk/news/articles/engineering/materials/2026/imperial-expert-leads-science-at-2-billion-ai-materials-company-cuspai/) · [团队年度回顾](https://cusp.ai/blog/a-year-at-the-cusp-2025/) · [北川进任命公告](https://cusp.ai/blog/nobel-laureate-susumu-kitagawa-joins-cuspais-advisory-board/)

## 产品

**MIRA** 是面向工业研发团队的专有材料设计平台。客户可获得新结构、预测性质及优先测试名单。例如，水处理企业 Kemira 收到逾 5,000 种候选设计，选出约 20 种继续开发。研发团队定义性能和制造约束，MIRA 生成候选结构，调用物理模拟排序，规划合成路线，并协调合作实验室制样与表征。实验结果用于更新下一轮候选。公司将参与其中的企业、数据提供方和实验室组织成 **AI Materials Foundry**，对外申请入口区分产业伙伴、合成与测试伙伴和数据伙伴。开源分子模拟工具 **kUPS** 是其中一项可单独运行的技术。[官网及合作申请入口](https://cusp.ai/) · [MIRA 工作流程](https://www.nea.com/blog/from-algorithms-to-atoms-part-ii-doubling-down-on-cuspai) · [kUPS 源码](https://github.com/cusp-ai-oss/kUPS)

本文中的 MIRA 指 CuspAI 自有平台。医疗时序模型、单细胞分析软件以及深度原理的同名产品各有独立的开发团队。[MIRA 同名项目对照](/guides/mira/)

### 计算验证：湿空气中的气体吸附

 ODAC25 的同行评议版本包含近 6,000 万次密度泛函理论单点计算，涉及约 1.5 万种 MOF，以及二氧化碳、水、氮和氧。CuspAI 的生成模型提出约 5.3 万个框架，再选出最能增加结构多样性的 460 个，交由量子化学计算。这个实验检验了生成模型能否扩大训练数据的结构覆盖范围。这 460 种结构扩展了孔径、比表面积和密度的覆盖范围，公开成果限于计算数据。[论文](https://doi.org/10.1038/s44286-026-00445-5) · [公司对其分工的说明](https://cusp.ai/blog/opendac-2025-the-largest-open-dataset-for-direct-air-capture/) · [辅助代码与数据](https://zenodo.org/records/21537519)

### 实物验证与客户交付

 在 SkyVault 碳捕集项目中，公司称已在六个月内完成生成、合成与实验验证，但年度回顾没有给出具体样品的吸附容量、湿度条件或循环再生数据。Kemira 的交付则由客户具体说明，六个月指从立项到选出约 20 个候选。公告没有报告这些候选在实际水厂中的去除率、使用寿命或单位处理成本。本页的“实际部署”指企业合作方已在材料研发中使用平台。[SkyVault 年度回顾](https://cusp.ai/blog/a-year-at-the-cusp-2025/) · [Kemira 客户公告](https://www.kemira.com/news-and-stories/newsroom/releases/new-ai-designed-materials-show-promising-potential-to-remove-forever-chemicals-from-drinking-water-in-industry-first-breakthrough/)

### 开源工具 kUPS

计算材料研究者可以独立运行 kUPS。它让分子动力学、蒙特卡洛采样和几何优化共用 JAX 数据结构，可在 GPU 上并行比较候选。公司与 NVIDIA 合作优化特定模拟，报告相对 RASPA 的吞吐量最高提升 49 倍。材料合成与实验测试所需的时间不在这一基准内。同期开放的 Tojax 可将已有 PyTorch 势函数接入 JAX。[技术文章](https://cusp.ai/blog/kups-a-molecular-simulation-engine-for-the-ai-era/) · [kUPS 源码](https://github.com/cusp-ai-oss/kUPS) · [Tojax 源码](https://github.com/cusp-ai-oss/tojax)

## 产业伙伴与合作范围

| 对象 | 公开可核实的工作 | 已披露的交付或进展 |
| --- | --- | --- |
| Kemira，芬兰水处理化学品企业 | 双方签订战略合作协议。Kemira 要求吸附剂能针对低于十亿分之一浓度的 PFAS，同时具备水稳定性并控制成本。 | Kemira 确认收到超过 5,000 种附带预测性质的新设计，已选出约 20 个优先候选，进入后续开发与测试。[Kemira 公告](https://www.kemira.com/news-and-stories/newsroom/releases/new-ai-designed-materials-show-promising-potential-to-remove-forever-chemicals-from-drinking-water-in-industry-first-breakthrough/) |
| 现代汽车集团 | 双方在剑桥签订合作协议，探索下一代出行材料的效率、耐久性和稳定性。现代也通过 A 轮投资 CuspAI。 | 现代公告确认合作框架，未披露器件寿命、量产数据或研发合同金额。[现代汽车集团公告](https://www.hyundai.com/worldwide/en/newsroom/detail/0000001052) |
| Topsoe | 双方已启动催化材料项目。 | 公司年度回顾确认合作进入研发阶段，具体催化剂、性能和合同金额未披露。[年度回顾](https://cusp.ai/blog/a-year-at-the-cusp-2025/) |
| Meta FAIR、佐治亚理工学院等 | 共同开展直接空气捕集研究，扩充可变形金属有机框架（MOF）的气体吸附数据。 | 论文、数据集及计算代码可供研究者核查和使用。[同行评议论文](https://doi.org/10.1038/s44286-026-00445-5) · [ODAC25 数据](https://huggingface.co/facebook/ODAC25) |
| Foundry 产业与实验室成员 | 启动时公布逾 45 家创始合作方，包含 Applied Materials、Lam Research、三星等。剑桥大学材料科学与冶金系另行确认加入实验室网络。 | NVIDIA 提供算力，Meta FAIR 研发原子模型 UMA。[创始伙伴公告](https://caelux.com/ai-materials-foundry/) 剑桥大学披露的角色是高通量合成与表征。[联盟公告](https://cusp.ai/blog/launching-our-ai-materials-foundry-and-450-million-series-b/) · [剑桥大学院系确认](https://www.msm.cam.ac.uk/2026/10/27/department-of-materials-science-metallurgy-joins-the-founding-lab-network-of-cuspais-ai-materials-foundry/) |
| 新加坡科技研究局（A\*STAR） | 为期五年的合作由材料研究与工程研究院（IMRE）承接，CuspAI 提供结构生成和模拟，IMRE 负责自动化合成与实验验证。 | 领域包括半导体、碳捕集及先进电子材料。双方未公布资助金额或已完成的器件性能。[A\*STAR 公告](https://www.a-star.edu.sg/news/press-releases/cuspai-and-astar-announce-five-year-partnership-to-accelerate-ai-driven-materials-discovery-in-singapore) · [IMRE 对分工的说明](https://www.linkedin.com/posts/imresg_materialsscience-aiforscience-astar-activity-7485279544724074496-FAhj) |

上述合作公告未披露项目对价。Foundry 的成员数包括算力、数据和实验室伙伴，无法据此推算付费客户数。

## 融资记录

| 公告日期 | 轮次与融资额（美元） | 估值（美元） | 投资人与披露口径 |
| --- | --- | --- | --- |
| 2024-06-18 | 种子轮，3,000 万 | 未披露 | Hoxton Ventures 领投，Basis Set Ventures、Lightspeed Venture Partners 主要参投，另有 LocalGlobe、Northzone 等。官网归档页标注 2025-01-31，表中采用新闻稿正文的原始公告日期。[种子轮新闻稿](https://cusp.ai/blog/cuspai-secures-30m-to-combat-climate-change-with-ai-designed-materials/) |
| 2025-09-10 | A 轮，超过 1 亿 | 5.2 亿（据 Amsterdam AI） | NEA 和淡马锡共同领投，NVentures、Samsung Ventures、现代汽车集团以及部分早期投资方参投。公司公告只给出融资额下限。[A 轮公告](https://cusp.ai/blog/securing-our-100m-series-a-to-revolutionise-materials-discovery-with-ai/) · [Amsterdam AI 估值回顾](https://amsterdamai.com/news/cuspai-raises-450-million-and-launches-ai-materials-foundry/) |
| 2026-07-20 | B 轮，4.5 亿 | 26 亿 | Kleiner Perkins 与 NEA 共同领投，Bezos Expeditions 参与。新增投资方包括 Lux Capital、AMD Ventures、英国 Sovereign AI Venture Fund、荷兰 Invest-NL，淡马锡等继续跟投。[B 轮公告](https://cusp.ai/blog/launching-our-ai-materials-foundry-and-450-million-series-b/) · [Sovereign AI 确认](https://www.sovereignai.gov.uk/post/sovereign-ai-invests-in-cuspai-to-reinvent-how-the-world-discovers-new-materials) |

截至核查日，官网称累计融资**超过 6.5 亿美元**。按上表逐轮公开金额，只能算出**超过 5.8 亿美元**的下限。A 轮只披露下限，官网也未逐笔对齐累计数与三份公告，因此保留两个口径。26 亿美元是 B 轮估值。[公司概览](https://cusp.ai/) · [B 轮公告](https://cusp.ai/blog/launching-our-ai-materials-foundry-and-450-million-series-b/)

## 公司动态

| 日期 | 事项与进展 |
| --- | --- |
| 2026-11-19 | **北川进加入顾问委员会。** 公司说明，柔性多孔晶体会在吸附和脱附时改变形状，实验专家可帮助检视模型对结构及吸附行为的假设。公告同时记录了 Foundry 首场线上成员活动。[原文](https://cusp.ai/blog/nobel-laureate-susumu-kitagawa-joins-cuspais-advisory-board/) |
| 2026-10-29 | **OpenDAC 2025 技术解读。** 这项联合研究于 2025 年 8 月 5 日首次提交预印本，后发表于《Nature Chemical Engineering》。作者解释为何需要把水与二氧化碳的竞争吸附、框架形变纳入训练数据。其贡献是扩大可供训练和比较的模拟结构范围，尤其是与已知实验结构差异较大的框架。[技术解读](https://cusp.ai/blog/opendac-2025-the-largest-open-dataset-for-direct-air-capture/) · [预印本版本记录](https://arxiv.org/abs/2508.03162) |
| 2026-10-27 | **剑桥大学披露创始实验室的具体分工。** 材料科学与冶金系将 Shijing Sun 团队的自主实验室纳入合作，通过高通量合成与表征检验计算预测。院系公告描述了设备与研究能力，未公布项目测量结果。[院系原文](https://www.msm.cam.ac.uk/2026/10/27/department-of-materials-science-metallurgy-joins-the-founding-lab-network-of-cuspais-ai-materials-foundry/) |
| 2026-07-20 | **启动 AI Materials Foundry。** 公司将专有平台连接到外部实验设施、算力和合作方数据，同时公布 B 轮融资及联盟首批成员。[原文](https://cusp.ai/blog/launching-our-ai-materials-foundry-and-450-million-series-b/) |
| 2026-07 | **与新加坡科技研究局建立五年合作。** IMRE 将自动化合成和测试能力与 CuspAI 的设计、模拟相接，研发涵盖半导体、碳捕集和先进电子材料。[A\*STAR 公告](https://www.a-star.edu.sg/news/press-releases/cuspai-and-astar-announce-five-year-partnership-to-accelerate-ai-driven-materials-discovery-in-singapore) · [IMRE 说明](https://www.linkedin.com/posts/imresg_materialsscience-aiforscience-astar-activity-7485279544724074496-FAhj) |
| 2026-05-21 | **Kemira 水处理项目阶段结果。** 双方针对 GenX、PFBS 和 PFOS 三种污染物，在约 300 万亿种可能结构构成的设计空间内提出候选。这个数字是估计的空间大小，实际交付规模为超过 5,000 种设计。[原文](https://cusp.ai/blog/new-ai-designed-materials-show-promising-potential-to-remove-forever-chemicals-from-drinking/) |
| 2026-04-23 | **开放 kUPS 分子模拟引擎。** 工具以 JAX 组合分子动力学、蒙特卡洛采样和几何优化，并支持批量运行。技术文章报告部分算例中相对 RASPA 的吞吐量最高提升 49 倍，这一指标只适用于文章的特定计算任务。[原文](https://cusp.ai/blog/kups-a-molecular-simulation-engine-for-the-ai-era/) · [源码](https://github.com/cusp-ai-oss/kUPS) |
| 2025-12-18 | **2025 年度回顾。** 创始人说明平台如何选择能降低不确定性的实验，并把 SkyVault 的合成验证、Kemira 的客户项目、Topsoe 的催化工作列为不同应用。[原文](https://cusp.ai/blog/a-year-at-the-cusp-2025/) |
| 2025-11-06 | **与现代汽车签订跨领域合作协议。** 双方在剑桥确立研发框架，将材料效率、耐久性和稳定性列为未来出行平台的目标，未披露车辆搭载结果。[现代汽车集团原文](https://www.hyundai.com/worldwide/en/newsroom/detail/0000001052) |
| 2025-09-10 | **完成 A 轮并首次公开与现代汽车的可持续能源材料合作。** 公司同时宣布 ASML 前总裁 Martin van den Brink 和 BP 前 CEO John Browne 加入顾问团队，为半导体和能源项目提供产业经验。[公司公告](https://cusp.ai/blog/securing-our-100m-series-a-to-revolutionise-materials-discovery-with-ai/) |
| 2025-07-09 | **与 Kemira 签订合作。** 原文界定首个项目是寻找去除水中 PFAS 的材料。双方明确优先解决饮用水与工业用水中的痕量污染，当时披露的是项目启动。[公司原文](https://cusp.ai/blog/pioneering-the-future-of-chemicals-using-ai-our-partnership-with-kemira/) · [Kemira 公告](https://www.kemira.com/news-and-stories/newsroom/releases/kemira-and-cuspai-forge-strategic-partnership-to-pioneer-ai-driven-materials-innovation/) |
| 2025-03-05 | **扩充科学顾问委员会。** Yann LeCun、Materials Project 创始人 Kristin Persson 和 AI 政策研究者 Verity Harding 加入，与原顾问 Geoffrey Hinton 共同提供指导。公司当时披露团队共有 27 位专家，分布在四个司法辖区。[公司公告](https://cusp.ai/blog/announcing-the-cuspai-advisory-board/) |
| 2024-06-18 | **公开材料设计平台构想，与 Meta 启动研究合作。** 创始人用指定环境下选择性结合二氧化碳说明“按性质寻找结构”的设计目标。Meta FAIR 提出在 OpenDAC 工作基础上探索吸附剂，同日公布种子轮。[公司创立公告](https://cusp.ai/blog/cuspai-secures-30m-to-combat-climate-change-with-ai-designed-materials/) |
| 2024-03-09 | **英国公司注册。** CUSP AI LIMITED 在英格兰和威尔士注册为私人有限公司，注册号 15549537。[Companies House](https://find-and-update.company-information.service.gov.uk/company/15549537) |

## 相关链接

[公司官网](https://cusp.ai/) · [官方博客](https://cusp.ai/blog/) · [英国公司注册档案](https://find-and-update.company-information.service.gov.uk/company/15549537) · [开源分子模拟工具](https://github.com/cusp-ai-oss/kUPS) · [品牌符号来源（官网开屏 SVG 中的 sprite-loader）](https://cusp.ai/_nuxt/spritemap.2a7751ce.svg#sprite-loader)
