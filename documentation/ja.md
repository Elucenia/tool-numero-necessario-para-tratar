<!-- ELUCENIA technical documentation · numero-necessario-para-tratar · ja · no clinical/professional/rights approval -->

# NNT・NNH（治療必要数・害必要数）

[条件・出典・許諾](https://elucenia.org/ja/tools/numero-necessario-para-tratar)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 対照群のイベント数

`ec`

範囲: 0–1000000

### 対照群の総参加者数

`nc`

範囲: 1–1000000

### 治療群（介入）のイベント数

`et`

範囲: 0–1000000

### 治療群の総参加者数

`nt`

範囲: 1–1000000

## 方法の版

NNT/NNH/Laupacis 1988；Wald絶対リスク減少95%；Altman1998区間反転；切り上げ

## 記載された計算式

RC = 対照群イベント数/総数 · RT = 治療群イベント数/総数 · RRA = RC − RT · RRR = RRA / RC · RR = RT / RC.

NNT = 1 / RRA, 切り上げ. 治療がイベントを増加させる場合（RRA負値）、結果は NNH = 1 / |RRA|.

RRAの95%信頼区間はWald法: RRA ± 1.96 × √\[RC(1 − RC)/nC + RT(1 − RT)/nT\]. NNT信頼区間は境界の逆数（Altman, 1998）です。RRAがゼロを含むと、NNT信頼区間は利益から無限大を経て害へ広がります。

## 限界・対象集団

NNT または NNH はイベント、集団、ベースラインリスク、追跡期間に依存します。両群で同じ望ましくない二値アウトカムと時間範囲を用いてください。別の期間や集団に値を直接移用しないでください。打切りを含むイベントまでの時間データには生存時間解析が必要で、この画面の単純な件数では扱えません。リスク差がゼロなら NNT は無限大です。ゼロをまたぐ区間は利益と害の両方に及ぶ可能性を踏まえて解釈します。NNT は一人の利益を保証しません。

## 参考文献

- [Laupacis A, Sackett DL, Roberts RS. An assessment of clinically useful measures of the consequences of treatment. N Engl J Med, 1988.](https://doi.org/10.1056/NEJM198806303182605)

- [Altman DG. Confidence intervals for the number needed to treat. BMJ, 1998.](https://doi.org/10.1136/bmj.317.7168.1309)

- [Altman1998](https://pmc.ncbi.nlm.nih.gov/articles/PMC1114210/)

- [Altman/Andersen1999](https://pmc.ncbi.nlm.nih.gov/articles/PMC1117211/)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 記録された結果

以下の情報は、合成例に対する手法の出力を保持したものです。独立した臨床的検証を示すものではありません。

### 1

10人の患者を治療すると、対照より1件多くのイベントを防ぐ

| 結果の詳細 | |
| --- | --- |
| 対照群のリスク (RC) | 20.0% |
| 治療群のリスク (RT) | 10.0% |
| 絶対リスク減少 (ARR) | 10.0%（95% CI: 0.2% 〜 19.8%） |
| 相対リスク減少 (RRR) | 50.0% |
| 相対リスク (RT/RC) | 0.50 |
| NNT の95% CI | 5.1 〜 499.6（利益） |


### 2

20人を治療するごとに、対照より1件多くのイベントが起こる（有害）

| 結果の詳細 | |
| --- | --- |
| 対照群のリスク (RC) | 10.0% |
| 治療群のリスク (RT) | 15.0% |
| 絶対リスク減少 (ARR) | -5.0%（95% CI: -14.1% 〜 4.1%） |
| 相対リスク減少 (RRR) | -50.0% |
| 相対リスク (RT/RC) | 1.50 |
| NNH の95% CI | NNT（利益）24.2 から ∞ から NNH（有害）7.1：有意差なし |

ARR の信頼区間には 0 が含まれるため、効果は統計学的に有意ではありません。


### 3

群間にリスク差はありません：NNT は無限大です

| 結果の詳細 | |
| --- | --- |
| 対照群のリスク (RC) | 10.0% |
| 治療群のリスク (RT) | 10.0% |
| 絶対リスク減少 (ARR) | 0.0%（95% CI: -8.3% 〜 8.3%） |
| 相対リスク減少 (RRR) | 0.0% |
| 相対リスク (RT/RC) | 1.00 |

