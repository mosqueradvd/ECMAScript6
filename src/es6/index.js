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

