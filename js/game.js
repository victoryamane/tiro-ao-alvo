const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

const raio = 10;
let xAletorio = sorteiaPosicao(600);
let yAletorio = sorteiaPosicao(400);

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function desenhaAlvo(x, y) {
    desenhaCirculo(x, y, raio + 20, "red");
    desenhaCirculo(x, y, raio + 10, "white");
    desenhaCirculo(x, y, raio, "red");
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
}

function sorteiaPosicao(maximo) {
    return Math.floor(Math.random() * maximo);
}

function atualizaTela() {
    limpaTela();
    xAletorio = sorteiaPosicao(600);
    yAletorio = sorteiaPosicao(400);
    desenhaAlvo(xAletorio, yAletorio);
}

function dispara(evento) {

    const x = evento.pageX - tela.offsetLeft;
    const y = evento.pageY - tela.offsetTop;

    if ((x > xAletorio - raio)
        && (x < xAletorio + raio)
        && (y > yAletorio - raio)
        && (y < yAletorio + raio)) {

        alert("Acertou");
    }
}
setInterval(atualizaTela, 1000);
tela.onclick = dispara;