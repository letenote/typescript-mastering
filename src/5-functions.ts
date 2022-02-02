/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

export {}; // quick fix for global variable

/**
 * 1. function declaration, expression, arrow
 * 2. optional & default parameters
 * 3. rest parameter
 * 4. conditional type with union, generic, overlods
 */

/********** 1. Basic Function  ***********/
/* Function Declaration, Expession, Arrow
 */

// function declaration
// function add(x, y) {
//     return x + y;
// }
function add(x: number, y: number): number {
  return x + y;
}
console.log(add(9,9))

// function expression
// const addEx = function (x, y) {
//     return x + y;
// };
const addEx = function(x: number, y: number): number {
  return x + y;
};
console.log(addEx(8,8))

// arrow function
// const addArrow = (x, y) => x + y;
const addArrow= (x: number, y: number, z = 0): number => x + y + z;
console.log(addArrow(8,10))
console.log(addArrow(8,10,10))

// function with no return value
// const hello = (name) => console.log("hello " + name)
const hello = (name: string): void => console.log("hello " + name);
hello('murphy')

// function with callback
// function request(url,cb){}
type GreeterVoid_cb = ( name: string) => void;
function request_one(name: string, cb: GreeterVoid_cb) {
  cb(name)
}
const sayHi_void = ( name: string ) => console.log(`hi, ${name} - void`);
request_one("donald", sayHi_void)

type Greeter_cb = ( name: string ) => string;
function request_two(name: string, cb: Greeter_cb): string {
  return cb(name)
}

const sayHi = ( name: string ) => `hi, ${name}`;
console.log( request_two("mickey", sayHi) )

/********** 2. optional & default parameters  ***********/
/*
| parameters | required | default value |
| ---------- | -------- | ------------- |
| firstName  | Yes      |               |
| lastName   | Yes      |               |
| gender     | No       |               |
| languange  | No       | english       |
*/

/*
function submitContact(firstName, lastName, languange, gender){
  return {
    firstName,
    lastName
    languange
  }
}
*/

type submitContactValue = {
  firstName: string,
  lastName: string,
  gender?: string,
  languange: string
}

function submitContact(firstName: string, lastName: string, languange = 'english', gender?: string): submitContactValue{
  return {
    firstName,
    lastName,
    ...( gender && { gender }),
    languange
  }
}
console.log( submitContact('mickey', 'mouse') )
console.log( submitContact('donald', 'duck', 'spain') )

/********** 3. Rest Parameter  ***********/
/*
function fruitsCollection(item, ...restItems) {
  return item + " " + restItems.join(" ");
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado');
// console.log(fruits);
*/

function fruitsCollection(item: string, ...restItems: (string | number)[]): string {
  return item + " " + restItems.join(" ");
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado', 3);
console.log(fruits);


/********* 4. conditional type with union ***********/
/*
  - accept parameter either string or number
  - return either string or number
  - don't use `any`
*/
// function CT(param) {
//   return param
// }

// 1. using union
function solution_with_union(param: string | number): string | number {
  return param
}
console.log(solution_with_union("one"))
console.log(solution_with_union(2))

// 2. using generic
function solution_with_generic<T>(param: T): T {
  return param
}

console.log( solution_with_generic<string>("three") )
console.log( solution_with_generic<number>(4) )

// 3. using overload
function solution_with_overload( param: string ): string;
function solution_with_overload( param: number ): number;
function solution_with_overload( param: any ): any {
  return param
}

console.log( solution_with_overload("five") )
console.log( solution_with_overload(6) )
// console.log( solution_with_overload(true) ) // => is error
