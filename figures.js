// Codigo del cuadrado 
console.group("Cuadrado")
// const ladoCuadrado = 5;
// console.log("Lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}


    
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}

// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Codigo del triangulos 
console.group("Triangulo")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

 const alturaTriangulo = function
 {
    if(ladoTriangulo1 === ladoTriangulo2 && ladoTriangulo1 != baseTriangulo) 
    {
        alert("isosceles")
        const alturaTriangulo = Math.sqrt(ladoTriangulo1**2 - baseTriangulo**2/ 4)
        console.log(altura)
    }
    else
    {
        alert("no lo se")
    }
 }
 console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("La perimetro del triangulo es de: " + perimetrTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
function 
console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Codigo del circulo
console.group("Circulo");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}


// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
} 
console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();

// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
} 