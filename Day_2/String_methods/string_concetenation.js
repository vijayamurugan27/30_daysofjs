// Declaring different variables of different data types
let space = ' '
let firstName = 'Vijaya'
let lastName = 'Murugan'
let country = 'India'
let city = 'Chennai'
let language = 'JavaScript'
let job = 'Trainer'
let age = 36
// Concatenating using addition operator
let fullName = firstName + space + lastName // concatenation, merging two string together.
console.log('Full name',fullName)

let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country // ES5
console.log('Personal information.',personInfoOne)
// Concatenation: Template Literals(Template Strings)
let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)