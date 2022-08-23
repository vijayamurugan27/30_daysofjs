// Adding item to an array using push

// Push: adding item in the end. To add item to the end of an existing array we use the push method.

// syntax
const arr  = ['item1', 'item2','item3']
arr.push('new item')
console.log(arr)
// ['item1', 'item2','item3','new item']



const numbers = [1, 2, 3, 4, 5]
numbers.push(6)
console.log(numbers) // -> [1,2,3,4,5,6]

numbers.pop() // -> remove one item from the end
console.log(numbers) // -> [1,2,3,4,5]



let fruits = ['banana', 'orange', 'mango', 'lemon']
fruits.push('apple')
console.log(fruits)    // ['banana', 'orange', 'mango', 'lemon', 'apple']

fruits.push('lime')
console.log(fruits)   // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']


console.log("array.shift() - for removing an element from the beginning.")
const numbers_1 = [1, 2, 3, 4, 5]
console.log(numbers_1,"Before removing from the beginning element.")
numbers_1.shift() // -> remove one item from the beginning
console.log(numbers_1) // -> [2,3,4,5]

// Add an element from the beginning

// unshift: Adding array element in the beginning of the array.
console.log('unshift() - To add an element from the starting.')

const numbers_2 = [1, 2, 3, 4, 5]
console.log(numbers_2, "Initial array values")
numbers_2.unshift(0) // -> add one item from the beginning
console.log(numbers_2, "after using the array.unshift(0) to add the 0 to the array") // -> [0,1,2,3,4,5]

console.log("Reversing array order.")

const numbers_3 = [1, 2, 3, 4, 5]
console.log(numbers_3,'Initial values')
numbers_3.reverse() // -> reverse array order
console.log(numbers_3, "Reversed values.") // [5, 4, 3, 2, 1]

numbers_3.reverse()
console.log(numbers_3, "again reversed values") // [1, 2, 3, 4, 5]

// Sorting elements in array

// sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  console.log(webTechs, 'initial array values')
  webTechs.sort()
  console.log(webTechs, "sorted values.") // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]
  
  webTechs.reverse() // after sorting we can reverse it
  console.log(webTechs,'Sorted and reversed values.') // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]


//   Array of arrays

console.log("Array of Arrays.")
const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]
console.log("First Arary value", firstNums)
console.log("Second Array Value", secondNums)
const thirdNums = [firstNums, secondNums]
console.log('First array', firstNums)
console.log('Second Array', secondNums)
console.log('Combined array value', thirdNums, 'The length of the combined array is ', thirdNums.length)

// const 
const arrayOfArray =  [[1, 2, 3], [1, 4, 9]]
console.log(arrayOfArray[0]) // [1, 2, 3]
console.log(arrayOfArray[1])

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack, "Full stack")   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length)  // 2
console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]


var sub1 = ['English', 'Tamil', 'Maths', 'Science', 'Geology']
var sub2 = ['Accounts', 'Advertisement', 'Sociology', 'Management']
var sub3 = [sub1, sub2]
console.log(sub3, length.sub3)