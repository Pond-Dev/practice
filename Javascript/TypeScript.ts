
let  message = 'welcome back'
console.log(message)

let isBeginner: boolean = true 
let total: number = 0 
let names: string = 'vashwas' 

let sentence: string = `my name is ${names}
I am beginner in Typrscript` 

console.log(sentence) 

let n: null = null 
let u: undefined = undefined

let isNew: boolean = null
let myname: string = undefined

let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]

let person1: [string, number] = ['pond', 21]

enum color {red =5, green, blue}

let c: color = color.green

console.log(c)

let randomvalue: any = 10
randomvalue = true
randomvalue = 'vashwas'

let myVariable: unknown = 10

function hasname(obj: any): obj is { name: string} {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

if (hasname(myVariable)) {
    console.log(myVariable.name)
}

let a 
a = 10 
a = true

let b = 20

let multiType: number | boolean 
multiType = 20
multiType = true

let anyType: any 
anyType = 20 
anyType = true

function add(num1: number, num2?: number): number {
    if(num2) {
        return num1+num2
    } else {
        return num1
    }
}

add(5,10)
add(5)

interface Person {
    firstName: string,
    lastName: string
}

function fullname(person: {firstName: string, lastName: string}){
    console.log(`${person.firstName} ${person.lastName}`)
}
    
let p = {
    firstName: 'Bruce',
    lastName: 'Wayne' 
}

fullname(p)

class Employee {
    employeeName: string
    
    constructor(name: string) {
        this.employeeName = name
    }

    greet() {
        console.log(`Good morning ${this.employeeName}`)
    }
}

let emp1 = new Employee('vishwas')
console.log(emp1.employeeName)
emp1.greet()

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegatework() {
        console.log(`Manager delegate tasks ${this.employeeName}`)
    }
}

let m1 = new Manager('Bruce')
m1.delegatework()
m1.greet()
console.log(m1.employeeName)