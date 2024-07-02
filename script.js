document.addEventListener('DOMContentLoaded', function () {
    var real = document.getElementById('valor-real');
    var dolar = document.getElementById('valor-dolar');
    const cotacao = 5.41;

    real.addEventListener('input', converterParaDolar);
    dolar.addEventListener('input', converterParaReal);

    function converterParaReal() {
        let valorDolar = parseFloat(dolar.value);
        let resultado = valorDolar * cotacao;
        document.querySelector('.resultado').innerHTML = `R$ ${resultado.toFixed(2)}`;
    }

    function converterParaDolar() {
        let valorReal = parseFloat(real.value);
        let resultado = valorReal / cotacao;
        document.querySelector('.resultado').innerHTML = `$ ${resultado.toFixed(2)}`;
    }
});
