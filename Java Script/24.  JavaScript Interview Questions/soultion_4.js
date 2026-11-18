// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
async function hasLowerCase(string) {
    return /[a-z]/.test(string);
}

async function hasUpperCase(string) {
    return /[A-Z]/.test(string);
}


async function hasDigit(string) {
    return /[0-1]/.test(string);
}


async function Password_Validator(password) {

    if (password.length >= 8 && hasLowerCase(password) && hasUpperCase(password) && hasDigit(password)) {
        console.log("Password is valid");

    }else{
        console.log("Password is invalid");
        
    }

}

let password = "123562aA";
Password_Validator(password);