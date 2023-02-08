// reduce(): reduce an array to a single value ,the return value of the callback function is an accumulated Result, and is provided as an argument in the next call to the callback function 
// let letters=["h","e","l","p"]
// function combinedLetters(total,nextLetter,array,index){
//     return total+nextLetter
// }
// let words=letters.reduce(combinedLetters)
// let words2=letters.reduceRight(combinedLetters)  //reduce in reverse 
// console.log(words)

// arrow function 

let letters=["h","e","l","p"]
function combinedLetters(total,nextLetter){
    return total+nextLetter
}
let words=letters.reduce((total,nextLetter)=> total+nextLetter)
console.log(words)