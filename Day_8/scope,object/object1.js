// console.log("Global scope")
// a = "java Script"
// b= 10
// function func1(){
    
//     console.log('Inside the Function',a,b)
// }
// console.log('Outside the function',a,b)
// func1()


// console.log("Global scope and local scope")
// a = "java Script"
// b= 10
// function func1(){
//     a = "python"
//     b = 15
//     console.log('Inside the Function',a,b)
// }
// console.log('Outside the function',a,b)
// func1()

// function func(){var a = 5; console.log(a)}
// if (true){ var a = 10;console.log(a)}
// var sum = 0;
// for (var i = 0; i<10; i++)
// {  sum+=i; console.log(i), console.log('Total value is ',sum)}
// console.log(i, sum, 'Total value is')
// console.log(sum)

//scope.js
function letsLearnScope() {
    // you can use let or const, but gravity is constant I prefer to use const
    const gravity = 9.81
    console.log('inside func const',gravity)
  
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  if (true){
    const  gravity = 9.81
    console.log('inside the if stmt',gravity) // 9.81
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  for(let i = 0; i < 3; i++){
    console.log('inside the For loop',i) // 0, 1, 2
  }
  // console.log(i), Uncaught ReferenceError: i is not defined
  