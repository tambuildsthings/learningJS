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
const bus = {}
const buscolor = bus.buscolor || 'green'


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

// accessing items of an array
const itemsArray = [['first', 111], ['second', 222], ['third', 333]]
for (item of itemsArray) {
  console.log(item)  // [ 'first', 111 ]
  console.log(item[0]) // 'first'
  console.log(item[1]) // 111
}

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

// sorting numbers in an array
const sNums = [2, 4, 22, 3, 10, 1, 5]
console.log(sNums.sort((a, b) => (a > b ? 1 : -1)))

// find() and findIndex()
const fNums = [2, 4, 22, 3, 10, 1, 5]
const found = fNums.find((item) => item > 10)
const foundI = fNums.findIndex((item) => item === 4)
found
foundI

// forEach()
// similar to map() bit you don't get an array back with forEach()
console.log(`
--forEach()`)
const stuff = ['cake', 'wooden box', 'key', 'golf club']
stuff.forEach((thing) => {
  if (thing != 'key') {
    console.log(`Found a ${thing}`)
  }
})

const stuff2 = [1, 2, 3, 'a', 'b', 'c']
stuff2.forEach((element, index) => {
  console.log(element, index)
})


// Objects
console.log(`
--Objects`)

// make an Ojbect:
// like this: const car = {}
// same as: const car = new Object()
// same as: const car = Object.create({})

const truck = {
  color: 'blue',
  size: '5 meters',
  brand: 'Toyota',
  model: 'Hilux'
}
console.log(truck)
console.log(truck.size)

// updating a value in an object
truck.color = 'red'
console.log(truck)

// adding a value to an object
truck.registration = 'ABC123FJ'
console.log(truck)

// deleting a value from an object
delete truck.registration
console.log(truck)

console.log(`
--Object methods (which are functions)`)
// in an existing object
truck.start = function(){
  console.log("Truck engine started")
}
truck.start()

// in a new object
const car = {
  start: function() {
    console.log("Car engine started")
  },
  stop: function() {
    console.log("Car engine stopped")
  }
}
car.start()
car.stop()

truck.goTo = function(destination){
  console.log(`Driving to ${destination}.`)
}
truck.goTo('Paris')

// Passing objects into functions
const printNameAndAge = ({ name, age }) => {
  console.log(name, age)
}

const person = {
  name: 'Tam',
  age: 35
}

printNameAndAge(person)

// Using this inside object methods
// Only works with standard functions

const motorbike = {
  brand: "Yamaha",
  model: "R6",
  start: function () {
    console.log(`Started ${this.brand} ${this.model}`)
  },
}

motorbike.start()

// Destructing objects
console.log(`
--Manipulating objects`)
console.log(truck)

// get values from an object and assign them to variables
const {brand, color} = truck
console.log(brand)
console.log(color)
console.log(`My favourite trucks are ${color} ${brand}s.`)

// get a value from an object and assign it to a new named variable
const {model: favModel} = truck
console.log(favModel)
console.log(`If I had to buy a truck, I'd buy a ${color} ${favModel}.`)

// Cloning objects - shallow cloning with spread operator
const aVar = { objA: 'this is some text in objA' }
const bVar = { ...aVar }
console.log(bVar)

// Cloning objects - deep cloning with structuredClone()
const dogA = { dog: { name: 'Peter', breed: 'Lab' } }
const dogB = structuredClone(dogA)

console.log(dogA)
console.log(dogB)

dogA.dog.name = 'Liam'

console.log(dogA)
console.log(dogB)

// Sort the objects in an array
const students = [
  { name: 'Bill', age: '29' },
  { name: 'Wendy', age: '24' },
  { name: 'Graham', age: '32' },
  { name: 'Amanda', age: '29' }
]

console.log(students)
// sort on name values
students.sort((a, b) => (a.name > b.name) ? 1 : -1)
// sort of age values
students.sort((a, b) => (a.age > b.age) ? 1 : -1)
// sort by age and then name values
students.sort((a, b) => (a.age > b.age) ? 1 : (a.age === b.age) ? ((a.name > b.name) ? 1 : -1) : -1 )

// mergine objects
const identity = {
  name: 'Tam',
  nationality: 'British'
}

const ageData = {
  age: 35
}

const personalData = {...identity, ...ageData }

console.log(personalData)

// Promises
console.log(`
--promises`)

let done = true

// using resolve and reject in a promise function
const isFinished = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Promise has resolved as true'
    const test2 = 'You can send multiple things back resolve'
    resolve(`${workDone} ${test2}`)
  } else {
    const why = 'Promise is rejected or errored'
    reject(why)
  }
})

// calling the promise
isFinished.then(ok => { // .then keyword is used to access the output of resolve from the promise
  console.log(ok)
}).catch(err => { // .catch keyword is used to access the output of reject from the promise
  console.error(err)
});

// Async functions
console.log(`
--async functions`)

const isFinishedAsync = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Promise has resolved as true'
    const test2 = 'This time from an async function'
    resolve(`${workDone} ${test2}`)
  } else {
    const why = 'Promise is rejected or errored (async)'
    reject(why)
  }
})

// calling the isFinishedAsync promise via async function
const result = async () => {
  try {
    const out = await isFinishedAsync
     console.log(out)
  } catch(err) {
    console.log(err);
  }
  
}
result();

// calling the isFinishedAsync promise via IIFE
;(async () => {
  try {
    const out = await isFinishedAsync
    console.log(out)
  } catch(err) {
    console.error(err)
  }
})()

// Fetch API

console.log(`
--fetch API`)

// basic async fetch
;(async () => {
	const url = `https://api.github.com/users/tambuildsthings`
  const response = await fetch(url)
  const data = await response.json()
  console.log(response.status)
  console.log(data)
})()

// getting specifically the json object
;(async () => {
  const url = `https://api.github.com/users/tambuildsthings`
  const response = await fetch(url)
  const Jbody = await response.json()
  console.log(Jbody)
})()

// setting the request headers
const options = {
  headers: {
    "Content-type": "application/json",
  }
}

;(async () => {
  try {
    const url = `https://api.github.com/users/tambuildsthings`
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  } catch (err) {
    console.error("Request failed", err)
  }
})()


// Errors
console.log(`
--errors`)

// throwing exceptions 
const testErrors = (param) => {
  if (typeof param !== 'number') {
    throw 'The param should be a number!'
  }
  console.log(`The test ran successfully.`)
}

// for example
// testErrors(10) // this is fine
// testErrors('text') // this throws the execption

// handling exceptions using try catch
try {
  testErrors(10)
  testErrors(`text`)
} catch (err) {
  console.warn(err) // use console.warn or console.error depending on severity
}
