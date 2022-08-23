const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers)
console.log('index of 2',numbers.lastIndexOf(2)) // 7
console.log('index of 0',numbers.lastIndexOf(0)) // -1
console.log('index of 1',numbers.lastIndexOf(1)) //  6
console.log('index of 4',numbers.lastIndexOf(4)) //  3
console.log('index of 6',numbers.lastIndexOf(6)) // -1


const numbers1 = [1, 2, 3, 4, 5]
console.log(numbers1)
console.log('Does it has 5',numbers1.includes(5)) // true
console.log('Does it has 0',numbers1.includes(0)) // false
console.log('Does it has 1',numbers1.includes(1)) // true
console.log('Does it has 6',numbers1.includes(6)) // false

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies
console.log(webTechs)
console.log('Does it has Node',webTechs.includes('Node'))  // true
console.log('Does it has C',webTechs.includes('C'))     // false

