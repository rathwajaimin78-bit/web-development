array = [1, 2, 3, 5, 4, 6, 7, 8]

// array.forEach((value, index, arr) => {
//     console.log(index, value)
// });


obj = {
    a: 1,
    b: 2,
    c: 3,
}

for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;

    const element = obj[key];
    console.log(key, element)
}

for (const element of array) {
    console.log(element)
}

// map function use to do oprtion on array elemnt and make a new array

let new_array = array.map((e) => {
    return e ** 2
})



// filter function do oprtion on element in own condtion
const greaterThanSeven = (e) => {
    if (e > 7) {
        return true
    }
    return false
}

console.log(array.filter(greaterThanSeven))

// reduce function 
// can be use simple function like factorial
x = [1, 2, 3, 4, 5, 6]

const red = (a, b) => {
    return a * b
}
console.log(x.reduce(red))