// strings

let name1 = "jaimin"
let name2 = "kal"

// string is array of charcters
console.log(name1)
console.log(name1[0])
console.log(name1[1])
console.log(name1[2])
console.log(name1[3])
console.log(name1[4])
console.log(name1[5])


// we can concatnet strings
console.log(name1+" is friend of "+ name2)

// we can also do like this (tamplet litheral)

console.log(`${name1} is friend of ${name2}`)


// for when we need to ues charter in string which not allow by java scirpt , we can use \(escape sequnes)

// console.log(" " is ues for string declertion ") it give erorr

console.log(" \" is ues for string declertion ") /* it valid */



// string functions
console.log(name1.length)
console.log(name1.toUpperCase())
console.log(name1.toLowerCase())
console.log(name1.slice(1,5))
console.log(name1.replace("j","k"))
console.log(name1.trim())

// string are inmutable(can't be chanced)

// this upper functions make new strings with requried chenges
console.log(name1)

