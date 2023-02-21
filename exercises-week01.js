// Challenges - Week 01

// Write a program that defines two variables, the base and height of a rectangle, and calculates its area and the perimeter

const height = 40
const base = 62

const area = height * base
console.log(area)
const perimeter = (height * 2) + (base * 2)
console.log(perimeter)

// Write a program that initializes an array with all values at 0. Then loop over that array and change each value in the array with the value of the index

const autoArray = Array(5).fill(0)
console.log(autoArray)

for (const [index, item] of autoArray.entries()) {
  autoArray[index] = index
}
console.log(autoArray)


// Rewrite the loop for (let i=0; i<=10; i++) { console.log(i) } using a while loop

let j = 0
while (j <=10) {
  console.log(j)
  j++
}

// Write a program that finds the smallest and biggest number in an array, and prints them

const nums = [12, 43, 11, 8, 21, 2, 5, 30]
const smallest = nums.sort((a, b) => (a > b ? 1 : -1))[0]
const largest = nums.sort((a, b) => (a > b ? 1 : -1))[nums.length-1]
console.log(`The smallest number is ${smallest}. The largest number is ${largest}.`)

// Write a program that, given an initial number, tries to find it in an array, and prints true or false depending on the result. Try to do it with 3 different kinds of loops

const findMe = 43
const findIn = [12, 43, 11, 8]
let found = false

for (item in findIn) {
  if (findIn[item] === findMe) {found = true}
}
console.log(found)

for (item of findIn) {
  if (item === findMe) {found = true}
}
console.log(found)

for (let i = 0; i < findIn.length; i++) {
  if (findIn[i] === findMe) {found = true}
}
console.log(found)

// Write a program that count the number of letters occurrences in a string. Return an array that contains all letters and their count, like this for the string cbb: [['c', 1],['b', 2]].

const input = "ababcbdb"
let letters = []
let output = []

for (letter of input) {
  // check if letter is not in letters.
  if (!letters.includes(letter)) {
    // if it is not, add it to letters. Creating an array of unique letters
    letters.push(letter)
    // and create an entry in the output array for the letter
    output.push([letter, 0])
  }
  // for each entry in the output array
  for (entry of output) {
    // if there is an entry for the current letter
    if (entry[0] === letter) {
      entry[1]++ // increment that entry
    }
  }
}

console.log(output)

// Write a function that accepts an array of numbers as parameter, prints their values to the console, and returns the sum of those numbers

function calc(inputArray) {
    total = 0
    for (num of inputArray) {
      console.log(num)
      total += num
    }
    console.log(`The total is ${total}.`)
  }
  
  calc([2, 4, 6, 8, 10]) // equals 30
  calc([3,2,1]) // equals 6

// Write a function that accepts two arrays as parameters. Return a single array that contains the items, ordered. Handle the cases where one or both of the arrays are empty.

function arraySquash(arr1, arr2) {
    // join the two arrays together
    const arr3 = [...arr1,...arr2]
    // sort numerically
    return arr3.sort((a, b) => (a > b ? 1 : -1))
  }
  
  arraySquash([1,3,5,13,17],[2,4,6,12,20])

  // Create a simple calculator simulator. Perform the basic operations as functions.

const calculator = {
    add: (a, b) => {
      return a + b
    },
    sub: (a, b) => {
      return a - b
    },
    multi: (a, b) => {
      return a * b
    },
    divi: (a, b) => {
      return a / b
    }
  }
  
  calculator.add(2,2)
  calculator.sub(4,3)
  calculator.multi(3,6)
  calculator.divi(10,2)

// Suppose you have an array contains a list of objects that represent names of people, with first name and last name. Write a function to reorder the items by last name.

const people = [
    {first: 'Edward', last: 'Daley'},
    {first: 'Kim.', last: 'Cameron'},
    {first: 'Derek', last: 'Humphreys'},
    {first: 'Paula', last: 'Gardener'},
    {first: 'Mark', last: 'Patterson'}
  ]
  
  console.log(people.sort((a, b) => (a.last > b.last) ? 1 : -1))
