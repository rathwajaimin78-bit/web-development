// same as other progrmming lang


// "for" loop for array 
let a = 0
for (let i = 0; i < 100; i++) {
    console.log(a + i);

}
// stop at i=100

// "for in" loop for a object 
obj = {
    name: "jaimin",
    income: 100,
    lang: "C++"
}

for (const key in obj) {
    console.log(key, obj[key]);
}


// "for of" loop for array or string itreion
for (const C of "object") {
    console.log(C)
}

// "while loop" completely same as other lang
let i = 0
while (i<10) {
    console.log(i)
    i++;
}

// "do while" this run minmum 1 times
let j=0
do {
    console.log(j)
    j++;
} while (j<10);