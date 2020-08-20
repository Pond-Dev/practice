// ForEach
const animals = ['Ant', 'Bat', 'Cat', 'Dog']

animals.forEach( (animal) => {
   //console.log(animal)
})

// Map

const numbers = [35, 23, 17, 21]
const result1 = numbers.map( (number) => {
    return ++number
})
//console.log(result1)

// Filter

const members = [ 
    {name: "Eve", age: 24}, 
    {name: "Adam", age: 48}, 
    {name: "Chris", age: 18}, 
    {name: "Danny", age: 30}
 ]

 const result2 = members.filter((member) => {
     return member.age > 25 ;
 })
 //console.log(result2)

 // Find 

 const result3 = members.find( (member) => {
     return member.age > 25
 })
 //console.log(result3)

 // Every

 const result4 = members.every( (member) => {
     return member.age > 25
 })
 //console.log(result4)

 // Some
 const result5 = members.some( (member) => {
    return member.age > 25
 })
 //console.log(result5)

 // Reduce 

 const numbers1 = [10, 20, 30, 40]

 const result6 = numbers1.reduce( (sum,number) => {
     return sum+number
 })

 console.log(result6)