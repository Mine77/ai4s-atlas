---
title: "insitro"
type: "startup"
logo: "/logos/insitro.png"
category: "制药与药物研发"
summary: "用人群影像和细胞实验寻找药物靶点，在脂肪性肝病和渐冻症项目中验证候选机制，并与礼来合作预测小分子在体内的行为。"
countries: ["美国"]
directions: ["Propose","Characterize"]
maturity: "实际部署"
---

## 公司与团队

insitro 是一家位于美国加州南旧金山的独立药物研发公司。Daphne Koller 于 2018 年创办公司，现任 CEO。她曾任斯坦福大学计算机科学教授、Calico 首席计算官，并共同创办 Coursera。团队中，Philip Tagari 担任首席科学官，Zhenghao Chen 负责 AI 与机器学习。2026 年 9 月加入的首席医学官 Hideo Makimura 负责把代谢病与神经科学项目推进至首次人体试验。截至 2026 年 11 月 20 日，Forge 仍将公司列为未上市企业。[公司创立背景](https://www.insitro.com/purpose/) · [斯坦福访谈](https://med.stanford.edu/minorconsult/daphne-koller.html) · [管理团队](https://www.insitro.com/people/) · [医学负责人任命](https://www.insitro.com/news/insitro-appoints-hideo-makimura-as-chief-medical-officer-to-lead-its-transition-to-a-clinical-stage-company/) · [Forge 公司状态](https://forgeglobal.com/insitro_ipo/)

## 模型怎样改变研究决策

药物发现早期有两个不同的选择：哪种生物机制值得干预，以及哪个分子值得送入实验。insitro 的 Virtual Human 把人群中的遗传差异与影像、临床指标联系起来，再对照细胞实验，选择有多类证据支持的靶点。下游的 TherML 用于设计面向这些靶点的候选药物。与礼来合作部署的小分子模型回答一个更窄的问题：已经画出化学结构的分子，在体内的清除、分布和停留时间是否值得进一步测量？[平台原理](https://www.insitro.com/) · [TherML 技术介绍](https://www.insitro.com/news/introducing-insitros-therml-rapidly-engineering-the-right-therapeutic-for-the-right-target/) · [小分子模型报告](https://www.insitro.com/news/insitro-lilly-tunelab-in-vivo-pk-models/)

| 疾病项目 | 已经观察到什么 |
| --- | --- |
| 代谢功能障碍相关脂肪性肝炎（MASH） | 从英国生物样本库等人群的影像、临床指标和遗传数据中，研究者发现 IRS1 与肝脂肪相关；校正肝脂肪后，它与纤维化仍有关联。团队据此推进 CTRO-1013。2026 年美国糖尿病协会会议上，公司报告小鼠实验中，与对照组相比，和纤维化进展相关的 TIMP-1 下降 37%，和肝细胞损伤相关的 CK-18 下降 68%。这两个读数为循环标志物，患者的肝组织和临床结局仍待验证。10 月公告将肝病项目预计进入人体试验的时间更新为 2027 年初。[会议报告](https://www.insitro.com/news/insitro-presents-new-data-demonstrating-its-ai-discovered-mash-candidate-shows-anti-fibrotic-signal-beyond-liver-fat-reduction-at-the-american-diabetes-association-86th-scientific-sessions/) · [管线阶段](https://www.insitro.com/pipeline/) · [10 月时间表](https://www.insitro.com/news/insitro-announces-a-strategic-collaboration-with-astrazeneca-for-ai-enabled-discovery-of-novel-therapeutics-for-mash-and-cardiomyopathies/) |
| 肌萎缩侧索硬化症（ALS，俗称渐冻症） | 团队对人源运动神经元的图像和分子读数进行分析，找到与疾病表型有关的靶点。细胞模型中，调节候选靶点后观察到神经突生长改善。百时美施贵宝先后选中三个靶点；针对第一个靶点，insitro 推进自己的寡核苷酸项目，同时为合作方研发小分子。公开结果支持继续研发，目前证据来自细胞模型。[实验结果及双方分工](https://www.insitro.com/news/insitro-and-bristol-myers-squibb-collaboration-expanded-with-nomination-of-new-targets/) |

## 近期公司博客与技术发布

### 2026-11-05 · Getting Data to Grow in a Dish

Koller 与 Max Salick 讨论了一个容易被忽略的误差来源：显微图像上的细胞边界一旦画错，一个细胞的测量值就可能被归给相邻细胞。团队让标注者优先检查模型最拿不准的轮廓，并把同一种质检方法用于多种影像。公司报告，为新任务开发细胞分割模型所需时间从 6 至 12 个月缩至约 1 个月。这项改善衡量的是内部建立测量工具的速度；它影响模型随后能从哪些实验中学习。[公司研究专栏原文](https://deepphenotype.substack.com/p/getting-data-to-grow-in-a-dish)

### 2026-10-06 · insitro AI meets Lilly data

团队利用礼来积累的临床前数据预测四种动物的三项药代动力学指标。为检验对新化学结构的适用性，研究者把相近结构放在同一组，整组留出测试；同一个分子的不同测量也随它进入同一组。在 12 种“物种与指标”组合上，预测值与实测值的 Pearson 相关系数约为 0.6 至 0.8。分子排序准确到什么程度，与单个分子的预测误差是不同问题；公司披露，各项预测落在实测值三倍范围内的比例为 69% 至 91%。评测来自礼来的历史数据。模型已通过 Lilly TuneLab 向部分生物技术公司开放，用于安排后续实验。[技术原文](https://www.insitro.com/news/insitro-lilly-tunelab-in-vivo-pk-models/) · [产品上线公告](https://www.insitro.com/news/insitro-designed-machine-learning-models-for-small-molecule-in-vivo-pharmacokinetic-behavior-prediction-now-available-in-lilly-tunelab/)

### 2026-08-26 · Mapping Causal Human Biology

Koller 用历史二期试验检验靶点排序。在与遗传关联基线相同的假阳性率下，模型从 131 个经过二期试验验证的代谢病“靶点与适应证”组合中识别出 41%，基线识别出 15%。这个分母影响结论：进入历史试验的靶点已经被其他研究团队筛选过。若从所有尚未开展人体试验的靶点开始选药，项目的前瞻性成功率仍需另行观察。[公司分析](https://deepphenotype.substack.com/p/mapping-causal-human-biology-9e7) · [配套评测方法](https://deepphenotype.substack.com/p/methods-benchmarking-clinical-trial)

## 药企合作与商业进展

| 合作方 | 分工、付款与进展 |
| --- | --- |
| 阿斯利康 | 2026 年 10 月 15 日宣布针对 MASH 和心肌病的独家研发合作。insitro 负责发现靶点，并把阿斯利康选中的项目推进到开发候选物；阿斯利康负责临床、注册和商业化。合同约定 4,000 万美元首付款，另有最高约 14.6 亿美元的有条件里程碑款及分级销售提成。[阿斯利康公告](https://www.astrazeneca.com/media-centre/press-releases/2026/astrazeneca-announces-new-strategic-collaboration-with-insitro-to-use-advanced-ai-systems-to-develop-transformative-therapeutics.html) · [insitro 公布的合同条款](https://www.insitro.com/news/insitro-announces-a-strategic-collaboration-with-astrazeneca-for-ai-enabled-discovery-of-novel-therapeutics-for-mash-and-cardiomyopathies/) |
| 百时美施贵宝 | insitro 确认在 2024 年收到 2,500 万美元，对应发现阶段里程碑及首个 ALS 靶点入选。2026 年 3 月合作方再选中两个靶点，insitro 确认另收 1,000 万美元。[2024 年收款公告](https://www.insitro.com/news/insitro-receives-25-million-in-milestone-payments-from-bristol-myers-squibb-for-the-achievement-of-discovery-milestones-and-the-selection-of-first-novel-genetic-target-for-als-2/) · [2026 年新增靶点与收款](https://www.insitro.com/news/insitro-and-bristol-myers-squibb-collaboration-expanded-with-nomination-of-new-targets/) |
| 礼来 | 除 TuneLab 合作外，双方在 2024 年签订三项代谢病协议。其中两项给予 insitro 引进礼来递送技术的选择权，另一项共同推进抗体发现。insitro 保留相关项目的全球权利，礼来有资格取得里程碑款和销售提成。[三项协议条款](https://www.insitro.com/news/insitro-and-lilly-enter-strategic-agreements-to-advance-novel-treatments-for-metabolic-diseases-2/) |
| 吉利德 | 2019 年签订三年期肝病研究合作，约定 1,500 万美元首付款和最高 3,500 万美元的近期运营里程碑款，另有逐靶点计算的后续条款。insitro 在 2021 年确认已收到首笔运营里程碑款，未单列该笔金额。[吉利德公告](https://www.gilead.com/news/news-details/2019/gilead-and-insitro-announce-strategic-collaboration-to-discover-and-develop-novel-therapies-for-nonalcoholic-steatohepatitis) · [首次里程碑收款披露](https://www.insitro.com/news/insitro-raises-400-million-in-series-c-financing-2/) |

## 融资记录

| 公布时间 | 轮次与金额 | 投资者 |
| --- | --- | --- |
| 2018-05 | A 轮，超过 1 亿美元 | a16z、ARCH Venture Partners、Foresite Capital、GV、Third Rock Ventures 等参与。[合作方对创立融资的披露](https://www.gilead.com/news/news-details/2019/gilead-and-insitro-announce-strategic-collaboration-to-discover-and-develop-novel-therapies-for-nonalcoholic-steatohepatitis) · [融资日期](https://forgeglobal.com/insitro_ipo/) |
| 2020-05-26 | B 轮，1.43 亿美元 | a16z 领投，参与方包括加拿大养老金计划投资委员会（CPP Investments）、T. Rowe Price 管理的投资账户和 BlackRock 管理的基金。[公司发布的 B 轮公告](https://www.biospace.com/insitro-announces-143-million-raised-in-series-b-financing) |
| 2021-03-15 | C 轮，4 亿美元 | CPP Investments 领投，a16z、Casdin Capital、T. Rowe Price 和 BlackRock 管理的资金等参与，新增投资者包括淡马锡。[公司 C 轮公告](https://www.insitro.com/news/insitro-raises-400-million-in-series-c-financing-2/) |

公司在 2026 年 3 月使用了约 8 亿美元的资金总口径，并明确其中约 1.5 亿美元来自与百时美施贵宝、礼来和吉利德合作获得的收入。上表仅列有公开轮次和金额的股权融资；合同中尚待达成的里程碑另列于合作表。[公司资金口径原文](https://www.insitro.com/news/insitro-and-bristol-myers-squibb-collaboration-expanded-with-nomination-of-new-targets/)

## 相关链接

- [官网](https://www.insitro.com/) · [研发管线与项目阶段](https://www.insitro.com/pipeline/)
- [公司论文与公告](https://www.insitro.com/publications-press/) · [Deep Phenotype 公司专栏](https://deepphenotype.substack.com/)
- [官网品牌图标](https://www.insitro.com/wp-content/themes/insitro/favicon.png?v=2) · [品牌标志释义](https://www.insitro.com/purpose/)
