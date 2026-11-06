// Promise


let Promise_1 = new Promise((resolve, reject) => {
    let a = Math.random()

    if (a <= 0.5) {
        reject("request 1 was rejected")
    }
    else {
        setTimeout(() => {

            console.log("script 1 is loaded")
            resolve("request 1 was resoved")
        }, 2000);
    }
})


let Promise_2 = new Promise((resolve, reject) => {
    let a = Math.random()

    if (a <= 0.5) {
        reject("request 2 was rejected")
    }
    else {
        setTimeout(() => {

            console.log("script 2 is loaded")
            resolve("request 2 was resoved")
        }, 1000);
    }
})

// Promise_1.then((a) => {
//     console.log(a);

// }).catch((err) => {
//     console.log(err);

// }).finally((err)=>{
//     console.log('close request');

// })



// catch function ues for catching erorrs to avoid erorrs in websites

// finally ues for last execute


//  Promises API

// 1. Promise.all()

// returns list of resolved requests   

// let p_3 = Promise.all([Promise_1, Promise_2])

// p_3.then((a) => {
//     console.log(a);

// }).catch((err) => {
//     console.log(err);

// })

// same others 
// 2. Promise.allsettled()

// let p_4 = Promise.allSettled([Promise_1, Promise_2])

// p_4.then((a) => {
//     console.log(a);

// }).catch((err) => {
//     console.log(err);

// })

// 3. Promise.race()

let p_5 = Promise.race([Promise_1, Promise_2])

p_5.then((a) => {
    console.log(a);

}).catch((err) => {
    console.log(err);

})

// 4. Promise.any()
// 5. Promise.resolve(value)
// 6. Promise.reject(error)

