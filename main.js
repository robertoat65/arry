let frutas = ["naranja", "platano", "fresa", "manzana"]
let carnes = ["cerdo", "res", "adobada"];

const comida = frutas.concat(carnes);

console.log(frutas.length) //el numero de datos en un array
console.log(frutas[frutas.length-1]) //el ultimo dato del array
console.log(frutas[0]) //forma de acceder a un dato
console.log(frutas.at(-1)) //forma de acceder a un dato con numeros negativos o positivos

imp(frutas);

//MUTABILIDAD//
frutas.push("pera") //agregar elementos al final
frutas.unshift("sandia") //agregar elemento al principio
frutas.splice(2, 0, "melon") //insertar en medio


impDom("array2", frutas);
impDom("array1", comida);

function imp(arr){
    for (let i=0 ; i<frutas.length ; i++){
        console.log(frutas[i]); //citar todos los datos del array
    }
}

function impDom(element, arr){ //imprimir en el DOM
    document.getElementById(element).innerHTML = "";

    for (let i=0 ; i<arr.length ; i++){
        document.getElementById(element).innerHTML +=
        `<div>${arr[i]}</div>`
    }
}

