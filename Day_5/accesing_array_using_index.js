const fruits = ['banana', 'orange', 'mango', 'lemon']
console.log(fruits)
let firstFruit = fruits[0] // we are accessing the first item using its index

console.log('First fruit',firstFruit) // banana

secondFruit = fruits[1]
console.log('Second fruit',secondFruit) // orange

let lastFruit = fruits[3]
console.log('Last fruit',lastFruit) // lemon
// Last index can be calculated as follows

let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]

console.log('Last Fruit using the length keyword.',lastFruit)  // lemon


console.log("Second Example")
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]  // set of numbers
console.log(numbers)

console.log(numbers.length)  // => to know the size of the array, which is 6
console.log(numbers)         // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0])      //  -> 0
console.log(numbers[5])      //  -> 100

let lastIndex_1 = numbers.length - 1;
console.log(numbers[lastIndex_1]) // -> 100



console.log("Third Example")
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ] // List of web technologies
  
  console.log(webTechs)        // all the array items
  console.log(webTechs.length) // => to know the size of the array, which is 7
  console.log(webTechs[0])     //  -> HTML
  console.log(webTechs[6])     //  -> MongoDB
  
  let lastIndex_2 = webTechs.length - 1
  console.log(webTechs[lastIndex_2]) // -> MongoDB

console.log('Fourth Example')
  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ] // List of countries
  
  console.log(countries)      // -> all countries in array
  console.log(countries[0])   //  -> Albania
  console.log(countries[10])  //  -> Kenya
  
  let lastIndex_3 = countries.length - 1;
  console.log(countries[lastIndex_3]) //  -> Kenya


  console.log('Fourth Example')
  const shoppingCart = [
    'Milk',
    'Mango',
    'Tomato',
    'Potato',
    'Avocado',
    'Meat',
    'Eggs',
    'Sugar'
  ] // List of food products
  
  console.log(shoppingCart) // -> all shoppingCart in array
  console.log(shoppingCart[0]) //  -> Milk
  console.log(shoppingCart[7]) //  -> Sugar
  
  let lastIndex_4 = shoppingCart.length - 1;
  console.log(shoppingCart[lastIndex_4]) //  -> Sugar