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

## 公司与创始团队

Emerald Cloud Lab（ECL）在美国得克萨斯州奥斯汀运营商业云实验室。客户保留实验设计权，通过软件安排样品制备与测量，ECL 负责设备、人员和现场执行。**截至 2026 年 11 月 20 日，公开资料支持将 ECL 列为独立运营的未上市公司。** 公司主页将所有权类型标为私营，风险投资机构 Gigafund 将 ECL 列入投资组合，并披露其管理合伙人 Stephen Oskoui 担任 ECL 董事。公司当前的控股比例未公开。[公司资料](https://www.linkedin.com/company/emerald-cloud-lab/) · [Gigafund 投资组合与董事席位](https://www.gigafund.com/) · [公司服务方案](https://www.emeraldcloudlab.com/get-started/)

创始人 Brian Frezza 与 D.J. Kleinbaum 都是卡内基梅隆大学（CMU）校友。两人于 2010 年创办 Emerald Therapeutics，最初为自己的研发团队建立自动化实验室；2014 年向外部研究者开放测试，2016 年将云实验室业务分拆成公司。如今，科学开发、软件工程和现场运营团队共同维护实验方法。Kleinbaum 还担任 GEMSTONE 合作项目的科学负责人，两位创始人合著了介绍实验编程语言的技术参考书。[创办与分拆经过](https://www.tobyblackburn.com/articles/2021/3/11/no-shortcuts-to-the-lab-of-the-future) · [2014 年上线报道](https://cen.acs.org/articles/92/i27/StartEmerald-Launches-Robot-Lab.html) · [公司团队](https://www.emeraldcloudlab.com/company-culture/team/) · [GEMSTONE 团队](https://gemstoneproject.org/team/) · [技术参考书](https://library.wolfram.com/infocenter/Books/9930/)

## 产品与已知客户

| 服务 | 工作方式与客户实例 |
| --- | --- |
| 商业云实验室订阅 | 客户在 ECL Command Center 中用 Symbolic Lab Language（SLL）编写协议。机器人、仪器与现场技术员按指令操作，Constellation 将样品、方法和原始数据关联。官网列出 200 余种可远程控制的仪器型号，企业方案另含 IT 集成、审计与 GxP 合规协助，价格须询价。[平台介绍](https://www.emeraldcloudlab.com/) · [账户方案](https://www.emeraldcloudlab.com/get-started/) |
| Pragma Bio 的分析化学工作 | Pragma 保留内部分析化学团队，把仪器操作交给 ECL，并通过 Python 接口把运行状态传回自己的系统。2024 年第一季度，其液相色谱和质谱方法优化共处理 1,208 个样品；ECL 技术员投入约 578 小时，客户投入约 18 小时编写协议。两种工时之比约为 32，案例未披露订阅费或总成本。[双方联合案例，第 4–5 页](https://www.emeraldcloudlab.com/CloudCase_Pragma_x_ECL.pdf) |
| 大学专用实验室 | CMU 与 ECL 合作在匹兹堡建设校方专用设施。ECL 提供软件架构，并参与设施设计、设备安装与运营管理。双方于 2021 年宣布合作，校方记录了 2024 年 4 月的首个实验。此后已有研究者在该设施复做奥斯汀站点的实验。[CMU 建设公告](https://www.cmu.edu/bio/news-events/2021/0830_cloud-lab-partnership.html) · [校方启用记录，第 15 页](https://magazine.mcs.cmu.edu/wp-content/uploads/2024/05/mcs_science_connection_2024-1.pdf) |

## 技术验证

2025 年《Digital Discovery》的一项研究同时检验了**制备**与**表征**。研究者在奥斯汀远程合成铜纳米团簇并测量吸收光谱，再用相同的程序和仪器型号在匹兹堡复做 17 号样品。论文报告，成功样品在单站四批实验中的吸收强度变异系数为 10%–20%（230–300 nm 波段）；跨站复做的变异系数低于 50%。研究者在第二站仍能辨认出团簇形成的光谱特征，但强度的波动说明，即使复用相同程序，也要记录储备液放置时间等实验条件。[研究论文与补充材料](https://doi.org/10.1039/D5DD00335K)

ECL 在 AI 工作流中提供可被模型调用的实验操作。2023 年，CMU 与 ECL 的 Coscientist 研究测试了模型能否查阅文档、选择适用函数并生成 SLL 指令。论文在多种硬件上分别验证了不同任务，因此采用 ECL 时，最直接的判断依据是目标方法所需的操作、样品和仪器是否在当前目录内。[《Nature》论文](https://doi.org/10.1038/s41586-023-06792-0) · [ECL 实验操作目录](https://www.emeraldcloudlab.com/guides/runningexperiments)

## 近期博客、演示与进展

- **2026 年 9 月 25 日，GEMSTONE 项目日志介绍跨实验室协议标准 AMBER。** 团队在美国国家科学基金会（NSF）的云实验室网络峰会上展示了与设备无关的协议表示方法。对 ECL 用户，这项工作针对一个实际问题：用 SLL 写成的方法要移到配备其他软件与仪器的实验室，目前还需重新适配。此次发布的是开发中的标准及海报，原文尚未给出跨平台转换成功率。[项目日志与海报入口](https://gemstoneproject.org/news/2026/09/pclnet-summit-washington/)
- **2026 年 8 月 25–26 日，奥斯汀商业设施成为 GEMSTONE 的实验地点。** 项目启动日志记录了斯坦福、普渡、莫尔豪斯学院和 ECL 的研究者进入现场，考察系统如何追踪试剂状态。ECL 提供运行实验协议的实际设备，斯坦福牵头研究如何把书面方法转成机器可执行的步骤。[启动日志](https://gemstoneproject.org/news/2026/08/gemstone-kickoff-austin/) · [斯坦福公告](https://med.stanford.edu/news/all-news/2026/08/ai-laboratories-award.html)
- **2026 年 6 月 9 日，Kleinbaum 公开演示从软件到仪器的操作。** 在 Wolfram U 举办的讲座中，他用基于 Wolfram Language 的 SLL 运行远程实验，并展示实际数据。录像适合观察客户从何处提交任务、如何拿回结果；跨站点的复现精度则可查阅上面的铜纳米团簇论文。[课程说明](https://www.wolfram.com/wolfram-u/courses/wolfram-language/emerald-cloud-lab-powered-by-wolfram-language/) · [演示录像](https://www.youtube.com/watch?v=tA0T9A0KDjE)

## 融资与项目经费

| 金额 | 归属与披露依据 |
| --- | --- |
| 1,350 万美元 | 前身 Emerald Therapeutics 于 2014 年 7 月公布的**历轮累计融资**。当时一轮由 Founders Fund 和 Max Levchin 领投，Schooner Capital 参投。[公司公告](https://in.marketscreener.com/news/latest/Emerald-Therapeutics-Completes-Latest-Financing-Brings-Total-to-13-5MM-Launches-Emerald-Cloud-L-18668610/) |
| 金额未公开 | Gigafund 确认投资 ECL 并持有董事席位。分拆后 ECL 的累计股权融资缺少公司按统一口径披露的数字。[投资方说明](https://www.gigafund.com/) |
| 133.1 万美元 | Trinity Capital 报告的**设备融资本金余额**，截至 2024 年 3 月 31 日，原始融资日期为 2021 年 7 月 13 日。[Trinity Capital 季报](https://www.sec.gov/Archives/edgar/data/1786108/000095017024050904/trin-20240331.htm) |
| 4,000 万美元、2,000 万美元 | 前者是 CMU 在 2021 年公布的专用云实验室项目预算；后者是 2026 年 NSF 授予斯坦福牵头团队的合作科研经费。两份公告均未单列 ECL 的合同收入或分配金额。[CMU 建设预算](https://www.cmu.edu/bio/news-events/2021/0830_cloud-lab-partnership.html) · [斯坦福经费公告](https://med.stanford.edu/news/all-news/2026/08/ai-laboratories-award.html) |

## 相关链接

- [公司官网与服务目录](https://www.emeraldcloudlab.com/)
- [公司开源代码仓库](https://github.com/emeraldsci)
- [GEMSTONE 项目动态](https://gemstoneproject.org/news/)
- [品牌图标来源：ECL 官网提供的 512 像素 PNG](https://www.emeraldcloudlab.com/icons/icon-512x512.png)
