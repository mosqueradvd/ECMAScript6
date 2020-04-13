//operador de reposo 

const obj = {
    name: 'Lennin',
    age: 39,
    country: 'MX',
};

// let { name, ...all} = obj;
// console.log(name, all);

let {country, ...all} = obj;
console.log(all);

//propagación

const obj = {
    name: 'Valentina',
    age: 20,
}

const obj1 = {
    ...obj,
    country :'COL',
}

console.log(obj1);

//finaly

const helloworld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? resolve('Hello World !') 
            : reject(new Error('Test Error'))
    });
};

helloworld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizo'))

//********************

const helloworld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hola ya pasaron 3 segundos'), 3000)
            : reject(new Error('Test Error'))
    });
};

helloworld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizo'))


//regexData

const regexData = /([0-9]{4}-[0-9]{2}-[0-9]{4})/

const match = regexData.exec('2018-04-2020');
const year = match[1];
const month = match[2];
const day = match[3];
// const original = match[0];

// console.log(original)

// console.log(match);
console.log(day);
