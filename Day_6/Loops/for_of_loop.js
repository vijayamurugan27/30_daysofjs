// for (const element of arr) {
//     // code goes here
//   }


console.log(" for of loops")
const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}
console.log(" Displayed the values in the Arrays.")
// 1 2 3 4 5

for (const num of numbers) {
  console.log(num * num)
}


console.log(" Displayed the square values in the Arrays.")
// 1 4 9 16 25

// adding all the numbers in the array
let sum = 0
for (const num of numbers) {
  sum = sum + num  
	// can be also shorten like this, sum += num
  // after this we will use the shorter synthax(+=, -=, *=, /= etc)
}
console.log(sum) // 15
console.log("displayed the sum of the n values")

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
console.log("The elements in the array are ", webTechs)
for (const tech of webTechs) {
  console.log(tech.toUpperCase())
}

// HTML CSS JAVASCRIPT REACT NODE MONGODB

for (const tech of webTechs) {
  console.log(tech[0]) // get only the first letter of each element,  H C J R N M
}
console.log(" for _of loops")



const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for(const country of countries){
  newArr.push(country.toUpperCase())
}
console.log(countries, 'Initial values are')
console.log(newArr)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]