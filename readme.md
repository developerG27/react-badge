# React
React può essere definita una libreria, in quanto per utilizzarlo il suo codice deve essere prima importato.
Ma si può considerare anche un framework.
È strutturato in componenti che sono piccoli blocchi che possono comunicare tra di loro per formare un'applicazione web.

"Scrivi una volta usalo ovunque."

## Jsx
È un estensione di ECMAScript, in pratica si basa su HTML all'interno di Javascript.
Jsx non è ne HTML ne XML, viene usato solo per migliorare la leggibilità 

## Componente
Sono blocchi di costruzione.
Non tutti i componenti sono classi.
Solo i componenti che devono avere accesso allo state sono classi, il resto sono oggetti.

### Elemento vs Componente
Se un elemento fosse una casa, il componente serebbe il piano per fare quella casa.

## Props
È la forma abbreviata di properties, sono argomenti di una funzione

## State
Esistono due tipi di componenti: 
- Con lo state: statefull components
- Senza state: stateless components
Lo state dovrebbe essere di solo lettura, se vogliamo modificarlo dobbiamo usare un nuovo oggetto.

``` js
setState()
```
Non si dovrebbe mai cambiare gli oggetti originali, bensì crearne di nuovi, in modo tale passiamo avere una tracciabilità di tutti i cambi che avvengono.