// filter(): filter the element of an array that meets a condition specified in a function 
let students=[16,17,18,19]
function chechAge(age){
    if (age>=18){
        return age
    }
}
let adultStudents=students.filter(chechAge)
console.log(adultStudents)

// arrow function 
// let students=[16,17,18,19]
// function chechAge(age){
//     if (age>=18){
//         return age
//     }
// }
// let adultStudents=students.filter(age => age>=18 )
// console.log(adultStudents)l
