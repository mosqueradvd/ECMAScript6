
//utilizamos el include para saber si un valor existe en un arreglo
let numbers = [1,2,3,7,8];

if(numbers.includes(7)){
    console.log('Si se encuentra el numero');
}
else{
    console.log('No se encuentra el numero');
}

if(numbers.includes(13)){
    console.log('Si se encuentra el numero');
}
else{
    console.log('No se encuentra el numero');
}

//Para elevar a la potencia

let base = 2;
let exponente = 3;

let result = base ** exponente;

console.log(result);
