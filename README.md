# B3 2018 js

### tooling
- Chrome + plugin chrome (jetbrain IDE extension)
- la console de chrome / l'inspecteur
- Phpstorm
    - Setting > Languages > JS > [ECMASCRIPT 6 | v ] 
    - Settings > Keymap > Configurer les raccourcis pour "line comment" et "block comment"


### ES6 / JAVASCRIPT

Orienté objet, Asynchrone et monothread
- **Primitives**
   - boolean : true/false ou 0/entier positif
   - numbers
   - string (chaine de caractères)
   - null : existe mais on sait pas ce que c'est
   - undefined : n'existe pas/ n'est pas déclaré dans la portée actuelle
- **Opérateurs**
   - +, -, *, %, <let>++, <let>-- ...
   - '+' est aussi l'opérateur de concaténation de chaine de caractères
   - = (assignation), peut etre couplé a des opérateurs (i.e : += )
   - == egalité faible (valeur egale APRES conversion)
   - === egalité stricte (meme type, meme valeur, meme objet)
   - les opérateurs d'egalité ansi que les boolean peuvent se voir attrbuer un 'non' ou 'inverse' de la forme !=, !==, !=== ou !true, ![variable boolean]
   - inégalité ou égalité partielle, <, >, <=, >=  
- **Core Objects**
   - Object, decrits en JSON (i.e : {"clef" : "valeur"} )
   - Array (tableaux), en JSON (i.e : ["valeur", "valeur"] ) ce sont des types "itérables"
   - Math (arithmetique et raccourcis genre pi)
   - Les objets incluent des methodes par défaut en fonction de leur type, i.e String.replaceAll(), String.toUpperCAse()
   - Certaines de ces methodes ne sont pas accessible depuis une instance de Classe, seulement depuis le Core Object, i.e Math.pi
