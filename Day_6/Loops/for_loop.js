// for Loop

    // For loop structure
    // for(initialization, condition, increment/decrement){
    // code goes here
    // }
        // Example-1
        console.log("First Example")
        for(let i = 0; i <= 5; i++){
        console.log(i)
        }

        // 0 1 2 3 4 5

        // Example-2
        
        console.log("Second Example")
        for(let j = 5; j >= 0; j--){
        console.log(j)
        }

        // 5 4 3 2 1 0

        // Example-3
        
        console.log("Third Example")
        for(let k = 0; k <= 5; k++){
        console.log(`${k} * ${k} = ${k * k}`)
        }

        // Example-4
        
        console.log("Fourth Example")
        for(let l = 0; l <= 5; l++){
        console.log(`${l} * ${l} = ${l * l}`)
        }

        // Example - 5
        
        console.log("Fifth Example")
        const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
        const newArr = []
        for(let i = 0; i < countries.length; i++){
        newArr.push(countries[i].toUpperCase())
        }
        console.log(newArr)
        // ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

        // Adding all elements in the array

        // Example - 6
        
        console.log("sixth Example")
        console.log("To find the sum of n numbers.")
        const numbers = [1, 2, 3, 4, 5]
        let sum = 0
        for(let i = 0; i < numbers.length; i++){
        sum  = sum + numbers[i]  // can be shorten, sum += numbers[i]

        }

        console.log(sum)  // 15

        // Example - 7
        // Creating a new array based on the existing array
        
        
        console.log("Seventh Example")
        console.log("To find the Dquare of the numbers.")
        const numbers1 = [1, 2, 3, 4, 5]
        const newArr_1 = []
        // let sum1 = 0
        for(let i = 0; i < numbers1.length; i++){
        newArr_1.push( numbers1[i] ** 2)

        }

        console.log(newArr_1)  // [1, 4, 9, 16, 25]

        // Example - 8
        console.log("Eight Example")
        const countries_1 = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
        const newArr_2 = []
        for(let i = 0; i < countries_1.length; i++){
        newArr_2.push(countries_1[i].toUpperCase())
        }

        console.log(newArr_2)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

        