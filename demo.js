let str = "Hello, "
let bool = true
let num = 42
let zero = 0

console.log(str + num)
console.log("=======================================")
console.log(str + bool)
console.log("=======================================")
// Change data type to string (String())
console.log(String(num))
console.log("=======================================")
zero? console.log("Zero is true"):console.log("Zero is false")
num? console.log("num is true"):console.log("num is false")
''? console.log("'' is true"):console.log("'' is false")
// using ! will make it the opposite
// ! is the same as not
console.log("=======================================")

let helloWorld = "Hello, World!"

if (helloWorld.toLocaleLowerCase().includes("hello")){
    console.log("It does contain hello")
} else console.log("it does not contain hello")

let fruits = ["Apples","Bananas","Cherries"]

let abcString = `The ABCs of fruit are ${fruits.join(", ").toLocaleLowerCase()}`

let noMoreCherries = abcString.split(",").splice(0,2)
noMoreCherries = noMoreCherries.join(' and').replace("C","")
console.log(noMoreCherries)

const madLib = (str,arr) => {
    for(let i=0; i < arr.length; i++){
        let randInt = Math.floor(Math.random() * arr.length)

        str = str.replace("X", arr[randInt])
        //!str.includes("X") ? break : str = str
    }
    return str
}



let sampleOne = "The X X fox jumped over the X X fence"
let arrayOne = ['Green','stinky','evil','orange', 'crazy', 'marching', 'militant']

let newSentence = madLib(sampleOne,arrayOne)

console.log(newSentence)

console.log(isNaN("lucas"))