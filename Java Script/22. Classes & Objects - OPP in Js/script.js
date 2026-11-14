// object : we see element as lsit of propertys 

// let animal ={
//     eat : true
// }

// let rabbit ={
//     jump : true
// }

// rabbit.__proto__ = animal

// console.log(rabbit);




// class in javascript 
// main propertys : definding method , inhertns 

// use : to avoid unnecessary long code with help of inhertns
class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is created ... ")
    }

    eats() {
        console.log("this animal have eating capability");
    }

    jumps() {
        console.log("this animal have jumping capability")
    }

}
// extends keyword give all parent property to child class 
class lion extends Animal{
    constructor(name){
        super(name)
        console.log('lion is added');
        
    }
}

let rabbit = new Animal("banny");
console.log(rabbit);


let l = new lion("king");
console.log(l);


// instanceof use to check one class is child of 2nd class 
console.log(l instanceof Animal);
