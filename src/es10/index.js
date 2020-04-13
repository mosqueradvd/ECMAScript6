let array = [1,2,3,[1,2,3,[1,2,3]]];

// console.log(array.flat(1));
// console.log(array.flat(2));
// console.log(array.flat(3));

console.log(array.flatMap(value => [value, value * 2]));


//Eliminar los espacioe en blanco

let name = '   Lennin';

let secondName = 'Geovanny     ';

console.log(name);
console.log(name.trimStart());


console.log(secondName);
console.log(secondName.trimEnd());


let user = '    lenin   ';
console.log(user.trim());


//TRY AND CATCH 

try{

}catch (error) {
    error
}

//ahora pasar directamente el error 

try{

}catch{
    error 
}


// Transformar de arreglo a Objetos

let entries = [["name", "oscar"], ["age", 39]];
console.log(Object.fromEntries(entries));


let s = Symbol('esta es la descripción del simbolo');
console.log(s.description);