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