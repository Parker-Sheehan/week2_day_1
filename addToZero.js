// Starting array
let array = [28, 43, -12, 30, 4, 10, 112]

// Write your solution below:

let boolooo = false

for(let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; j++) {
        console.log(array[i],array[i+j+1])
        if(array[i] + array[i+j+1] === 0){
            boolooo = true
        }
        
    }
}

console.log(boolooo)
