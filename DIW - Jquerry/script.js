const conversao = {
    USD: {
        EUR: 0.9282,
        JPY: 155.77,
        BRL: 5.1458,
        MXN: 16.781
    },
    EUR: {
        USD: 1.077,
        JPY: 167.8505,
        BRL: 5.542,
        MXN: 18.0731
    },
    JPY: {
        USD: 0.0064,
        EUR: 0.006,
        BRL: 0.033,
        MXN: 0.1077
    },
    BRL: {
        USD: 0.1943,
        EUR: 0.1804,
        JPY: 30.2847,
        MXN: 3.2605
    },
    MXN: {
        USD: 0.0596,
        EUR: 0.0553,
        JPY: 9.2879,
        BRL: 0.3066
    }
};

function convertCurrency() {
    let valor = parseFloat (document.getElementById('valor').value);
    let vOrigem = document.getElementById('origem').value;
    let vConvertido = document.getElementById('para').value;

    let rate = conversao[vOrigem][vConvertido];
    let convertedAmount = valor * rate;

    document.getElementById('resultado').innerHTML = `Resultado: ${valor} ${vOrigem} = ${convertedAmount.toFixed(2)} ${vConvertido}`;
}