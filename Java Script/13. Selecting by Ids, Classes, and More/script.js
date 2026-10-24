console.log("selecting elemnt")


// 1. class name selector

// let furit_box = document.getElementsByClassName("box")
// console.log(furit_box)

// furit_box[2].style.backgroundColor = "red"

// now this thing work same as array

// 2. ID selctor

// document.getElementById("b3").style.backgroundColor = "red"

// 3. query Selector

// document.querySelector(".box").style.backgroundColor = "green"
// select fist element only

document.querySelectorAll(".box").forEach(e=>{

    e.style.backgroundColor = "green"
})

// 4.  element name 

c = document.getElementsByTagName("div")
console.log(c)

x = c[3].matches("#b3")
console.log(x)
x = c[4].matches("#b3")
console.log(x)


x = c[4].closest("html")
console.log(x)

w = document.querySelector(".container").contains(c[2])
console.log(w)
r = document.querySelector(".container").contains(c[0])
console.log(r) // box contains it's self

w = document.querySelector(".container").contains(document.querySelector("body"))
console.log(w)