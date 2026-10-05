<!-- ELUCENIA technical documentation · numero-necessario-para-tratar · en · no clinical/professional/rights approval -->

# NNT and NNH (numbers needed to treat and harm)

[conditions, sources and permissions](https://elucenia.org/en/tools/numero-necessario-para-tratar)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Events in the control group

`ec`

range: 0–1000000

### Total control-group participants

`nc`

range: 1–1000000

### Events in the treated group (intervention)

`et`

range: 0–1000000

### Total treated-group participants

`nt`

range: 1–1000000

## Method edition

NNT/NNH/Laupacis 1988; Wald ARR 95%; CI inversion Altman 1998; rounding up

## Documented formula

RC = events/total in control · RT = events/total in treated · RRA = RC − RT · RRR = RRA / RC · RR = RT / RC.

NNT = 1 / RRA, rounded up. If treatment increases the event (negative RRA), the result is NNH = 1 / |RRA|.

95% CI for RRA by the Wald method: RRA ± 1.96 × √\[RC(1 − RC)/nC + RT(1 − RT)/nT\]. The NNT CI is the inverse of the limits (Altman, 1998); if RRA includes zero, the NNT CI extends from benefit through infinity to harm.

## Limits and population

NNT or NNH depends on the event, population, baseline risk and follow-up duration; use the same undesirable binary outcome and time horizon in both groups. Do not transfer the value directly to a different duration or population. Censored time-to-event data require survival methods, not simple counts in this interface. A zero risk difference corresponds to infinite NNT; an interval crossing zero requires interpretation that may span benefit and harm. NNT does not guarantee benefit for one person.

## References

- [Laupacis A, Sackett DL, Roberts RS. An assessment of clinically useful measures of the consequences of treatment. N Engl J Med, 1988.](https://doi.org/10.1056/NEJM198806303182605)

- [Altman DG. Confidence intervals for the number needed to treat. BMJ, 1998.](https://doi.org/10.1136/bmj.317.7168.1309)

- [Altman1998](https://pmc.ncbi.nlm.nih.gov/articles/PMC1114210/)

- [Altman/Andersen1999](https://pmc.ncbi.nlm.nih.gov/articles/PMC1117211/)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
