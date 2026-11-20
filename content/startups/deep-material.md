---
title: "创材深造"
type: "startup"
logo: "/logos/deep-material.png"
category: "材料研发"
summary: "为金属 3D 打印挑选合金成分与加工条件，在自建实验室制备和测试候选材料，并向高校交付高通量表征设备。"
countries: ["中国"]
directions: ["Propose","Synthesize","Characterize"]
maturity: "实际部署"
---

## 公司与团队

创材深造（Deep Material）于 2021 年成立，业务包括销售金属粉末、为客户研发合金，以及向实验室提供高通量设备。创始人兼 CEO 王轩泽在上海交通大学取得本硕学位，学习人工智能，后来在清华大学材料学院攻读博士。高通量实验室由彭勃负责。团队在天津、苏州和上海设有岗位，涵盖材料研发、算法和数据工程。2026 年 9 月公司完成 A+ 轮私募融资，截至 11 月 20 日仍以独立品牌经营，未见上市或被收购的公开公告。[公司简介](https://www.deep-material.com/guanyuwomen) · [创始人背景](https://www.deep-material.com/qiyexinwen/64) · [清华报告](https://deep-material.com/qiyexinwen/81) · [团队招聘](https://www.deep-material.com/qiyexinwen/94) · [实验室负责人](https://www.deep-material.com/qiyexinwen/98) · [A+ 轮公告](https://www.deep-material.com/qiyexinwen/92)

## 从配方到实物

金属粉末即使成分相同，打印条件和后续热处理也会改变晶粒组织，进而影响强度、延性及开裂风险。创材深造把这些条件与配方一起列为设计变量。研究人员先规定目标性能和制造约束。M-Cortex 根据实验记录提出候选成分与工艺，调用 M-Science 的专用模型筛选，再由 M-Lab 制样、进行后处理和力学测试。M-Data 将每个样品的过程记录、显微组织和性能关联起来，也保留失败结果。研究人员负责关键评审，下一轮可以针对上一批样品暴露的问题重新选材。[实验室负责人对流程的说明](https://www.deep-material.com/qiyexinwen/98) · [各系统功能](https://www.deep-material.com/qiyexinwen/92)

其中一款面向增材制造的铝合金 CA661M，在公司披露的室温测试中热导率为 217 W/(m·K)，同时支持阳极氧化。这让散热和外观处理可以纳入同一次选材决策。另一款钛合金 CT1400H 的抗拉强度据报超过 1,400 MPa。两组数字都是公司公布的样品性能。公告没有给出各生产批次的统计分布，也没有披露两种材料经客户长期使用后的表现。[材料型号与实测指标](https://www.deep-material.com/qiyexinwen/98)

## 客户与交付

| 项目 | 公开证据 |
| --- | --- |
| 上海大学智能化高通量表征系统 | 2025 年采购文件列出 800 万元预算和 90 日交付期限。成交公告的转载载明，创材深造（苏州）以 796 万元中标一套 HMPT-3000 系统。公司随后将上海大学列为已部署用户。796 万元是设备成交价，采购资料未披露回款进度。[采购文件](https://sh-gov-open-doc.oss-cn-shanghai.aliyuncs.com/1108QZ/c0d2501c-f105-4db1-81e4-1e5459d1bf20.pdf) · [成交公告转载](https://www.nanjixiong.com/forum.php?mod=viewthread&tid=177285) · [公司部署说明](https://www.deep-material.com/qiyexinwen/97) |
| 大连理工大学微尺度力学测试 | 公司案例具名列出双方合作的测试平台。研究者需要观察小型试件受力时，局部应变如何演变、裂纹在哪里产生。案例没有披露合同金额。[项目说明](https://www.deep-material.com/hezuoanli/60) |
| 消费电子与新能源汽车材料 | 公司披露与一家苹果供应链企业合作开发可阳极氧化的铝合金，未公布终端品牌采购情况。另据硬氪 2024 年采访，公司与一家未具名车企签订超千万元的新能源汽车材料订单。此金额为订单口径。[消费电子项目](https://www.deep-material.com/hezuoanli/61) · [汽车材料订单采访](https://www.36kr.com/p/2856470681865097) |

## 最近的公司技术动态

### 2026-11-20 · 在世界智能制造博览会展示合金样件和测试平台

彭勃在南京报告了同一套研发流程如何用于铝、钛、镍基合金和模具钢。团队把打印样件与显微组织、检测结果同时展出，说明候选通过计算筛选后还要经过稳定成形和性能测试两道检验。公司称已完成 20 余款合金材料的研发与验证。各型号的产量、用于何种构件以及针对具体工况的验证程度，仍需逐项核对。[公司原文](https://www.deep-material.com/qiyexinwen/98)

### 2026-11-19 · 材料智能测试与表征设备入选天津市首台（套）目录

按公司公布的规格，设备每天可做至少 200 个室温样品或 100 个高温样品，可输出应力—应变曲线和全场应变图。微型试样的单样粉末消耗约为传统标准棒样的二十分之一。对需要比较多种成分的研发组，这些指标直接关系到一批粉末能支持多少次试验。通量指标限于测试单元，整批候选从设计到验证还需计入制备时间。[公司原文](https://www.deep-material.com/qiyexinwen/97)

### 2026-11-03 · 王轩泽谈真实数据与模型泛化

王轩泽在官网刊载的访谈中解释，团队给实验设备加装传感器，把图像、时序信号与最后测得的性能关联起来。他也承认，模型跨材料体系的泛化能力仍偏弱。访谈称这类高维记录已有数万条，9 月的融资公告则称 M-Data 超过 10 万条。两处没有说明样本去重及纳入条件，不能据此计算同期数据增速。同日的公司榜单公告将已发布材料和已实现量产的材料分别表述，只有部分型号明确进入量产。[创始人访谈](https://www.deep-material.com/zixunzhongxin/96) · [9 月的数据说明](https://www.deep-material.com/qiyexinwen/92) · [同日公司公告](https://www.deep-material.com/qiyexinwen/95)

## 融资记录

| 时间 | 已披露轮次、金额与投资者 |
| --- | --- |
| 2021 年至 2022 年初 | 天使轮和 Pre-A 轮合计数千万元人民币，投资方包括蓝驰创投、线性资本与源码资本。36氪项目库将天使轮列为 2021 年 7 月。采访披露的是两轮总额，未拆分各轮金额。[硬氪采访](https://www.36kr.com/p/2856470681865097) · [项目档案](https://pitchhub.36kr.com/project/2181130769173640) |
| 2025-09-03 | 公司宣布完成数千万元人民币 A 轮系列融资，由合世家资本、晨晖资本先后参与，未披露各笔交割金额。[公司公告](https://www.deep-material.com/qiyexinwen/64) |
| 2026-09-16 | 近亿元人民币 A+ 轮，源码资本与金雨茂物联合领投，亿宸资本等跟投。资金拟用于研发系统、实验室扩产和数据积累，公告未给出精确金额或估值。[公司公告](https://www.deep-material.com/qiyexinwen/92) |

## 相关链接

- [公司官网](https://www.deep-material.com/) · [资讯中心](https://www.deep-material.com/zixunzhongxin)
- [官网品牌标志原图](https://www.deep-material.com/yzc1221/uploads/20230901/3cda069351d0383c23a321e3cb7c0546.svg)
