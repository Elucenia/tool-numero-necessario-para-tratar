<!-- ELUCENIA technical documentation · numero-necessario-para-tratar · es · no clinical/professional/rights approval -->

# NNT y NNH (números necesarios para tratar y dañar)

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/numero-necessario-para-tratar)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Eventos en el grupo control

`ec`

intervalo: 0–1000000

### Total de participantes del grupo control

`nc`

intervalo: 1–1000000

### Eventos en el grupo tratado (intervención)

`et`

intervalo: 0–1000000

### Total de participantes del grupo tratado

`nt`

intervalo: 1–1000000

## Edición del método

NNT/NNH/Laupacis 1988; RRA Wald95%; inversión IC Altman1998; redondeo hacia arriba

## Fórmula documentada

RC = eventos/total en control · RT = eventos/total en tratados · RRA = RC − RT · RRR = RRA / RC · RR = RT / RC.

NNT = 1 / RRA, redondeado hacia arriba. Si el tratamiento aumenta el evento (RRA negativa), el resultado es NNH = 1 / |RRA|.

IC95% de RRA por Wald: RRA ± 1,96 × √\[RC(1 − RC)/nC + RT(1 − RT)/nT\]. El IC de NNT es el inverso de los límites (Altman, 1998); si RRA incluye cero, va del beneficio al infinito y al daño.

## Límites y población

NNT o NNH depende del evento, la población, el riesgo basal y el período de seguimiento; use el mismo desenlace binario no deseado y horizonte en ambos grupos. No transfiera directamente el valor a otra duración o población. Los datos de tiempo hasta evento con censura exigen métodos de supervivencia, no simples recuentos en esta interfaz. Una diferencia de riesgo cero corresponde a NNT infinito; un intervalo que cruza cero exige una interpretación que puede abarcar beneficio y daño. NNT no garantiza beneficio para una persona.

## Referencias

- [Laupacis A, Sackett DL, Roberts RS. An assessment of clinically useful measures of the consequences of treatment. N Engl J Med, 1988.](https://doi.org/10.1056/NEJM198806303182605)

- [Altman DG. Confidence intervals for the number needed to treat. BMJ, 1998.](https://doi.org/10.1136/bmj.317.7168.1309)

- [Altman1998](https://pmc.ncbi.nlm.nih.gov/articles/PMC1114210/)

- [Altman/Andersen1999](https://pmc.ncbi.nlm.nih.gov/articles/PMC1117211/)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
