// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.
// Test Created!
// Test failed!

// Test with code passed!

describe('l33tC0d3r', ()=>{
    it('takes in a string and returns a coded message', () =>{
        expect(l33tC0d3r(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(l33tC0d3r(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(l33tC0d3r(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"



// b) Create the function that makes the test pass.

// Psuedo Code!!
// Declare a function that takes in a string
// Declare a variable 'split' to equal the given string.split("")
// Iteration using map over split
// Conditional if value is equal to /[aAeEiIoO]/
// return value replaced with respective numbers (4,3,1,0)
// join split.map(...) back together!


const l33tC0d3r = (str) => {
   let split = str.split("")
    return split.map(value => {
        if(value === 'a' || value === 'A'){
            return value = '4'
        } else if(value === 'e' || value === 'E'){
            return value = '3'
        }else if(value === 'i' || value === 'I'){
            return value = '1'
        }else if(value === 'o' || value === 'O'){
            return value = '0'
        }else{
            return value
        }
    }).join("")
}
// Dude I'm a little weirded out... I forgot to add let to the beginning of line 52 and it was still working??? I'm surprised I cought it AND that it wasn't messing anything up?!

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.
// Test created
// Test failed

// Test with code passed!!!

describe('isIt', () =>{
    it('takes in an array of words and a single letter and returns all the words that contain that particular letter', () => {
        expect(isIt(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(isIt(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
var letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
var letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]



// b) Create the function that makes the test pass.

// Psuedo Code!!! I'm really happy with this one!
// Declare a function that takes in 1 array and 1 string
// declare a variable 'itCanBe' equal to arr.filter
// filter value to be value.toLowerCase().includes(str)
// return itCanBe
// Celebrate!!!

const isIt = (arr, str) => {
    let itCanBe = arr.filter(value => value.toLowerCase().includes(str))
    return itCanBe
  }

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
// Test created!
// Test failed!

// AHAHAHAHA YES FINALLY!!!

describe('yahtzee', () => {
    it('takes in an array of 5 numbers and determines whether or not the array is a “full house”', () => {
        expect(yahtzee(hand1)).toEqual(true)
        expect(yahtzee(hand2)).toEqual(false)
        expect(yahtzee(hand3)).toEqual(false)
    })
})

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false
var hand4 = [1, 1, 4, 4, 4]



// b) Create the function that makes the test pass.

// Psuedo codeeeeee
// Declare a function that takes in an array
// Conditional if array is greater than or less than 5
// Return "Please enter an array of exactly 5 numbers"
// Declare a variable 'fullHouseNums equal to an empty array
// for loop fullHouseNums[i] = (fullHouseNums[i] || 0) + 1;
// Declare variable 'num' equal to Object.values(fullHouseNums)
// Conditional if num[0] === 2 && num[1] === 3 OR num[1] === 2 && num[0] === 3
// Return true
// Else function return false


const yahtzee = (arr) => {
    if(arr.length > 5 || arr.length < 5){
        return "Please enter an array of exactly 5 numbers."
    }
    let fullHouseNums = []
    for(let i of arr){
      fullHouseNums[i] = (fullHouseNums[i] || 0) + 1;
    }
    let num = Object.values(fullHouseNums);
    if((num[0] === 2 && num[1] === 3) || (num[1] === 2 && num[0] === 3)){
      return true;
    }
    return false;
  }

// Throughout this entire assessment I was like Oh Pshh this week is easy! I'm loving this. THEN CHALLENGE 3 HAPPENED. I discovered I'm more willing to skip dinner and cry myself into a depression nap than I am to use multiple for loops and if statements. Granted I did still use a for loop and 2 if statements but it's no where near as bad as what I had going before. SORRY BUT I REALLY DON'T WANNA INCLUDE IT! It was messy, hard-coded, and still didn't even get the job done.

// Anyways, I hope you're having a wonderful day :)