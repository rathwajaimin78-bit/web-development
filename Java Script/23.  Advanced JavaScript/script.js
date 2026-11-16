async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 4500);
    })
}


(async function main() {
    let a = await sleep()
    let b = await sleep()
    console.log(a);
    console.log(b);
    
    
})()

// this call IIFE : Immediately Invoked Function Expression

// Destuctuung : assigament is used unpack values from an Array , or propeties from olects into distinet Variables

let [x,y,z, ...rest] = [1,2,4,5,7,8]

console.log(x);
console.log(y);
console.log(z);
console.log(rest);


// Destuctuung Object 

const obj = {
    a:12,
    b:13,
    c:23
}

const {a,b} = obj;
console.log(a,b);




async function sum(a,b,c) {
    return a+b+c;;
}

let array = [1,2,3];

console.log("sum ",sum(array[0],array[1], array[2]));
console.log("sum ",sum(...array));

// ... spred oprter
console.log(m);

// hosting 
var m = 23;
// it's can use any where in this block
