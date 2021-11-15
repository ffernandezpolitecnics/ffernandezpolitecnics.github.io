window.addEventListener('keydown', function (evt) {
    teclasApretadas[evt.code] = true;
});

botonDerecha.addEventListener('mousedown', function () {
    teclasApretadas['ArrowRight'] = true;
});

botonDerecha.addEventListener('touchstart', function () {
    teclasApretadas['ArrowRight'] = true;
});

botonIzquierda.addEventListener('mousedown', function () {
    teclasApretadas['ArrowLeft'] = true;
});
botonIzquierda.addEventListener('touchstart', function () {
    teclasApretadas['ArrowLeft'] = true;
});

botonArriba.addEventListener('mousedown', function () {
    teclasApretadas['ArrowUp'] = true;
});
botonArriba.addEventListener('touchstart', function () {
    teclasApretadas['ArrowUp'] = true;
});

botonAbajo.addEventListener('mousedown', function () {
    teclasApretadas['ArrowDown'] = true;
});
botonAbajo.addEventListener('touchstart', function () {
    teclasApretadas['ArrowDown'] = true;
});

window.addEventListener('keyup', function (evt) {
    teclasApretadas[evt.code] = false;
});

botonDerecha.addEventListener('mouseup', function () {
    teclasApretadas['ArrowRight'] = false;
});

botonDerecha.addEventListener('touchend', function () {
    teclasApretadas['ArrowRight'] = false;
});

botonIzquierda.addEventListener('mouseup', function () {
    teclasApretadas['ArrowLeft'] = false;
});
botonIzquierda.addEventListener('touchend', function () {
    teclasApretadas['ArrowLeft'] = false;
});


botonArriba.addEventListener('mouseup', function () {
    teclasApretadas['ArrowUp'] = false;
});
botonArriba.addEventListener('touchend', function () {
    teclasApretadas['ArrowUp'] = false;
});

botonAbajo.addEventListener('mouseup', function () {
    teclasApretadas['ArrowDown'] = false;
});
botonAbajo.addEventListener('touchend', function () {
    teclasApretadas['ArrowDown'] = false;
});