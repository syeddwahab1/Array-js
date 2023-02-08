// forEach == perform a function for each element in an array 
 let total=0
 let cart=[5,6,7,8]
 function checkOut(element, index, array ){
    total+=element
 }
 cart.forEach(checkOut)
 console.log(total)