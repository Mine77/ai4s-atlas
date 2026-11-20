---
title: "Xaira Therapeutics"
type: "startup"
logo: "/logos/xaira-therapeutics.png"
category: "制药与药物研发"
summary: "用单细胞数据寻找药物靶点，用生成模型设计抗体，并在自有实验室验证候选分子。已公开肿瘤与免疫炎症项目的临床前进展。"
countries: ["美国"]
directions: ["Propose","Synthesize","Characterize"]
maturity: "实际部署"
---

## 公司与团队

Xaira Therapeutics 总部位于美国加州南旧金山，2024 年 4 月公开亮相，由 ARCH Venture Partners 与 Foresite Labs 联合孵化。截至 2026 年 11 月 20 日，公开资料仍将其列为独立运营的未上市公司。它把模型研究、实验数据生产和药物开发放在同一团队，主要成果是自有生物药管线。官网列出 XA-1 至 XA-9 九个项目，覆盖肿瘤、免疫与炎症，以及尚未披露的方向。进度图最靠前的项目处于先导分子优化阶段。[创立公告](https://www.businesswire.com/news/home/20240423707240/en/) · [药物管线](https://www.xaira.com/platform) · [私募市场记录](https://forgeglobal.com/xaira-therapeutics_stock/)

联合创始人、董事长兼 CEO Marc Tessier-Lavigne 曾任基因泰克首席科学家。科学联合创始人 David Baker 来自华盛顿大学蛋白质设计研究所，现任科学顾问。首席发现官 Ci Chu、首席科学官 Debbie Law 和首席 AI 科学家 Bo Wang 分别负责药物发现、科学研究和 AI 工作。Baker 实验室与 Xaira 研究人员于 2025 年在《Nature》联合发表了抗体设计研究。这是可核实的学术合作，公司的药物管线另有项目级实验记录。[CEO 履历](https://www.xaira.com/team/marc-tessier-lavigne) · [团队与合作研究里程碑](https://www.xaira.com/our-team)

## 从数据到候选药物

| 环节 | 公司已经展示了什么 |
| --- | --- |
| 选择靶点 | X-Cell 利用干预前后的细胞测量结果，预测一个基因的活性改变后，其他基因的表达会如何变化。训练图谱 X-Atlas/Pisces 涵盖约 2,560 万个单细胞记录。公司报告，在留出的诱导多能干细胞测试中，预测与实测表达变化的相关系数为 0.51。这个分数衡量特定细胞系统的预测能力，靶点能否改善患者病情仍需另外验证。[模型文档与评测口径](https://github.com/Xaira-Therapeutics/X-Cell/blob/main/docs/index.md) |
| 设计与制备抗体 | X-Design 为治疗靶点提出候选抗体。实验团队分别测量候选分子能否识别目标、是否也结合相似蛋白、以及稳定性是否足以继续开发。公司在 XA-1、XA-4 两个内部项目公布了从计算设计进入实物测试的结果。[项目数据](https://www.xaira.com/news/de-novo-design-of-progressable-antibodies-to-therapeutic-targets) |
| 测量实物 | 公司实验室用自动化工作站批量生产蛋白样品，再用分析仪器检查质量。2026 年 10 月，公司展示了将生产工作站接入高效液相色谱仪的连续运行记录。“实际部署”对应自有实验室的工作流程，已披露的治疗项目仍处于临床前阶段。[实地运行报告](https://www.xaira.com/news/x-automate-brings-physical-and-agentic-ai-to-labs) · [管线阶段](https://www.xaira.com/platform) |

## 最近三篇公司技术文章

### 2026-10-23 · X-Automate brings physical and agentic AI to the lab

实验室的瓶颈发生在仪器之间。生产工作站夜间仍能完成样品，但下一台仪器需要有人上样。公司让视觉引导的机械臂与 X-Scientist 协调这一交接，七天内对 18 块样品板完成运输、上样和分析。文中“提高 80%”以工作日朝九晚五人工上样的**模拟排班**为比较基准。它量化了延长仪器工作时间带来的处理量变化，验证范围限于这条流程。[演示、运行记录与基准定义](https://www.xaira.com/news/x-automate-brings-physical-and-agentic-ai-to-labs)

### 2026-10-21 · X-Scientist: A Recursive Self-Improving Agentic AI Platform for Drug Discovery

公司比较了 AI、研究人员和随机选择三种方式，考察各自提出的候选能否逆转肝细胞模型中的特定表达变化。实测命中率分别为 7.1%、6.9% 和 0.9%。AI 提名耗时约 20 分钟，人工超过三小时。在这个案例中，研究人员获得一份命中率相近的候选清单所用时间更短。提名之后，三组结果仍须经过实验测量，文中耗时比较只覆盖提名阶段。[对照实验及图 3](https://www.xaira.com/news/x-scientist-recursive-self-improving-agentic-ai-platform)

### 2026-10-02 · De Novo Design of Progressable Antibodies to Therapeutic Targets

在肿瘤项目 XA-1 中，182 个初始设计经测试和质量筛选后有 18 个确认结合目标。研究团队在七周内得到临床前先导分子。计时开始时，团队已经确定目标结合位置并备好实验材料。另一项目 XA-4 更难处理，过去的筛选尝试未能取得合用分子，团队报告此次获得了经实测具有拮抗活性的候选物。两个案例分别说明模型在准备充分的项目上能推进多快，以及在传统方法遇阻的项目上能否提出可用候选；公司的跨项目成功率和人体疗效尚待验证。[两项研究的结果与时间口径](https://www.xaira.com/news/de-novo-design-of-progressable-antibodies-to-therapeutic-targets)

## 客户与商业合作

技术文章中可辨认的平台使用者是 Xaira 自身的管线团队。公司也以非商业许可向研究者公开较早的 X-Atlas/Orion 数据集。商务负责人 Rachel Lane 在 2026 年 7 月的访谈中解释了公司对外部数据合作的需求；10 月，CEO 表示正洽谈用 X-Design 研究其他公司感兴趣的靶点。上述材料均未披露已签约的药企客户、首付款或里程碑金额。[公司数据发布账户](https://huggingface.co/Xaira-Therapeutics) · [商务负责人访谈](https://www.biospace.com/business/secretive-ai-drug-hunter-xaira-dips-toe-into-dealmaking-with-hunt-for-partners) · [CEO 访谈](https://www.fiercebiotech.com/biotech/weve-been-taking-our-time-xaira-reveals-antibody-platform-and-first-taste-pipeline)

## 融资记录

2024 年 4 月 23 日，Xaira 公告启动时已获**超过 10 亿美元的投资承诺**。ARCH Venture Partners 和 Foresite Capital 领投，参与方包括 F-Prime、NEA、红杉资本、Lux Capital、Lightspeed、Menlo Ventures、Two Sigma Ventures 及 Parker Institute for Cancer Immunotherapy 等。公司公告没有逐笔列示到账金额。私募市场平台 Forge 将同一天的股份拆为约 5.0134 亿美元种子轮和 5 亿美元 A 轮；这为理解启动融资的股份构成提供了另一种口径，两档与启动公告存在重叠。[公司融资公告](https://www.businesswire.com/news/home/20240423707240/en/) · [Forge 股份类别记录](https://forgeglobal.com/xaira-therapeutics_ipo/)

## 相关链接

- [公司官网](https://www.xaira.com/) · [平台与管线](https://www.xaira.com/platform) · [公司技术文章目录](https://www.xaira.com/news-content)
- [公司官网品牌图标原图](https://cdn.prod.website-files.com/6a79b735e0b81ae1e04e6490/6a902bf3c8cab64d84f79942_Xaira_Favicon.png)
