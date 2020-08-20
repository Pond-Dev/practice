// Type 1
function sayHello1(name) {
    return 'Hello ' + name ;
}    
//console.log(sayHello1('pond1'));

//Type 2 
sayHello2 = function(name) {
    return 'Hello ' + name ; 
}
//console.log(sayHello2('pond2'));

// Type 3 
sayHello3 = (name) => {
    return 'Hello '  + name ;
}
//console.log(sayHello3('pond3'));

var myname = 'pond' ;
//console.log(window.myname) ;

function test() {
    var name = 'pond' ;
    return name ;
}

//console.log(test());
//console.log(name);

//console.log(this === window) ;

var myObj = {
    name: 'pond',
    hello: function() {
        return 'Hello ' + this.name ;
    }
}

//console.log(myObj.hello()) ;

var person = function(name, age) {
    this.name = name ; 
    this.age = age ;
}

var pond = new person('pond',30) ;
var sprite = new person ('sprite',25)
var por = new person ()

// console.log(pond) ;
// console.log(sprite) ;
// console.log(por) ;

var person = function() {} ;

person.prototype.name = 'n/a' ;
person.prototype.age = 0 ;

var pond = new person() ;

person.prototype.hello = function() {
    return 'Hello ' + this.name ;
}
// console.log(pond.hello()) ;
// console.log(pond) ;
// console.log(pond.age) ;

pond.name = 'pond'
// console.log(pond.hello()) ;

var myObj = {
    name: 'pond',
    age: '20'
}

var sayHello = function () {
    return 'Hello ' + this.name ;
}

//console.log(sayHello());
//console.log(sayHello.call(myObj));

var Obj = {
    num: 2 
}

var myfunc = function(num1 ,num2) {
    return this.num + num1 + num2 ;
}

//console.log(myfunc());
//console.log(myfunc.call(Obj,2,3)) ;
//console.log(myfunc.apply(Obj, [2,3])) ;

var myObj = {
    num1: 2 ,
    num2: 3
}

var myfunc = function () {
    return this.num1 + this.num2 ;
}

//console.log(myfunc()) ;

var added = myfunc.bind(myObj) ;

//console.log(added()) ;
var myObj2 = {
    num1: 3 ,
    num2: 10
}

var another = myfunc.bind(myObj2)

//console.log(another());

class person1 {
    constructor(name,age) {
        this.name = name ; 
        this.age = age ;
    }
    Hello() {
        return 'Hello ' + this.name ;
    }
}

var pond = new person1('pond',20) ;
//console.log(pond) ;
//console.log(pond.Hello()) ;

var add = function(num1) {
    return function(num2) {
        return num1 + num2 ;
    }
}

var addtwo = add(2)
//console.log(addtwo(3));

var addten = add(10)
//console.log(addten(5));

var promise = new Promise(function (resolved, rejected) {
    if (true) {
        resolved(1234);
    } else {
        rejected()  
    }
}) ;


promise.then(function(value) {
  //  console.log(value) 
}).catch(function() {
   // console.log('your promise failed')
})

function calc(num, callback) { 
    return callback(num) ; 
}

var addTen = function () {
    return num + 10  
}

//console.log(calc(3,addten)) ;
var request = new Promise(function(resolved,rejected) {

    var request = new XMLHttpRequest();
    request.open('get', 'https://randomuser.me/api/') ;
    request.onload = resolved ;
    request.onerror = rejected ; 
    request.send() ;
})
request.then(function(data) {
    data = data.target.response ;
    //console.log(data) ;
}).catch(function() {
   // console.log('there was an error') ;
})