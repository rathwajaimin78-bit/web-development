let a = prompt("enter a a number :")
let b = prompt("enter a b number :")

let sum = parseInt(a) + parseInt(b)

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("this input not allow , enter number only")
    // SyntaxError in javascript type of erorr
    // this is list of erorr in javascript : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors
}

function main(){

    
    try {
        console.log('sum :', sum * x);
        return true
        
    } catch (error) {
        console.log('code has broken , contect devlper plase');
        return false
    
}
// finally help to run set of code confirmly (mainly use in function )
// out of function it's uselss

finally {
    console.log("files are being closed and db connection is being closed")
    
}

// this code give NaN when a and b is string so it give erorr

// to fix this erorr we use erorr throw and cath 

}


let t = main()
