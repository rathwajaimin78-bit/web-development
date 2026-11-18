// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

async function sum_selector(array) {

    let sum = 0;

    for (const element of array) {
        if (element < 0) {
            return sum;
        }

        sum += element;
    }

    return sum;
}

async function main() {

    let array = [1, 2, 3, 4, 5, -5, 12, 45]

    s = await sum_selector(array);
    console.log(s);
}
main()