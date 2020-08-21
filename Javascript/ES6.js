// var name = 'pond'
// console.log(name)
// name = 'sprite'
// console.log(name)

// let name = 'pond'
// console.log(name)
// name = 'sprite'
// console.log(name)

// const name = 'pond'
// console.log(name)

// const person = { name: 'pond' }
// person.name = 'sprite'
// console.log(person)

// const person = { name: 'pond' }
// const person2 = person
// console.log(person2)
// person.name = 'sprite'
// console.log(person2)
// console.log(person)

// const sum = (x,y) => {
//     return x+y ;
// }
// const sum1 = (x,y) => x+y ;
// console.log(sum(4,5))
// console.log(sum1(4,5))

// const addTen = add => add+10 ;
// console.log(addTen(1)) 

// const sum = (x=1,y=2) => x+y 
// console.log(sum(3))

// const sayHello = name => `Hello ${name}` 
// const sayHello1 = name => 'Hello ' + name 
// console.log(sayHello('pond'))
// console.log(sayHello1('pond'))

// const array1 = [1, 2, 3, 4, 5]
// const array2 = [6, 7, 8]
// const array3 = [...array1, ...array2]
// console.log(array3)
// const array4 = [array1, array2]
// console.log(array4)

// const baseperson = {
//     name: null ,
//     age: 0
// }

// const person = {
//     ...baseperson,
//     name: 'pond'
// }
// console.log(person)

// const obj1 = {
//     x: 1,
//     y: 2
// }

// const obj2 ={
//     z: 3
// }

// const obj = {
//     ...obj1,
//     ...obj2,
//     y: 5,
//     a: 6
// }

// console.log(obj)

// const person = { name: 'pond'}
// const person2 = { ...person }
// console.log(person)
// console.log(person2)
// person.name = 'sprite'
// console.log(person2.name)

// const person = {name: 'pond', age: '21'}
// const { name, age } = person 
// console.log(name)
// console.log(age)

// const sayHello = ({name, timeOfDay}) => `Good ${timeOfDay} ${name} `
// console.log(sayHello({ name: 'pond', timeOfDay: 'morning'}))

// new Promise( (resolved) => {
//     setTimeout(() => {
//         resolved('Hello world') 
//     },3000);
// }).then(string => console.log(string))

// const printTitle = async () => {
//     const string = await new Promise ((resolved,rejected) => {
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => resolved(json.title))
//         .catch(() => rejected())
//     })
//     console.log(string)
// }
// console.log(printTitle())

// class person {
//     constructor(name = 'N/A'){
//         this.name = name
//     }
//     sayHello() {
//         return `Hello ${this.name}`
//     }
// }
// console.log(new person)
// console.log(new person('pond'))
// member = new person('pond') 
// console.log(member.sayHello())

// class player {
//     constructor() {
//         this.x = 0
//         this.y = 0
//     }
// }

// class vehicles extends player{
//     constructor(){
//         super()
//         this.mph = 100
//     }
// }
// console.log(new vehicles)

// settings JS

// export default () => {...}
// // app.js

// import myfunc from './settings'

// const obj = {x: 1, y: 2, z: 3}
// console.log(Object.entries(obj))

// console.log('abcd'.padStart(10, '123'))
// console.log('abcdef'.padStart(10, '123'))

function sayHello() {
    return "Hello" ;
}

function delaySayHello(){
    return new Promise ( (resloved,rejected) => {
        setTimeout(() => {
            resloved('Delay Hello')
        }, 1000);
    })
}

async function main() {
    let a = sayHello ()
    let b = await delaySayHello()
    console.log(a)
    console.log(b)
}

main()