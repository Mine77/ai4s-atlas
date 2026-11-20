---
title: "分子之心"
type: "startup"
logo: "/logos/moleculemind.svg"
category: "化学与催化"
summary: "开发工业酶和药用蛋白的设计平台，用分子模拟研究塑料降解酶的催化过程，并通过实验检验模型提出的候选分子。"
countries: ["中国"]
directions: ["Propose","Characterize"]
maturity: "实际部署"
---


## 公司与团队

上海分子之心科技集团有限公司（MoleculeMind，原名北京分子之心科技有限公司）由许锦波于 2022 年创立，在北京和上海张江开展研发。公司开发的 MoleculeOS 帮助研究团队判断哪些蛋白值得送去做实验，应用覆盖工业生物催化和生物药发现。截至 2026 年 11 月 20 日，公开资料显示公司继续独立运营，凯赛生物、赛分科技均披露了对这家非上市公司的投资。[创始人访谈](https://m.thepaper.cn/newsDetail_forward_17917804) · [上海张江药谷公告](https://desk.sh.gov.cn/zxfw/xwzx/20260618/9a3c364827f546b5bd2fef052a5cc9da.html) · [赛分科技半年报](https://static.cninfo.com.cn/finalpage/2026-08-28/1225516384.PDF)

许锦波担任 CEO，曾任芝加哥丰田计算技术研究所终身教职教授，研究如何用深度学习预测蛋白质中相距较远的氨基酸在折叠后是否接触，代表方法为 RaptorX-Contact。负责蛋白工程的高级副总裁张德强曾任 Genomatica 计算生物化学负责人，也在达索系统旗下 BIOVIA 开发科学软件。两人均参与了公司关于酶催化模拟的同行评议论文。[公司管理团队](https://moleculemind.com/about-us/leadership) · [论文与作者名单](https://pubmed.ncbi.nlm.nih.gov/42726868/)

## 产品

### MoleculeOS 与 NewOrigin

MoleculeOS 面向工业酶开发和生物药发现团队。研究人员提出项目目标，平台调用 NewOrigin（达尔文）生成候选，用结构预测与分子模拟比较候选的稳定性、结合方式或与底物的相互作用。实验团队收到的是一份带推荐理由的候选清单和相应的计算记录，再决定哪些值得合成和测试。2026 年 7 月，平台向产业用户开放测试。[公司平台介绍](https://moleculemind.com/science-technology/protein-platform) · [中关村生命科学园介绍](https://www.ncsti.gov.cn/kjdt/scyq/wlkxc/wldt/202407/t20240710_170978.html) · [开放测试报道](https://www.jjckb.cn/20260711/99c80cc15441413c8c383496fb6b4289/c.html)

### MMDesign 与 MMFold

MMDesign 为药物发现团队提出能与指定靶点结合的纳米抗体、大环肽等候选分子。MMFold 负责预测复合物结构。团队分别评估结构预测和候选的实验表现。在 FoldBench 的 160 个抗体–抗原界面样本上，MMFold 的首选结构有 39.4% 达到高质量标准。另一项检验是实际测量分子能否结合，结果见下文的两版技术报告。实验确认结合后，活性、药效和安全性仍需各自验证。[MMDesign 技术报告](https://zenodo.org/records/23321531)

### QuantaMind

经典分子动力学模拟通常预先固定化学键的连接关系，难以追踪酶催化反应中键的断裂与形成。QuantaMind 用量子化学计算结果训练机器学习力场，供催化研究者比较原子尺度上的反应机理。团队用 PET 水解酶重现了聚酯塑料水解的完整催化循环，并在论文的测试体系中获得数十纳秒的稳定反应轨迹。实际塑料回收的处理量、效率和成本仍需通过工艺试验测定。[《Science Advances》论文](https://doi.org/10.1126/sciadv.aeg3595)

## 产业伙伴与合作范围

**凯赛生物**在 2023 年投资时明确提出，将其生物制造经验与 MoleculeOS 结合，合作开发新品和升级生产线。在 2026 年半年报中，凯赛再次确认双方正在协同开发项目。这提供了来自使用方的研发合作证据。半年报披露了凯赛自己的材料销售和产能，但没有将其中的增量归因于分子之心。[凯赛投资及合作公告](https://m.cathaybiotech.com/newsxq.aspx?ID=67) · [凯赛生物 2026 年半年报](https://static.cninfo.com.cn/finalpage/2026-08-20/1225483511.PDF)

**一项工业酶项目**展示了公司的验证方式。分子之心在 2026 年 2 月称，团队为一家生物制造企业改造了关键酶，以野生菌为基准，合作方菌种的产率提高了 5 倍。披露未给出客户名称、绝对产率、重复测量数据或生产规模，因此无法将这一数字归于凯赛，也无法从中推算吨产品成本。[分子之心项目说明，由上观新闻转载](https://www.jfdaily.com.cn/sgh/detail?id=1705893)

**礼来上海创新孵化器**于 2025 年 11 月与分子之心签署首家企业入驻协议。该协议提供实验空间、科学家网络和研发交流机会，双方未在这次公告中披露药物授权或采购金额。[分子之心公告](https://mp.weixin.qq.com/s/XEw-xfjb6KR-vmXdDbN3PA) · [上海市政府转载的签约报道](https://www.shanghai.gov.cn/nw4411/20251111/304c5e92b9944dcba0d53da78e669f84.html)

**引加生物**于 2026 年 9 月宣布与分子之心合作。分子之心提供候选蛋白设计，引加提供表达、自动化筛选和工艺放大能力。合作方希望把设计到取得实验反馈的迭代周期缩短到以周计，公告未给出交付周期的实测分布或合同金额。[引加生物公告](https://www.yinjiabio.com/yinjiaxinwen/262.html)

**腾讯云、腾讯健康**与分子之心的合作涉及软件接入。据 2026 年腾讯全球数字生态大会报道，MoleculeOS 接入腾讯健康 BioNexus 工作台，研究人员可在工作台提交蛋白分析和设计任务、追踪计算并取回结果。报道未披露授权费、使用量或药物采购协议。[大会合作报道](https://app.myzaker.com/news/article.php?pk=6aedb3de8e9f097d700f20f3)

## 融资记录

| 披露时间 | 金额与参与方 |
| --- | --- |
| 2022-04-18 | 数千万美元天使轮，红杉中国领投，百度风投、生命园创投基金、芯航资本、未来启创基金等跟投。[创始人访谈及融资披露](https://m.thepaper.cn/newsDetail_forward_17917804) |
| 2023-02-20 | 超亿元人民币战略投资，凯赛生物领投，联想创投跟投，红杉中国追加投资。金额为整轮口径。[领投方公告](https://m.cathaybiotech.com/newsxq.aspx?ID=67) |
| 2024-09-13 | 公司公告将本次融资称为 A 轮，金额为数亿元人民币。谢诺投资、深创投联合领投，商汤国香资本、久奕投资跟投。[公司原文](https://mp.weixin.qq.com/s/wqG3bYX2gpzyHnRRTu3lRQ) · [金额及投资者报道](https://www.forbeschina.com/leadership/68712) |
| 2025-02 | 投资界记录商汤国香资本、深创投和谢诺投资另有一笔融资，金额未公开，未见可核验的逐笔交割公告。[投资界项目记录](https://vc.pedaily.cn/company/654404.html) |
| 2026-06-17 | 公司宣布完成 A 轮系列融资，披露的**累计金额逾 1 亿美元**。参与方包括蓝桥资本、浦东创投、中粮新兴产业基金、东方富海、复星创富、国方创投、赛分科技、英飞尼迪、财鑫资本和正鼎，凯赛生物、芯航资本追加投资。公告未拆分各笔交割，不能将系列累计数与早期 A 轮重复加总。[张江药谷披露](https://desk.sh.gov.cn/zxfw/xwzx/20260618/9a3c364827f546b5bd2fef052a5cc9da.html) |

有一笔实际出资可由上市公司财报交叉核实。赛分科技披露，2026 年上半年通过增资向分子之心投资 **2,000 万元人民币**，取得该轮增资后 **0.7794%** 的股权。该金额仅指赛分科技的股权出资，半年报未披露研发合作、软件采购或里程碑付款。上述融资公告均未列明公司估值。[赛分科技 2026 年半年报“对外股权投资总体分析”](https://static.cninfo.com.cn/finalpage/2026-08-28/1225516384.PDF)

## 公司动态

### 2022-04 · 许锦波公开介绍创业方向

公司创立后，许锦波在“我是科学家”活动披露天使轮融资，并在随后访谈中说明将此前对蛋白质折叠的研究延伸到设计与优化。这个阶段的目标是把团队的学术算法做成可供产业研发使用的平台。[公司回顾](https://cn.linkedin.com/pulse/分子之心完成红杉中国领投数千万美元融资-moleculemind) · [创始人访谈](https://m.thepaper.cn/newsDetail_forward_17917804)

### 2022-07-22 · 展示早期 MoleculeOS

在 CB Insights 中国未来健康论坛，许锦波展示了 MoleculeOS，介绍了用于预测、设计的算法模块和计算基准。此次公开演示记录了早期产品的能力范围，公司面向产业用户开放测试是在 2026 年。[论坛演讲报道](https://cloud.tencent.com/developer/article/2165266)

### 2023-02-20 · 凯赛生物公布联合研发方向

凯赛宣布，计划把 MoleculeOS 引入生物制造研发，结合自身产线经验探索新产品与工艺升级。其 2026 年半年报进一步披露了双方协同开发项目，未单列归属于该合作的产量或销售收入。[凯赛合作公告](https://m.cathaybiotech.com/newsxq.aspx?ID=67) · [凯赛半年报](https://static.cninfo.com.cn/finalpage/2026-08-20/1225483511.PDF)

### 2023-07-07 · NewOrigin 首次亮相世界人工智能大会

许锦波在上海介绍蛋白质生成大模型“达尔文”，展示公司在结构预测之外，开始用模型围绕指定功能提出候选蛋白。当时提出的全流程设计是研发目标。[大会报道](https://www1.xinhuanet.com/tech/20230708/1bb0111b587e4f14a1eb5fd3cd0bd60b/c.html)

### 2024-07-10 · 公布五类产业应用方案

中关村生命科学园介绍了公司从产业项目整理出的五类应用，包括抗体亲和力、蛋白稳定性和酶活性优化。不同任务分别考察分子结合、耐受环境变化或催化性能，一项指标的改进不能替代另一项的测量。[园区原文](https://www.ncsti.gov.cn/kjdt/scyq/wlkxc/wldt/202407/t20240710_170978.html)

### 2025-07-27 · 将复合物预测与动态设计纳入 MoleculeOS 工作流

公司在世界人工智能大会展示升级后的平台。工业酶团队可以围绕活性、稳定性和表达分别评估候选，药物团队则可用平台分析复合物及其结合性质。现场披露的是软件工作流及项目示例。[公司新闻目录](https://moleculemind.com/about-us/news) · [大会报道](https://www.xinhuanet.com/tech/20250727/80b20dc2f0314936854480a2e564c560/c.html)

### 2025-11 · 签约入驻礼来上海创新孵化器

礼来上海创新孵化器投入运营，分子之心成为首家签约入驻企业，可在张江使用实验空间，与科学家交流。礼来同期宣布的其他企业药物合作不属于此次入驻协议。[公司公告](https://mp.weixin.qq.com/s/XEw-xfjb6KR-vmXdDbN3PA) · [上海市政府转载的签约报道](https://www.shanghai.gov.cn/nw4411/20251111/304c5e92b9944dcba0d53da78e669f84.html)

### 2026-02 · 披露工业酶改造项目的产率

在介绍 MoleculeOS 升级时，公司披露了一项合作方菌种的实验结果，称改造关键酶后，产率相对野生菌提高了 5 倍。公开材料只给出相对变化，不能据此计算工业产线的绝对产量。[公司项目说明](https://www.jfdaily.com.cn/sgh/detail?id=1705893)

### 2026-06-03 · 发布首版 MMDesign 纳米抗体实验结果

首版技术报告针对 11 个靶点，每个靶点测试 14 至 50 个候选，在其中 10 个靶点上确认了结合分子（90.9%）。报告同时给出实验筛选规模，使读者能判断团队为得到一个阳性项目需要测多少候选。[团队技术报告](https://zenodo.org/records/20526590)

### 2026-07 · MoleculeOS 向产业用户开放测试

公司开放了原先用于内部项目的系统。研究人员可以围绕研发目标提交任务，并将推荐结果和计算过程交给实验团队。开放测试是使用方式的变化，报道未公布活跃用户或付费客户数。[平台入口](https://mos.moleculemind.com/) · [经济参考网报道](https://www.jjckb.cn/20260711/99c80cc15441413c8c383496fb6b4289/c.html)

### 2026-09-11 · 发表 QuantaMind 催化模拟论文

论文展示了 PET 水解酶反应过程中化学键如何变化，以及数十纳秒轨迹上的数值稳定性。结果支持用这套方法研究反应机理，实际回收工艺性能仍待测量。公司于 9 月 14 日发布成果说明。[同行评议论文](https://doi.org/10.1126/sciadv.aeg3595) · [公司发布说明](https://www.prnewswire.com/news-releases/ai-driven-reactive-modeling-platform-quantamind-research-published-in-science-advances-advancing-a-new-paradigm-in-ai-powered-molecular-rd-302877464.html)

### 2026-09-21 · 引加生物公布联合实验验证安排

引加宣布把分子之心输出的候选设计接入其自动化实验平台。伙伴公告明确了设计、筛选和工艺开发的分工，把缩短每轮研发周期列为合作目标。[引加生物公告](https://www.yinjiabio.com/yinjiaxinwen/262.html)

### 2026-10-12 · MMDesign 扩展至两类分子并报告跨轮次实验

公司在 Zenodo 公布扩展报告，将纳米抗体和大环肽纳入同一评估。针对 18 个不同靶点的 19 个设计项目，每个实测 9 至 50 个候选，18 个项目至少获得一个经确认的结合分子。团队在 6 个已有结果的靶点上重新设计，其中 5 个的候选命中率、最佳结合强度或两项指标得到改善。公司 11 月 3 日的公告解释了同一批数据中的 **94.7%**，分母为 19 个项目，而每个项目内的候选仍有各自的命中率。这是团队公布的结合实验，距离验证治疗效果仍有后续工作。[扩展技术报告](https://zenodo.org/records/23321531) · [11 月 3 日公司公告](https://www.prnewswire.com/news-releases/moleculeminds-new-mmdesign-technical-report-demonstrates-94-7-campaign-success-rate-across-diverse-molecular-targets-and-modalities-302927673.html)

### 2026-10-30 · MoleculeOS 接入腾讯健康 BioNexus

据大会报道，腾讯云与分子之心达成战略合作，MoleculeOS 作为首批接入能力之一，可由腾讯健康 BioNexus 工作台调用。报道描述了软件集成，未披露由此次接入产生的候选药物或订单。[11 月 6 日大会合作报道](https://app.myzaker.com/news/article.php?pk=6aedb3de8e9f097d700f20f3)

## 相关链接

- [分子之心官网](https://moleculemind.com/) · [官方新闻目录](https://moleculemind.com/about-us/news) · [MoleculeOS 平台](https://mos.moleculemind.com/)
- [QuantaMind 论文](https://doi.org/10.1126/sciadv.aeg3595) · [MMDesign 技术报告](https://zenodo.org/records/23321531)
- 页面所用标识取自[公司官网的品牌图标](https://www.moleculemind.com/assets/logo-QWEbu7Wd.svg)。
