---
title: "材料研发的技术路线与验证方法"
type: "field"
group: "materials"
order: 0
---

材料性能由成分和内部结构共同决定。即使原料配比相同，不同的加热、冷却和压制方式也可能改变晶相（原子按特定方式排列形成的结构）、孔隙和颗粒分布。围绕这些因素，材料研发形成了几类不同的技术路线。同一家公司可以承担其中多项工作。

| 技术路线 | 主要改变什么 | 研究团队或客户获得什么 |
| --- | --- | --- |
| 发现新材料 | 化学组成、晶体结构 | 候选材料及优先测试顺序 |
| 优化配方与加工工艺 | 已知原料的比例、加工条件 | 推荐配方和可行的加工条件 |
| 开发样品并验证性能 | 制样方法和后续实验安排 | 实物样品、测试记录或开发报告 |
| 分析材料结构 | 从测量数据识别样品的组成和结构 | 晶相判定、内部结构估计 |

## 新材料发现与计算筛选

这条路线从用途出发。水处理中需要能吸附特定污染物的材料，电机中需要在工作条件下保持磁性的材料。学术团队通常先查已知材料，用物理计算排除部分不合适的组成，再挑选少量候选进行合成。Materials Project 的相图描述不同组成的相对稳定性。常用计算以接近绝对零度的条件为基础，实际加热、冷却后形成的结构仍需测量。[Materials Project](/research/materials-project/) · [相图计算与假设](https://docs.materialsproject.org/methodology/materials-methodology/thermodynamic-stability/phase-diagrams-pds)

AI 可以根据性能要求生成结构，或者为已有候选排序。CuspAI 为 Kemira 提出了超过 5,000 个吸附材料设计，客户从中选择约 20 个继续开发。这两个数字分别描述设计数量和优先测试数量。水处理效果还涉及样品对污染物的实际吸附量及可用时长。Orbital Industries 向巴斯夫旗下 ECMS 授权材料发现平台，客户获得的是自行开展筛选的软件。[CuspAI](/startups/cuspai/) · [Kemira 公告](https://www.kemira.com/news-and-stories/newsroom/releases/new-ai-designed-materials-show-promising-potential-to-remove-forever-chemicals-from-drinking-water-in-industry-first-breakthrough/) · [Orbital Industries](/startups/orbital-industries/) · [ECMS 授权公告](https://www.orbitalindustries.com/news/press/basf-ecms-ai-materials-discovery-platform)

学术项目 MatterGen 提供了计算评估的例子。模型生成的结构中，38.57% 同时满足论文采用的稳定性、不重复性及新颖性判据。对于一种被实际制备和测量的钽铬氧化物，独立研究者后来提出，一种已知结构也能解释已发表的衍射峰。生成多少候选、制成多少样品、确认多少新结构，分别依赖不同的证据。[MatterGen](/research/mattergen/) · [模型卡与评估口径](https://huggingface.co/microsoft/mattergen) · [原论文](https://doi.org/10.1038/s41586-025-08628-5) · [独立复核](https://doi.org/10.1039/D6MH00268D)

## 已有材料的配方与工艺优化

工业客户往往已有可生产的材料，目标是在成本和设备限制下调整一项或多项性能。工程师通常从原配方开始，把新旧配方放在相同加工条件下比较，并在不同原料批次上重复。这种对照设计可以区分配方变化和批次波动的影响。AI 软件使用企业过去的配方、加工记录和实测结果，估计下一次实验应优先改哪些变量。[NIST 分组实验设计](https://www.itl.nist.gov/div898/handbook/pri/section3/pri3333.htm)

- **涂料与薄膜。** Citrine Informatics 帮助 Dorfner 利用既有记录选择涂料填料。MaterialsZone 帮助 CONSTAB 调整薄膜配方，使厚度和摩擦表现同时满足需求。CONSTAB 案例披露的五周从收到新要求算起，此前已积累约一年的数据。[Citrine Informatics](/startups/citrine-informatics/) · [Dorfner 的使用记录](https://dorfner.com/en/applications/coatings/ai-and-colors/) · [MaterialsZone](/startups/materialszone/) · [CONSTAB 案例原文](https://www.materials.zone/customers/constab-ger)
- **设备与工艺共同开发。** Entalpic 与设备商 ATLANT 3D 合作研究芯片薄膜。模型筛选原料，设备方提供沉积实验数据。双方披露的是合作范围，工厂能否采用还需比较成膜质量和批次稳定性。[Entalpic](/startups/entalpic/) · [设备商公告](https://atlant3d.com/atlant-3d-and-entalpic-partner-to-build-ai-driven-digital-twins-for-ald-processes/) · [薄膜与晶圆工艺指南](/guides/semiconductors/)

## 实验开发与样品交付

这类团队同时承担候选选择、制备和测试。传统实验可以预先排定一系列配方。主动学习则在每批样品测完后更新模型，再选择下一批。样品编号、制备条件和测量结果需要一一对应。各公司的实验能力也有明确范围，例如创材深造研究金属配方和打印条件，深度原理在自建实验室测试候选反应。[创材深造](/startups/deep-material/) · [深度原理](/startups/deep-principle/) · [高通量实验与主动选样案例](https://www.altrove.ai/approach)

法国公司 Altrove 的电机磁体项目同时受到磁性和成本约束。客户希望提高**矫顽力**，即磁体抵抗反向磁场退磁的能力，同时维持原有的**最大磁能积**和预计制造成本。最大磁能积反映给定体积磁体可提供的磁能水平。团队根据每轮实测结果选择下一批配方，压制磁体并测试，在 12 周后交付首轮结果。公告没有量化性能改善幅度或批量订单规模。[Altrove 公司档案](/startups/altrove/) · [磁体项目原文](https://www.altrove.ai/resources/magnetic-optimization-for-global-automation-leader) · [IEC 永磁材料测量标准](https://webstore.iec.ch/en/publication/22142)

鼎犀智创与北京大学的复合纤维研究给出了另一类证据。团队报告最佳断裂强度为 41.2 cN/dtex，按纤维的线密度折算，便于比较不同粗细的纤维。重复批次的强度标准差不到平均值的 5%。前者描述最好样品的表现，后者描述工艺重复性。工业采购还会考察生产规模、合格率和单位成本。[鼎犀智创](/startups/dingxi/) · [北大实测记录](https://sam.pkusz.edu.cn/info/1011/2625.htm)

## 材料表征与测量数据分析

**表征**指利用仪器确定实际样品的组成、结构或性质。以粉末 X 射线衍射为例，不同晶相产生不同位置和强度的峰。传统做法是把实测图与参考结构逐一比较，并估计各晶相的含量。混合样品的峰可能重叠，AI 的一个用途是缩小需要人工复核的解释范围。Periodic Labs 公布了内部困难样品上的辨相评测，MatDiffract 提供了相关的学术研究案例。[Periodic Labs](/startups/periodic-labs/) · [Periodic 原始评测](https://periodic.com/news/nature-is-our-learning-environment) · [MatDiffract 学术档案](/research/matdiffract/)

Altrove 的另一项氧化物研究中，16 份受测样品有 7 份检出目标晶相，其中一份的目标相仅约占 3.3%。报告“检出目标结构”时需要区分含少量目标相的混合样品和高纯度材料。混合样品的性能也不能直接归因于其中某个成分。[实验结果与拟合](https://arxiv.org/html/2511.01790v1#S3.SS2)

图像分析属于同一路线。Polaron 从电极切面照片估计颗粒和孔隙的三维分布，华威大学再按推荐工艺制备电极、组装实验电池并测试。这个项目跨越了结构分析与工艺优化两条路线。站内的 **Propose、Synthesize、Characterize** 分别表示提出方案、制备样品、表征样品，用于标明每个参与方具体承担的工作。[Polaron](/startups/polaron/) · [法拉第研究所验证报告](https://www.faraday.ac.uk/success-stories/ai-unlocks-the-manufacturing-secrets-of-lmfp/) · [电极与储能系统指南](/guides/energy/)
