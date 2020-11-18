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

function calularNuevaPos(posAnterior, code1, code2, max) {

    var movimiento = 0;

    if (teclasApretadas[code1]) {
        movimiento = distancia;
    }
    else if (teclasApretadas[code2]) {
        movimiento = -distancia;
    }

    var posNueva = posAnterior + movimiento;

    if (posNueva < 0) {
        posNueva = 0;
    }
    else if (posNueva > max) {
        posNueva = max;
    }

    if (teclasApretadas['ArrowUp']) {
        comeCocos.style.transform = 'rotate(-90deg)';
    }
    else if (teclasApretadas['ArrowDown']) {
        comeCocos.style.transform = 'rotate(90deg)';
    }
    else if (teclasApretadas['ArrowLeft']) {
        comeCocos.style.transform = 'rotate(180deg)';
    }
    else if (teclasApretadas['ArrowRight']){
        comeCocos.style.transform = 'rotate(0deg)';
    }
        
    
    return posNueva + "px";
    
}

window.addEventListener('keydown', function (evt) {
    teclasApretadas[evt.code] = true;
});

botonDerecha.addEventListener('mousedown', function () {
    teclasApretadas['ArrowRight'] = true;
});

botonIzquierda.addEventListener('mousedown', function () {
    teclasApretadas['ArrowLeft'] = true;
});

botonArriba.addEventListener('mousedown', function () {
    teclasApretadas['ArrowUp'] = true;
});

botonAbajo.addEventListener('mousedown', function () {
    teclasApretadas['ArrowDown'] = true;
});

window.addEventListener('keyup', function (evt) {
    teclasApretadas[evt.code] = false;
});

botonDerecha.addEventListener('mouseup', function () {
    teclasApretadas['ArrowRight'] = false;
});

botonIzquierda.addEventListener('mouseup', function () {
    teclasApretadas['ArrowLeft'] = false;
});

botonArriba.addEventListener('mouseup', function () {
    teclasApretadas['ArrowUp'] = false;
});

botonAbajo.addEventListener('mouseup', function () {
    teclasApretadas['ArrowDown'] = false;
});

setInterval(function () {
    comeCocos.style.left = calularNuevaPos(parseInt(comeCocos.style.left), "ArrowRight", "ArrowLeft", maxAncho);;
    comeCocos.style.bottom = calularNuevaPos(parseInt(comeCocos.style.bottom), "ArrowUp", "ArrowDown", maxAlto);
}, 20);