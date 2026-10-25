for (let i = 1; i <= 5; i++) {
    let random = Math.random();
    let box = document.getElementById(`box${i}`);

    if (random <= 0.33) {
        box.style.backgroundColor = "red";
        box.style.color = "blue";
    }
    else if (random <= 0.66) {
        box.style.backgroundColor = "blue";
        box.style.color = "red";
    }
    else {
        box.style.backgroundColor = "green";
        box.style.color = "red";
    }
}