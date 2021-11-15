var tablero = document.getElementById('tablero');
var comeCocos = document.getElementById('come-cocos');
comeCocos.style.bottom = "10px";
comeCocos.style.left = "10px";
var maxAncho = tablero.offsetWidth - comeCocos.offsetWidth -20;
var maxAlto = tablero.offsetHeight - comeCocos.offsetWidth - 20;

var teclasApretadas = {};
var distancia = 3;

var botonDerecha = document.getElementById("derecha");
var botonIzquierda = document.getElementById("izquierda");
var botonArriba = document.getElementById("arriba");
var botonAbajo = document.getElementById("abajo");