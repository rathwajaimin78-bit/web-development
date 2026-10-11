var b = 45;


console.log(b);

// we use let intead of var 

// var is always globle varbale 
// but let is block-scoped local variable

// that's why let help to make code clean 

let r = 56
let y = null

// in javascript null is object 
console.log(r, typeof r)
console.log(y, typeof y)

// Object in javascript
let a = {
    name: "jaimin",
    number: 55
}

console.log(a, typeof a)
console.log(a.name)
console.log(a.number)
a.number = 12
console.log(a.number)
