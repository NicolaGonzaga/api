const unidades = [
    'um',
    'dois',
    'três',
    'quatro',
    'cinco',
    'seis',
    'sete',
    'oito',
    'nove',
    'dez',
    'onze',
    'doze',
    'treze',
    'quatorze',
    'quinze',
    'dezesseis',
    'dezessete',
    'dezoito',
    'dezenove',
];
const dezenas = ['dez', 'vinte', 'trinta', 'quarenta', 'cinqüenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
const centenas = [
    'cem',
    'duzentos',
    'trezentos',
    'quatrocentos',
    'quinhentos',
    'seiscentos',
    'setecentos',
    'oitocentos',
    'novecentos',
];

const error = 'Valor fora da faixa';
const min = -99999;
const max = 99999;

function conversaoRecursiva(numero) {
    switch (numero) {
        case numero >= 1 && numero <= 19:
            return unidades[numero - 1];
        case [20, 30, 40, 50, 60, 70, 80, 90].contains(numero):
            return dezenas[numero / 10 - 1];
        case (numero >= 21 && numero <= 29) ||
            (numero >= 31 && numero <= 39) ||
            (numero >= 41 && numero <= 49) ||
            (numero >= 51 && numero <= 59) ||
            (numero >= 61 && numero <= 69) ||
            (numero >= 71 && numero <= 79) ||
            (numero >= 81 && numero <= 89) ||
            (numero >= 91 && numero <= 99):
            return `${dezenas[numero / 10 - 1]} e ${conversaoRecursiva(numero % 10)}`;
        case (numero >= 201 && numero <= 299) ||
            (numero >= 301 && numero <= 399) ||
            (numero >= 401 && numero <= 499) ||
            (numero >= 501 && numero <= 599) ||
            (numero >= 601 && numero <= 699) ||
            (numero >= 701 && numero <= 799) ||
            (numero >= 801 && numero <= 899) ||
            (numero >= 901 && numero <= 999):
            return `${centenas[numero / 100 - 1]} e ${conversaoRecursiva(numero % 100)}`;
        case numero >= 1000 && numero <= 1999:
            return `mil ${conversaoRecursiva(numero % 1000)}`;
        case numero >= 2000 && numero <= 99999:
            return `${conversaoRecursiva(numero / 1000)} mil ${conversaoRecursiva(numero % 1000)}`;
        default:
            return '';
    }
}
function traduzirNumero(numero) {
    if (numero === 0) {
        return 'zero';
    }
    if (numero > max || numero < min) {
        return error;
    }

    let sinal = '';
    if (numero < 0) {
        sinal = 'menos ';
    }
    const resultado = sinal + conversaoRecursiva(numero);
    return resultado;
}