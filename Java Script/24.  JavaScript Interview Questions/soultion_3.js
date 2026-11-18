// 3. The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

async function reversed_string(string) {
    
    let reversed_string = string.split("").reverse().join("");
    
    console.log(reversed_string);

    let new_string = string+ " " + reversed_string;
    return new_string;
}


let string = "jaimin"

combine_string = reversed_string(string)
console.log(combine_string);
