---
title: "Emerald Cloud Lab"
type: "startup"
logo: "/logos/emerald-cloud-lab.png"
category: "实验室自动化与服务"
summary: "在美国运营可远程编程的实验室，按订阅提供样品制备和仪器测量服务，也为大学建设专用设施。"
countries: ["美国"]
directions: ["Synthesize","Characterize"]
maturity: "实际部署"
---

## 公司与团队

Emerald Cloud Lab（ECL）在美国得克萨斯州奥斯汀运营商业云实验室。制药、生物技术公司和大学研究者可从自己的电脑安排湿实验。客户决定做什么、如何测量，ECL 提供仪器、现场人员和执行记录。截至 2026 年 11 月 20 日，公司公开资料将其列为私营企业。投资方 Gigafund 的管理合伙人 Stephen Oskoui 担任 ECL 董事，控股比例未披露。[公司资料](https://www.linkedin.com/company/emerald-cloud-lab/) · [Gigafund 投资组合与董事席位](https://www.gigafund.com/) · [公司服务方案](https://www.emeraldcloudlab.com/get-started/)

创始人 Brian Frezza 与 D.J. Kleinbaum 都是卡内基梅隆大学（CMU）校友。两人于 2010 年创办 Emerald Therapeutics，首先为内部研发团队建立自动化实验室，2016 年将云实验室业务分拆为独立公司。如今，科学开发、软件工程和现场运营团队共同维护实验方法。两位创始人合著了实验编程语言参考书，Kleinbaum 也担任 GEMSTONE 合作项目的联合首席研究员和科学负责人。[创办与分拆经过](https://www.tobyblackburn.com/articles/2021/3/11/no-shortcuts-to-the-lab-of-the-future) · [公司团队](https://www.emeraldcloudlab.com/company-culture/team/) · [GEMSTONE 团队](https://gemstoneproject.org/team/) · [技术参考书](https://library.wolfram.com/infocenter/Books/9930/)

## 产品

### 云实验室订阅与专用设施

| 用户与服务 | 交付内容 |
| --- | --- |
| 使用商业云实验室的企业和学术团队 | 客户在 ECL Command Center 中用 Symbolic Lab Language（SLL）编写协议。仪器、机器人和现场技术员按指令完成样品制备和测量，Constellation 数据库把原始数据与样品、方法和仪器记录关联。官网列有 200 余种远程可控仪器型号，全年全天运行。[平台介绍](https://www.emeraldcloudlab.com/) |
| 需要系统集成的企业客户 | 企业方案提供 IT 集成、审计与 GxP 合规协助，具体访问权限和订阅价格须询价。研究者可按操作目录核对仪器和方法是否可用。[账户方案](https://www.emeraldcloudlab.com/get-started/) · [ECL 实验操作目录](https://www.emeraldcloudlab.com/guides/runningexperiments) |
| 需要自有设施的大学或大型机构 | ECL 提供软件架构，并参与设施设计、仪器安装与运营管理。CMU 在匹兹堡建设的专用实验室已经执行首个实验，此后也用于跨站复现。[CMU 建设公告](https://www.cmu.edu/bio/news-events/2021/0830_cloud-lab-partnership.html) · [校方启用记录，第 15 页](https://magazine.mcs.cmu.edu/wp-content/uploads/2024/05/mcs_science_connection_2024-1.pdf) · [研究论文与补充材料](https://doi.org/10.1039/D5DD00335K) |

### 客户实测与技术边界

Pragma Bio 的分析化学团队自行设计方法，通过 Python 接口把实验状态传回自己的系统。2024 年第一季度，该团队在液相色谱与质谱方法优化中处理了 **1,208 个样品**，ECL 技术员投入约 **578 小时**，Pragma 团队投入约 **18 小时**编写协议。两种工时之比约为 32。案例没有给出传统实验室对照组、订阅费或总成本，因而无法从这组数字算出成本节省比例。[双方联合案例，第 4–5 页](https://www.emeraldcloudlab.com/CloudCase_Pragma_x_ECL.pdf)

奥斯汀与匹兹堡的铜纳米团簇研究检验了从**制备到表征**的复现性。研究者先在奥斯汀远程制备样品并测量吸收光谱，再在匹兹堡用相同程序和型号的仪器复做 17 号样品。单站四批实验中，成功样品在 230–300 nm 波段的吸收强度变异系数为 **10%–20%**。跨站复做时仍能辨认出团簇形成的光谱特征，变异系数低于 **50%**。作者指出储备液放置时间可能影响强度，因此复用程序时仍需记录物料状态。[研究论文与补充材料](https://doi.org/10.1039/D5DD00335K)

在 AI 工作流中，ECL 提供可由模型调用的实验操作。CMU 与 ECL 合作的 Coscientist 研究测试了模型能否查阅文档、选择适用函数并生成 SLL 指令。论文的不同任务使用了不同硬件，读者评估某种方法时，需要核对对应的实验装置、样品及操作目录。[《Nature》论文](https://doi.org/10.1038/s41586-023-06792-0) · [ECL 实验操作目录](https://www.emeraldcloudlab.com/guides/runningexperiments)

## 产业伙伴与合作范围

| 伙伴 | 合作分工与金额 |
| --- | --- |
| Pragma Bio | 作为商业订阅客户，保留分析化学设计、协议及数据分析，由 ECL 执行实验。双方公布了方法优化期间的样品量和工时，未披露合同金额。[双方联合案例，第 4–5 页](https://www.emeraldcloudlab.com/CloudCase_Pragma_x_ECL.pdf) |
| 卡内基梅隆大学 | ECL 先为远程课程捐赠机时与设施使用权，随后与校方合作建设匹兹堡专用实验室。校方 2021 年公布的 **4,000 万美元**是建设项目预算，ECL 的合同收入未披露。[CMU 课程记录](https://www.cmu.edu/mcs/news-events/2020/0929_cloud-lab-class.html) · [CMU 建设预算](https://www.cmu.edu/bio/news-events/2021/0830_cloud-lab-partnership.html) |
| 斯坦福大学、普渡大学、莫尔豪斯学院及美国药典（USP） | 在 GEMSTONE 项目中，斯坦福大学的 Mark Musen 牵头，ECL 负责科学工作并提供实验设施，普渡负责 AI，莫尔豪斯负责教育，美国药典是科学合作方。美国国家科学基金会（NSF）授予牵头团队 **2,000 万美元**，ECL 的分配金额未披露。[GEMSTONE 团队](https://gemstoneproject.org/team/) · [斯坦福经费公告](https://med.stanford.edu/news/all-news/2026/08/ai-laboratories-award.html) |

## 融资记录

| 时间 | 投资方与性质 | 金额及口径 |
| --- | --- | --- |
| 2014 年 7 月 | 前身 Emerald Therapeutics，多轮风险投资 | 当时最新一轮由 Founders Fund 和 Max Levchin 领投，Schooner Capital 参投。公告披露历轮累计 **1,350 万美元**，该轮金额与估值未披露。[Emerald Therapeutics 公告](https://in.marketscreener.com/news/latest/Emerald-Therapeutics-Completes-Latest-Financing-Brings-Total-to-13-5MM-Launches-Emerald-Cloud-L-18668610/) |
| 2021 年 7 月 13 日 | Trinity Capital，设备融资 | 截至 2024 年 3 月 31 日，本金余额 **133.1 万美元**。季报列示固定利率 9.7%，约定到期日为 2024 年 8 月 1 日。[Trinity Capital 季报](https://www.sec.gov/Archives/edgar/data/1786108/000095017024050904/trin-20240331.htm) |
| 2022 年 6 月 3 日、2024 年 4 月 29 日 | Trinity Capital，A 系列及 B-1 系列优先股 | 投资方列示两笔持仓成本分别为 **50 万美元、12.9 万美元**。截至 2026 年 9 月 30 日，两笔合计公允价值为 **13.8 万美元**。这些数字仅覆盖 Trinity 的持仓，两轮融资总额及 ECL 整体估值未披露。[Trinity Capital 2026 年三季度季报](https://ir.trinitycapital.com/static-files/51d7e144-3151-4ca2-8f2d-9be8962a1843) |
| 日期未披露 | Gigafund，风险投资 | 投资方确认持有董事席位，未披露投资额。分拆后 ECL 的累计股权融资总额未见公司统一披露。[投资方说明](https://www.gigafund.com/) |

## 公司动态

- **2014 年 7 月 1 日，首个产品 ECL 开始招募外部测试用户。** 创始人原为 2010 年成立的 Emerald Therapeutics 搭建内部实验系统，这次首次向外界公布产品并征集申请。正式邀请客户使用新设施的记录出现在次年。[Emerald Therapeutics 公告](https://in.marketscreener.com/news/latest/Emerald-Therapeutics-Completes-Latest-Financing-Brings-Total-to-13-5MM-Launches-Emerald-Cloud-L-18668610/) · [2014 年上线报道](https://cen.acs.org/articles/92/i27/StartEmerald-Launches-Robot-Lab.html)
- **2015 年 3 月 25 日，南旧金山 ECL-1 生产设施启用。** 公司披露投入逾 300 万美元安装仪器，测试用户可使用 40 多种实验类型。首批公开实例包括斯坦福大学研究者 Sanjiv Sam Gambhir 和生物技术公司 Perlstein Lab 的创始人 Ethan Perlstein。[ECL-1 启用公告](https://www.marketscreener.com/news/latest/Emerald-Therapeutics-Unveils-ECL-1-The-First-Emerald-Cloud-Lab-Production-Facility-and-Announces-Fi-20082661/)
- **2020 年 9 月 29 日，CMU 记录用商业云实验室授课的结果。** Marcel Bruchez 的学生用 ECL 捐赠的机时进行了六周实验，研究小分子染料与蛋白质的相互作用。学生能调阅同学的协议和数据，比较不同设计产生的测量差异。[CMU 课程记录](https://www.cmu.edu/mcs/news-events/2020/0929_cloud-lab-class.html)
- **2021 年 3 月 11 日，ECL 团队回顾平台分拆与运行经验。** 团队成员 Toby Blackburn 介绍了 2016 年分拆之前和之后的软件设计：从追踪物料位置、状态到安排仪器维护，客户在界面上看到的一条实验指令依赖多套现场记录。文章以设备故障排查为例，说明怎样把操作员积累的知识写回软件；其中对运行效率的判断来自团队自身经验。[团队技术回顾](https://www.tobyblackburn.com/articles/2021/3/11/no-shortcuts-to-the-lab-of-the-future)
- **2021 年 8 月 30 日，CMU 与 ECL 宣布共建大学云实验室。** 项目将商业平台的软件架构用于校方设施，双方已开始培训教师和学生。公告里的设施容量和工期属于建设目标，首次实验有校方后来单独记录。[CMU 建设公告](https://www.cmu.edu/bio/news-events/2021/0830_cloud-lab-partnership.html)
- **2023 年 2 月 28 日，ECL 公布奥斯汀迁址方案。** 公司为新址规划了 105,000 平方英尺，用于扩大仪器和服务容量。后续双站点论文确认，奥斯汀设施已经承担了实际制备和测量任务。[ECL 迁址公告](https://www.prnewswire.com/news-releases/emerald-cloud-lab-to-relocate-state-of-the-art-facility-from-south-san-francisco-to-austin-301758704.html) · [研究论文与补充材料](https://doi.org/10.1039/D5DD00335K)
- **2023 年 8 月 22 日，ECL 公布 SLL 源代码供研究使用。** 研究者由此可查看控制实验的语言与函数实现；真正的机时、仪器和现场人员仍通过实验室服务获得。[ECL 软件发布公告](https://www.prnewswire.com/news-releases/emerald-cloud-lab-makes-programming-language-for-conducting-remote-scientific-experiments-open-source-301906218.html) · [公司开源代码仓库](https://github.com/emeraldsci)
- **2023 年 12 月 20 日，CMU 与 ECL 发表 Coscientist 研究。** Gabe Gomes 的团队与 ECL 的 Ben Kline 合作，测试模型怎样把自然语言要求转为自动化实验室能执行的指令。论文分别说明各项任务使用的硬件，为判断模型做到了哪一步提供了依据。[《Nature》论文](https://doi.org/10.1038/s41586-023-06792-0) · [CMU 研究说明](https://engineering.cmu.edu/news-events/news/2023/12/20-ai-coscientist.html)
- **2024 年 1–3 月，Pragma Bio 完成一轮分析方法优化。** 双方案例记录了 1,208 个样品的液相色谱与质谱工作。Pragma 的仪表盘可远程跟踪运行频率和周转时间，使客户能在自己的系统里决定下一批实验。[双方联合案例，第 4–5 页](https://www.emeraldcloudlab.com/CloudCase_Pragma_x_ECL.pdf)
- **2024 年 4 月初，匹兹堡校内设施运行首个实验。** CMU 记录首个实验由化学副教授 Subha Das 完成，由此可以区分大学实验室的实际启用与此前公告中的预计日期。[校方启用记录，第 15 页](https://magazine.mcs.cmu.edu/wp-content/uploads/2024/05/mcs_science_connection_2024-1.pdf)
- **2025 年 10 月 30 日，《Digital Discovery》发表双站点验证结果。** 作者在匹兹堡复做奥斯汀的 17 号铜纳米团簇样品，比较同一波段的吸收强度。单站批次间与跨站测量的波动都有量化记录。[研究论文与补充材料](https://doi.org/10.1039/D5DD00335K)
- **2026 年 6 月 9 日，Kleinbaum 演示从软件到仪器的操作。** 在 Wolfram U 讲座中，他用基于 Wolfram Language 的 SLL 运行远程实验并展示实际数据。录像呈现了提交任务和取回结果的过程，跨站精度可与铜纳米团簇论文的测量值对照。[课程说明](https://www.wolfram.com/wolfram-u/courses/wolfram-language/emerald-cloud-lab-powered-by-wolfram-language/) · [演示录像](https://www.youtube.com/watch?v=tA0T9A0KDjE)
- **2026 年 8 月 25–26 日，GEMSTONE 在奥斯汀实验室启动。** 斯坦福、普渡、莫尔豪斯学院和 ECL 的研究者在现场考察试剂状态的跟踪方式，并规划如何把书面方法转成机器可执行的步骤。项目日志记录的是现场考察和协作分工，协议转换仍是研究目标。[启动日志](https://gemstoneproject.org/news/2026/08/gemstone-kickoff-austin/) · [斯坦福公告](https://med.stanford.edu/news/all-news/2026/08/ai-laboratories-award.html)
- **2026 年 9 月 15 日，两位创始人的 SLL 参考书出版。** Wolfram Media 的 1,192 页书目按样品制备、性质测量、分离、光谱等实验任务组织内容，提供了查阅语言设计和覆盖范围的入口。具体站点能否执行某项操作，仍取决于其设备目录。[出版社书目与目录](https://www.wolfram-media.com/products/emerald-cloud-lab-symbolic-lab-language/) · [技术参考书](https://library.wolfram.com/infocenter/Books/9930/)
- **2026 年 9 月 25 日，GEMSTONE 介绍跨实验室协议表示方法 AMBER。** 在 NSF 云实验室网络峰会上，团队用海报说明如何先用与设备无关的格式描述实验，再转换成站点能执行的指令。对已有 SLL 用户，这针对的是同一方法迁移至不同软件、不同仪器时仍需适配的问题。AMBER 处于开发中，原文未公布跨平台转换成功率。[项目日志与海报入口](https://gemstoneproject.org/news/2026/09/pclnet-summit-washington/)
- **2026 年 11 月 4 日，Trinity Capital 季报更新了 ECL 股权持仓。** 报告确认投资方在 9 月底仍持有 A 与 B-1 两系列优先股，并列出各自的成本与公允价值。报告日是投资方披露日期，两笔投资分别发生于 2022 年与 2024 年。[Trinity Capital 2026 年三季度季报](https://ir.trinitycapital.com/static-files/51d7e144-3151-4ca2-8f2d-9be8962a1843)

## 相关链接

- [公司官网与服务目录](https://www.emeraldcloudlab.com/)
- [公司新闻归档](https://www.emeraldcloudlab.com/company-culture/press/)
- [公司开源代码仓库](https://github.com/emeraldsci)
- [GEMSTONE 项目动态](https://gemstoneproject.org/news/)
- [品牌图标来源：ECL 官网提供的 512 像素 PNG](https://www.emeraldcloudlab.com/icons/icon-512x512.png)
