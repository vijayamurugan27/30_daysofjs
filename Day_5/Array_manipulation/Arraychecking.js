// Checking array

// Array.isArray:To check if the data type is an array

const numbers = [1, 2, 3, 4, 5]
console.log(numbers)
console.log(Array.isArray(numbers)) // true

const number = 100
console.log(number)
console.log(Array.isArray(number)) // false


// Converting array to string

//     toString:Converts array to string

        const numbers_1 = [1, 2, 3, 4, 5]
        console.log('Numbers in the array numbers_1',numbers_1)
        console.log(numbers_1.toString()) // 1,2,3,4,5

        const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
        console.log('Names in the array names',names)
        console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook


// Joining array elements

// join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.

console.log("For joining Array elements.")
const numbers_3 = [1, 2, 3, 4, 5]
console.log(numbers_3.join()) // 1,2,3,4,5
console.log(numbers_3.join('hai - '))

const names_3 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names_3.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names_3.join('')) //AsabenehMathiasEliasBrook
console.log(names_3.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names_3.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names_3.join(' # ')) //Asabeneh # Mathias # Elias # Brook

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.log('Initial values in the array webTechs',webTechs)
console.log(webTechs.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"