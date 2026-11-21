---
title: "半导体与光子器件的技术路线"
type: "field"
group: "materials"
order: 3
---

半导体产业使用 AI 的工作横跨材料、制造和器件设计。开发沉积工艺的团队决定在晶圆表面形成什么薄膜，量测团队检查工艺是否按预期执行，器件设计团队则要确认加工后的结构能实现所需功能。晶圆是同时制造许多芯片的基片。局部薄膜、整片晶圆和成品器件是三个不同的测试对象。

| 技术路线 | 典型交付 | 有意义的验证 |
| --- | --- | --- |
| 薄膜材料与沉积工艺开发 | 原料候选、沉积条件 | 测量膜层覆盖情况和电学性能 |
| 晶圆量测与工艺控制 | 测量估计、异常位置、补测建议 | 与新批次实测比较，追踪后续良率 |
| 实验数据分析 | 整理后的样品记录、对实验的分析结果 | 核对原始测量和工程师复查结果 |
| 光子器件设计 | 几何设计、预计的光学响应 | 制造器件，测量不同温度和尺寸下的响应 |

## 薄膜材料与沉积工艺开发

芯片中的绝缘层需要覆盖设计指定的位置，包括沟槽底部和侧壁。原子层沉积（ALD）让原料依次接触表面并发生反应，经过多个循环形成薄膜。研发通常从几个可制备、受热稳定的候选原料中选择，再在设备上改变工艺条件，测量膜厚和均匀程度。深而窄的结构还要单独测试，因为原料到达深处的条件与平面不同。[高深宽比通道中薄膜覆盖性的实验](https://pubs.rsc.org/en/content/articlehtml/2020/cp/d0cp03358h)

一种实验方法是在 PillarHall 试片的横向狭窄通道内生长薄膜，再揭开顶盖，沿入口到通道深处测量厚度。这可以区分入口处成膜与深处覆盖。对于绝缘层，研究者还会在薄膜两侧设置电极，测量穿过薄膜的漏电流，以及薄膜在多高电压下失去绝缘能力。表面厚度合格和电学指标合格需要各自的测试。[高深宽比通道中薄膜覆盖性的实验](https://pubs.rsc.org/en/content/articlehtml/2020/cp/d0cp03358h) · [绝缘薄膜漏电与击穿的电容实测](https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=30168)

Entalpic 与设备商 ATLANT 3D 合作，计划结合原料筛选模型和局部沉积实验选择优先测试的材料。模型负责缩小原料与工艺组合的范围，设备提供成膜数据。双方公告披露了联合开发计划。进一步判断工业适用性，需要在同一设备上与既有工艺比较，并在多个晶圆位置检查薄膜表现。[Entalpic](/startups/entalpic/) · [公司对选题的说明](https://entalpic.ai/why-we-are-focusing-on-atomic-layer-deposition-2/) · [设备方联合公告](https://atlant3d.com/atlant-3d-and-entalpic-partner-to-build-ai-driven-digital-twins-for-ald-processes/) · [多位置晶圆覆盖性实测](https://acris.aalto.fi/ws/portalfiles/portal/84468163/CHEM_Utriainen_et_al_Optical_metrology_2022_Proc_SPIE_12008.pdf)

## 晶圆量测与工艺控制

工厂关心同一晶圆中心到边缘、不同设备以及不同批次之间的偏差。典型指标包括上下两层图形的位置差（套刻偏差），以及实际线宽与设计值之差。两种偏差的成因与修正方法不同。工程师会在晶圆多个位置测量，再将异常位置与设备记录、后续器件测试结果对应。[多位置晶圆覆盖性实测](https://acris.aalto.fi/ws/portalfiles/portal/84468163/CHEM_Utriainen_et_al_Optical_metrology_2022_Proc_SPIE_12008.pdf) · [ASML 的现场量测与反馈说明](https://www.asml.com/en/technology/lithography-principles/measuring-accuracy)

- **实际量测和缺陷检查。** ASML 描述了先用光学散射量测定位可疑区域，再用电子束检查细小缺陷的方法。工厂据此安排补测或调整设备设置。检查工具的识别准确率可以用已知缺陷衡量。若目标是提高良率，还要统计调整后各批次通过全部规定测试的器件比例。[ASML 的现场量测与反馈说明](https://www.asml.com/en/technology/lithography-principles/measuring-accuracy)
- **虚拟量测。** 这类模型通过设备传感器记录估计晶圆质量，帮助决定哪些晶圆优先接受精密实测。NIST 等团队在晶圆抛光数据上研究了这种抽样方式。设备维护和传感器读数变化可能使历史规律失效，后续批次仍需定期抽样。将抛光模型的结论应用于沉积工艺，也需要沉积设备自己的实测数据。[NIST 的方法与评测边界](https://doi.org/10.1109/TSM.2025.3531920)

## 跨实验室的数据管理与分析

材料实验通常会产生图像、光谱、设备日志和测量报告。要比较不同实验，首先要确认每份文件对应的样品、制造条件与测试时间。量子点是一类受到激发后可以发光的微小材料。研究其老化时，需要把同一样品在不同时刻、不同波长下的光强记录关联起来。MaterialsZone 在 Track The Twin 合作中承担此类数据连接。若用这些记录训练寿命模型，还需用另一批样品实际完成的老化测试评估误差。[MaterialsZone](/startups/materialszone/) · [Track The Twin 项目分工](https://www.materials.zone/customers/track-the-twin)

Periodic Labs 介绍过向一家研究芯片散热的制造商提供定制分析工具，帮助工程师解读已有实验。这类工具的直接结果是分析报告和工程判断，可用分析耗时和人工复核结果评价。若进一步报告散热性能改善，还需在规定功耗与环境条件下测量实际器件温度。公司公开材料未披露器件温降或量产良率。[Periodic Labs](/startups/periodic-labs/) · [公司原始说明](https://periodic.com/)

## 光子器件设计与制造验证

光子芯片利用微细的波导引导光传播。环形谐振器由环形波导与相邻直波导构成，对特定波长的光有较强响应。环的半径、波导宽度和两者间距都会影响这一响应。传统设计先用物理仿真比较参数，再把多组尺寸制作到试片上，测量器件在不同温度下响应哪些波长。NIST 的环形谐振器研究给出了这类实测。[NIST 环形谐振器实测](https://www.nist.gov/publications/characterization-ring-resonator-structures-applications-photonic-thermometry)

Simsek 等人的研究用仿真数据训练神经网络，根据微环尺寸推算不同频率下的光学响应，也尝试从响应反推尺寸。这类方法可以用来筛选设计。论文报告的是仿真数据上的预测精度，实际器件还需比较预测与实测。[微环模型及评估数据](https://arxiv.org/abs/2601.19669)

进入代工平台后，还要考虑加工尺寸有波动时，各项指标能否保持在规格范围内。imec 的硅光子平台资料给出了可制造结构及已测器件的工艺背景，可用于理解这一步的限制。[imec 硅光子平台与制造波动](https://www.imec-int.com/sites/default/files/2023-02/Silicon%20photonics%20platform%20services_2023.pdf)
