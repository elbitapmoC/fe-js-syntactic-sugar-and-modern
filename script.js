// Arrow functions
const arr = [1,2,3,4,5];
// OLD
// const doubled = arr.map(double);
// function double(num){
//     return num *2;
// }

// NEW
// With one parameter, no need for () around num.
// implicitly returns num*2;
const doubled = arr.map(num => num*2);
console.log(doubled);