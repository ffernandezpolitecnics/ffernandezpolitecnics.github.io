var tablero = document.getElementById('tablero');
var comeCocos = document.getElementById('come-cocos');
comeCocos.style.bottom = "10px";
comeCocos.style.left = "10px";
var maxAncho = tablero.offsetWidth - comeCocos.offsetWidth -20;
var maxAlto = tablero.offsetHeight - comeCocos.offsetWidth - 20;

var teclasApretadas = {};
var distancia = 3;

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

window.addEventListener('keyup', function (evt) {
    teclasApretadas[evt.code] = false;
})

setInterval(function () {
    comeCocos.style.left = calularNuevaPos(parseInt(comeCocos.style.left), "ArrowRight", "ArrowLeft", maxAncho);;
    comeCocos.style.bottom = calularNuevaPos(parseInt(comeCocos.style.bottom), "ArrowUp", "ArrowDown", maxAlto);
}, 20);