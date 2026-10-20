let array = [1, 2, 3]
console.log(array)

console.log(array[0])
console.log(array[1])
console.log(array[2])

array[0] = 990;
console.log(array[0])

// function
// 1 join(" ") ues for joining array elemnts
console.log(array.join(","))

// 2 toString() convert array to string
console.log(array.toString())

// 3 pop() ues for removeing last element form array
array.pop()
console.log(array)

// 4 push() add element at last 
array.push(100)
console.log(array)

// also we can push any thing like string , number ... 
array.push("jaimin")
console.log(array)

// 5 shift() remove fist element 
array.shift(100)
console.log(array)

// 6 unshift() add fist element 
array.unshift(100)
console.log(array)

// 7 unshift() add fist element 
x = [1, 2, 3]
y = [4, 5, 6]
z = [7, 8, 9]

console.log(x.concat(y, z))



// 8 unshift() add fist element 
n = [11, 3, 12, 44, 7, 3]
console.log(n.sort())