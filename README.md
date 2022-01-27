# TypeScript Mastering

## 1. JavaScript vs TypeScript Types

|     | Javascript | Typescript   |
| --- | ---------- | ------------ |
| 1   | undefined  | undefined    |
| 2   | boolean    | boolean      |
| 3   | number     | number       |
| 4   | string     | string       |
| 5   | bigint     | number       |
| 6   | symbol     | symbol       |
| 7   | null       | null         |
| 8   | object     | object       |
| 9   | function   | function     |
| 10  | -          | any          |
| 11  | -          | union        |
| 12  | -          | intersection |
| 13  | -          | enum         |
| 14  | -          | void         |
| 15  | -          | advance type |

**Notes :**

-   1-6 are Primitive Data Types
-   All primitives are immutable. A primitive is not an object and has no methods of its own.
-   Null is special primitive
-   All types in TypeScript are subtypes of a single top type called the Any type.

### Exercises :

-   [ ] Evaluate all JavaScript Types
-   [ ] undefined vs null vs not defined
-   [ ] Cons & Pros Dynamic Type

## 2. Typescript Types

How to declare typescript type :

-   Type inference ( implicit ) `let ti = "hello"`
-   Type annotations ( explicit ) `let ta:string = "hello ts"`

### Exercises :

-   [ ] Convert all JavaScript Types to TypeScript
-   [ ] Function Type
-   [ ] Union Type `|`
-   [ ] Type Aliases
-   [ ] Setup Environtment ( eslint, prettier )
