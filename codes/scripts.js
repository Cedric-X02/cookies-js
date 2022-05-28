// Cookie-js

function createCookie(nom,valeur,jour){
    if (jour) {
        var date = new Date();
        date.setTime(date.getTime()+(jour*24*60*60*1000));
        var exp = '; expires='+date.toGMTString();
    }
    else{
        var exp = '';
    }
    document.cookie = nom+'='+valeur+exp+';path=/';
}

function readCookie(nom){
    var NomÉgal = nom + '=';
    var cTableau = document.cookie.split(';');
    for(var i=0;i<cTableau.length; i++){
        var c = cTableau[i];
        while (c.charAt(0)==' '){
            c = c.substring(1, c.length);
        }
        if (c.indexOf(NomÉgal) == 0) {
            return c.substring(NomÉgal.length,c.length);
        }
    }
    return null
}

function deleteCookie(nom){
    createCookie(nom,'',-1);
}


// Circle-js

function createCircle(id,epaisseur,couleur){
    var canvas = document.getElementById(id);
    var context = canvas.getContext('2d');
    context.beginPath()
    context.lineWidth = epaisseur;
    context.strokeStyle = couleur;
    context.arc(200, 100, 50, 0, 2*Math.PI);
    context.stroke()
}
function createFullCircle(id,couleur){
    var canvas = document.getElementById(id);
    var context = canvas.getContext("2d");
    context.beginPath();
    context.fillStyle = couleur
    context.arc(80, 80, 70, 0, 2 * Math.PI);
    context.fill();
}
