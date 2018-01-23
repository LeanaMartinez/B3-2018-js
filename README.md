# B3 2018 js

## tooling
- Chrome + plugin chrome (jetbrain IDE extension)
- la console de chrome / l'inspecteur
- Phpstorm
    - Setting > Languages > JS > [ECMASCRIPT 6 | v ] 
    - Settings > Keymap > Configurer les raccourcis pour "line comment" et "block comment"

## JAVASCRIPT
ECMASCRIPT passé par la cellule marketing

Orienté objet, Asynchrone et monothread
- Primitives :
   - boolean : true/false ou 0/entier positif
   - numbers
   - string (chaine de caractères)
- Opérateurs
   - +, -, *, %,...
   - = (assignation), peut etre couplé a des opérateurs (i.e : += )
   - == egalité faible (valeur egale APRES conversion)
   - === egalité stricte (meme type, meme valeur, meme objet)
   - les opérateurs d'egalité ansi que les boolean peuvent se voir attrbuer un 'non' ou 'inverse' de la forme !=, !==, !=== ou !true, ![variable boolean]
   - inégalité ou égalité partielle, <, >, <=, >=  
- Core Objects
   - Object, decrits en JSON (i.e : {"clef" : "valeur"} )
   - Array (tableaux), en JSON (i.e : ["valeur", "valeur"] )
   - Math (arithmetique et raccourcis genre pi)
   - Les objets incluent des methodes par défaut en fonction de leur type, i.e String.replaceAll(), String.toUpperCAse()
   - Certaines de ces methodes ne sont pas accessible depuis une instance de Classe, seulement depuis le Core Object, i.e Math.pi
- Boucles et conditionnel
    - if/else
    - switch/case
    - for
    - while...do
    - do...while
## ES6
sorti en 2015, on l'appelle aussi ES2015 parce que lol
const/let vs var

### Structures Object et JSON
Pour déclarer un objet en JS il existe une syntaxe particulière, la JavaScript Object Notation (JSON)
très simple elle se base sur la declaration de clefs/nom de propriétés et de valeurs
Pour un Object, il s'ecrit :
```
{
    "propriété1" : "valeur1",
    "propriété2" : "valeur2"
}
```
Pour un Array/tableau, il s'ecrit :
```
[
    "valeur1",
    "valeur2"
]
```
Pour un Array/tableau d'objets
```
[
    {
        "propriété1" : "valeur1",
        "propriété2" : "valeur2"
    },
    {
        "propriété1" : "valeur1",
        "propriété2" : "valeur2"
    }
]
```

On accèdes au propriétés/methodes d'un objet au travers de deux syntaxes
```
monObjet['propriété']
monObjet['methode']()
```
ou
```
monObjet.propriété
monObjet.methode()
```


Un Array/tableau est un object !

Une methode est un object !

la syntaxe :
```javascript
function maFonction(argument){
    return argument*2;
}
```
peut aussi s'ecrire :
```javascript
let maFonction = function(argument){
    return argument*2;
}
```




### Fonction fléchée
- syntaxe plus compacte
- transmission du 'this' de la portée/scope appellant, permet d'eviter de faire 'let that = this;' pour transmettre le this de la portée actuelle.
- return implicite, idéal pour le chainage

```javascript
function maFonction(argument){
    return argument*2;
}
```
peut ainsi s'ecrire (déclaration avec accolades, return explicite):
```javascript
let maFonction = argument => {
    return argument*2;
}
```
voire (affectation sans accolades, return implicite)
```javascript
let maFonction = argument => argument*2;
```

Si plusieurs arguments on met des parenthèses et les sépare par une virgule
```javascript
let maFonction = (argument1, argument2) => argument1 + argument2;
```

Si aucun n'argument n'est necessaire il reste necessaire de l'expliciter, pour cela on met deux parentheses, i.e :

```javascript
let maFonction = () => 2; // la on retourne juste 2 car on ne peut traiter l'argument inexistant
```

### Array Map/Reduce/Filter
Une des fonctionnalités les plus emblématiques du JS est lié au chainage ainsi qu'a la manipulation de structures via des promesses.
#### map
applique une fonction a chaque element du tableau et retourne un tableau
```javascript
let monTableau = [1, 2, 3]; 
let monNouveauTableau = monTableau.map(valeur => valeur*2);
// monNouveauTableau est égal a [2, 4, 6]
```
#### reduce
applique une fonction a chaque element du tableau et retourne l'ACCUMULATEUR fourni en argument, ce dernier gardant le résultat de la dernière opération
 ```javascript
 let monTableau = [1, 2, 3]; 
 let resultatAccumulateur = monTableau.reduce((valeur, monAccumulateur )=> valeur + monAccumulateur );
 // resultatAccumulateur est égal a 6 , soit 1+2+3
 ```
#### filter
applique une fonction qui teste une condition a chaque element du tableau et retourne un tableau des entrées ou la condition a répondu 'true' 
 ```javascript
 let monTableau = [1, 2, 3]; 
 let monTableauFiltré = monTableau.filter(valeur => {return valeur === 2} );
 // monTableauFiltré est égal a [2]
 ```
 le return étant implicite dans une fonction fléchée on peut aussi écrire
 ```javascript
  let monTableau = [1, 2, 3]; 
  let monTableauFiltré = monTableau.filter(valeur => valeur === 2 );
  // monTableauFiltré est égal a [2]
  ```

