// async : process runing in bakground and javascript ignore it's output 
// await : proscess run and javascript wait of promise resovle (await work only when it's in a function )

// async function getdata() {

//     return new Promise((resovle, reject) => {
//         setTimeout(() => {
//             resovle(455)
//         }, 3500);
//     })
// }

// fetch api : is request for server 
// more info : https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch

async function getdata() {
    let x = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    let data = await x.json();
    //   console.log(x);

    //   .then(response => response.json())
    //   .then(json => console.log(json))

    return data
}



// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully




async function main() {

    console.log('loading modules...');


    console.log('load data');
    let data = await getdata() // wait to resovle me !
    console.log(data);


    console.log('process data');

}


main()


// Get request : request to server to get data 
// POST request : request to post(submit) data on there server