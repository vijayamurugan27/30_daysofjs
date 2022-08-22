let string = "java script";
var len = string.length;
var text;
console.log(" Length of the string is ",len);
for ( let i = 0; i <= len; i++){
    // text += string[i] + "<br>";
    document.write("The ",i, );
    document.write(" letter is ",string[i],"<br>" );    
    document.write(" And the ascii number is ", string.charCodeAt(i), "<br>");
}


// let string = 'JavaScript'
let firstLetter = string[0]
console.log('First letter is ',firstLetter) // J
let secondLetter = string[1] // a
console.log('secondLetter is ',secondLetter)
let thirdLetter = string[2]
console.log('thirdLetter is ',thirdLetter)
let lastLetter = string[10]
console.log('lastLetter is ', lastLetter) // t
let lastIndex = string.length - 1
console.log(lastIndex) // 9
console.log("last index is ",string[lastIndex]) // t

//charAt()

let firstLetter1 = string.charAt(0);
console.log("First letter is ",firstLetter1)

let lastLetter1 = string.charAt(len-1)
console.log("LAst Letter is ", lastLetter1)

// charCodeAt(): Takes index and it returns char code(ASCII number) of the value at that index.

let firstLetter2 = string.charCodeAt(0);
console.log("ASCII number for ",firstLetter1, "is" ,firstLetter2)

let lastLetter2 = string.charCodeAt(len-1)
console.log("LAst Letter is ", lastLetter1, "is", lastLetter2 )

// concat(): it takes many substrings and creates concatenation.
// string.concat(substring, substring, substring)

let country = 'America'
console.log(country.concat(' is ', ' of', ' Opportunities.' ))

let food ="Ice Cream"
console.log(food.concat(' Is ', ' Having ', ' Lots of ' , " 90 ", " Flavours." ))

// endsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
// string.endsWith(substring)
let country1 = "America is a land of opportunities."
console.log(country1.endsWith("ties"))
console.log(country1.endsWith("ties."))
console.log(country1.endsWith("opportunities"))
console.log(country1.endsWith("opportunities."))

console.log(country1.endsWith("land"))
console.log(country1.endsWith("of"))

// includes(): It takes a substring argument and it check if substring argument exists in the string. includes() returns a boolean. It checks if a substring exist in a string and it returns true if it exists and false if it doesn't exist.

console.log(country1.includes('America'))
console.log(country1.includes('america'))

console.log(country1.includes('is'))
console.log(country1.includes('land'))
console.log(country1.includes('play'))
console.log(country1.includes('is .'))
console.log(country1.includes('.'))

// indexOf(): Takes takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
// string = "java script"

// string.indexOf(substring)
console.log(string)
console.log(string.indexOf('j'))
console.log(string.indexOf('J'))
console.log(string.indexOf('script'))
console.log(string.indexOf('Script'))
console.log(string.indexOf('t'))
console.log(string.indexOf('b'))

// lastIndexOf(): Takes takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
console.log(string)
console.log(string.lastIndexOf('j'))
console.log(string.lastIndexOf('s'))
console.log('lastIndexOf a is ',string.lastIndexOf('a'))
console.log('indexOf a is ',string.indexOf('a'))

// length: The string length method returns the number of characters in a string included empty space. Example:

console.log(string)
console.log(string.length)

let string3 = "'I love JavaScript. If you do not love JavaScript what else can you love.'"
console.log(string3.match('love'))

let pattern = /love/gi
console.log(string3.match(pattern))

let txt = 'In 2019, I run 30 Days of Python. Now, in 2020 I super exited to start this challenge'
let regEx = /\d/g // d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers, 
// if there is g after that it means global, search everywhere.
console.log(txt.match(regEx)) // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]



// repeat(): it takes a number argument and it returned the repeated version of the string.
// string.repeat(n)

console.log(string)
console.log('repeat',string.repeat(3))

// replace(): takes to parameter the old substring and new substring.
// string.replace(oldsubstring, newsubstring)

console.log(string)
console.log(string.replace("java", 'python'))

// search: it takes a substring as an argument and it returns the index of the first match.
// string.search(substring)

console.log(string3)
console.log(string3.search('love'))

// split(): The split method splits a string at a specified place.

console.log(string, string.split(), string.split(''), string.split(','))
console.log("1 ",string3, "2 ",string3.split(), "3 ",string3.split(''), "4 ",string3.split('.'))

console.log(string3, string3.startsWith('Love'), string3.startsWith('love'), string3.startsWith(" I "))

let string4 = 'Love is the best to in this world'
console.log(string4.startsWith('Love')) // true
console.log(string4.startsWith('love')) // false
console.log(string4.startsWith('world')) // false

let country4 = 'Finland'
console.log(country4.startsWith('Fin')) // true
console.log(country4.startsWith('fin')) // false
console.log(country4.startsWith('land')) //  false 

// substring(): It takes two arguments,the starting index and the stopping index but it doesn't include the stopping index.

console.log('substring',string,string.length, string.substring(4,6),string.substring(4,8), string.substring(4,11))


//substr(): It takes two arguments,the starting index and number of characters to slice.
console.log('substr', string, string.length, string.substr(5), string.substr(5,1), string.substr(5,3))

console.log(string, string.toLowerCase())
console.log(string, string.toUpperCase())

//trim(): Removes trailing space in the beginning or the end of a string.

console.log('Trim function ',string,'starting', string.trim())

console.log('Trim function',string3,'starting',  string3.trim())

let string5 = "                I  love  india.          " 
console.log('Trim function', string5, 'starting', string5.trim())

