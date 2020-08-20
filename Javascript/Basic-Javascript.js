

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space and hyphen (-)
// Are case sensitive

let interest = 0.3 ;
interest = 1 
//console.log(interest);

let name = 'pond'; // String literal
let age = 30 // Number literal
let isApprove = true ; //Boolean literal
let firstname = undefined ; // undefined literal 
let selectColor = null ; // null literal

let person = {
    name: 'pond',
    age: '30'
}
// this object have 2 properties is name and age 
// dot notation
person.name = 'por'
person.age = '20'
// bracket notation
person['name'] = 'sprite'
person['age']= '10'
//console.log(person)

let color = ['red','blue'] ;
console.log(color[0])