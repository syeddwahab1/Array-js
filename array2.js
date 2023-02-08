// array : a special variable that can hold more than one value
// each space is known as an element
// you access elements in an array by referring to the index number [0] [1]

var cars = ["mustang", "corvette", "jaguar"];
console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

// to add a new element to the array we use push method. element added is the last element of the array
cars.push("tesla");
console.log(cars[3]);

cars.pop(); //remove last element

// to check length of an array
var numberofCars = cars.length;
console.log(numberofCars);

// to sort an array alphabetically
// cars = cars.sort();
// console.log(cars);

// cars = cars.reverse(); // to reverse sort an array 
 
// to access the last element of the array whether elements are added dynamically changing the array or not
var lastCar= cars[cars.length-1]
console.log(lastCar)
