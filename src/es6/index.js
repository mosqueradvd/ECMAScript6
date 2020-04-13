//**************parametros por defecto

//ES5

function newFunction(name, age, country){
    var name = name || 'Lennin';
    var age = age || 39;
    var country = country || 'COL';

    console.log(name, age, country);
}

newFunction();
newFunction('Mario', 45, 'PE');

//ES6

function newFunction2(name = 'Lennin', age=39, country='COL'){
    console.log(name, age, country);
}

//pasandole los parametros
newFunction2('Lennin', 37, 'MX');
//sin pasarle parametros para que coja los defenidos
newFunction2()


//********************Template Literal

let hello = 'Hello';
let world = 'World';

let frase = hello+' '+world;
console.log(frase);


let templateLiteral = `${hello} ${world}`;
console.log(templateLiteral);
console.log(`${hello} ${world}`);


//ES5
let lorem = 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido \n'
 + 'del texto de un sitio mientras que mira su diseño.'

 console.log(lorem);


 //ES6 Multiline con template literal

let lorem2 = `Es un hecho establecido hace demasiado tiempo que
un lector se distraerá con el contenido del texto
de un sitio mientras que mira su diseño.`;
console.log(lorem2);

//ES5

let person = {
    name : 'Lennin',
    age: 39,
    country: 'COL',
}

console.log(person.name, person.age, person.country);

//ES6 Destructuración 

// let {name, age, country} = person;

// console.log(name);
// console.log(name, country);

let {name} = person;
console.log(name);

//unir elementos de arreglos

let team1 = ['Lennin', 'Ricardo', 'German'];
let team2 = ['Silvia', 'Yesica', 'Monica', 'Lorena'];

let education = ['Valentina', ...team1, ...team2];

console.log(education);

//let nueva forma para guardar variables, solo esta disponible en el scope
//solo funciona dentro de las llaves que lo contiene

{
    var globalVar = "Global Var";
}

{
    let globlaLet = "Global Let";
    console.log(globlaLet);
}

console.log(globalVar);
//console.log(globlaLet); //no es accesible por que lo estamos imprimiendo fuera de su scope

const CONSTANTE = 'b';
console.log(CONSTANTE);

// const CONSTANTE = 'mx'; //no permite hacer una reasignación genera un error

let name = 'Lennin';
let age = 32;

// ES5
obj = {
    name : name, 
    age : age,
}

//ES6
//si el nombre de la llave es el mismo del valor no lo debo repetir
objEs6 = {
    name,
    age
}

console.log(obj);
console.log(objEs6);

//Arrow function
//sintaxis mas reducida y un this no vinculante

const names = [
    {name: 'Lennin', age: 32},
    {name: 'Valentina', age: 20}
]

let listOfNames = names.map(function(item){
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(`nombre ${item.name} edad ${item.age}`));

const square = num => num * num;

//Promesas
const helloPromise = ()=>{
    return new Promise((resolve, reject)=>{
        if(!true){
            resolve('Hey true!');
        }
        else{
            reject('Ups false!');
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

class calculator {
    //metodo para inicializar una clase
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,5));

//*********Importar un modulo */

// import { hello }  from './module'
const hello = require('./module');

hello();
console.log(hello());

/////generadores
//para trabar con logicas
//fibonacci

function* heloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'world';
    }
};

const generatorHello = heloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
