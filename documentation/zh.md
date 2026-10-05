<!-- ELUCENIA technical documentation · numero-necessario-para-tratar · zh · no clinical/professional/rights approval -->

# NNT 与 NNH（需治疗人数与需致害人数）

[条件、来源与许可](https://elucenia.org/zh/tools/numero-necessario-para-tratar)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 对照组事件数

`ec`

范围: 0–1000000

### 对照组总人数

`nc`

范围: 1–1000000

### 治疗组（干预）事件数

`et`

范围: 0–1000000

### 治疗组总人数

`nt`

范围: 1–1000000

## 方法版本

NNT/NNH/Laupacis 1988；Wald绝对风险降低95%；Altman1998区间倒数；向上取整

## 已记录的公式

RC = 对照组事件数/总数 · RT = 治疗组事件数/总数 · RRA = RC − RT · RRR = RRA / RC · RR = RT / RC.

NNT = 1 / RRA, 向上取整. 若治疗增加事件（RRA负值），结果为 NNH = 1 / |RRA|.

RRA的95%置信区间用Wald法: RRA ± 1.96 × √\[RC(1 − RC)/nC + RT(1 − RT)/nT\]. NNT置信区间取界值的倒数（Altman，1998）；RRA包含零时，NNT置信区间从获益延伸至无穷，再至伤害。

## 限制与适用人群

NNT 或 NNH 取决于事件、人群、基线风险和随访时长；两组应使用相同的不良二分类结局和时间范围。不要直接将数值移用于其他时长或人群。含删失的事件发生时间数据需要生存分析方法，不能在此界面中仅用计数处理。风险差为零时 NNT 为无穷大；跨越零的区间可能同时涉及获益与伤害，应相应解释。NNT 不保证某一个人获益。

## 参考文献

- [Laupacis A, Sackett DL, Roberts RS. An assessment of clinically useful measures of the consequences of treatment. N Engl J Med, 1988.](https://doi.org/10.1056/NEJM198806303182605)

- [Altman DG. Confidence intervals for the number needed to treat. BMJ, 1998.](https://doi.org/10.1136/bmj.317.7168.1309)

- [Altman1998](https://pmc.ncbi.nlm.nih.gov/articles/PMC1114210/)

- [Altman/Andersen1999](https://pmc.ncbi.nlm.nih.gov/articles/PMC1117211/)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
