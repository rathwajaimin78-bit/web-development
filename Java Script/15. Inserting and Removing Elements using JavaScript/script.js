a = document.querySelector(".box")
console.log(a)

a = document.querySelector(".box").innerHTML
console.log(a)

a = document.querySelector(".box").outerHTML
console.log(a)

a = document.querySelector(".conteners").innerText
console.log(a)

a = document.querySelector(".conteners").tagName
console.log(a)

a = document.querySelector(".conteners").nodeName
console.log(a)

a = document.querySelector(".conteners").textContent
console.log(a)

a = document.querySelector(".conteners").hidden
console.log(a)

document.querySelector(".conteners").hidden = true;

a = document.querySelector(".conteners").hidden
console.log(a)

document.querySelector(".conteners").hidden = false;

// changing the html content 
document.querySelector(".box").innerHTML = "this line added by javaScript";



a = document.querySelector(".conteners").hasAttribute("style")
console.log(a)


a = document.querySelector(".conteners").getAttribute("style")
console.log(a)


a = document.querySelector(".conteners").setAttribute("style", "disply : inline ;")
console.log(a)



a = document.querySelector(".conteners").removeAttribute("style")
console.log(a)

// you can edting any web page in your berowes by 
// document.designMode = "on"


// you can make element and inserting in html
let div = document.createElement("div");
div.innerHTML = "new element added by javascript"
div.setAttribute("class", "created");
document.querySelector(".conteners").append(div)


let b = document.querySelector(".conteners");
b.insertAdjacentHTML("beforeend", "<b>content<b/>")


// and so on more Selectior Propertys they will we lern whill we make projects 

