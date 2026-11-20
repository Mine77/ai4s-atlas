---
title: "Enveda"
type: "startup"
logo: "/logos/enveda.svg"
category: "制药与药物研发"
summary: "用质谱模型从天然混合物中挑选值得分离验证的活性小分子，推进自有药物管线。其特应性皮炎与哮喘候选药 ENV-294 已进入 2a 期。"
countries: ["美国","印度"]
directions: ["Propose","Characterize"]
maturity: "临床开发"
---

## 公司与团队

Enveda（原 Enveda Biosciences）由 Viswa Colluru 于 2019 年创立，在美国科罗拉多州博尔德和印度海得拉巴设有据点。Colluru 此前在 Recursion 任创新科学家和产品经理，并组建早期产品组合团队。Enveda 将同一条管线交由不同专业团队接力，PK Jadhav 负责药物发现，首席开发官 Niranjan Rao 负责开发。2026 年 9 月，公司宣布完成 E 轮融资。截至 11 月 20 日，可核实的公开记录仍将其列为独立、未上市公司。[成立与早期研发](https://enveda.com/news/enveda-biosciences-closes-51m-series-a-financing-led-by-lux-capital/) · [管理团队](https://enveda.com/people/) · [两地地址](https://enveda.com/contact/) · [私募市场记录](https://forgeglobal.com/enveda-biosciences_ipo/)

## 如何从混合物中找到药物线索

一份植物提取物含有许多小分子。即使它让细胞出现了所需的变化，科学家仍要判断是哪个分子起作用、是否值得投入资源分离。Enveda 用串联质谱记录分子的碎片信号，再用 PRISM 模型推断候选结构和化学性质。与此同时，自动化实验室测量样品的生物活性。团队把两类数据对照，在活性和可优化性都有依据时才分离相应成分，交给药物化学团队验证、改造。这一流程把模型用在一项具体的实验决策上：同一批样品中，先花时间拿到哪一种纯化合物。[平台](https://enveda.com/platform/) · [产品团队对筛选与分离决策的说明](https://enveda.com/breaking-barriers-simultaneous-target-and-drug-discovery-at-scale/)

PRISM 的初版从 12 亿张小分子质谱中学习。公司用约 200 万张有标注的谱图训练两个架构相同的模型，比较有无预训练的差异。在 12 项化学性质预测中，预训练带来的决定系数（R²）相对提升为 7%–16%。在参考谱库检索任务中，能找到近似匹配的测试谱图数量相对增加 23.3%。这些指标反映了筛选线索的质量；近似匹配还要经过结构确证，活性和临床效果也各有独立的验证环节。[PRISM 原始评测与图表](https://enveda.com/prism-a-foundation-model-for-lifes-chemistry/)

## 自有管线与临床证据

公司于 2026 年 9 月披露，自成立以来选定了 17 个开发候选物，其中 3 个进入人体试验。投资方 Kinnevik 将其描述为公司内部发现、拥有全部权益的管线。[公司管线公告](https://enveda.com/news/enveda-raises-311-million/) · [Kinnevik 对管线权属的说明](https://www.kinnevik.com/insights/kinnevik-participates-in-envedas-funding-round/)

| 项目 | 已披露结果及其边界 |
| --- | --- |
| ENV-294 · 特应性皮炎、哮喘 | 特应性皮炎 1b 期开放标签研究纳入 9 名成人。湿疹面积和严重程度指数（EASI）相对基线平均下降 68%（第 28 天），停药两周后平均下降 85%（第 42 天）。小样本、无对照的设计限制了对药物净疗效和持续时间的判断。公司已启动特应性皮炎及哮喘两项 2a 期试验。[1b 期结果](https://enveda.com/news/enveda-reports-positive-results-for-env-294-in-a-phase-1b-clinical-trial-of-patients-with-moderate-to-severe-atopic-dermatitis/) · [2 期启动公告](https://enveda.com/news/enveda-initiates-phase-2-clinical-trials-of-env-294-a-first-in-class-oral-therapy-in-atopic-dermatitis-and-asthma/) |
| ENV-308 · 减重后的体重维持 | 团队以运动相关代谢物 Lac-Phe 为设计起点，开发更适于口服给药的模拟物。首个人体试验纳入 88 名健康志愿者，主要评估安全性、耐受性和药代动力学。循环瘦素下降是探索性指标，停用 GLP-1 药物后能否维持体重仍需在目标人群中检验。[1 期原始公告](https://enveda.com/news/308-phase1/) |
| ENV-6946 · 炎症性肠病 | 公司于 2025 年 12 月宣布美国 FDA 放行临床试验申请并启动 1 期。该口服候选药旨在主要作用于肠道，公开管线仍列为 1 期。[启动公告](https://enveda.com/news/enveda-advances-third-asset-to-the-clinic-with-us-fda-ind-clearance-and-phase-1-initiation-of-env-6946/) · [当前管线](https://enveda.com/pipeline/) |

## 最新公司文章与技术动态

### 2026-10-27 · 用语言模型审阅药品生产批记录

公司刊物 *In-Veda* 发表了 CDP 系统的内部验证。团队取同一项 2 期生产活动的 4 份批记录，共 1,061 页，将人工发现与模型在多次运行中报出的问题交由质量人员裁定。人工提出的 11 个需处理问题，都至少被一次模型运行发现。一次计时测试中，包含人工裁定的审核耗时从近 26 小时降至不足 3 小时。结果来自一次生产活动，研究没有测量换到其他药品或生产商后的检出率。每批药品仍由质量团队作最终决定。[技术文章](https://enveda.com/cmc-document-processor/) · [与 Anthropic 的合作公告](https://enveda.com/news/enveda-collaborates-with-anthropic-to-accelerate-drug-development/)

### 2026-09-29 · ENV-294 的临床变化能否对应到生物标志物

Enveda 公布了欧洲皮肤病与性病学会年会的两项口头报告安排。临床报告讨论皮损评分，机制报告则由西奈山伊坎医学院研究者说明 RAC2 调节与患者分子指标之间的联系。两份报告使用同一项 1b 期研究，回答的是临床观察和机制解释两个问题。该公告给出报告题目、作者和日程，未提供可独立复核的完整分子数据。[公司会议公告](https://enveda.com/news/enveda-announces-late-breaker-oral-presentation-of-new-mechanistic-and-biomarker-data-from-the-phase-1b-trial-of-env-294-a-potential-first-in-class-oral-therapy-for-moderate-to-severe-atopic-dermatit/)

### 2026-09-23 · 从 17 个开发候选物到 3 个临床项目

E 轮公告解释了接下来要验证什么：用融资推进已入组人体试验的三个项目，并继续从天然分子中挑选炎症和代谢领域的后续候选物。公告把从成立至今积累的候选物总数与当前临床项目数并列。各项目进入开发的时间不同，因此不能据此把 3/17 当作平台从发现到临床的成功率。[公司原文](https://enveda.com/news/enveda-raises-311-million/)

## 合作与商业模式

Enveda 公开展示的主要商业资产是自有候选药。微软提供 Azure 计算资源，用于训练和扩展 PRISM，也参与了 2024 年融资。Anthropic 与 Enveda 合作开发生产和申报文件的审阅流程。赛诺菲参加 C 轮融资，公告披露的是投资，并未披露药物许可、首付款或开发里程碑。上述合作没有给出可以计入药品销售或平台授权收入的合同金额。[微软合作](https://enveda.com/news/pr-enveda-biosciences-announces-microsoft-collaboration-and-reveals-foundation-model-to-read-and-translate-chemistry/) · [Anthropic 合作](https://enveda.com/news/enveda-collaborates-with-anthropic-to-accelerate-drug-development/) · [赛诺菲投资](https://enveda.com/news/enveda-gains-backing-from-sanofi-to-advance-ai-driven-drug-discovery-to-clinical-trials-bringing-total-series-c-financing-to-150m/)

## 融资记录

| 公告日期 | 轮次、金额与投资者 |
| --- | --- |
| 2020-12-16 | 种子轮 490 万美元，True Ventures 领投，Wireframe Ventures、Village Global 和 Chris Gibson 参投。[公司通稿](https://www.biospace.com/enveda-biosciences-systematically-harnesses-untapped-potential-of-nature-s-chemistry-to-develop-next-gen-therapeutics) |
| 2021-06-22 | A 轮 5,100 万美元，Lux Capital 领投，Two Sigma Ventures、Hummingbird、Catalio 等参投。[A 轮公告](https://enveda.com/news/enveda-biosciences-closes-51m-series-a-financing-led-by-lux-capital/) |
| 2022-12-21、2023-04-20 | B 轮首笔 6,800 万美元包含股权和债务，Dimension 领投股权轮。随后 Kinnevik 领投 B1，新增股权融资 5,100 万美元，两笔合计 1.19 亿美元。[B 轮公告](https://enveda.com/news/enveda-biosciences-closes-68-million-combined-series-b-equity-and-debt-financing/) · [B1 公告](https://enveda.com/news/enveda-biosciences-announces-oversubscribed-series-b1-bringing-total-round-to-us119-million/) |
| 2024-06-14 | 在上述 1.19 亿美元之外再募 5,500 万美元。新投资者包括 Premji Invest、Lingotto、微软和大自然保护协会。[增资公告](https://enveda.com/news/enveda-biosciences-announces-55m-in-new-funding-to-accelerate-platform-and-advance-multiple-candidates-to-clinical-trials/) |
| 2024-11-21、2025-02-26 | C 轮先公布 1.30 亿美元，由 Kinnevik 和 FPV 共同领投。赛诺菲加入后，该轮总额增至 1.50 亿美元。[C 轮首份公告](https://enveda.com/news/enveda-closes-130m-series-c-funding-to-deliver-multiple-clinical-readouts-from-a-pipeline-of-10-development-candidates/) · [最终轮次总额](https://enveda.com/news/enveda-gains-backing-from-sanofi-to-advance-ai-driven-drug-discovery-to-clinical-trials-bringing-total-series-c-financing-to-150m/) |
| 2025-09-04 | D 轮 1.50 亿美元，由 Premji Invest 领投；Kinnevik 披露其本轮投入 2,000 万美元。[公司公告](https://enveda.com/news/enveda-raises-150m-series-d-funding-to-reach-unicorn-status-enrolls-first-patient-in-lead-program-and-adds-mikael-dolsten-to-board-of-directors/) · [投资方披露](https://www.kinnevik.com/insights/kinnevik-participates-in-envedas-funding-round/) |
| 2026-09-23 | E 轮 3.11 亿美元，由 Catalio Capital Management 领投，Durable Capital Partners、ICONIQ、Lightspeed 等参投。公司给出的历年累计融资口径为超过 8.45 亿美元。[E 轮交割公告](https://enveda.com/news/enveda-raises-311-million/) |

## 相关链接

- [公司官网](https://enveda.com/) · [科研平台](https://enveda.com/platform/) · [临床管线](https://enveda.com/pipeline/)
- [In-Veda 技术文章](https://enveda.com/in-veda/) · [公司公告目录](https://enveda.com/press/) · [官网彩色标识原图](https://enveda.com/wp-content/themes/enveda/img/enveda-logo-color.svg)
