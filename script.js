
var real = window.document.getElementById('valor-real');
var dolar = window.document.getElementById('valor-dolar');

const cotação = 5.41;

real.addEventListener('InputEvent', converterParaDolar);
dolar.addEventListener('InputEvent', converterParaReal);

resultado.InnerHTML = '${resultado}';

function converterParaReal() {
    let resultado = dolar * cotação;
    return resultado;
}

function converterParaDolar() {
    let resultado = real / cotação;
    return resultado;
}