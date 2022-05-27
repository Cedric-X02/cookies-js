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
Voici une image qui montre ce que vous verrez si vous mettez le code [ci-dessus][2]
![Image d'exemple d'utilisation](https://i.imgur.com/ZqKuDAS.png "Image d'exemple d'utilisation")

[1]: https://www.javascript.com/
[2]: https://github.com/Cedric-X02/js-tutos/blob/main/README.md#14-exemple-dutilisation
