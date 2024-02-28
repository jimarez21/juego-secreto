//DFESAFIO Lógica de programación: explorar funciones y listas
//2.Funciones

// Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludo() {
    let mensaje = 'Hola, mundo!';
    console.log(mensaje);
    return;
}
// Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludo2(persona) {
    console.log(`¡Hola, ${persona}!`);
    return;
}
// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function numDoble(numero) {
    return numero + numero;
}
// Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(numero1, numero2, numero3) {
    return (numero1+numero2+numero3) / 3;
}
// Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function nMayor(x,y) {
    if(x>y){
        return x;
    } else {
        return y;
    }
    //return x>y ? x : y;
}
// Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function mult(n) {
    return n*n;
}