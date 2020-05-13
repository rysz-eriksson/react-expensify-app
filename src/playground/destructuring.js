// const person = {
//     name: 'Andrw',
//     age: 26,
//     location: {
//         city: 'Phillie',
//         temp: 92
//     }
// }

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age} years old`)

// const { city, temp: temperature } = person.location

// console.log(`It's ${temperature} in ${city} `)

// const book = {
//     title: 'Ego is an enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-published' } = book.publisher

// console.log(publisherName);

// Array destructuring 

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pensylvania', '19147']

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`)

const item = ['Coffee', '$2', '$2.50', '$2.75']

const [beverage, ,mediumPrice] = item;

console.log(`A medium ${beverage} costs ${mediumPrice}.`)