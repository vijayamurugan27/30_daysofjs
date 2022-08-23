// truly values and falsy values

// Boolean Values:

let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false

// Truthy values
// All numbers are true( positive or negative except zero)
// All strings are true except an empty string.
// The Boolean value

// Falsy values
// 0
// On
// null
// undefined
// NaN
// The boolean false.
// Empty String



// undefined
    let firstname
    console.log(firstname)

// Null
let empty = null
console.log(empty)

// Assignment Operators

let name = 'raju'
let country  = "Georgia"

// =, +=, -=, *=, /=, %=, **=

// Arithmetic operators

let num1 = 10
let num2 = 20

let sum  = num1+num2
let sub = num2- num1
let mul = num1*num2
let div = num1/num2
let rem = num2%num1
let pow = num2**num1

console.log('The two numbers are :', num1,'and ', num2)
console.log('sum', sum, 'sub', sub, 'mul', mul, 'div', div ,'rem', rem, 'power', pow)


let PI = 3.14; radius = 28
//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC


// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)

// Comparision Operators

// ==      equal in value only
// ===     equal in value and data typeof.
// !=      Not Equal
// >       Greater
// <       Lesser
// >=      Greater than or equal to
// <=      Less than or equal to 


console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

// Logical Operators
// && ampersand operator example
console.log("Logical operators.")
const check1 = 4 > 3 && 10 > 5         // true && true -> true
console.log(4 > 3 && 10 > 5)
const check2 = 4 > 3 && 10 < 5         // true && false -> false
console.log(4 > 3 && 10 < 5 )
const check3 = 4 < 3 && 10 < 5         // false && false -> false
console.log(4 < 3 && 10 < 5)

// || pipe or operator, example

const check4 = 4 > 3 || 10 > 5         // true  || true -> true
console.log(4 > 3 || 10 > 5)
const check5 = 4 > 3 || 10 < 5         // true  || false -> true
console.log(4 > 3 || 10 < 5)
const check6 = 4 < 3 || 10 < 5         // false || false -> false
console.log(4 < 3 || 10 < 5)


//! Negation examples
console.log('Negation Operator.')
let check7 = 4 > 3                     // true
console.log(4 > 3)
let check8 = !(4 > 3)                  //  false
console.log(!(4 > 3))
let isLightOn_1 = true
console.log(isLightOn = true)
let isLightOff = !isLightOn           // false
console.log(isLightOff  !=isLightOn)
let isMarried_1 = !false                // true
console.log(isMarried_1  !=false)

// Increment Operator
console.log("Increment Operator")
let count =0;
console.log(count++);
console.log(count)

console.log(' ')
let count1 =0;
console.log(++count1);
console.log(count1)



console.log("Decrement Operator")
let count2 =0;
console.log(count2--);
console.log(count2)
console.log('   ')
let count3 =0;
console.log(--count3);
console.log(count3)

console.log("Ternary Operator")

let isRaining_1 = true
isRaining_1
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

isRaining_1 = false
isRaining_1
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
number = -5
  
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)


console.log('windows method :')
// alert("hello welocme to my world.")

// console.log("prompt('') ")
// prompt('required text', 'optional text')

// let number_3 = prompt('Enter number', 'number goes here')
// console.log(number_3)

console.log("Window confirm() method")

const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box

console.log('Date object')

console.log('getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds(),getMilliseconds(), getTime(), getDay()')

// creating a new time object
const now = new Date()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
console.log('getFullYear()',now.getFullYear())
console.log('getMonth()',now.getMonth())
console.log('getDate()',now.getDate())
console.log('getDay()',now.getDay())
console.log('getHours()',now.getHours())
console.log('getMinutes()', now.getMinutes())
console.log('getSeconds()',now.getSeconds())
console.log('getMilliseconds()', now.getMilliseconds())
console.log('getTime()',now.getTime())
console.log('getDay()',now.getDay())

