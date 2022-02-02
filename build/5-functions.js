"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y) {
    return x + y;
}
console.log(add(9, 9));
const addEx = function (x, y) {
    return x + y;
};
console.log(addEx(8, 8));
const addArrow = (x, y, z = 0) => x + y + z;
console.log(addArrow(8, 10));
console.log(addArrow(8, 10, 10));
const hello = (name) => console.log("hello " + name);
hello('murphy');
function request_one(name, cb) {
    cb(name);
}
const sayHi_void = (name) => console.log(`hi, ${name} - void`);
request_one("donald", sayHi_void);
function request_two(name, cb) {
    return cb(name);
}
const sayHi = (name) => `hi, ${name}`;
console.log(request_two("mickey", sayHi));
function submitContact(firstName, lastName, languange = 'english', gender) {
    return {
        firstName,
        lastName,
        ...(gender && { gender }),
        languange
    };
}
console.log(submitContact('mickey', 'mouse'));
console.log(submitContact('donald', 'duck', 'spain'));
function fruitsCollection(item, ...restItems) {
    return item + " " + restItems.join(" ");
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado', 3);
console.log(fruits);
function solution_with_union(param) {
    return param;
}
console.log(solution_with_union("one"));
console.log(solution_with_union(2));
function solution_with_generic(param) {
    return param;
}
console.log(solution_with_generic("three"));
console.log(solution_with_generic(4));
function solution_with_overload(param) {
    return param;
}
console.log(solution_with_overload("five"));
console.log(solution_with_overload(6));
