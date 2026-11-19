// 8. Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

async function Async_Array_Mapping(array) {

    let new_array = [];

    for (const element of array) {

        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(element * 2)
            }, 500);

        })
        new_array.push(promise);
    }

    return new_array
}



(async function main() {


    let array = [1, 2, 3, 4, 5]
    x = await Async_Array_Mapping(array);


    console.log(x);

})()


