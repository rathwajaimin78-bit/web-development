// functions 

function check(prosses) {
    console.log(prosses + " is working fine")
    console.log("webpage is live")

}
// now this parmeter become optional parmeter
function error_type(error_code = 0) {
    if (error_code == 404) {
        return "page not found"
    }
    else if (error_code == 400) {
        return "Bad Request"
    }
    else if (error_code == 401) {
        return "Unauthorized"
    }
    else if (error_code == 403) {
        return "Forbidden"
    }
    else if (error_code == 0) {
        return "everthing is fine !"
    }
    else {
        return "not any erorr"
    }

}

// check("packages")
// check("assets")
// check("servers")


error = error_type(404)

console.log("server say : " + error)



// arrow function same as lambda in python 
// syntax
const arrow_function = (x)=>{
    console.log("this is arrow function ", x)
}

arrow_function(12)



