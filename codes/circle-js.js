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