# 1.0) Créer son premier cookie en [JavaScript][1]

# 1.1) À propos
cookie-js est un bout de code pour vous aider à créer votre propre cookie en [JavaScript][1].

## 1.2) Tableau d'explication
| Fonction | Description | Utilisation | Exemple |
| :--------------- | :--------------------: | :---------------------------: | ------------------------: |
| createCookie     |  Créer un cookie       | createCookie(nom,valeur,jour) | createCookie('Cookie','Un bon gros cookie',7) |
| readCookie       |  Lire un cookie        | readCookie(nom)               |                          readCookie('Cookie') |
| Bananes          |  Supprimer un cookie   | deleteCookie(nom)             |                        deleteCookie('Cookie') |

## 1.3) Installation
Pour installer cookie-js, voud devrez insérer le bout de code ci dessous dans votre fichier html ou php.
```html
<script src="https://tutos-js.tk/codes/cookie.js"></script>
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
    
    <script src="./script.js](https://tutos-js.tk/codes/cookie.js)"></script>
    <script>
        createCookie('Cookie','Un cookie tout à fait normal',7)
        
        var affiche = document.getElementById('cook');
        affiche.innerHTML = 'Valeur : ' + readCookie('Cookie')
    </script>
</body>
</html>
```
## 1.4.1) Image d'exemple d'utilisation
![Image d'exemple d'utilisation](https://upload.wikimedia.org/wikipedia/en/8/80/Wikipedia-logo-v2.svg "Image d'exemple d'utilisation")

[1]: https://www.javascript.com/
