// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.


async function isvowel(string) {


    return /[aeiou]/i.test(string)
}

async function vowel_counter(string) {
    let lower_case_string = string.toLowerCase();
    let count = 0;

    for (const character of lower_case_string) {
      

        if (await isvowel(character)) {
            count += 1;
        }
    }

    return count
}


(async function main() {

    let string = "Jaimin"

    n = await vowel_counter(string);
    console.log(n);



})()