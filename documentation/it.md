<!-- ELUCENIA technical documentation · numero-necessario-para-tratar · it · no clinical/professional/rights approval -->

# NNT e NNH (numeri necessari da trattare e per causare danno)

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/numero-necessario-para-tratar)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Eventi nel gruppo di controllo

`ec`

intervallo: 0–1000000

### Totale dei partecipanti del gruppo di controllo

`nc`

intervallo: 1–1000000

### Eventi nel gruppo trattato (intervento)

`et`

intervallo: 0–1000000

### Totale dei partecipanti del gruppo trattato

`nt`

intervallo: 1–1000000

## Edizione del metodo

NNT/NNH/Laupacis 1988; riduzione assoluta del rischio Wald95%; inversione IC Altman1998; arrotondamento per eccesso

## Formula documentata

RC = eventi/totale controllo · RT = eventi/totale trattati · RRA = RC − RT · RRR = RRA / RC · RR = RT / RC.

NNT = 1 / RRA, arrotondato per eccesso. Se la terapia aumenta l’evento (RRA negativa), il risultato è NNH = 1 / |RRA|.

IC95% di RRA con Wald: RRA ± 1,96 × √\[RC(1 − RC)/nC + RT(1 − RT)/nT\]. L’IC di NNT inverte i limiti (Altman, 1998); se RRA include zero, l’IC di NNT va dal beneficio all’infinito e al danno.

## Limiti e popolazione

NNT o NNH dipende da evento, popolazione, rischio basale e durata del follow-up; usare lo stesso esito binario indesiderato e lo stesso orizzonte in entrambi i gruppi. Non trasferire direttamente il valore a un’altra durata o popolazione. I dati di tempo all’evento con censura richiedono metodi di sopravvivenza, non semplici conteggi in questa interfaccia. Una differenza di rischio pari a zero corrisponde a NNT infinito; un intervallo che attraversa zero richiede un’interpretazione che può comprendere beneficio e danno. NNT non garantisce beneficio a una persona.

## Riferimenti

- [Laupacis A, Sackett DL, Roberts RS. An assessment of clinically useful measures of the consequences of treatment. N Engl J Med, 1988.](https://doi.org/10.1056/NEJM198806303182605)

- [Altman DG. Confidence intervals for the number needed to treat. BMJ, 1998.](https://doi.org/10.1136/bmj.317.7168.1309)

- [Altman1998](https://pmc.ncbi.nlm.nih.gov/articles/PMC1114210/)

- [Altman/Andersen1999](https://pmc.ncbi.nlm.nih.gov/articles/PMC1117211/)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

Trattare 10 pazienti evita 1 evento in più rispetto al controllo

| Dettagli del risultato | |
| --- | --- |
| Rischio nel gruppo di controllo (RC) | 20,0% |
| Rischio nel gruppo trattato (RT) | 10,0% |
| Riduzione assoluta del rischio (ARR) | 10,0% (IC 95%: 0,2% a 19,8%) |
| Riduzione relativa del rischio (RRR) | 50,0% |
| Rischio relativo (RT/RC) | 0,50 |
| IC 95% del NNT | 5,1 a 499,6 (beneficio) |


### 2

Per ogni 20 pazienti trattati, si verifica 1 evento in più rispetto al controllo (danno)

| Dettagli del risultato | |
| --- | --- |
| Rischio nel gruppo di controllo (RC) | 10,0% |
| Rischio nel gruppo trattato (RT) | 15,0% |
| Riduzione assoluta del rischio (ARR) | -5,0% (IC 95%: -14,1% a 4,1%) |
| Riduzione relativa del rischio (RRR) | -50,0% |
| Rischio relativo (RT/RC) | 1,50 |
| IC 95% del NNH | NNT (beneficio) 24,2 a ∞ a NNH (danno) 7,1: differenza non significativa |

L’intervallo di confidenza della RAR include zero: l’effetto non è statisticamente significativo.


### 3

Nessuna differenza di rischio tra i gruppi: l’NNT è infinito

| Dettagli del risultato | |
| --- | --- |
| Rischio nel gruppo di controllo (RC) | 10,0% |
| Rischio nel gruppo trattato (RT) | 10,0% |
| Riduzione assoluta del rischio (ARR) | 0,0% (IC 95%: -8,3% a 8,3%) |
| Riduzione relativa del rischio (RRR) | 0,0% |
| Rischio relativo (RT/RC) | 1,00 |

