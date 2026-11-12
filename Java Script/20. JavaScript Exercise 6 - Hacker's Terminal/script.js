terminal = document.getElementById("Terminal")


function blinking_dots(element) {

    let dots = 0;

    let interval = setInterval(() => {

        dots = (dots + 1) % 4;

        element.innerText = ".".repeat(dots);

    }, 500);

    return interval;
}



async function print_commands(command) {

    let random = Math.ceil(1 + Math.random() * (7 - 1))
    console.log(random);

    return new Promise((resolve) => {

        let line = document.createElement("div");

        line.innerHTML = command;

        terminal.append(line);

        let dots = document.createElement("span");

        line.append(dots);

        let interval = blinking_dots(dots);
        setTimeout(() => {


            clearInterval(interval);

            dots.innerHTML = "..."




            resolve();
        }, random * 1000);
    })

}






async function main() {

    let command1 = "Iitializing Hacking "
    let command2 = "Reading your Files "
    let command3 = "Password files Detected "
    let command4 = "Sending all passwords and personal files to server "
    let command5 = "Cleaning up "


    await print_commands(command1)
    await print_commands(command2)
    await print_commands(command3)
    await print_commands(command4)
    await print_commands(command5)




    return 1
}

main()
