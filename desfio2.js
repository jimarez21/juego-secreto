// 1.Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros. IMC = peso (kg) / altura^2 (m^2)
function imc(kg,m) {
    return (kg / (m*m));
}

// 2.Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factorial(number) {
    let n = 1;
    let resultado = 1;
    while(n<=number){
        resultado = n * resultado;
        n++;
    }
    return resultado;
}
//////////////////Solucion Optimizada///////////////////////
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
/////////////////////////////////////////////////////////////
// 3.Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function dolar(dolares) {
    return dolares*4.8;
}
// 4.Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function area(b, a) {
    return b*a;
}
function perimetro(b, a) {
    return ((2*b)+(2*a));
}
function resultado(b, a) {
    let resultadoArea = area(b, a);
    let resultadoPerimetro = perimetro(b, a);
    let resultado = `El area de la sala es: ${resultadoArea}, el perimetro es: ${resultadoPerimetro}`
    console.log(resultado);
    return
}
// 5.Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function areaCirculo(r) {
    return (3.14*(r*r));
}
function perimetroCirculo(r) {
    return (3.14*(2*r));
}
function resultadoCirculo(r) {
    let resultadoArea = areaCirculo(r);
    let resultadoPerimetro = perimetroCirculo(r);
    let resultado = `El area de la sala es: ${resultadoArea}, el perimetro es: ${resultadoPerimetro}`
    console.log(resultado);
    return;
}
// 6.Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function tabla(n) {
    let contador = 1;
    while(contador <= 10){
        console.log(`${n} X ${contador} = ${n*contador}`);
        contador++;
    }
    return;
}