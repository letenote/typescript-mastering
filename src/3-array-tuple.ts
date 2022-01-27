/* eslint-disable @typescript-eslint/no-unused-vars, prefer-const */
export {}; // quick fix for global variable

/**
 * Array
 * 1. Array of Number
 * 2. Array of String
 * 3. Array with Union
 * 4. Tuple
 * 5. Array of Object
 * 6. Array multi dimension
 * 7. Destructuring
 */

/**
 * 1. Array of Number
 * [1,2,3,4]
 */

// type inference
const inferenceArrayNumber = [1,2,3,4]
// type bracket
let bracketArrayNumber: number[]
    bracketArrayNumber = [1,2,3,4]
// type generic array
let genericArrayNumber: Array<number>
    genericArrayNumber = [1,2,3,4]

/**
 * 2. Array of String
 * ['a', 'b', 'c']
 */

// type inference
const inferenceArrayString = ['a', 'b', 'c']
// type bracket
let bracketArrayString: string[]
    bracketArrayString = ['a', 'b', 'c']
// type generic array
let genericArrayString: Array<string>
    genericArrayString = ['a', 'b', 'c']

/**
 * 3. Array with Union
 * ["hello", 1, 2, 3 ]
 */

// type inference
const inferenceArrayUnion = ["hello", 1, 2, 3 ]
// type bracket
let bracketArrayUnion: (string | number)[]
    bracketArrayUnion = ["hello", 1, 2, 3 ]
// type generic array
let genericArrayUnion: Array<string | number>
    genericArrayUnion = ["hello", 1, 2, 3 ]

/**
 * 4. Tuple
 * ['cordinat', 2, 4, 7]
 */

// type inference
// dont use type inference for tuple
// type bracket
let bracketTupple: [string, number, number, number]
    bracketTupple = ['cordinat', 2, 4, 7]
// type generic tuple
// dont use type generic for tuple

/**
 * 5. Array of Object
 * [
 *   { color: 'blue', index: 1 },
 *   { color: 'red', index: 2 },
 * ]
 */

// type inference
const arrayOfObjectInference =  [
     { color: 'blue', index: 1 },
     { color: 'red', index: 2 },
   ]
// type bracket
let arrayOfObjectBracket: { color: string, index: number }[]
    arrayOfObjectBracket = [
      { color: 'blue', index: 1 },
      { color: 'red', index: 2 },
    ]
// type generic array
let arrayOfObjectGeneric: Array<{ color: string, index: number }>
    arrayOfObjectGeneric = [
      { color: 'blue', index: 1 },
      { color: 'red', index: 2 },
    ]

/**
 * 6. Array multi dimension [[]]
 * matrix = [
 *  [1, 2],
 *  [3, 4],
 * ];
 */

// type inference
const arrayMultiDimension = [
    [1, 2],
    [3, 4],
   ];
// type bracket
let arrayMultiDimensionBracket: number[][]
    arrayMultiDimensionBracket = [
      [1, 2],
      [3, 4],
    ];
// type generic array
let arrayMultiDimensionGeneric: Array<Array<number>>
    arrayMultiDimensionGeneric = [
      [1, 2],
      [3, 4],
    ];

/**
 * 7. Destructuring
 * let [a, b, c, d] = [1, 2, 3, 'four'];
 */

let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, 'four'];