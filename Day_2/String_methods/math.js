const PI = Math.PI
console.log('value of pi is ',PI) // 3.141592653589793
console.log('using the func round() ',Math.round(PI)) // 3; to round values to the nearest number
console.log('using the round for the num 9.81',Math.round(9.81)) // 10
console.log('using the floor func for the value pi',Math.floor(PI)) // 3; rounding down
console.log('using the ceil func for the value pi',Math.ceil(PI)) // 4; rounding up
console.log('using the min func for the value (-5, 3, 20, 4, 5, 10)', Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value
console.log('using the max func for the value (-5, 3, 20, 4, 5, 10)', Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value
console.log('using the func random()')
const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)
// Let create random number between 0 to 10
const num = Math.floor(Math.random() * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log('getting the abs() for -10, abs(-10)',Math.abs(-10)) //10
//Square root
console.log('getting the sqrt() for the num 100, sqrt(100)',Math.sqrt(100)) // 10
console.log('gettign the sqrt for the 2 using the MAth.sqrt(2)',Math.sqrt(2)) //1.4142135623730951
// Power
console.log('Finding the power value for the 3^2 using Math.pow(3,2)',Math.pow(3, 2)) // 9
console.log('exponent value',Math.E) // 2.718

// Logarithm
//Returns the natural logarithm of base E of x, Math.log(x)
console.log('log(2) value',Math.log(2)) // 0.6931471805599453
console.log('log(10) value',Math.log(10)) // 2.302585092994046

// Trigonometry
console.log('value for the sin(0)',Math.sin(0))
console.log('value for the sin(60)',Math.sin(60))
console.log('value for the cos(0)',Math.cos(0))
console.log('value for the cos(60)',Math.cos(60))
