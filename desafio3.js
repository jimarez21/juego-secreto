// Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLand');
/////////////////////////////////////////////////////////////
lenguajesDeProgramacion.push('Java','Ruby','GoLand');
/////////////////////////////////////////////////////////////
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLista(lista) {
    for (let index = 0; index < lista.length; index++) {
        console.log(lista[index]);        
    }
}
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarListaInversa(lista) {
    for (let index = lista.length-1; index >= 0; index--) {
        console.log(lista[index]);        
    }
}
// mostrarLista(lenguajesDeProgramacion);
// mostrarListaInversa(lenguajesDeProgramacion);
// Crea una función que calcule el promedio de los elementos en una lista de números.
function promdeioLista(lista) {
    if(lista.length == 1 && lista.length != 0){
        return lista[0];
    }
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += lista[i];
    }
    return suma/lista.length;
}
// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function numeroExtremos(array) {
    let numeroMayor = array[0];
    let numeroMenor = array[0];
    for (let x = 0; x < array.length; x++) {
        if (numeroMayor<array[x]) {
            numeroMayor = array[x];
        }
        if (numeroMenor>array[x]) {
            numeroMenor = array[x];
        }
    }
    console.log(`El numero MAYOR es: ${numeroMayor}`);
    console.log(`El numero MENOR es: ${numeroMenor}`);
}
let numeros = [15,16,166,144,3,5,66,77,85,94];
//numeroExtremos(numeros);
// Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaLista(array) {
    let suma = 0;
    for (let x = 0; x < array.length; x++) {
        suma += array[x];
    }
    console.log(suma);
}
//sumaLista(numeros);
// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function buscar(array, elemento) {
    if (array.includes(elemento)) {
        for (let index = 0; index < array.length; index++) {
            if (elemento == array[index]) {
                return index;
            }
        }
    } else {
        return -1;
    }
}

// let elemento = 77;
// console.log(numeros);
// console.log(buscar(numeros, elemento));
// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumaListas(array, lista) {
    if (array.length == lista.length) {
        let retorno = [];
        for (let x = 0; x < array.length; x++) {
            retorno[x] = array[x]+lista[x];
        }
        return retorno;
    } else {
        console.log('Las listas no son del mismo tamanio');
    }
}
// console.log(numeros);
// console.log(sumaListas(numeros, numeros));
// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function listaCuadratica(array) {
    for (let x = 0; x < array.length; x++) {
        array[x] = array[x]*array[x];
    }
    return array;
}
// console.log(numeros);
// console.log(listaCuadratica(numeros));