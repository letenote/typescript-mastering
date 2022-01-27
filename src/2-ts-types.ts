/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

// type inference(Implicit)
let ti = 'hello';
// ti = 33 // error
// type annotation(Explicit)
let ta: string 
    ta = 'hello world';
// ta = { name : "" } // error

/********** 1. Convert all Javascript Types to TypeScript ***********/

let a;                  // undefined
let b: boolean
    b = true;           // boolean

let c: number
    c = 1;              // number

let d: string
    d = "hello";        // string

let e: bigint
    e = 100n;           // big int (starting ES2020)

let f: symbol
    f = Symbol("Sym");  // symbol  (starting ES2015)

let g: () => void
    g = function () {   // function
  return null;
};

let h: null
    h = null;           // null ( special primitive )

// let i: {} // {} bad in eslint => Record<string, unknown>
let i: Record<string, unknown>  
    i = {};             // Object Literal

let j: []
    j = [];             // array .push, .pop, .map

let x: any              // dynamic types, not recomend (eslint)
    x = "string"
    x = 123
    x = {
      name: ""
    }
    x = ['one', 'two']

class Product {
  // class
  //...
}
let k = new Product();

/********** 2. Function Type ***********/

// in js
// const sum = (a,b) => a+b
// in ts
const sum = (a:number, b:number) : number => a + b

const argOne = 1;
const argTwo = 2;
const expected = 3;
const result = sum(argOne,argTwo);
console.log(`expected:${expected} === result:${result}`);

/********** 3. Union Type ***********/
// Union type is multiple type variable
// string | number | boolean | ...dst

let multi: string | number | boolean 
    multi = 'string';
    multi = 9
    multi = true
    // error
    // multi = [1,2]
    // multi = {
    //   name: "string"
    // }
    // multi = () => {}

/********** 4. Type aliases ***********/
// Type aliases is custom type 
// usefull in function or class

type CustomTypeOne = string;
let isString: CustomTypeOne
    isString = "string"
    // isString = 9 // <== error

type CustomTypeOTwo = string | number;
let myType: CustomTypeOTwo
    myType = "string"
    myType = 9
