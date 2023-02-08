// Map(): perform a function for each element in a array , then stores the returned value in a new array
let storeUSD = [3, 4, 5, 6];
function toEURO(value) {
  value *= 2;
  return value;
}
let storeEURO = storeUSD.map(toEURO);
console.log(storeEURO)
console.log(storeUSD)


// the same can be done by arrow function as following
// let storeUSD = [3, 4, 5, 6];
// let storeEURO = storeUSD.map(value=>value*=2);
// console.log(storeEURO)
// console.log(storeUSD)