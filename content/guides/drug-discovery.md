---
title: "制药与药物研发"
type: "field"
group: "pharma"
order: 0
---

新药研发有两个不同的起点。一类团队先确定疾病涉及的生物过程，再寻找能影响它的分子。另一类团队从已有药物、天然样品或实验中观察到的作用出发，逐步查明起作用的成分及其作用机制。AI 制药公司的分工也沿着这两条路径展开。下表按团队交给下一环节的成果，归纳四种常见业务。[FDA 新药研发流程](https://www.fda.gov/patients/learn-about-drug-and-device-approvals/drug-development-process)

| 技术路线 | 研发团队交付什么 | 代表项目 |
| --- | --- | --- |
| 疾病机制与靶点发现 | 有人群和实验依据、值得干预的生物学目标 | Relation Therapeutics、insitro |
| 分子筛选与设计 | 待合成或购买的分子，以及选择它们的依据 | AQEMIA、Genesis Molecular AI、英灵殿科技 |
| 设计与自动化实验 | 制成的样品、测量结果，以及据此选出的下一批设计 | Iktos、LabGenius |
| 天然产物发现 | 从混合物中识别出的活性成分，或以此为起点的候选药物 | Enveda |

## 疾病机制与靶点发现

**靶点**是药物希望影响的对象，常见的是某种蛋白质。确定靶点需要回答两个相连的问题，即它是否参与病程，以及增强或抑制它的作用能否改善疾病表现。患者组织中某个蛋白质含量升高，可能源于它促进了疾病，也可能源于组织对损伤的反应。这两种解释会导向相反的用药思路。[早期药物发现指南](https://www.ncbi.nlm.nih.gov/books/NBK92015/)

学术团队通常先用患者样本寻找关联，再用独立人群和实验研究核实。药企还需判断这种关联出现在哪类患者、药物是否容易到达相关组织、能否观察到治疗带来的变化。这条路线中，AI 主要用来整合遗传数据、组织影像和细胞测量，给可能相关的细胞或基因排序，缩小后续研究范围。[基础生命科学与组学](/guides/omics/)

- **Relation Therapeutics** 参与的骨病研究把人群骨密度数据与骨组织细胞的测量对应起来，发现部分血管细胞值得重点研究。论文给出的直接成果是骨病相关细胞的证据；药物是否能降低患者骨折风险，还需要临床研究。[公司档案](/startups/relation-therapeutics/) · [骨病研究原文](https://www.nature.com/articles/s41588-026-02640-9)
- **insitro** 的肝病研究把肝脏脂肪和纤维化（肝组织形成瘢痕）分别作为观察对象。人群遗传数据用于确定研究方向，影像和实验结果用于检查候选药物对不同疾病表现的影响。[公司档案](/startups/insitro/)

## 分子筛选与设计

靶点相对明确后，化学家通常从已有分子或实验筛选结果出发，对结构相近的分子逐个比较。AI 可以预测哪些分子更可能与靶点结合，也可以提出新结构。在研发合作中，这一步通常交付一批有优先顺序的设计，药企据此安排合成和测量。[FDA 对发现与开发的说明](https://www.fda.gov/patients/drug-development-process/step-1-discovery-and-development)

衡量设计质量要区分三个层次。**结构预测**比较模型给出的分子位置和朝向是否接近实验测得的结构。**活性测量**检验样品是否产生预期作用，还需用另一种测量方法排除干扰，例如分子自身发光影响仪器读数。**候选药物选择**则综合考虑活性、溶解性、能否到达目标组织以及安全性。某一项指标领先的分子仍可能因其他性质不合适而退出。[早期活性复核方法](https://www.ncbi.nlm.nih.gov/books/NBK92015/table/drugdiscovery.T.confirmation_of_hits_1/) · [FDA 临床前研究说明](https://www.fda.gov/patients/drug-development-process/step-2-preclinical-research)

- **Genesis Molecular AI** 的 Pearl 测试集中在结构预测，比较模型给出的结合姿态与已测结构。**AQEMIA** 与施维雅的合作已推进到实验筛选出的活性分子。两项披露分别记录了计算预测与实物测量的进度。[Genesis 公司档案](/startups/genesis-molecular-ai/) · [Pearl 测试](https://www.genesis.ml/news/introducing-pearl) · [AQEMIA 公司档案](/startups/aqemia/) · [施维雅公告](https://servier.com/en/newsroom/servier-aqemia-extend-collaboration-undruggable-target-immuno-oncology/)
- **英灵殿科技** 通过 AlloDesign 提供分子设计和定制研发。其官网将依据实测结果自动安排后续实验列为发展方向，合作项目中已经交付的设计和实验结果需按项目确认。[公司档案](/startups/valhalla/) · [产品说明与路线图](https://www.valhalla.science/)

## 设计与自动化实验

一项设计进入实验后，团队需要制出样品、确认成分、测量活性，再决定下一轮改哪些结构。传统药物化学项目中，设计、合成和检测通常由不同岗位承担。把这些环节连接起来的公司还要维护同一样品的身份和记录，才能让下一轮模型使用正确的实验结果。

**Iktos** 公布了自动化制样中两种不同的统计口径。在 135 项化学反应中，首轮有 86 项检出目标产物，部分反应重做后累计检出 97 项，约占 72%。团队再从中选了 12 项进行纯化，有 10 项取得分离产物。后一个比例约为 83%，分母仅包括选中纯化的 12 项。检出目标成分、获得独立样品以及样品表现出药效，各自需要不同的测量。[公司档案](/startups/iktos/) · [机器人制样论文](https://pmc.ncbi.nlm.nih.gov/articles/PMC12705215/)

**LabGenius** 将实验反馈用于抗体设计。团队选择一批抗体进行测量，同时观察它们对目标细胞和健康细胞的作用，用两类读数指导后续设计。与 Iktos 论文考察的合成结果相比，这类工作的重点是经过多轮设计后，能否获得作用更有选择性的抗体。[公司档案](/startups/labgenius/) · [抗体研究原文](https://doi.org/10.1080/19420862.2025.2598093)

## 天然产物发现

天然提取物往往含有许多分子。传统研究先确定哪些组分有活性，再分离其中的物质、确认结构，并用单独取得的成分复核作用。难点在于仪器产生的信号往往很多，而能被识别和继续研究的成分有限。

**Enveda** 的 PRISM 处理质谱数据。质谱记录分子及其碎片的特征信号，模型利用这些信号推断样品中可能有哪些化学结构，帮助团队安排分离和验证。商业成果可以是被确认的活性成分，也可以是公司继续开发的候选药。模型表现看结构判断是否准确；进入临床的候选药，则按患者的疗效和安全性评价。[公司档案](/startups/enveda/) · [PRISM 模型与测试](https://enveda.com/prism-a-foundation-model-for-lifes-chemistry/) · [临床与转化研究](/guides/clinical/)
