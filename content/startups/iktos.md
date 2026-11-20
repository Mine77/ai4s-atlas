---
title: "Iktos"
type: "startup"
logo: "/logos/iktos.svg"
category: "制药与药物研发"
summary: "巴黎药物研发公司，把小分子设计、合成路线规划和机器人实验连接起来。团队在一项研究中用同一台机器人安排了 135 项反应，并报告了检出产物与成功纯化的差距。"
countries: ["法国"]
directions: ["Propose","Synthesize","Characterize"]
maturity: "实际部署"
---

## 公司与团队

Iktos 于 2016 年在法国成立，总部位于巴黎，向药企提供小分子设计软件，也承接从设计到实验的合作项目。**截至 2026 年 11 月 20 日，公司仍以未上市企业身份经营，已进入司法重整。** 巴黎经济活动法院于 10 月 6 日启动程序，认定其自 9 月 18 日起已停止支付到期债务，裁定于 10 月 22 日刊登在法国商事公告公报。11 月 5 日，公司仍以 Iktos 名义宣布新的软件协议。公开登记中未见截至核查日已完成出售或清算的裁定。[法国商事公告公报](https://www.bodacc.fr/pages/annonces-commerciales-detail/?q.id=id:A202602034982) · [企业登记与程序状态](https://www.pappers.fr/entreprise/iktos-823189279) · [企业自报持股性质](https://www.linkedin.com/company/iktos/) · [11 月公司公告](https://iktos.ai/resources/news/iktos-announces-agreement-with-astellas-for-use-of-its-synthesis-aware-generative-ai-platform)

三位联合创始人的分工沿着药物研发流程展开。CEO Yann Gaston-Mathé 来自制药研发和生物技术创业领域。首席科学官 Quentin Perron 是药物化学家，负责研发组合和合作项目交付。首席技术官 Nicolas Do Huu 拥有人工智能博士学位，有分布式计算平台的开发经验。公司在 2019 年和 2020 年先后推出设计工具 Makya 和逆合成工具 Spaya，2023 年启动内部药物发现，2024 年收购 Synsight，把源自法国国家健康与医学研究院的 MT-Bench 细胞检测技术纳入平台。[团队及里程碑](https://iktos.ai/about) · [Synsight 收购公告](https://iktos.ai/resources/news/iktos-announces-the-acquisition-of-synsight)

## 产品

### 药物化学家能拿到什么

| 产品或服务 | 用户与交付物 |
| --- | --- |
| Makya 分子设计 | 药物化学家设定活性、成药性质和三维形状等目标。软件以可购买的原料和已有反应生成候选结构及其合成路线，供团队挑选优先实验的分子。[安斯泰来采用说明](https://iktos.ai/resources/news/iktos-announces-agreement-with-astellas-for-use-of-its-synthesis-aware-generative-ai-platform) |
| Spaya 逆合成 | 对已经给定的分子结构，合成化学家可取得多条排序后的候选路线，比较原料能否采购及合成选择。实验可行性仍须逐条验证。[产品用途与许可](https://iktos.ai/resources/news/collaboration-with-ucb-in-ai-for-retrosynthesis-2) |
| Ilaka 与 Iktos Robotics | 为需要实物样品的项目选择反应，按设备容量和实验条件兼容性排程，再由 Chemspeed 机器人执行。药企可与 Iktos 联合开展实验，也可在兼容设备上使用 Ilaka。[设备合作说明](https://iktos.ai/resources/news/iktos-and-chemspeed-partner-to-bring-ai-orchestrated-laboratory-automation-to-pharmaceutical-rd) |
| MT-Bench 细胞检测 | 源自法国国家健康与医学研究院（Inserm），让项目团队在细胞内检测化合物对指定蛋白质相互作用的影响。Irimajiri 肿瘤合作将它用于评估拟肽分子。[收购公告](https://iktos.ai/resources/news/iktos-announces-the-acquisition-of-synsight) · [细胞检测合作](https://iktos.ai/resources/news/iktos-announces-research-collaboration-in-oncology-with-japanese-peptide-leader-irimajiri) |

### 机器人实验中，检出产物与交付样品有多远

《Chemical Science》发表的实验给出了从反应排程到取得样品的三个不同分母。Iktos 作者将涉及 27 种具名反应的 135 项任务分成六组，安排在三批实验中。首轮用液相色谱–质谱检出 86 个预期产物，占 64%。化学家针对一组失败反应调整后重做，新增 11 个，累计检出 97 个，占 72%。研究者从这 97 个中选取 12 个送外部合作方纯化，最终成功分离 10 个，分离收率为 4% 至 48%。这组数据证明同一台设备可以处理不同类型的研发任务，也说明质谱检出之后仍需验证能否交付纯化样品。其余 85 个检出产物的分离结果仍未知。[论文全文，第 3.5–3.6 节及表 2](https://pmc.ncbi.nlm.nih.gov/articles/PMC12705215/)

### 在软件上验证的指标

Iktos Engine 将配体三维叠合、基于模板的对接、已有复合物的亲和力估计分成三个独立接口。公司在 AlignDockBench 的 369 对测试样本上报告，3D Align 预测的配体姿态中，66.1% 的重原子均方根偏差小于 2 Å（相对于晶体结构）。加入蛋白口袋约束后，3D Dock 的 PoseBusters 物理合理性通过率由 43.4% 升至 75.9%。前者衡量姿态重建，后者检查空间冲突等问题。两者都需与化合物实测活性分别解读。[技术报告及基准说明](https://iktos.ai/resources/news/iktos-engine-apis-for-agentic-workflows-and-computational-chemistry-pipelines)

## 产业伙伴与合作范围

| 伙伴 | 合作范围及已披露条款 |
| --- | --- |
| 施维雅（Servier） | 2026 年签订多年期、多靶点研发协议，涵盖肿瘤和神经系统等领域。Iktos 设计、合成和优化小分子，施维雅负责专有生物测定，并决定对选中项目开展后续临床前及临床开发。首付款、研发经费与有条件的里程碑付款合计潜在价值可超过 **10 亿欧元**，各项金额和已到账款项均未披露。[施维雅确认合作](https://servier.com/en/newsroom/research-two-new-partnerships/) · [Iktos 公布的财务条款](https://iktos.ai/resources/news/iktos-announces-strategic-collaboration-with-servier) |
| 皮尔法伯（Pierre Fabre） | 针对一个未具名肿瘤靶点，Iktos 负责生成及优化分子，皮尔法伯参与候选物筛选、评估与后续推进。金额未披露。[合作公告](https://iktos.ai/resources/news/pierre-fabre-and-iktos-announce-integrated-drug-discovery-collaboration) |
| Chemspeed、Irimajiri Therapeutics | Chemspeed 将 Ilaka 与自己的合成设备配套。Irimajiri 提供 ACLS 拟肽化合物库，与 Iktos 共同寻找干预肿瘤相关蛋白质相互作用的分子。两项合作金额均未披露。[Chemspeed 公告](https://www.chemspeed.com/press/chemspeed-and-iktos-partner-to-advance-ai-orchestrated-laboratory-automation-for-pharmaceutical-r-and-d/) · [Irimajiri 合作公告](https://iktos.ai/resources/news/iktos-announces-research-collaboration-in-oncology-with-japanese-peptide-leader-irimajiri) |
| UCB、Kissei、日本新药、安斯泰来 | UCB 获得 Spaya 许可。Kissei 和日本新药采用 Makya，安斯泰来协议同时覆盖 Makya 和 Spaya。客户合同金额均未披露。[UCB 软件许可](https://iktos.ai/resources/news/collaboration-with-ucb-in-ai-for-retrosynthesis-2) · [日本客户更新](https://iktos.ai/resources/news/iktos-jetro-announcement) · [安斯泰来协议](https://iktos.ai/resources/news/iktos-announces-agreement-with-astellas-for-use-of-its-synthesis-aware-generative-ai-platform) |

## 融资记录

| 时间 | 金额与性质 | 披露情况 |
| --- | --- | --- |
| 2017 年 | 首轮天使投资，金额未披露 | 创始人回忆首笔资金来自天使投资人，当时团队正将分子设计方法发展成软件服务。[创始人访谈](https://www.techniques-ingenieur.fr/actualite/articles/iktos-le-mariage-de-l-ia-et-de-la-robotique-au-service-de-la-decouverte-de-medicaments-141260/) |
| 2023-03-09 | A 轮融资 1,550 万欧元，已交割 | M Ventures 与 Debiopharm Innovation Fund 共同领投，Omnes Capital 参投。用途包括扩展软件并启动机器人服务。[领投方公告](https://www.m-ventures.com/news/iktos-raises-15-5m-series-a-round) |
| 2025-02-20 | 欧洲创新委员会加速器授予 250 万欧元补助 | 欧盟 7 月 25 日签署的 AIR-3D 协议记载补助为 2,499,616 欧元。公司另披露最多 500 万欧元的后续投资选项，未确认该项投资已交割。[欧盟项目登记](https://cordis.europa.eu/project/id/101217538) · [公司资助公告](https://iktos.ai/resources/news/iktos-secures-prestigious-eic-accelerator-grant-to-advance-its-automated-ai-and-robotics-platform-for-drug-discovery) |

上述融资公告均未披露公司估值。施维雅的潜在款项按研发合作条款列示。

## 公司动态

### 2016-10 · 在巴黎成立

三位联合创始人在巴黎成立 Iktos，最初的产品方向是用生成模型辅助小分子设计。法国商事公报保存了公司设立时的登记记录。[设立公告，第 976 项](https://www.bodacc.fr/telechargements/COMMERCIALES/PDF/A/BODACC-A_20160212_0001_p000.pdf) · [公司沿革](https://iktos.ai/about)

### 2018-09 · 与施维雅展示早期多目标优化结果

团队在卢布尔雅那的欧洲药物化学会议上展示一个既有先导系列。施维雅此前积累了 880 个分子，尚无分子同时满足全部 11 项指标。合作团队合成并测试了 11 个新设计，其中 1 个达到全部指标。该结果给出了在一个已经有较多实验数据的系列内优化结构的实例。[团队演示，第 14 页](https://www.novalix-conferences.org/v2/data/1599466878Iktos.pdf) · [会议年鉴](https://www.efmc.info/data/1553075660Yearbook2018_LD.pdf)

### 2019-03-14 · 德国默克将生成设计引入三个项目

默克（Merck KGaA）与 Iktos 公布覆盖三个药物发现项目的合作。同年 Iktos 推出 Makya，使药物化学团队也能以软件服务方式使用生成模型。公告未披露三项研究的靶点或实验结果。[默克合作公告](https://iktos.ai/resources/news/collaboration-with-merck-kga) · [产品沿革](https://iktos.ai/about)

### 2020-11-05 · 德国默克追加基于结构的设计合作

双方将基于结构信息的生成设计用于一个未披露的研发项目。同年 Iktos 推出独立的逆合成工具 Spaya，将“如何制备已有设计”纳入软件产品。[追加项目公告](https://iktos.ai/resources/news/collaboration-with-merck-kgaa-darmstadt-germany-in-ai-for-new-drug-design) · [产品沿革](https://iktos.ai/about)

### 2021-05-25 · UCB 获得 Spaya 许可

UCB 的合成化学与药物化学团队获得逆合成分析和路线规划软件使用权。公告确认了具体使用部门和任务，未报告采用后缩短的实验时间。[软件许可公告](https://iktos.ai/resources/news/collaboration-with-ucb-in-ai-for-retrosynthesis-2)

### 2022-03-30 · 小野制药把设计和路线规划用于同一批项目

Iktos 为小野制药的发现项目提供 Makya、Spaya 和药物设计支持，以寻找满足项目性质要求的新分子。潜在临床前候选物是双方设定的研究目标。[小野制药合作公告](https://iktos.ai/resources/news/collaboration-with-ono-in-artificial-intelligence-for-new-drug-design)

### 2023-03-09 · A 轮支持从软件走向机器人实验

领投方确认 1,550 万欧元已交割，资金用途包括扩展软件服务及启动 Iktos Robotics。Iktos 将这一年列为内部药物发现项目的起点，机器人与两款软件的一体化平台于 2024 年推出。[领投方公告](https://www.m-ventures.com/news/iktos-raises-15-5m-series-a-round) · [平台沿革](https://iktos.ai/about)

### 2024-02-14 · 在日本设立子公司

Iktos 宣布设立 Iktos K.K.，由 Hideyoshi Fuji 担任代表董事并负责日本业务。公司此前已于 2023 年 7 月公布 Kissei 引入 Makya。[日本子公司公告](https://iktos.ai/resources/news/iktos-opens-japan-subsidiary-and-entrusts-its-management-to-hideyoshi-fuji) · [Kissei 初次采用公告](https://iktos.ai/resources/news/kissei-introduces-iktos-ai-drug-discovery-system)

### 2024-07-08 · 收购 Synsight，增加细胞检测能力

Synsight 研究蛋白质间及 RNA 与蛋白质间的相互作用。收购带来的 MT-Bench 让 Iktos 能在完成设计和合成后，测定分子是否影响特定细胞内相互作用。交易价格未披露。[收购原文](https://iktos.ai/resources/news/iktos-announces-the-acquisition-of-synsight)

### 2025-07-25 · 欧盟签署 AIR-3D 资助协议

欧盟项目登记载明资助项目于 8 月 1 日启动，Iktos 为协调单位，工作范围是将 AI 与机器人整合用于药物发现。登记确认了资金协议和项目起点。平台的实验表现另有论文披露。[欧盟项目登记](https://cordis.europa.eu/project/id/101217538)

### 2025-10-01 · 用 MT-Bench 评估肿瘤相关蛋白质相互作用

Iktos 与日本 Irimajiri 合作，将后者的拟肽库与细胞检测、生成设计及机器人合成结合，寻找针对一个肿瘤相关相互作用的抑制剂。该公告描述了实验分工，未公布命中分子。[联合研发公告](https://iktos.ai/resources/news/iktos-announces-research-collaboration-in-oncology-with-japanese-peptide-leader-irimajiri)

### 2025-11 · 发表单台机器人的多类反应实测

研究团队在《Chemical Science》在线发表排程与合成结果。135 项任务中累计检出 97 个目标产物，送交外部纯化的 12 个产物中取得 10 个分离样品。论文同时记录了首轮失败后化学家参与调整的过程。[研究论文](https://doi.org/10.1039/D5SC07668D)

### 2026-01-08 至 01-09 · 两项法国药企研发协议

施维雅项目覆盖多个靶点，并为后续开发设定有条件付款。次日公布的皮尔法伯项目则聚焦一个肿瘤靶点。两项公告都明确了合作伙伴评估候选分子的职责，尚未公布入选的临床前候选物。[施维雅原文](https://servier.com/en/newsroom/research-two-new-partnerships/) · [皮尔法伯合作原文](https://iktos.ai/resources/news/pierre-fabre-and-iktos-announce-integrated-drug-discovery-collaboration)

### 2026-03-26 · Ilaka 向 Chemspeed 设备用户开放

Chemspeed 确认，双方将 Iktos 已在内部研发使用的排程软件提供给其自动化合成平台用户，可将候选分子列表转换为机器可执行的实验任务。双方未披露外部客户安装数量。[设备商公告](https://www.chemspeed.com/press/chemspeed-and-iktos-partner-to-advance-ai-orchestrated-laboratory-automation-for-pharmaceutical-r-and-d/)

### 2026-05-21 · 公布 Iktos Engine 首批三维计算接口

技术报告逐项说明了模板叠合、分子对接与亲和力估计的输入及性能。公告同期招募早期用户，后续接口须按测试和验证进度开放。[技术报告、代码入口及开放安排](https://iktos.ai/resources/news/iktos-engine-apis-for-agentic-workflows-and-computational-chemistry-pipelines)

### 2026-07-23 · 公开 MTHFD2 抑制剂专利申请

公司介绍了 6 月 25 日公开的国际专利申请 WO 2026/132447 A1。Iktos 称团队用 Makya 找到新的核心骨架，再由药物化学团队围绕它扩展，申请材料列举了至少 286 个化合物实例。专利文本让读者可以核对设计最终产生的化学系列。实例数衡量团队探索该系列的广度，临床有效性仍需要人体研究回答。[公司专利说明](https://iktos.ai/resources/news/new-patent-publication-wo-2026132447-polycyclic-mthfd2-inhibitors-and-uses-thereof) · [国际专利申请全文](https://patents.google.com/patent/WO2026132447A1/en)

### 2026-08-25 · 日本客户续约与早期筛选结果

Iktos 入选日本贸易振兴机构 JETRO 的对日投资支持项目。同期，日本药企 Kissei Pharmaceutical 在 2023 年开始使用软件后签订了新的五年订阅协议，日本新药（Nippon Shinyaku）则扩大了 Makya 的使用范围。公告另引用公司日本业务负责人发表的 PKMYT1 激酶项目结果：三个月内测试 16 种化合物，命中率为 25%，找到四种新的化学骨架。这是单一靶点上的小规模实测。能否在其他靶点重复这一命中率，仍需更多项目数据。[公司日本业务公告](https://iktos.ai/resources/news/iktos-jetro-announcement) · [日本药学会期刊文章](https://doi.org/10.14894/medchem.36.3_185)

### 2026-10-06 · 巴黎法院启动司法重整

巴黎经济活动法院认定 Iktos 自 9 月 18 日起停止支付到期债务，10 月 6 日裁定启动司法重整，10 月 22 日公告。截至 11 月 20 日，公开登记显示程序仍在进行，尚未见完成出售或清算的裁定。[法国商事公告公报](https://www.bodacc.fr/pages/annonces-commerciales-detail/?q.id=id:A202602034982) · [程序登记](https://www.pappers.fr/entreprise/iktos-823189279)

### 2026-11-05 · 安斯泰来采用 Makya 和 Spaya

安斯泰来制药与 Iktos 签署两项软件的使用协议。研究人员可先按药物性质提出候选设计，再检查能否找到具体原料与合成路线。公司所称高达 10²⁷ 个分子指设计工具可探索的理论空间。公告确认的是安斯泰来研究团队对平台的采用，尚未披露由此合成的化合物、实验结果或合同金额。[安斯泰来合作公告](https://iktos.ai/resources/news/iktos-announces-agreement-with-astellas-for-use-of-its-synthesis-aware-generative-ai-platform)

## 相关链接

- [公司官网](https://iktos.ai/) · [公司新闻](https://iktos.ai/resources/articles) · [法国企业登记](https://www.pappers.fr/entreprise/iktos-823189279)
- [机器人合成方法与实测数据](https://doi.org/10.1039/D5SC07668D) · [官网品牌图标](https://iktos.ai/favicon.svg)
