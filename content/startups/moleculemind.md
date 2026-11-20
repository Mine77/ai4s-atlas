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

北京分子之心科技有限公司（MoleculeMind）由许锦波于 2022 年创立，在北京和上海张江开展研发。公司开发的 MoleculeOS 帮助研究团队判断哪些蛋白值得送去做实验，应用覆盖工业生物催化和生物药发现。截至 2026 年 11 月 20 日，公开资料显示公司继续独立运营，最近公开的股权交易为非上市公司增资。凯赛生物、赛分科技均以投资方身份披露了这家公司。[创始人访谈](https://m.thepaper.cn/newsDetail_forward_17917804) · [上海张江药谷公告](https://desk.sh.gov.cn/zxfw/xwzx/20260618/9a3c364827f546b5bd2fef052a5cc9da.html) · [赛分科技半年报](https://static.cninfo.com.cn/finalpage/2026-08-28/1225516384.PDF)

许锦波担任 CEO，曾任芝加哥丰田计算技术研究所终身教职教授，研究如何用深度学习预测蛋白质中相距较远的氨基酸在折叠后是否接触，代表方法为 RaptorX-Contact。负责蛋白工程的高级副总裁张德强曾任 Genomatica 计算生物化学负责人，也在达索系统旗下 BIOVIA 开发科学软件。两人均参与了公司关于酶催化模拟的同行评议论文。[公司管理团队](https://moleculemind.com/about-us/leadership) · [论文与作者名单](https://pubmed.ncbi.nlm.nih.gov/42726868/)

## 从模型到实验

| 工具 | 研究团队用它判断什么 | 公开证据 |
| --- | --- | --- |
| MoleculeOS 与 NewOrigin | 输入项目所需的蛋白功能，比较候选的结构、稳定性和与底物相互作用的预测结果，再选出值得测试的候选。2026 年 7 月起，平台面向产业用户开放测试。 | [公司平台介绍](https://moleculemind.com/science-technology/protein-platform) · [中关村生命科学园介绍](https://www.ncsti.gov.cn/kjdt/scyq/wlkxc/wldt/202407/t20240710_170978.html) · [开放测试报道](https://www.jjckb.cn/20260711/99c80cc15441413c8c383496fb6b4289/c.html) |
| QuantaMind | 针对催化机理问题，计算原子运动时哪些化学键会形成或断开。团队用可分解聚酯塑料 PET 的酶检验模型能否重现完整催化循环。 | [《Science Advances》论文](https://doi.org/10.1126/sciadv.aeg3595) |
| MMDesign | 为给定靶点提出候选分子，用结合实验检验筛选结果，记录能找到结合分子的项目数和每个项目实际检测的候选数。 | [公司技术报告与实验统计](https://zenodo.org/records/23321531) |

## 有哪些实际合作

**凯赛生物**在 2023 年投资时明确提出，将其生物制造经验与 MoleculeOS 结合，合作开发新品和升级生产线。在 2026 年半年报中，凯赛再次确认双方正在协同开发项目。这提供了来自使用方的研发合作证据。半年报披露了凯赛自己的材料销售和产能，但没有将其中的增量归因于分子之心。[凯赛投资及合作公告](https://m.cathaybiotech.com/newsxq.aspx?ID=67) · [凯赛生物 2026 年半年报](https://static.cninfo.com.cn/finalpage/2026-08-20/1225483511.PDF)

**一项工业酶项目**展示了公司的验证方式。分子之心在 2026 年 2 月称，团队为一家生物制造企业改造了关键酶，以野生菌为基准，合作方菌种的产率提高了 5 倍。披露未给出客户名称、绝对产率、重复测量数据或生产规模，因此无法将这一数字归于凯赛，也无法从中推算吨产品成本。[分子之心项目说明，由上观新闻转载](https://www.jfdaily.com.cn/sgh/detail?id=1705893)

**礼来上海创新孵化器**于 2025 年 11 月与分子之心签署首家企业入驻协议。该协议提供实验空间、科学家网络和研发交流机会，双方未在这次公告中披露药物授权或采购金额。[分子之心公告](https://mp.weixin.qq.com/s/XEw-xfjb6KR-vmXdDbN3PA) · [上海市政府转载的签约报道](https://www.shanghai.gov.cn/nw4411/20251111/304c5e92b9944dcba0d53da78e669f84.html)

## 近期技术发布

### 2026-11-03 · 公司公布 MMDesign 的项目命中结果

公司在公告中解释了技术报告里的 94.7% 指什么。团队围绕 18 个不同靶点开展了 19 个设计项目，每个项目实测 9 至 50 个候选，18 个项目至少找到一个经确认的结合分子。这个比例以项目为分母，同一项目中仍可有多个候选未命中。实验终点是分子能否结合，距离验证治疗效果还有后续工作。[公司公告全文](https://www.prnewswire.com/news-releases/moleculeminds-new-mmdesign-technical-report-demonstrates-94-7-campaign-success-rate-across-diverse-molecular-targets-and-modalities-302927673.html)

### 2026-10-12 · MMDesign 扩展技术报告

团队把纳米抗体和大环肽纳入同一份评估。还有一个比汇总成功率更贴近实际研发的问题：已经获得初步结果的项目，再设计一轮能否得到更好的候选？在复测的 6 个靶点中，有 5 个的候选命中率或最佳结合强度较前一轮提高。报告也将结构预测基准成绩与实验结果分别列出，方便读者判断一次改进发生在计算环节还是实测环节。这组数据由公司团队发布。[技术报告原文、发布日期及版本](https://zenodo.org/records/23321531)

### 2026-09-14 · QuantaMind 用塑料降解酶研究催化过程

公司介绍了其团队 9 月 11 日发表于《Science Advances》的工作。常见的经典分子动力学模拟通常固定化学键的连接关系，难以描述酶怎样让底物断键。QuantaMind 使用从量子化学计算学习的力场，重现了 PET 水解酶的催化循环，并在论文的测试体系中维持数十纳秒反应轨迹的稳定性。这让研究者可以用模拟比较反应机理。论文验证的是计算方法，实际回收塑料时的处理量、效率和成本仍需工艺试验测定。[公司发布说明](https://www.prnewswire.com/news-releases/ai-driven-reactive-modeling-platform-quantamind-research-published-in-science-advances-advancing-a-new-paradigm-in-ai-powered-molecular-rd-302877464.html) · [同行评议论文](https://doi.org/10.1126/sciadv.aeg3595)

## 融资记录

| 披露时间 | 金额与参与方 |
| --- | --- |
| 2022-04-18 | 数千万美元天使轮，红杉中国领投，百度风投、生命园创投基金、芯航资本、未来启创基金等跟投。[创始人访谈及融资披露](https://m.thepaper.cn/newsDetail_forward_17917804) |
| 2023-02-20 | 超亿元人民币战略投资，凯赛生物领投，联想创投跟投，红杉中国追加投资。金额为整轮口径。[领投方公告](https://m.cathaybiotech.com/newsxq.aspx?ID=67) |
| 2024-09-13 | 公司公告将本次融资称为 A 轮，金额为数亿元人民币。谢诺投资、深创投联合领投，商汤国香资本、久奕投资跟投。[公司原文](https://mp.weixin.qq.com/s/wqG3bYX2gpzyHnRRTu3lRQ) · [金额及投资者报道](https://www.forbeschina.com/leadership/68712) |
| 2025-02 | 投资界记录商汤国香资本、深创投和谢诺投资另有一笔融资，金额未公开，未见可核验的逐笔交割公告。[投资界项目记录](https://vc.pedaily.cn/company/654404.html) |
| 2026-06-17 | 公司宣布完成 A 轮系列融资，披露的**累计金额逾 1 亿美元**。参与方包括蓝桥资本、浦东创投、中粮新兴产业基金、东方富海、复星创富、国方创投、赛分科技、英飞尼迪、财鑫资本和正鼎，凯赛生物、芯航资本追加投资。公告未拆分各笔交割，不能将系列累计数与早期 A 轮重复加总。[张江药谷披露](https://desk.sh.gov.cn/zxfw/xwzx/20260618/9a3c364827f546b5bd2fef052a5cc9da.html) |

有一笔实际出资可由上市公司财报交叉核实。赛分科技披露，2026 年上半年通过增资向分子之心投资 **2,000 万元人民币**，取得该轮增资后 **0.7794%** 的股权。这是单一投资方的股权出资。合作开发、软件采购和未来里程碑款均未计入该数字。[赛分科技 2026 年半年报“对外股权投资总体分析”](https://static.cninfo.com.cn/finalpage/2026-08-28/1225516384.PDF)

## 相关链接

- [分子之心官网](https://moleculemind.com/) · [官方新闻目录](https://moleculemind.com/about-us/news) · [MoleculeOS 平台](https://mos.moleculemind.com/)
- [QuantaMind 论文](https://doi.org/10.1126/sciadv.aeg3595) · [MMDesign 技术报告](https://zenodo.org/records/23321531)
- 页面所用标识取自[公司官网的品牌图标](https://www.moleculemind.com/assets/logo-QWEbu7Wd.svg)。
