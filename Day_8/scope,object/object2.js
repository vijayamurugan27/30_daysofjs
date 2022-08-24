console.log(" creating an Empty Object")

const Person = {}; console.log(Person, 'The object Person')
const Rectangle = { lenght : 10, breath : 20}; console.log(Rectangle, 'The object Rectangle') 
// const person = { 
//                 firstName: 'Asabeneh',
//                 lastName: 'Yetayeh',
//                 age: 250,
//                 country: 'Finland',
//                 city: 'Helsinki',
//                 skills: ['HTML', 'CSS','JavaScript','React','Node','MongoDB','Python', 'D3.js'],
//                 isMarried: true
//                 }
//   console.log(person)

//// Getting values from an object

////     We can access values of object using two methods:

////     using . followed by key name if the key-name is a one word
////     using square bracket and a quote

const person = { 
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML', 'CSS','JavaScript','React','Node','MongoDB','Python', 'D3.js'],
    isMarried: true,
    getFullName: function() {return `${this.firstName}${this.lastName}` },
    phone_number: '+3584545454545'
}

console.log('First name is',person.firstName)
console.log('First name is ',person['firstName'])
console.log('Second name is ',person['lastName'])
console.log(person.getFullName())
console.log(person.phone_number, person['phone_number'])

console.log(person)


// setting new key for an object
const p = person;
p.firstName = "Guru";
p.lastName = 'Nath';
p.age = 80;
console.log(p)

        // Object Methods

        // There are different methods to manipulate an object. Let us see some of the available methods.

        // Object.assign: To copy an object without modifying the original object

const copyPerson = Object.assign({}, person)
console.log('copy object person-1',copyPerson)

// const p1 = Object.assign({}, person)
// console.log('Copy object - 2',p1)

//// Getting object keys using Object.keys()
//// Object.keys: To get the keys or properties of an object as an array

const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
// const address = Object.keys(copyPerson.address)
// console.log(address) //['street', 'pobox', 'city']


// Getting object values using Object.values()
// Object.values:To get values of an object as an array

const values = Object.values(copyPerson)
console.log(values)

// Getting object keys and values using Object.entries()

// Object.entries:To get the keys and values in an array

const entries = Object.entries(copyPerson)
console.log(entries)

// Checking properties using hasOwnProperty()
// hasOwnProperty: To check if a specific key or property exist in an object


console.log(copyPerson.hasOwnProperty('firstName'))
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))













//// creating new Objects

// const person = {
//      firstname ,lastname,
//     // getfullname : function(){return'${this.firstname}${this.lastname}' }
// }


