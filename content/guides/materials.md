---
title: "材料研发：怎样做出一块更好用的磁铁"
type: "field"
group: "materials"
order: 0
---

电机靠磁场产生转动。假设你是电机厂的工程师，供应商送来一块少用稀土的磁铁，说它更难退磁。换上它之前，你至少想知道三件事：装进同样大小的电机，它能提供足够强的磁场吗？工作时遇到反方向的磁场，它能保持磁性吗？再做一百块，质量和成本还能接受吗？

法国公司 Altrove 接到过类似的委托：为客户改进一种不含稀土的电机磁铁。客户想让它更难退磁，还要维持磁铁原有的另一项性能和预计制造成本。顺着这块磁铁从实验室走到工厂的路，就能看懂材料研发公司各在做什么。[磁体项目原文](https://www.altrove.ai/resources/magnetic-optimization-for-global-automation-leader)

## 为什么照着同一张配方做，结果也会不同？

写在纸上的配方只告诉你加了哪些原料、各加多少。加热、冷却和压制后，原子怎么排列，内部有没有留下小孔，也会影响这块磁铁的表现。科学家把原子有规律地排列成的一种结构叫作**晶相**。一小撮粉末里，可能同时混着几种晶相。

这就像拿到一张配料表，你还不知道最后烤出来的面包有多松软。研究材料要把三件事分开记录：打算用什么配方、实际制成了什么、测出来好不好用。

## 实验室怎样判断这块磁铁真的有进步？

1. **找一块熟悉的磁铁作比较。** 先做一块已知配方的磁铁，留下它的测试结果。研究者也会查已有材料数据库。数据库里的“相图”有点像一张候选地图，提示某种配方更可能保持目标结构，还是更容易分成几种结构。Materials Project 常用的相图依据接近绝对零度的计算。它能帮你决定先试哪种材料，真正加热再冷却时得到什么，要靠实测。[Materials Project](/research/materials-project/) · [相图计算与假设](https://docs.materialsproject.org/methodology/materials-methodology/thermodynamic-stability/phase-diagrams-pds)
2. **让新旧配方经历同一套加工。** 如果今天改了配方，明天又换了加工条件，磁性变好时就不知道该归功于哪一项。可以把新旧配方各做两份，让两者都经历加工条件甲和乙。在另一批原料上重复比较，又能发现好结果是否碰巧只出现在第一批。[NIST 分组实验设计](https://www.itl.nist.gov/div898/handbook/pri/section3/pri3333.htm)
3. **看清样品里有什么。** 向粉末照射 X 射线，仪器会记录一串高低不同的峰。原子的排列会影响峰出现的位置，所以研究者拿实测图和已知结构的图逐一比对。这种方法叫 **X 射线衍射（XRD）**。Altrove 的另一项氧化物研究有 16 个样品完成了检测，其中 7 个检出了想要的结构。有一份样品中，目标结构只占约 3.3%。如果此时测得样品性能很好，还得查清是哪个成分起了作用。[实验结果与拟合](https://arxiv.org/html/2511.01790v1#S3.SS2) · [MatDiffract 学术档案](/research/matdiffract/)
4. **量出客户关心的两种磁性。** 给样品施加反方向的磁场，看要多强才能使它失去原先的磁化，这个指标叫**矫顽力**。再从测量曲线上读出**最大磁能积**，它可以帮助比较相同体积的磁铁能提供多少磁能。一块磁铁可能更难退磁，同时单位体积能提供的磁能却变小了，所以两项都要记录。[IEC 永磁材料测量标准](https://webstore.iec.ch/en/publication/22142)

## 电机厂看到好结果，为什么还要再试？

大学实验室会问“是哪一种结构带来了变化”；工厂还得问“机器正常有点波动时，我们还能不能稳定做出来”。这个区别决定了下一笔钱花在哪里。以 Altrove 的项目为例，可以分三次做决定。[客户项目说明](https://www.altrove.ai/resources/magnetic-optimization-for-global-automation-leader)

- **实验室里要不要继续做？** 如果样品里只有少量目标晶相，就先检查怎样制样；如果所需结构已经占了很大比例，磁性仍然不理想，再考虑换配方。
- **要不要送一批样品给客户？** 挑出同时满足两项磁性要求的配方，重复做几次。把最贵的原料和新增的工序也算进成本。如果只有恰好某一次做得好，就试一试它附近的加工条件，看看可用范围有多宽。
- **要不要用到产品上？** 先扩大每批的量，用客户的设备和实际部件再测。一次研发交付证明团队完成了约定的工作；有没有获得批量订单，要查采购或生产记录。

Altrove 公布的首轮用了 **12 周**。模型根据上一轮的测量结果，推荐下一批最值得试的配方，团队把粉末压成磁体后再测。这样的“做一批、学一次、再挑一批”叫**主动学习**。公司披露已向客户交付首轮结果，后续还有放大生产的工作。性能提高了多少、客户订了多少块磁铁，公告没有给出数字。[Altrove 公司档案](/startups/altrove/) · [首轮工作记录](https://www.altrove.ai/resources/magnetic-optimization-for-global-automation-leader) · [高通量实验与主动选样案例](https://www.altrove.ai/approach)

## 材料创业公司，到底各帮了谁什么忙？

站里用三个词标记这段工作：**Propose** 是选接下来试什么，**Synthesize** 是动手把样品做出来，**Characterize** 是测量、辨认做出了什么。有的公司专攻其中一步，也有团队把几步连起来。下面五个问题能帮你区分它们。

- **“厂里有一年的实验记录，下一种配方试哪个？”** [Citrine Informatics](/startups/citrine-informatics/) 帮 Dorfner 用已有工艺和测量记录挑涂料填料。[MaterialsZone](/startups/materialszone/) 帮 CONSTAB 调薄膜配方，让薄膜厚度和滑动时的摩擦同时满足新要求。后者报告用了五周，是从收到新要求算起，此前已有约一年数据。第一次合作的工厂要估算用时，还得看自己手头有多少记录。[Dorfner 的使用记录](https://dorfner.com/en/applications/coatings/ai-and-colors/) · [CONSTAB 案例原文](https://www.materials.zone/customers/constab-ger)
- **“还没有合适的材料，先从哪里找？”** [CuspAI](/startups/cuspai/) 为水处理公司 Kemira 设计能吸附污染物的材料。客户收到超过 5,000 个**设计**，选出约 20 个准备进一步开发和测试。到水厂里能用多久、实际去除多少污染物，还需要样品来回答。[Orbital Industries](/startups/orbital-industries/) 也用计算筛材料，并把软件授权给巴斯夫旗下 ECMS。客户拿到了软件，接下来要单看它做出的催化剂实测如何。[Kemira 公告](https://www.kemira.com/news-and-stories/newsroom/releases/new-ai-designed-materials-show-promising-potential-to-remove-forever-chemicals-from-drinking-water-in-industry-first-breakthrough/) · [ECMS 授权公告](https://www.orbitalindustries.com/news/press/basf-ecms-ai-materials-discovery-platform)
- **“谁能把设计真的做出来，再重复一次？”** [鼎犀智创](/startups/dingxi/) 和北大研究复合纤维，实际测了把纤维拉断需要多大的力。最佳结果为 41.2 cN/dtex，是按纤维粗细折算的断裂强度；重复做几批，强度的标准差不到平均值的 5%。[创材深造](/startups/deep-material/) 同时筛金属配方和打印条件。[深度原理](/startups/deep-principle/) 在自己的实验室测试候选反应。[Altrove](/startups/altrove/) 做的就是前面那批电机磁铁。比较这类公司时，先看它们各自拿出了什么样品。[北大实测记录](https://sam.pkusz.edu.cn/info/1011/2625.htm)
- **“样品测完了，谁来读懂仪器留下的图？”** [Periodic Labs](/startups/periodic-labs/) 帮科学家判断一份混合粉末里出现了哪些晶相，并公开了模型在内部困难样品上的答对比例。[Polaron](/startups/polaron/) 则看电池材料的切面，估计内部孔道的形状，建议怎样加工。后一项建议由华威大学做成样品，再装进小电池测试。[Periodic 原始评测](https://periodic.com/news/nature-is-our-learning-environment) · [法拉第研究所验证报告](https://www.faraday.ac.uk/success-stories/ai-unlocks-the-manufacturing-secrets-of-lmfp/)
- **“材料要和设备一起改，怎么少走弯路？”** [Entalpic](/startups/entalpic/) 和设备商 ATLANT 3D 研究芯片镀膜。模型选可能合适的原料，设备方提供在机器上镀膜的数据。双方公布了合作方式；一整批芯片有多少通过测试，还要看实际生产数据。[设备商公告](https://atlant3d.com/atlant-3d-and-entalpic-partner-to-build-ai-driven-digital-twins-for-ald-processes/)

## 看懂两个容易混淆的数字

假如你看到“38.57% 成功”，先问：从哪一堆东西里数出这个百分比？[MatterGen](/research/mattergen/) 的这个数字数的是电脑生成的结构。其中 38.57% 同时满足三项计算要求：看起来足够稳定、与同批其他结构不重复、按研究使用的参考库判断有新意。要算实验成功率，还得知道实际做过多少种，其中多少种制成了目标样品。[模型卡与评估口径](https://huggingface.co/microsoft/mattergen)

再看前面氧化物研究的 **7/16**。这里手里确实有样品，也有测量结果，但“检出想要的结构”仍允许样品含有其他成分。连同一张测量图，也可能有两种解释：MatterGen 团队发表钽铬氧化物的结构后，另一位研究者发现，一个已知结构也能解释图上的峰。这时值得做的下一次测量，要能把两种解释区分开。[原论文](https://doi.org/10.1038/s41586-025-08628-5) · [独立复核](https://doi.org/10.1039/D6MH00268D)

如果你更关心性能，接下来可以看两种实物：电池要从一片电极装成完整电芯再测；芯片要从表面的一层薄膜做到一批可工作的器件。[电极与储能系统指南](/guides/energy/) · [薄膜与晶圆工艺指南](/guides/semiconductors/)
