con = document.body.childNodes[1]

console.log(con)
console.log(con.firstchild)

console.log(con.firstChild)
console.log(con.firstElementChild)

// child node : every node including text node
// element child node : only elemnet node
// con.firstElementChild.style.backgroundColor = "red"
// con.lastElementChild.style.backgroundColor = "blue"



con.children[2].style.backgroundColor = "blue"



con.children[2].nextElementSibling.style.backgroundColor = "red"

con.children[2].previousElementSibling.style.backgroundColor = "yellow"



con.children[2].parentElement.style.backgroundColor = "gray"