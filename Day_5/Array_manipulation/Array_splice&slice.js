const numbers = [1,2,3,4,5]

console.log("Array Slice", "Initial value in the array is ", numbers)
console.log(numbers.slice()) // -> it copies all  item
console.log(numbers.slice(0)) // -> it copies all  item
console.log(numbers.slice(0, numbers.length)) // it copies all  item
console.log(numbers.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position


console.log("Splice an Array.")
const numbers_1 = [1, 2, 3, 4, 5]
console.log('Initial values in the array',numbers_1)

numbers_1.splice(0,3, 78,89,90)
console.log(numbers_1)      

numbers_1.splice(1,2)
console.log(numbers)            // remove the first item