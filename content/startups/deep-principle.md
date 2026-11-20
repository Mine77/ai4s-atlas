---
title: "深度原理"
type: "startup"
logo: "/logos/deep-principle.png"
category: "材料研发"
summary: "在杭州用生成模型提出材料分子和反应路径，由自有自动化实验室合成、测量并反馈结果，与杉海创新共建超分子材料研发平台。"
countries: ["中国"]
directions: ["Propose","Synthesize","Characterize"]
maturity: "实际部署"
---

## 公司与团队

杭州深度原理科技有限责任公司（Deep Principle）成立于 2024 年，总部位于杭州。联合创始人贾皓钧担任 CEO，在麻省理工学院（MIT）获物理化学博士学位，曾在陶氏化学核心研发部门实习，研究催化材料和反应路径。联合创始人兼 CTO 段辰儒获 MIT 化学博士学位，曾任微软 Azure Quantum 研究科学家，负责公司的化学设计生成算法。种子轮投资人中的深势科技（DP Technology）与深度原理是两家公司。截至 2026 年 11 月 20 日，深度原理以独立品牌发布产品，最近可核实的具名融资轮为 A3，公开资料未见其上市或被收购的公告。[公司团队](https://www.deepprinciple.com/about.html) · [公司主体](https://www.career.zju.edu.cn/jyxt/sczp/zpztgl/ckZpgwList.zf?dwxxid=JG0000982) · [海淀区政府披露](https://zyk.bjhd.gov.cn/jbdt/auto4510_51816/auto4510_54705/auto4510/auto4510/202406/t20240611_4656296_hd.shtml) · [A3 轮公告](https://www.legendstar.com.cn/news/478914774705800173)

## AI 怎样参与材料研发

工业客户可以给出希望改善的性质，例如提高配方稳定性，或使反应更倾向于生成目标产物。深度原理的 ReactiveAI 平台先提出候选分子、反应或配方，再用量子化学计算筛查。科研智能体 Mira 根据目标安排计算和下一组实验。杭州的 AI Materials Factory 接收实验计划，执行合成、检测并回传结果，团队可据此决定继续优化哪个候选。Mira 的技术报告给出了可检查的计算案例，实验室的实际表现则由公司另行披露。[ReactiveAI 与高通量筛选](https://www.legendstar.com.cn/news/468177592957069738) · [Mira 技术报告](https://mirascience.app/blog/mira-towards-a-general-ai-scientist) · [公司实验室公告](https://www.accessnewswire.com/newsroom/en/business-and-professional-services/inside-deep-principle-the-ai-that-runs-its-own-chemistry-experim-1243618)

**实测结果。** 深度原理于 2026 年 10 月 29 日报告，杭州实验室在三个月内把一项单步反应的选择性从 51.82% 提高到 85%。选择性衡量反应偏向目标产物的程度。另一个精细化工项目报告的是产率，从 72% 提升到接近 90%。这两个数字对应不同项目和指标。公司没有在该公告中给出逐轮实验数据、测量误差或独立实验室复测结果。[公司披露的两项实验](https://www.accessnewswire.com/newsroom/en/business-and-professional-services/inside-deep-principle-the-ai-that-runs-its-own-chemistry-experim-1243618)

## 产业合作

杉海创新从合作方一侧确认，双方共建的超分子材料平台「超屿 Synthrix」1.0 于 2025 年 10 月 30 日上线。它将候选结构生成、分子间相互作用模拟和可合成性判断用于日化原料筛选。2026 年 4 月 23 日，双方签署联合管线共研与商业化框架协议，将工作推进到护肤活性物候选的共同研发。公开协议没有列出合同额或已付款金额。联想之星另称深度原理拓展了智能体订阅和材料管线共研业务，尚未披露可逐项核对的订阅收入。[杉海创新上线公告](https://www.shinehigh.cn/dynamic/649.html) · [杉海创新共研公告](https://www.shinehigh.cn/dynamic/654.html) · [投资人业务说明](https://www.legendstar.com.cn/news/478914774705800173)

## 最近三篇公司技术发布

### 2026-11-16 · Introducing Mira Science

公司将研究方法做成可编辑的智能体分工，研究员可以查看谁提出假设、谁审核结果，以及审核失败后返回哪一步。聚合物案例让读者并排查看两次各 110 纳秒的分子动力学模拟，追溯图表所用数据与代码。模拟展示了材料构象随温度变化的趋势，压电系数是否改善仍需实测。在另一个 60 题研究问答测试中，Mira 搭配 Hydrogen-1.0 通过 29 题，其他四组系统通过 24 至 28 题；这个差距最多对应五道题。[产品原文及演示](https://blog.deepprinciple.com/introducing-mira-science/)

### 2026-11-02 · Introducing Hydrogen-1.0

公司用实验记录和多轮科研决策记录对 GLM-5.3 做后训练，并开放模型权重。团队设计了一项过渡金属配合物筛选任务，各模型从相同的初始候选出发，此后只能看到自己所选候选的计算结果。到第五轮，Hydrogen-1.0 历轮最佳候选的平均前线轨道能隙达到 4.318 eV，另外两组模型分别为 3.689 和 3.353 eV。这个实验考察连续选择候选的能力，能隙来自计算，候选的合成和实测性能仍待验证。[模型发布、评测与权重入口](https://blog.deepprinciple.com/introducing-hydrogen-1.0/)

### 2026-10-26 · ReactNexus：从反应物推演反应网络

已知起始物、未知产物时，研究员需要判断哪些副反应值得追查。ReactNexus 从反应物的分子图出发，提出过渡态与后续产物，按计算能垒扩展反应网络。作者对同分布基准上的 10,000 个生成候选进行更高精度的计算复核，80.8% 可沿反应路径连接回输入的反应物。这个比例衡量路径与起始物的一致性。确定真实产物和各自的占比，还需要实验测量。团队也展示了怎样用网络里的候选结构辅助解释复杂混合物的质谱。[公司技术报告](https://www.deepprinciple.com/papers/ReactNexus.pdf) · [预印本](https://arxiv.org/abs/2610.38236)

## 融资记录

| 公告日期 | 轮次与披露金额 | 已披露投资方 |
| --- | --- | --- |
| 2024-06-05 | 种子轮，近 1,000 万美元 | 线性资本领投，真知创投、Taihill Venture 跟投，晶泰科技和深势科技作为产业方参与。[公司新闻目录](https://www.deepprinciple.com/news.html) · [海淀区政府披露](https://zyk.bjhd.gov.cn/jbdt/auto4510_51816/auto4510_54705/auto4510/auto4510/202406/t20240611_4656296_hd.shtml) |
| 2024-10-09、11-05 | 种子+、种子++，各轮金额未披露 | 高瓴创投独家投资种子+轮，祥峰投资独家投资种子++轮。[两轮官方公告索引](https://www.deepprinciple.com/news.html) |
| 2025-03-19 | Pre-A 轮，亿元级人民币 | 联想之星、联想创投、锦秋基金、BV 百度风投、启高资本参与，高瓴创投、线性资本追加投资。[联想之星公告](https://www.legendstar.com.cn/news/468177592957069738) |
| 2025-11-24 | A 轮，超 1 亿元人民币 | 戈壁创投管理的阿里巴巴创业者基金大湾区基金与蚂蚁集团共同领投，联想创投、Taihill Venture、BV 百度风投等追加投资。[投资人公告](https://www.legendstar.com.cn/news/473582847148619709) |
| 2026-03-05 | A2 轮，单轮金额未披露 | 金蚂投资领投，晶泰科技、启高资本、BV 百度风投等追加投资。[投资人公告](https://www.legendstar.com.cn/news/475871757090537573) |
| 2026-07-14 | A3 轮，单轮金额未披露 | 孚腾资本领投，华控基金、康君资本等跟投，联想之星、顺禧基金、高瓴创投、祥峰投资、戈壁创投、线性资本、BV 百度风投、启高资本等追加投资。[投资人公告](https://www.legendstar.com.cn/news/478914774705800173) |

联想之星在 A 系列完成时披露「累计融资金额近 10 亿元人民币」。该数值涵盖多轮融资，单独的 A3 金额没有公开，杉海创新等客户的研发合作亦不计入此处。[融资金额原始口径](https://www.legendstar.com.cn/news/478914774705800173)

## 相关链接

[公司官网](https://www.deepprinciple.com/) · [技术博客](https://blog.deepprinciple.com/) · [Mira Science](https://mirascience.app/) · [世界经济论坛公司档案](https://www.weforum.org/organizations/deep-principle/) · [官方品牌图标](https://www.deepprinciple.com/images/webclip.png)
