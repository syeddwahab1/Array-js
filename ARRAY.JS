// ARRAY 
// 1) array is atype of variable in which we can store multiple data 
 
//2) arrays indexing starts from zero 

// 3) arrays length means number of items present in it 

// Methods or functions of array 

// 1) Array.push() : insert value from last 

// var people=["hammad"]
// people.push("wahab")
// console.log(people)

var num=[]
for (var i=1 ; i<=10;i++){
    num.push(i)
}
console.log(num)

// 2) Array.pop () : remove value from last 

var people=["john","doe"]
people.pop()

// 3) Array.unshift inserts value from start 


// 4)Array.shift deletes value from start




var car= [ "corolla", "civic","vitz"]
console.log(car)
console.log(car[0])
console.log(car[1])
console.log(car[2])

// looping in arrays 

var car= [ "corolla", "civic","vitz"]
for (var i=0 ; i<car.length ; i++){
    console.log(car[i])
// }

// to remove or add at any index 
var cars=["corolla","vitz","civic"]
// jisko remove krna hae uska index bracket menubar, jahan tk krna hae wo dusri value ,jo add krna hae wo teesre argument me 
cars.splice(1,1,"cultus")

// splive skips the index we put with splice command and duplicates remaining  array 
console.log(cars.slice(1))

var arr=[
    {name:"wahab",age:23},
    {name:"hammad",age:23}
]
for (var i=0;i<arr.length;i++){
    console.log(arr[i].age)
}}
