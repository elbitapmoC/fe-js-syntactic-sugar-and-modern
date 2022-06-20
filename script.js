// -----Arrow functions-----
// const arr = [1,2,3,4,5];
// OLD
// const doubled = arr.map(double);
// function double(num){
//     return num *2;
// }

// NEW
// With one parameter, no need for () around num.
// implicitly returns num*2;
// const doubled = arr.map(num => num*2);
// console.log(doubled);

// ----- Destructuring Assignment | ARRAY -----
// OLD
// const first = arr[0];
// const second = arr[1];

// NEW
// first & second are the variable names to acces the first to values.
// rest stores the leftovers
// const [first, second, ...rest] = arr;

// console.log(first, second);
// console.log(rest);
// console.log(arr);

// ----- Destructuring Assignment | OBJECT -----
const person = {
    company: 'President',
    userName: 'AK',
    description: ['Sojourner', 'Foodie', 'Developer', 'Lover', 'Minimalist @ heart..'],
    favNum: 12
}

// OLD
// console.log(person.company);

// NEW
// hungry doesn't exist above, b/c of that, hungry will be created in the object and have a default val of true
// const {company, userName: nickname, hungry=true, ...rest} = person;
// console.log(company, nickname);
// console.log(hungry); // Default value.
// console.log(rest );

// OLD
// function printName(person){
//     console.log(person.userName);
// }

// NEW
function printName({userName}){
    console.log(userName);
}
printName(person);