// LEARNING JS BASICS

console.log(`
--setting variables`)
// const is a constant reference to a value. Constant value for primitave types. But not objects.
const age = 10 //this 10 *cannot* change
const feelings = {mood:'happy'} //the key value pairs *can* change
// let is flexible but can be dangerous as lets open up your code to potential bugs
let toy = {color:'red', shape:'Rectangle'}
// var is out dated so use let instead
var height = "85cm"

// types
console.log(`
--types`)
// primatives or objects
// primatives are: string, number, boolean, null, or undefined

let a = 5
let b = 2

if (a == 2 || b == 2)
{
  ("Yes one of those is 2")
}

// use OR to set a default
const car = {}
const color = car.color || 'green'


// arrays
console.log(`
--arrays`)
const fruits = ['banana', 'pear', 'apple']
const morefruits = [...fruits]
fruits.push('mango') // add to end
fruits.unshift('orange') // add to start
fruits.unshift('stawberry', 'peach') // can add multiple items
console.log(fruits)
const allfruits = [...fruits]
console.log(morefruits)
console.log(allfruits)

fruits.pop()
fruits.shift()
console.log(fruits)
fruits.splice(3,2) // splice edits the existing array. select what you want to remove
console.log(fruits)

const items = ['a', 'b', 'c', 'd', 'e', 'f']
const i = 3
const filteredItems = items.slice(0, i-1).concat(items.slice(i, items.length))
console.log(filteredItems)

const itemsSliced = [
  ...items.slice(1,4),
  ...items.slice(5,6)
]
console.log(itemsSliced)

// use spread to add more elements to an array copy
const ladies = ['wendy', 'ronda', 'pauline']
ladies
const moreLadies = [...ladies, 'dorka', 'sally']
moreLadies

// check if an item is in an array
ladies.includes("ronda")
ladies.includes("sally")
moreLadies.includes("sally")

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

matrix[0][0]
matrix[2][1]

const autoArray = Array(4).fill(0)
autoArray

// array descructing
const list = [1, 2, 3, 4, 5]
const [first, second, ...others] = list
first
second
others

// conditionals
console.log(`--conditionals
`)

if (ladies.includes("betty")) {
  console.log("Betty is a lady")
} else if (moreLadies.includes("ronda")) {
  console.log("Ronda is a lady")
} else {
  console.log("The list of official ladies does not include Ronda or Betty")
}


let myAge = 35

switch(myAge) {
    case 34:
      console.log("You are 34")
    break
    case 35:
      console.log("You are 35")
    break
    case 36:
      console.log("You are 36")
    break
    default:
      console.log("You are old")
    break
}

// ternary operator
// isTrue ? /* do this */ : /* do that */
const isTrue = true
isTrue ? console.log("YES!") : console.log("NOOO!")

const running = false
running === true ? console.log("We are running") : console.log("No running here")

// for loops
console.log(`
--Lots of loops`)
// for (<initialization>; <condition>; <increment>) 

const forList = ['a', 'b', 'c']
for (let i = 0; i < forList.length; i++) {
  console.log(forList[i])
}

const boys = ['paul', 'mark', 'peter', 'kurt']
boys

for (let i = 0; i < boys.length; i++) {
  console.log(boys[i])
  if (boys[i] === 'mark') break
}

for (let i = 0; i < boys.length; i++) {
  if (boys[i] === 'mark') continue
    console.log(boys[i])
}

// do..while loops
const doList = ['a', 'b', 'c']
let j = 0

do {
  console.log(doList[j])
  j++
} while (j < doList.length);

j = 0
do {
  console.log(boys[j])
  if (boys[j] === 'mark') break
  j++
} while (j < boys.length);

j = 0
while (j < boys.length) {
  console.log(boys[j])
  j++
}

j = 0
while (j < boys.length) {
  console.log(boys[j])
  if (boys[j] === 'mark') break
  j++
}

// How to use continue to get the same result in different loops

const names = ['mary', 'barry', 'peter', 'lucy']

for (let i = 0; i < names.length; i++) {
  if (names[i] === 'barry') continue
  console.log(names[i])
}

let n = 0
while (n < names.length) {
  if (names[n] === 'barry') {
    n++;
    continue;
  }
  console.log(names[n]);
  n++;
}

n = 0
do {
  if (names[n] === 'barry') {
    n++;
    continue;
  }
  console.log(names[n]);
  n++;
} while (n < names.length);


// for..of loops
for (const name of names) {
  if (name === 'barry') continue
  console.log(name)
}

// if you need the index too
for (const [index, name] of names.entries()) {
  if (name === 'barry') continue
  console.log(index)
  console.log(name)
}

// for..in loops
// getting the properties of an object
const dog = { name: 'Roger', color: 'gray' }
for (let property in dog) {
  console.log(property)
  console.log(dog[property])
}

// getting the elements of an array
const dogs = ['Roger', 'Vanille', 'Rio']
for (let dog in dogs) {
  console.log(dogs[dog])
}

// functions and returning things into variables
console.log(`
--functions and variables`)
function getNameAge() {
  return ["Tam", 35]
}

const [nameof, ageof] = getNameAge();
console.log(nameof + ` is ` + ageof + ` years old.`);
console.log(`${nameof} is still ${ageof} years old.`);

// arrow functions
console.log(`
--arrow functions`)
const arrowBio = () => ['Mary', 28]
console.log(arrowBio())

const additionBot = (num) => num + 1
console.log(additionBot(3))

const birthdayCard = (name, age) => `${name} is ${age} years old.`
console.log(birthdayCard('Peter', 25));

// Immediately-invoked function expressions or IIFEs
// standard function style:
;(function() {
  /* */
})()

// or arrow function style:
;(() => {
  /* */
})()

// array manipulation - map()
console.log(`
--map()`)
const mapA = [1,2,3,4,5]
console.log(mapA)
// copy an array
const mapB = mapA.map(item => item)
console.log(mapB)
// manipulate each element of an array
const mapC = mapA.map((item) => {
  itemMulti = item * 2
  return itemMulti
})
console.log(mapC)

// filter() 
console.log(`
--filter()`)
// return true to include that item in the new array
const fA = [1,2,3,4,5]
fA
const even = fA.filter((item) => {
  if (item % 2 === 0) return true
  return false
})
console.log(even)

// find an item in an array
const fFind = fA.filter(item => item === 3).shift()
console.log(fFind)

// remove an item from an array
const fRemove = fA.filter(item => item !== 3)
console.log(fRemove)

// remove several items from an array
const valuesToRemove = [2, 5]
const filteredValues = fA.filter(item => !valuesToRemove.includes(item))
console.log(filteredValues)

// sort()
console.log(`
--sort()`)

// Use sort() to sort an array alphabetically
const sA = ['b', 'e', 'c', 'a', 'd', 'egg', 'big']
console.log(sA.sort())
console.log(sA.reverse())

// sorting numbers
const sNums = [2, 4, 22, 3, 10, 1, 5]
console.log(sNums.sort((a, b) => (a > b ? 1 : -1)))

// find() and findIndex()
console.log(`
--find()`)

const fNums = [2, 4, 22, 3, 10, 1, 5]
const found = fNums.find((item) => item === 10)
const foundI = fNums.findIndex((item) => item === 10)
console.log(found)
console.log(foundI)