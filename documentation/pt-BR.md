<!-- ELUCENIA technical documentation · numero-necessario-para-tratar · pt-BR · no clinical/professional/rights approval -->

# NNT e NNH (número necessário para tratar)

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/numero-necessario-para-tratar)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Eventos no grupo controle

`ec`

intervalo: 0–1000000

### Total de participantes do grupo controle

`nc`

intervalo: 1–1000000

### Eventos no grupo tratado (intervenção)

`et`

intervalo: 0–1000000

### Total de participantes do grupo tratado

`nt`

intervalo: 1–1000000

## Edição do método

NNT/NNH/Laupacis 1988; ARR Wald 95%; inversão ICAltman 1998; arredondamentoparateto

## Fórmula documentada

RC = eventos/total no controle · RT = eventos/total no tratado · RRA = RC − RT · RRR = RRA / RC · RR = RT / RC.

NNT = 1 / RRA, arredondado para cima. Se o tratamento aumenta o evento (RRA negativa), o resultado é o NNH = 1 / |RRA|.

IC 95% da RRA pelo método de Wald: RRA ± 1,96 × √\[RC(1 − RC)/nC + RT(1 − RT)/nT\]. O IC do NNT é o inverso dos limites (Altman, 1998); se a RRA inclui zero, o IC do NNT vai do benefício ao infinito e ao dano.

## Limites e população

NNT ou NNH depende do evento, da população, do risco basal e do período de acompanhamento; use o mesmo desfecho binário indesejável e horizonte nos dois grupos. Não transfira diretamente o valor para outra duração ou população. Dados de tempo até evento com censura exigem métodos de sobrevivência, não simples contagens nesta interface. Diferença de risco zero corresponde a NNT infinito; um intervalo que cruza zero exige interpretação que pode abranger benefício e dano. NNT não significa garantia de benefício para uma pessoa.

## Referências

- [Laupacis A, Sackett DL, Roberts RS. An assessment of clinically useful measures of the consequences of treatment. N Engl J Med, 1988.](https://doi.org/10.1056/NEJM198806303182605)

- [Altman DG. Confidence intervals for the number needed to treat. BMJ, 1998.](https://doi.org/10.1136/bmj.317.7168.1309)

- [Altman1998](https://pmc.ncbi.nlm.nih.gov/articles/PMC1114210/)

- [Altman/Andersen1999](https://pmc.ncbi.nlm.nih.gov/articles/PMC1117211/)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

Tratar 10 pacientes evita 1 evento a mais que o controle

| Detalhes do resultado | |
| --- | --- |
| Risco no grupo controle (RC) | 20,0% |
| Risco no grupo tratado (RT) | 10,0% |
| Redução absoluta do risco (RRA) | 10,0% (IC 95%: 0,2% a 19,8%) |
| Redução relativa do risco (RRR) | 50,0% |
| Risco relativo (RT/RC) | 0,50 |
| IC 95% do NNT | 5,1 a 499,6 (benefício) |


### 2

A cada 20 pacientes tratados, ocorre 1 evento a mais que no controle (dano)

| Detalhes do resultado | |
| --- | --- |
| Risco no grupo controle (RC) | 10,0% |
| Risco no grupo tratado (RT) | 15,0% |
| Redução absoluta do risco (RRA) | -5,0% (IC 95%: -14,1% a 4,1%) |
| Redução relativa do risco (RRR) | -50,0% |
| Risco relativo (RT/RC) | 1,50 |
| IC 95% do NNH | NNT (benefício) 24,2 a ∞ a NNH (dano) 7,1: diferença não significativa |

O intervalo de confiança da RRA inclui zero: o efeito não é estatisticamente significativo.


### 3

Sem diferença de risco entre os grupos: o NNT é infinito

| Detalhes do resultado | |
| --- | --- |
| Risco no grupo controle (RC) | 10,0% |
| Risco no grupo tratado (RT) | 10,0% |
| Redução absoluta do risco (RRA) | 0,0% (IC 95%: -8,3% a 8,3%) |
| Redução relativa do risco (RRR) | 0,0% |
| Risco relativo (RT/RC) | 1,00 |

