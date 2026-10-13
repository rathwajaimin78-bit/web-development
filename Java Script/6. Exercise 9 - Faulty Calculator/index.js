/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times
*/

let number = Math.random()
console.log(number)

let a = parseInt(prompt("enter number a : "))
let o = (prompt("enter number operation : "))
let b = parseInt(prompt("enter number b : "))

if (number <= 0.1) {
    // faulty calculator

    if (o == "+") {

        console.log("sum =", a - b)
        alert(`sum = ${a - b}`)
    }
    else if (o == "-") {

        console.log("subtrcion =", a / b)
        alert(`subtrcion = ${a / b}`)
    }
    else if (o == "*") {

        console.log("multply =", a + b)
        alert(`multply = ${a + b}`)
    }
    else if (o == "/") {

        console.log("divde =", a ** b)
        alert(`divde = ${a ** b}`)
    }


}
else {
    if (o == "+") {

        console.log("sum =", a + b)
        alert(`sum = ${a + b}`)
    }
    else if (o == "-") {

        console.log("subtrcion =", a - b)
        alert(`subtrcion = ${a - b}`)
    }
    else if (o == "*") {

        console.log("multply =", a * b)
        alert(`multply = ${a * b}`)
    }
    else if (o == "/") {

        console.log("divde =", a / b)
        alert(`divde = ${a / b}`)
    }
}