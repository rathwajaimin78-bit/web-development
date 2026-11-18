// 2. The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.


let array = ["jaimin", "not", "new", "new", "hi"];
let new_array = [];
console.log(array);


for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element != array[i - 1] && element != array[i + 1]) {
        new_array.push(element)
        new_array.push(element)
    }else{
        new_array.push(element)
    }
}
console.log(new_array);