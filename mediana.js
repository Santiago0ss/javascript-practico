const lista1 = [
    100,
    200,
    500,
    4000000,
];

const mitadLista1 = lista1.length / 2;

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)){

} else {
    mediana = lista1[mitadLista1];
}