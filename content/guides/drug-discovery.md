---
title: "制药与药物研发"
type: "field"
group: "pharma"
order: 0
---

假设一个团队想开发一种减轻湿疹的药。皮肤样本里有个分子随炎症升高，化学家又找到能和它结合的化合物。这离一款药还有多远？前一个发现提供了**靶点线索**，后一个发现提供了**药物线索**。接下来要分别证明干预这个靶点有用、化合物能在合适组织产生预期作用，以及接受治疗的患者比对照组获益更多。这三个问题需要三套证据。[FDA 的新药研发流程](https://www.fda.gov/patients/learn-about-drug-and-device-approvals/drug-development-process)

## 学术实验室怎样把相关性变成一个可检验的机制

- **从两种解释出发。** 炎症较重时某种蛋白含量升高，可能是它推动了炎症，也可能是组织受损后的应答。先在另一批患者样本中核对，并查清信号来自哪种细胞。如果只是病变组织中某类细胞变多了，对整个组织取平均就会制造出“每个细胞都变了”的错觉。[如何读懂组学证据](/guides/omics/)
- **用不同测量相互核对。** 研究者可以比较有无干预时细胞表型如何变化，再用另一种读数检查方向是否一致。假设初筛靠荧光读数，一个自带荧光的化合物就可能看起来非常“活跃”。换测量原理还能复现，才值得追问机制。[NIH《Assay Guidance Manual》命中确认表](https://www.ncbi.nlm.nih.gov/books/NBK92015/table/drugdiscovery.T.confirmation_of_hits_1/)
- **写清楚结论适用的范围。** 在某种细胞模型中重复观察到预期变化，足以支持继续研究该机制。药物研发团队还要问，哪些患者的疾病确实由这一机制驱动，以及改变它时，其他组织是否也受到影响。[早期药物发现与开发指南](https://www.ncbi.nlm.nih.gov/books/NBK92015/)

## 工业团队怎样决定把预算给哪个分子

药企会先写下预期的用药人群和用途。以湿疹为例，局部外用和长期口服，对药物到达哪些组织、全身暴露多少以及长期耐受性有不同要求。比较候选分子时，团队会保留一组同时反映药效和风险的实测结果。[FDA 对发现和开发阶段的说明](https://www.fda.gov/patients/drug-development-process/step-1-discovery-and-development)

| 决策 | 团队拿什么来比较 | 哪些情况会改变选择 |
| --- | --- | --- |
| 哪个初筛命中值得复测 | 经确认身份和纯度的样品、重复检测、第二种原理的检测 | 初测信号消失，或只有同一种仪器读数阳性，会降低优先级 |
| 哪个系列值得优化 | 同系列多个分子在活性、选择性、溶解性、代谢稳定性上的并列数据 | 一个分子结合更强，却可能在相关细胞中无效。另一系列效力略弱，但暴露和选择性更好，可以更值得追加实验 |
| 哪个分子可以提名为开发候选物 | 实测药代与安全性、可重复制备性，以及相对同类方案的优势 | 所需暴露已接近出现不良作用的范围，团队可能回到设计阶段。提名后仍要完成相应的临床前研究与申报 |
| 是否把药推进人体研究 | 临床前安全数据、生产质量和人体试验方案 | 获准启动、首例入组和获得人体数据是三个独立里程碑，公告里应分别记录 |

这些决策经常往返。较低的合成成功率会限制后续团队能测到多少个分子。反过来，若团队最缺的是区分两种作用机制的读数，再快的合成设备也很难解决当下的问题。[NIH 早期开发指南](https://www.ncbi.nlm.nih.gov/books/NBK92015/) · [FDA 临床前研究](https://www.fda.gov/patients/drug-development-process/step-2-preclinical-research)

## 新公司的方法分别改变了哪一次决策

- **把靶点研究提前到患者数据。** Relation 用人群遗传信号和骨组织细胞图谱缩小候选范围。insitro 把人群影像、遗传数据与实验表型结合，研究肝脂肪和纤维化是否指向同一机制。这类平台首先交付候选靶点和验证理由，合作公告之后还要追踪哪些项目走到了先导优化。[Relation Therapeutics](/startups/relation-therapeutics/) · [insitro](/startups/insitro/) · [骨病研究原文](https://www.nature.com/articles/s41588-026-02640-9)
- **帮助药物化学家挑下一批小分子。** AQEMIA 用物理计算与生成模型排序，施维雅在合作公告中确认取得有实验活性的分子。Genesis Molecular AI 的 Pearl 用实验结构检查预测的结合姿态。前一种结果可以支持继续做药物化学，后一种评测回答的是模型能否放对分子的位置。二者都需要后续实验衡量选择性和体内行为。[AQEMIA](/startups/aqemia/) · [Genesis Molecular AI](/startups/genesis-molecular-ai/) · [施维雅公告](https://servier.com/en/newsroom/servier-aqemia-extend-collaboration-undruggable-target-immuno-oncology/) · [Pearl 原始评测](https://www.genesis.ml/news/introducing-pearl)
- **缩短提出分子到取得实物之间的等待。** Iktos 把可合成性、反应排程和机器人执行接在一起。LabGenius 则让模型选择下一批候选抗体，在细胞中实测，同时考察目标细胞和健康细胞的响应。前者可以核对每批最终交付多少纯化样品，后者要核对候选在两种细胞之间能否保留所需的选择性。[Iktos](/startups/iktos/) · [LabGenius Therapeutics](/startups/labgenius/) · [Iktos 研究原文](https://pmc.ncbi.nlm.nih.gov/articles/PMC12705215/) · [LabGenius 研究原文](https://doi.org/10.1080/19420862.2025.2598093)
- **从复杂天然样品寻找新的化学起点。** Enveda 根据质谱碎片信号推断分子可能的性质，将推断和样品的实测活性对照，决定先分离什么。它对 PRISM 的评测考察能否识别相近谱图。自有候选 ENV-294 的人体试验另行评价受试者的皮损与安全性。[Enveda](/startups/enveda/) · [PRISM 技术原文](https://enveda.com/prism-a-foundation-model-for-lifes-chemistry/) · [读懂这项人体试验](/guides/clinical/)

## 算一次实验交付率

Iktos 的论文安排了 135 项反应。第一轮检出 86 个预期产物，复做部分反应后累计检出 97 个。研究者从这 97 个中选择 12 个送去纯化，其中 10 个得到分离产物。[论文第 3.5–3.6 节](https://pmc.ncbi.nlm.nih.gov/articles/PMC12705215/)

- **问设备能否产生目标信号**，分母是全部 135 项任务，复做后的累计检出率约为 72%。
- **问送去纯化的样品是否交付**，分母是选中的 12 个，得到 10 个。这一小组经过挑选，不能把约 83% 直接推广到全部 135 项。
- **问这项服务能否缩短药物研发周期**，还缺传统团队执行可比任务的耗时、每种路线所占资源，以及交付的样品中有多少进入后续研究。一次真实的设备验证与一个可采购的效率承诺，中间就差这些数据。
