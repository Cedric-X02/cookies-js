# 1.0) Créer son premier cookie en [JavaScript][1]

## 1.1) À propos
cookie-js est un bout de code pour vous aider à créer votre premier cookie en [JavaScript][1].

## 1.2) Tableau d'explication
| Fonction | Description | Utilisation | Exemple |
| :--------------- | :--------------------: | :---------------------------: | --------------------------------------------: |
| createCookie     |  Créer un cookie       | createCookie(nom,valeur,jour) | createCookie('Cookie','Un bon gros cookie',7) |
| readCookie       |  Lire un cookie        | readCookie(nom)               |                          readCookie('Cookie') |
| Bananes          |  Supprimer un cookie   | deleteCookie(nom)             |                        deleteCookie('Cookie') |

## 1.3) Installation
Pour installer cookie-js, vous devrez insérer le bout de code ci dessous dans votre fichier html ou php.
```html
<script type="module" src="https://tutos-js.tk/codes/scripts.js"></script>
```
puis importer les fonctions que vous voulez utiliser

createCookie: ```javascript
import {createCookie} from 'https://tutos-js.tk/codes/scripts.js';
```

readCookie: ```javascript
import {readCookie} from 'https://tutos-js.tk/codes/scripts.js';
```

deleteCookie: ```javascript
import {deleteCookie} from 'https://tutos-js.tk/codes/scripts.js';
```

## 1.4) Exemple d'utilisation
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p id="cook"></p>
    
    <script src="https://tutos-js.tk/codes/cookie.js"></script>
    <script>
        createCookie('Cookie','Un cookie tout à fait normal',7)
        
        var affiche = document.getElementById('cook');
        affiche.innerHTML = 'Valeur : ' + readCookie('Cookie')
    </script>
</body>
</html>
```
## 1.4.1) Image d'exemple d'utilisation
Voici une image qui montre ce que vous verrez si vous mettez le code ci-dessus
![Image d'exemple d'utilisation](https://i.imgur.com/ZqKuDAS.png "Image d'exemple d'utilisation")

---

## 2.0) Faire son premier cercle en [JavaScript][1]

## 2.1) À propos
circle-js est un bout de code pour vous aider à créer votre premier cercle en [JavaScript][1].

## 2.2) Tableau d'explication
| Fonction | Description | Utilisation | Exemple |
| :--------------- | :--------------------: | :----------------------------------: | --------------------------------------------: |
| createCircle     |  Créer un cercle       | createCircle(id,epaisseur,couleur)   |          createCircle('canvas','5','#ff2d00') |
| createFullCircle |  Créer un cercle plein | createFullCircle(id,couleur)         |          createFullCircle('canvas','#ff2d00') |

## 2.3) Installation
Pour installer circle-js, vous devrez insérer le bout de code ci dessous dans votre fichier html ou php.
```html
<script src="https://tutos-js.tk/codes/circle-js.js"></script>
```

## 2.4) Exemple d'utilisation
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <canvas id="canvas" width="400" height="200"></canvas>
    <script src="https://tutos-js.tk/codes/circle-js.js">
    </script>
    <script>
        createFullCircle('canvas','#A4A')
    </script>
</body>
</html>
```

## 2.4.1) Image d'exemple d'utilisation
Voici une image qui montre ce que vous verrez si vous mettez le code ci-dessus
![Image d'exemple d'utilisation]([https://i.imgur.com/ZqKuDAS.png](https://i.imgur.com/18KIU2N.png) "Image d'exemple d'utilisation")

[1]: https://www.javascript.com/
