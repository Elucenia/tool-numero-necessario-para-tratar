<!-- ELUCENIA technical documentation · numero-necessario-para-tratar · de · no clinical/professional/rights approval -->

# NNT und NNH (Anzahl für Behandlung und Schaden)

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/numero-necessario-para-tratar)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Ereignisse in der Kontrollgruppe

`ec`

Bereich: 0–1000000

### Gesamtzahl der Teilnehmenden in der Kontrollgruppe

`nc`

Bereich: 1–1000000

### Ereignisse in der behandelten Gruppe (Intervention)

`et`

Bereich: 0–1000000

### Gesamtzahl der Teilnehmenden in der behandelten Gruppe

`nt`

Bereich: 1–1000000

## Fassung der Methode

NNT/NNH/Laupacis 1988; absolute Risikoreduktion Wald95%; KI-Inversion Altman1998; Aufrundung

## Dokumentierte Formel

RC = Ereignisse/Gesamtzahl Kontrolle · RT = Ereignisse/Gesamtzahl Behandelte · RRA = RC − RT · RRR = RRA / RC · RR = RT / RC.

NNT = 1 / RRA, aufgerundet. Bei erhöhtem Ereignisrisiko durch Behandlung (negative RRA) ist das Ergebnis NNH = 1 / |RRA|.

95%-KI der RRA nach Wald: RRA ± 1,96 × √\[RC(1 − RC)/nC + RT(1 − RT)/nT\]. Das NNT-KI ist die Inversion der Grenzen (Altman, 1998); bei RRA einschließlich null reicht es vom Nutzen über unendlich zum Schaden.

## Grenzen und Population

NNT oder NNH hängt vom Ereignis, der Population, dem Ausgangsrisiko und der Nachbeobachtungsdauer ab. Verwenden Sie in beiden Gruppen denselben unerwünschten binären Endpunkt und Zeithorizont. Übertragen Sie den Wert nicht direkt auf eine andere Dauer oder Population. Zensierte Zeit-bis-Ereignis-Daten erfordern Überlebenszeitanalysen statt einfacher Häufigkeiten in dieser Oberfläche. Eine Risikodifferenz von null entspricht einem unendlichen NNT; ein Intervall, das sowohl negative als auch positive Werte umfasst, kann Nutzen und Schaden umfassen und muss entsprechend interpretiert werden. NNT garantiert keinen Nutzen für eine einzelne Person.

## Referenzen

- [Laupacis A, Sackett DL, Roberts RS. An assessment of clinically useful measures of the consequences of treatment. N Engl J Med, 1988.](https://doi.org/10.1056/NEJM198806303182605)

- [Altman DG. Confidence intervals for the number needed to treat. BMJ, 1998.](https://doi.org/10.1136/bmj.317.7168.1309)

- [Altman1998](https://pmc.ncbi.nlm.nih.gov/articles/PMC1114210/)

- [Altman/Andersen1999](https://pmc.ncbi.nlm.nih.gov/articles/PMC1117211/)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026
