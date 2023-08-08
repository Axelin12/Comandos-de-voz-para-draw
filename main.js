var x=0;
var y=0;
var dibujar_circulo="";
var dibujar_rectangulo="";
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML="El sistema esta escuchando no oiendo, habla por favor";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
document.getElementById("status").innerHTML="La voz se reconocio como reconocida como: "+content;
if(content=="círculo"){
    console.log("círculo");
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML="Se empezo a dibujar un círculo";
    dibujar_circulo="set";
}
if(content=="rectángulo"){
    console.log("rectángulo");
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML="Se empezo a dibujar un rectángulo";
    dibujar_rectangulo="set";
}
}
function setup(){
    canvas=createCanvas(900,600);
}
function draw(){
    if(dibujar_circulo=="set"){
        fill(random(255),random(255),random(255));
        radiux=Math.floor(Math.random()*100);
    circle(x,y,radiux);
    document.getElementById("status").innerHTML="Se dibujo un círculo";
    dibujar_circulo="";
    }
    if(dibujar_rectangulo=="set"){
        fill(random(255),random(255),random(255));
        rect(x,y,70,50);
        document.getElementById("status").innerHTML="Se dibujo un rectángulo";
        dibujar_rectangulo="";
    }
}