// const factorial = (n) => {
//     if (n == 1 || n == 0) {
//         return 1
//     }
//     return n * factorial(n - 1)
// }

function factorial(number) {
    let arr = Array.from(Array(number + 1).keys())
    let c = arr.slice(1,).reduce((a, b) => a * b)
    return c
}

let n = parseInt(prompt("enter a number"))
a = factorial(n);
console.log(a)

// alert(n, "! = ",a )