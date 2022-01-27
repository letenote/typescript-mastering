"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inferenceArrayNumber = [1, 2, 3, 4];
let bracketArrayNumber;
bracketArrayNumber = [1, 2, 3, 4];
let genericArrayNumber;
genericArrayNumber = [1, 2, 3, 4];
const inferenceArrayString = ['a', 'b', 'c'];
let bracketArrayString;
bracketArrayString = ['a', 'b', 'c'];
let genericArrayString;
genericArrayString = ['a', 'b', 'c'];
const inferenceArrayUnion = ["hello", 1, 2, 3];
let bracketArrayUnion;
bracketArrayUnion = ["hello", 1, 2, 3];
let genericArrayUnion;
genericArrayUnion = ["hello", 1, 2, 3];
let bracketTupple;
bracketTupple = ['cordinat', 2, 4, 7];
const arrayOfObjectInference = [
    { color: 'blue', index: 1 },
    { color: 'red', index: 2 },
];
let arrayOfObjectBracket;
arrayOfObjectBracket = [
    { color: 'blue', index: 1 },
    { color: 'red', index: 2 },
];
let arrayOfObjectGeneric;
arrayOfObjectGeneric = [
    { color: 'blue', index: 1 },
    { color: 'red', index: 2 },
];
const arrayMultiDimension = [
    [1, 2],
    [3, 4],
];
let arrayMultiDimensionBracket;
arrayMultiDimensionBracket = [
    [1, 2],
    [3, 4],
];
let arrayMultiDimensionGeneric;
arrayMultiDimensionGeneric = [
    [1, 2],
    [3, 4],
];
let [a, b, c, d] = [1, 2, 3, 'four'];
