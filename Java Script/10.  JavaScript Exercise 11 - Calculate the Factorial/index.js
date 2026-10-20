const factorial = (n) => {
    if (n == 1 || n == 0) {
        return 1
    }
    return n * factorial(n - 1)
}

let n = parseInt(prompt("enter a number"))
a = factorial(n);
console.log(a)

// alert(n, "! = ",a )