const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)


console.log('Before list1',firstList)
console.log('Before list2',secondList)
console.log("After Concatenation.",thirdList)

const fruits = ['banana', 'orange', 'mango', 'lemon']                 // array of fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
const fruitsAndVegetables = fruits.concat(vegetables)                 // concatenate the two arrays

console.log('Fruits', fruits)
console.log('Vegetables', vegetables)
console.log('After concatenation of both vegetables and fruits',fruitsAndVegetables)