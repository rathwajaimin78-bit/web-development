// java script work in some deffent way : in some case javascript run code line in unic oder (Asynchranous actions)

console.log("Harry is a hacker")
console.log("Rohan is a hecker")

setTimeout(() => {
    console.log("I am inside settimeout")
}, 2000);

console.log("The End")


// Call back functions

const callback = (argument) => {
    console.log((argument))
}


function loadscript(src, callback) {
    let script = document.createElement('script')
    script.src = src
    script.onload = () => { callback("script is loaded") }
    document.head.appendChild(script)
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js", callback)