- **Boucles et conditionnel**
    - if/else (si(\<condition>){ fait ci } sinon {fait ca})
    - switch/case (cas rigolo, a vous de trouver)
    - for(let i=0; i < 50; i++){} (initialisation ; tant que \<condition>; fait ca automatiquement en fin de chaque passage){fait ca lors d'un passage}
    - while...do (tant que \<condition> est vraie ... execute machin)
    - do...while (execute machin ... tant que \<condition> est vraie)
    - for...of  for (let valeurs in monTableau){}(enumere les valeurs des propriétes d'un type itérable coomme les Arrays/tableaux)
    - for...in  for (let clefs of monObjet){} (enumere les clefs de propriétes de l'Object)
- **Variables : const/let et pourquoi on utilise plus var (spoiler : c'est parce que c'est dla merde)**
    - contrairement a 'var', const et let ont des portées plus facilement identifiables
    - var : porté de fonction, il existe dans toute la fonction envellopante
    - let : portée de bloc d'execution, il existe dans les plus proches accolades qui l'entourent. 
    - const : une constante, on ne la modifie généralement pas, c'est un referentiel dans la portée
        ```javascript
        function maFonction(){
            // la maVar existe mais est null
            // la monLet existe pas
            for (maVar i = 0; i < 2 ; i++){
                let monLet = i;
                // la maVar existe et c'est normal
                // la monLet existe et c'est normal
            }
            for (monLet j = 0; j < 2 ; j++){
                let maVar = j;
                // la maVar existe et c'est dla merde
                // la monLet existe et c'est normal
            }
            // la maVar existe encore et c'est dla merde
            // la monLet existe pas et c'est normal
        }
        ```

### Structures Object et JSON
Pour déclarer un objet en JS il existe une syntaxe particulière, la JavaScript Object Notation (JSON)
très simple elle se base sur la declaration de clefs/nom de propriétés et de valeurs
- Couple clef/valeur pour une propriété, (sauf dans le cas d'un tableau ou la clef est implicite)
- Chaque propriété est separée par une virgule
- Le nom de la propriété est une chaine daractère donc s'ecrit entre quotes/guillemets simples ou doublequotes/guillemets doubles 
#### Object 
Pour un Object, il s'ecrit entre accolades {}:
    ```javascript
    {
        "propriété1" : "valeur1",
        "propriété2" : "valeur2"
    }
    ```
#### Array/Tableau (et Iterables/Enumerables)
Pour un Array/tableau, il s'ecrit entre crochets []:
- Un Array/tableau est un object de type 'itérable'/'enumerable', on peut parcourir ses valeurs au travers d'un boucle
- C'est un 'chainage' de valeurs, tout comme une String est un chainage de caractères
- a noter que l'on ne met pas de clef sur un tableau, c'est inutile car la notion de tableau et d'index (position dans le tableau) se fait automatiquement
    ```javascript
    [
        "valeur1",
        "valeur2"
    ]
    ```

Pour un Array/tableau d'objets
    ```javascript
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

#### Function / méthodes
Une function est un bloc d'execution qui retourne ou pas une valeur 
Elle beneficie d'une portée particulière et d'un accès a des elements automatique, par exemple 'this' qui indique l'Object actuel d'ou la fonction a été *invoquée*.

la syntaxe :
    ```javascript
    function maFonction(argument){
        return argument*2;
    }
    ```

- Une function est un object et peut aussi s'ecrire :
    ```javascript
    let maFonction = function(argument){
        return argument*2;
    }
    ```

- si la function est une propriété d'un object on l'appelle Method/méthode et on la défini comme n'importe quelle autre propriété
    ```javascript
    {
        "propriété1" : "valeur1",
        "maMethode" : function(argument){
            let resultat = argument*2
            return resultat;
        }
    }
    ```

- La notation est plus permissive dans le code JS lui même, elle ne necessite pas de declarer explicitement la clef en tant que chaine de caractères, c'est fait implicitement
    ```javascript
    let monObjet = {
        propriete1 : "valeur1",
        propriete2 : "valeur2"
    }
    ```

- On accède au propriétés d'un objet au travers de deux syntaxes
    ```javascript
    monObjet['propriété1']
    ```
    ou
    ```javascript
    monObjet.propriété
    ```

- On invoque une methode d'objet au travers de la meme syntaxe suivie de parentheses contenant les arguments
    ```javascript
    monObjet['maMethode'](argument)
    ```
    ou
    ```javascript
    monObjet.maMethode(argument)
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
    voire, (affectation sans accolades, return implicite)
    ```javascript
    let maFonction = argument => argument*2;
    ```

- Si plusieurs arguments on met des parenthèses et les sépare par une virgule
    ```javascript
    let maFonction = (argument1, argument2) => argument1 + argument2;
    ```
- Si aucun n'argument n'est necessaire il reste necessaire de l'expliciter, pour cela on met deux parentheses, i.e :
    ```javascript
    let maFonction = () => 2; // la on retourne juste 2 car on ne peut traiter l'argument inexistant
    ```

### Array Map/Reduce/Filter

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
 let resultatAccumulateur = monTableau.reduce((valeur, monAccumulateur ) => valeur + monAccumulateur );
 // resultatAccumulateur est égal a 6 , soit 1+2+3
 ```
#### filter
applique une fonction qui teste une condition a chaque element du tableau et retourne un tableau des entrées ou la \<condition> est vraie 
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

### Chains et Promises
Une des fonctionnalités les plus emblématiques du JS est lié au chainage ainsi qu'e la manipulation de structures via des promesses.
- Pour pouvoir chainer, ben faut retourner un truc. Ca tombe bien les fonctions fléchées elles le supportent par defaut
- Pour pouvoir declarer une promesse, ben on utilise un Object Promise ... c'est la declaration d'une opération asynchrone. 

Une Promesse encapsule une function et lui propose 2 possibilité de retour, une dans la cas ou c'est ok, l'autre quand ca l'est pas : resolve et reject
```javascript
let maPromesse = new Promise(function(resolve, reject) {
    let random = Math.random();
    if(random >= 0.5){
        resolve('ca roule!');
    }else{
        reject('ca fail!')
    }
});
```

Pour traiter ces retours on utilise un chainage avec '.then()' et '.catch()'

```javascript
let maPromesse = new Promise(function(resolve, reject) {
    let random = Math.random();
    if(random >= 0.5){
        resolve('ca roule!');
    }else{
        reject('ca fail!');
    }
});

let message = maPromesse
    .then(reponseOK => 'la ca roule il parait')
    .catch(reponseKO => 'la ca pue du fion');

```

jQuery implémente une version particulière des promesses avec les objets différés/Deferred. On l'observe par exemple dans les calls $.ajax() 

Les equivalent chainés sont dans ce cas '.done()', '.fail()' et un truc chelou... '.always()'. C'est chelou parce que ES6 le gere simplement en chainant un '.then()'  
