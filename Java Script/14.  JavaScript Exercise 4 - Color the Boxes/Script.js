// to get random number in range use (low random*(high - low))
function getrandomcolur() {
    let red = Math.ceil(0 + (Math.random()) * 255)
    let green = Math.ceil(0 + (Math.random()) * 255)
    let blue = Math.ceil(0 + (Math.random()) * 255)

    return `rgb(${red}, ${green}, ${blue})`
}

let boxes = document.getElementsByClassName("box")

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getrandomcolur()
    e.style.color = getrandomcolur()
});