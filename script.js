
real.addEventListener('Input', converterParaDolar);
dolar.addEventListener('Input', converterParaReal);

var real = parseFloat(window.document.getElementById('valor-real'));
var dolar = parseFloat(window.document.getElementById('valor-dolar'));

const cotação = 5.41;

resultado.InnerHTML = '${resultado}';

function converterParaReal() {
    let resultado = dolar * cotação;
    return resultado;
}

function converterParaDolar() {
    let resultado = real / cotação;
    return resultado;
}