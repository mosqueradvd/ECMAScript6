//Object.entries retorna un array con el contenido del objeto
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    desing: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);

//permite ver cuantos elementos tiene el objeto
console.log(entries.length);


const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    desing: 'Ana',
    testing: 'Lenin',
}

//arreglo de valores ignorando la llave
const values = Object.values(data);
console.log(values);

console.log(values.length);

//util para los menus
//agregar una cadena de texto al inicio
const string = 'hello';
console.log(string.padStart(7,'hi '));

//agregar una cadena al final

const string2 = 'hola';
console.log(string2.padEnd(8,'chao'));



//Asyn y Await

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true) 
        ? setTimeout(() => resolve('Hello Word!'), 3000) 
        : reject(new Error('Test Error'))
  })
}

// const helloAsync = async () => {
//     const hello = await helloWorld();
//     console.log(hello);
// }

// helloAsync();

const anotherfunction = async() => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
};

anotherfunction();