---
title: "Emerald Cloud Lab"
type: "project"
category: "实验室自动化与服务"
format: "远程实验服务"
region: "美国"
areas: ["化学与催化","生命科学"]
stages: ["Synthesize · 合成制备","Characterize · 表征分析"]
summary: "研究者通过软件提交实验协议，由远程实验设施执行并返回数据。"
countries: ["美国"]
directions: ["Synthesize","Characterize"]
maturity: "实际部署"
---

## 项目概览

Emerald Cloud Lab（ECL）在美国得克萨斯州奥斯汀运营可远程编程的商业实验室，也为卡内基梅隆大学（CMU）在匹兹堡建设了大学云实验室。研究者可以在自己的电脑上指定样品、制备步骤和测量方法，由现场完成实验，再取回原始数据。已有论文记录了同一个铜纳米团簇样品如何在两地用相同程序和仪器制备、测量；商业客户 Pragma Bio 则用这套系统开发液相色谱与质谱方法。两者分别展示了可复用实验协议和共享高成本仪器的价值。[公司平台](https://www.emeraldcloudlab.com/) · [跨实验室研究](https://pubs.rsc.org/en/content/articlehtml/2025/dd/d5dd00335k) · [Pragma Bio 案例](https://www.emeraldcloudlab.com/CloudCase_Pragma_x_ECL.pdf)

## 公司与团队

共同创始人 Brian Frezza 和 D.J. Kleinbaum 均毕业于 CMU，后分别在斯克里普斯研究所、斯坦福大学取得化学博士学位。他们于 2010 年创办 Emerald Therapeutics，最初为自己的药物研发团队搭建远程实验系统。2014 年 7 月，前身公司把 ECL 作为首个产品开放外部测试，公布当时支持 40 余种标准实验。ECL 官网将云实验室公司的成立时间列为 2016 年。2023 年公司宣布将商业设施从南旧金山迁往奥斯汀，后续论文记载了奥斯汀站点的实际使用。[前身公司公告](https://in.marketscreener.com/news/latest/Emerald-Therapeutics-Completes-Latest-Financing-Brings-Total-to-13-5MM-Launches-Emerald-Cloud-L-18668610/) · [公司资料](https://www.emeraldcloudlab.com/company-culture/press/) · [迁址公告](https://www.prnewswire.com/news-releases/emerald-cloud-lab-to-relocate-state-of-the-art-facility-from-south-san-francisco-to-austin-301758704.html)

科学团队负责把实验方法转化为软件能够调用的操作，工程与现场人员维护仪器和执行系统。Ben Kline 参与 CMU 的 Coscientist 研究，也为铜纳米团簇研究者使用平台和解析数据提供支持。公司于 2023 年 4 月设立 AI 科学顾问委员会，首批成员包括 Gabe Gomes、Erika Alden DeBenedictis 和 Stephen Wolfram，任务是评议 AI 接入实验室时的使用规则和伦理问题。[顾问委员会公告](https://www.prnewswire.com/news-releases/emerald-cloud-lab-establishes-ai-scientific-advisory-board-301809812.html) · [CMU 对合作分工的说明](https://www.cmu.edu/mcs/news-events/2023/1220-ai-coscientist-automates-discovery) · [论文致谢](https://pubs.rsc.org/en/content/articlehtml/2025/dd/d5dd00335k)

## 技术与实验工作流

1. **编写协议。** 研究者在 ECL Command Center 中用 Symbolic Lab Language（SLL）描述样品、操作顺序和仪器参数。例如，先分装和混合样品，再安排吸收光谱、液相色谱－质谱或粉末 X 射线衍射。公开目录逐项列出输入和产出，可据此判断整条实验能否执行。[实验操作目录](https://www.emeraldcloudlab.com/guides/runningexperiments)
2. **现场执行。** 软件协调样品和仪器，液体工作站与机器人完成适合自动化的步骤，技术员按系统指令完成部分固体处理、配液等操作。公司公布商业平台可控制 200 余种仪器型号，这个数字描述设备覆盖面。排队时间、批量和交付周期仍取决于所选方法。[平台与设备说明](https://www.emeraldcloudlab.com/) · [客户用量与执行记录](https://www.emeraldcloudlab.com/CloudCase_Pragma_x_ECL.pdf)
3. **回收与复用数据。** Constellation 把协议、仪器、样品与结果关联。铜团簇研究拿到的记录包括实际加样量、批次、校准、时间戳和测量光谱。Pragma Bio 通过 Python 接口把执行状态写回自己的数据系统。研究团队可以据此选择下一组参数，再提交一轮实验；提出候选、设定优化目标和解释结果仍可由客户自己的模型或科学家负责。[科研数据记录](https://pubs.rsc.org/en/content/articlehtml/2025/dd/d5dd00335k) · [客户数据集成](https://www.emeraldcloudlab.com/CloudCase_Pragma_x_ECL.pdf)

制备能力已在铜纳米团簇等具体任务中得到验证，表征能力覆盖色谱、质谱、光谱等。官网仍将通用有机化学、合成化学与药物化学列为待推出领域，因此采购复杂合成服务时，需要核对目标反应、样品和仪器是否都在支持范围内。服务条款将实验描述和使用责任交给用户，并规定用户在合同期内按约定下载原始数据。[学科覆盖](https://www.emeraldcloudlab.com/) · [服务条款](https://www.emeraldcloudlab.com/ecl-terms-of-service/)

## 近期博客、公告与研究进展

### 2026-09-25 · GEMSTONE 展示跨实验室协议标准 AMBER

GEMSTONE 在美国国家科学基金会（NSF）可编程云实验室网络峰会上展示了正在开发的 AMBER。团队要解决的是同一份书面方法如何移植到不同品牌设备和软件的实验室：先用一种与设备无关的格式表达实验，再生成各设施能执行的指令。ECL 的 SLL 是其中一种落地语言。此次成果是项目方案和海报，跨站点翻译的成功率与复现实验结果尚待后续报告。[项目峰会记录](https://gemstoneproject.org/news/2026/09/pclnet-summit-washington/) · [项目分工与标准](https://gemstoneproject.org/)

### 2026-08-05 至 08-26 · 斯坦福公布经费，ECL 奥斯汀设施启动合作

斯坦福医学院 8 月 5 日宣布，NSF 向 Mark Musen 牵头的合作团队拨款 2,000 万美元。研究针对“充分搅拌”这类人能理解、机器却缺少定量依据的写法，要把书面方法转为明确的实验操作。8 月 25 至 26 日，斯坦福、普渡、莫尔豪斯学院与 ECL 在奥斯汀举行启动会议，确认 ECL 提供实际运行协议的设备、自动化系统和 SLL。前一篇公告明确经费归属，后一篇记录了合作启动与现场条件。[斯坦福获资助公告](https://med.stanford.edu/news/all-news/2026/08/ai-laboratories-award.html) · [奥斯汀启动记录](https://gemstoneproject.org/news/2026/08/gemstone-kickoff-austin/)

### 2025-10-30 · 同一铜纳米团簇样品在两座城市复做

墨西哥国立理工学院与 CMU 的研究者在奥斯汀远程制备铜纳米团簇并记录吸收光谱，又在匹兹堡用相同程序和仪器复做其中一个样品（编号 17）。标志团簇形成的吸收峰位置保持一致。对成功样品，单站四批的吸收强度变异系数在指定波段为 10%–20%；跨站复做报告为低于 50%。作者指出储备液放置时间可能影响强度。这给出了有用的复现边界：方法能够迁移，判断团簇是否形成的信号稳定，而定量强度仍受样品状态影响。[《Digital Discovery》论文全文](https://pubs.rsc.org/en/content/articlehtml/2025/dd/d5dd00335k)

### 2024 年 4 月上旬 · CMU 自建站点完成首次实验

CMU 理学院记录，化学副教授 Subha Das 执行了新设施的首个实验，站点已向校内生命科学教师开放。校方说明样品和操作均通过条码追踪，机器人与现场人员共同执行协议。它为 2021 年的合作建设公告补上了投入使用的证据。更早的远程教学课使用的是 ECL 商业设施提供的机时。[CMU 院刊，第 15 页](https://magazine.mcs.cmu.edu/wp-content/uploads/2024/05/mcs_science_connection_2024-1.pdf) · [2020 年远程课程记录](https://www.cmu.edu/mcs/news-events/2020/0929_cloud-lab-class.html)

### 2023-12-20 · Coscientist 测试语言模型如何使用云实验室

CMU 与 ECL 研究者在《Nature》报告了 Coscientist 如何检索设备说明、构造指令并调用实验硬件。针对 ECL 的部分考察了模型能否从自然语言中选择适用的函数、生成 SLL 和找到所需样品。论文还使用 Opentrons 等硬件验证了其他任务。区分各项测试的设备与软件，有助于判断哪些成功来自模型规划，哪些来自事先编写、已经验证的实验操作。[论文原文](https://doi.org/10.1038/s41586-023-06792-0) · [校方研究记录](https://www.cmu.edu/mcs/news-events/2023/1220-ai-coscientist-automates-discovery)

### 2023-08-22 · ECL 开放实验编程语言 SLL

公司宣布公开此前专有的 SLL，使外部研究者能检查函数实现、编写并共享实验协议。公告称截至当时，SLL 已用于 60 万余次实验，这是公司的历史累计统计。开源扩大了代码的可检查范围，执行实物实验仍需能使用相应仪器的账户和设施。这也解释了 GEMSTONE 后来为何还要开发跨设施的描述标准。[公司公告](https://www.prnewswire.com/news-releases/emerald-cloud-lab-makes-programming-language-for-conducting-remote-scientific-experiments-open-source-301906218.html) · [公司代码仓库](https://github.com/emeraldsci)

## 融资与客户

| 资金来源 | 金额与归属 |
| --- | --- |
| 前身公司股权融资 | 2014 年 7 月，Emerald Therapeutics 公布完成 B 轮后累计融资 **1,350 万美元**。该轮由 Founders Fund 与 Max Levchin 领投，Schooner Capital 参投。公告没有单列本轮金额。[公司融资公告](https://in.marketscreener.com/news/latest/Emerald-Therapeutics-Completes-Latest-Financing-Brings-Total-to-13-5MM-Launches-Emerald-Cloud-L-18668610/) |
| ECL 投资者与设备融资 | Gigafund 将 ECL 列入投资组合，其管理合伙人 Stephen Oskoui 担任 ECL 董事，未披露投资金额。Trinity Capital 在提交 SEC 的报表中列出对 ECL 的设备融资，截至 2024 年 3 月 31 日，该笔本金余额为 **133.1 万美元**。公开记录未给出可按同一口径核对的 ECL 历年股权融资合计。[Gigafund 投资组合](https://www.gigafund.com/) · [Trinity Capital 季报](https://www.sec.gov/Archives/edgar/data/1786108/000095017024050904/trin-20240331.htm) |
| 设施与研发投入 | 2021 年 CMU 将匹兹堡云实验室的项目预算列为 **4,000 万美元**，包含在全校 **2.5 亿美元**科研设施投资计划内。校方另称 ECL 软件架构经历十年、约 **1 亿美元**技术开发投入。公告未披露 ECL 承建合同价。[CMU 合作建设公告](https://www.cmu.edu/bio/news-events/2021/0830_cloud-lab-partnership.html) |
| 合作科研经费 | 2026 年 NSF 的 **2,000 万美元**拨给斯坦福牵头的 GEMSTONE 团队，ECL 为执行设施合作方。原文未披露 ECL 分得的金额。[斯坦福公告](https://med.stanford.edu/news/all-news/2026/08/ai-laboratories-award.html) |

**Pragma Bio** 公开说明，希望保留内部分析化学团队的实验设计能力，同时把仪器操作移交给 ECL。联合案例显示，2024 年第一季度，它在液相色谱及质谱方法优化中运行 1,208 个样品，消耗约 578 个 ECL 技术员工时与 18 个客户方协议编程工时。案例所称的约 32 倍来自两种工时之比；判断客户总成本和实验周转时间还需要订阅费、耗材和排队数据。[Pragma Bio 与 ECL 联合案例](https://www.emeraldcloudlab.com/CloudCase_Pragma_x_ECL.pdf)

**CMU 与其他用户的接入方式不同。** CMU 从商业设施机时和课程试用，发展为共建专用实验室。普通客户可以询价订阅已有设施，企业方案另提供 IT 集成、信息安全审计及 GxP 合规协助。大型大学或企业可以委托 ECL 建设和运营专用设施。GEMSTONE 所列各高校是联合研究伙伴，现有公告能确认合作关系，未披露商业订单。[课程试用](https://www.cmu.edu/mcs/news-events/2020/0929_cloud-lab-class.html) · [商业账户方案](https://www.emeraldcloudlab.com/get-started/) · [GEMSTONE 合作机构](https://gemstoneproject.org/)

## 相关链接

- [ECL 实验操作与测量目录](https://www.emeraldcloudlab.com/guides/runningexperiments)
- [CMU 生物与化学云实验室现有设施](https://ai-science-foundry.cmu.edu/about-ai-science-foundry)
- [GEMSTONE 项目动态](https://gemstoneproject.org/news/)
