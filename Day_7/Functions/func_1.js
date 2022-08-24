        function func_1(){
            console.log("A simple function.")
        }
        func_1()

                        function func_2(){
                            console.log("A Simple function without a parameter and a return value.")
                            let val1 = 10
                            let val2 = 20
                            let sum = val1+val2
                            console.log(" sum of two number are :" ,sum)
                        }
                        func_2()

        function func_3(){
            console.log(" A simple function with a return value.")
            let val3 = 3
            square = val3*val3
            return square
        }
        a = func_3()
        console.log(a)

                        function func_4(value_1){
                            console.log("A function with a parameter")
                            cube = value_1*value_1*value_1
                            return cube
                        }
                        cube_1 = func_4(5)
                        console.log(cube_1)

        function func_5(value1, value2){
            console.log("A function with two parameters")
            Area_of_the_rectangle = value1*value2 
            return Area_of_the_rectangle
        }
        cube_1 = func_5(5, 6)
        console.log(cube_1)

                        function func_6(){
                            console.log(" A Function with many parameters.")

                        }
                        func_6()


        function Sum_of_numbers(arr){
            // console.log("A function to find the sum of n numbers.")
            let sum = 0;
            for(let i = 0; i < arr.length; i++){
                sum +=arr[i];
            }    
        return sum
        }
        const arr1 = [1,2,3,4,5,6,7,8,9];

        const Sum = Sum_of_numbers(arr1)
        console.log(Sum)


                        function func_7(){
                            console.log("A Function for finding the sum of n numbers.")
                            let sum = 0;
                            for (let j= 0; j< arguments.length; j++){
                                sum +=arguments[j]
                            }
                            return sum
                        }

                        console.log(func_7(1,2,3,4,5))
                        console.log(func_7(10,20,30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150))
                        console.log(func_7(15, 20, 30, 25, 10, 33, 40)) 

        const func8 = function(){
            console.log("Anonymous function.")
        }
        console.log(func8())
        func8()

                        const func9 =function(n){
                            console.log("Expression function , a function without a name but a variable assigned to it.")
                            let square = n*n
                            return square
                        }

                        func9(10)
                        console.log(func9(10))

        let func11 = (function(n) { return n * n})(15)
            console.log(func11)

let area = (function(a) {return a*a })(15)
console.log(area)

let volume = (function(a,b,c){return a*b*c})(10,20,30)
console.log(volume)


                        function func12(){
                            console.log("Normal function")
                        }
                        func12()

                        const func13= ()=>{
                            console.log("Arrow Function.")
                        }
                        func13()

            function func14(n){ return n*n }
            console.log(func14(9))

            let func15 =(n)=>{ return n*n}
            console.log(func15(11))

            const func16 = arr =>{
                console.log("Arrow function using Arrays to convert the elements to UpperCase.")
                const arr2 = [] 
                for (const element of arr){arr2.push(element.toUpperCase())}
                return arr2
            } 

            const countries = ["India, China, Bngladesh, Bhutan, Sri Lanka"]
            console.log(func16(countries))

                    function func17(name = "Raju"){
                        console.log("welcome", name )
                    }
                    func17()
                    func17("kavin")

                    let func18 = (name = "Raju")=>{ console.log("welcome",name)}
                    func18()
                    func18("Bharathi")