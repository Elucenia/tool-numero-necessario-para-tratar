<!-- ELUCENIA technical documentation · numero-necessario-para-tratar · fr · no clinical/professional/rights approval -->

# NNT et NNH (nombres nécessaires pour traiter et nuire)

[conditions, sources et autorisations](https://elucenia.org/fr/outils/numero-necessario-para-tratar)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Événements dans le groupe témoin

`ec`

intervalle: 0–1000000

### Nombre total de participants du groupe témoin

`nc`

intervalle: 1–1000000

### Événements dans le groupe traité (intervention)

`et`

intervalle: 0–1000000

### Nombre total de participants du groupe traité

`nt`

intervalle: 1–1000000

## Édition de la méthode

NNT/NNH/Laupacis 1988 ; réduction absolue du risque Wald95% ; inversion IC Altman1998 ; arrondi supérieur

## Formule documentée

RC = événements/total témoin · RT = événements/total traité · RRA = RC − RT · RRR = RRA / RC · RR = RT / RC.

NNT = 1 / RRA, arrondi au supérieur. Si le traitement augmente l’événement (RRA négative), le résultat est NNH = 1 / |RRA|.

IC95% de RRA selon Wald: RRA ± 1,96 × √\[RC(1 − RC)/nC + RT(1 − RT)/nT\]. L’IC de NNT est l’inverse des bornes (Altman, 1998) ; si RRA inclut zéro, l’IC de NNT va du bénéfice à l’infini puis au dommage.

## Limites et population

Le NNT ou le NNH dépend de l’événement, de la population, du risque initial et de la durée du suivi ; utilisez le même événement binaire indésirable et le même horizon dans les deux groupes. Ne transposez pas directement la valeur à une autre durée ou population. Les données de délai jusqu’à l’événement avec censure exigent des méthodes de survie, pas de simples effectifs dans cette interface. Une différence de risque nulle correspond à un NNT infini ; un intervalle traversant zéro exige une interprétation pouvant couvrir bénéfice et préjudice. Le NNT ne garantit pas un bénéfice pour une personne.

## Références

- [Laupacis A, Sackett DL, Roberts RS. An assessment of clinically useful measures of the consequences of treatment. N Engl J Med, 1988.](https://doi.org/10.1056/NEJM198806303182605)

- [Altman DG. Confidence intervals for the number needed to treat. BMJ, 1998.](https://doi.org/10.1136/bmj.317.7168.1309)

- [Altman1998](https://pmc.ncbi.nlm.nih.gov/articles/PMC1114210/)

- [Altman/Andersen1999](https://pmc.ncbi.nlm.nih.gov/articles/PMC1117211/)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

Traiter 10 patients évite 1 événement de plus que le contrôle

| Détails du résultat | |
| --- | --- |
| Risque dans le groupe témoin (RC) | 20,0% |
| Risque dans le groupe traité (RT) | 10,0% |
| Réduction absolue du risque (RAR) | 10,0% (IC 95 % : 0,2 % à 19,8 %) |
| Réduction relative du risque (RRR) | 50,0% |
| Risque relatif (RT/RC) | 0,50 |
| IC 95 % du NNT | 5,1 à 499,6 (bénéfice) |


### 2

Pour 20 patients traités, 1 événement supplémentaire survient par rapport au contrôle (préjudice)

| Détails du résultat | |
| --- | --- |
| Risque dans le groupe témoin (RC) | 10,0% |
| Risque dans le groupe traité (RT) | 15,0% |
| Réduction absolue du risque (RAR) | -5,0% (IC 95 % : -14,1 % à 4,1 %) |
| Réduction relative du risque (RRR) | -50,0% |
| Risque relatif (RT/RC) | 1,50 |
| IC 95 % du NNH | NNT (bénéfice) 24,2 à ∞ à NNH (préjudice) 7,1 : différence non significative |

L’intervalle de confiance de la RAR inclut zéro : l’effet n’est pas statistiquement significatif.


### 3

Aucune différence de risque entre les groupes : le NNT est infini

| Détails du résultat | |
| --- | --- |
| Risque dans le groupe témoin (RC) | 10,0% |
| Risque dans le groupe traité (RT) | 10,0% |
| Réduction absolue du risque (RAR) | 0,0% (IC 95 % : -8,3 % à 8,3 %) |
| Réduction relative du risque (RRR) | 0,0% |
| Risque relatif (RT/RC) | 1,00 |

