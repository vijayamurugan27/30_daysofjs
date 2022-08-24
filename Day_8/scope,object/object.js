//scope.js
a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
b = 10 // this is a global scope variable and found in the window object
function letsLearnScope() {
  console.log('Inside the function.',a, b)
  if (true) {
    let a = "Python"
    let b = 15
    console.log('inside the if stmt',a, b)
  }
  console.log('Outside the if stmt',a,b)
}
console.log('Outside the function.',a, b) // accessible
letsLearnScope()