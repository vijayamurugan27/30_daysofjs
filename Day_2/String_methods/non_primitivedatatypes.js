let nums = [1, 2, 3]
console.log('initial value',nums)
nums[0] = 10
console.log('changed value,1 to 10',nums) // [10, 2, 3]

let nums1 = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(nums == numbers) // false , because both are different objects.

let userOne = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}
let userTwo = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}
console.log(userOne == userTwo) // false , because both are different objects.

let numbers1 = nums
console.log(nums == numbers)  // true, both are same objects, and share the same memory location.

let userOne1 = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}
let userTwo1 = userOne
console.log(userOne == userTwo)  // true, both the objects are same and share the same memory location.