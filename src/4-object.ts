/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

export {};
/**
 * 1. Object Literal
 * 2. Nested Object
 * 3. Nested, Object of Array
 * 4. Nested, Object of Object
 * 5. Object destructuring
 */

/**
 * 1. Object Literal
 */
/*
  {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    note: ""
  }
*/

// type inference
// simple but not recomend
let productInfrence = {
  id: "ID-1",
  productName: "Macbook Air",
  price: 2000,
  note: ""
}

// inline interface
// simple but not flexible
let productInlineInterface: {
  id: string,
  productName: string,
  price: number,
  note: string
}
productInlineInterface = {
  id: "ID-1",
  productName: "Macbook Air",
  price: 2000,
  note: ""
}

// using interface
interface ProductUsingInterface {
  id: string,
  productName: string,
  price: number,
  note: string
}

let product_one: ProductUsingInterface
let product_two: ProductUsingInterface

product_one = {
  id: "ID-1",
  productName: "Macbook Air",
  price: 2000,
  note: ""
}

product_two = {
  id: "ID-2",
  productName: "Macbook Pro",
  price: 2017,
  note: ""
}

/**
 * 2. Nested Object
*/
/*
  {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    productDetail: {
      year: 2009,
      storage: 256
    }
  }
*/

// type inference
let productNestedObject_inference = {
  id: "ID-1",
  productName: "Macbook Air",
  price: 2000,
  productDetail: {
    year: 2009,
    storage: 256
  }
}
// inline interface
let productNestedObject_inlineInterface: {
  id: string,
  productName: string,
  price: number,
  productDetail: {
    year: number,
    storage: number
  }
}
productNestedObject_inlineInterface = {
  id: "ID-1",
  productName: "Macbook Air",
  price: 2000,
  productDetail: {
    year: 2009,
    storage: 256
  }
}
// using interface
interface ProductNestedObjectDetail {
  year: number,
  storage: number
}
interface ProductNestedObject {
  id: string,
  productName: string,
  price: number,
  productDetail: ProductNestedObjectDetail
}

let productNestedObject_usingInterface: ProductNestedObject;
productNestedObject_usingInterface = {
  id: "ID-1",
  productName: "Macbook Air",
  price: 2000,
  productDetail: {
    year: 2009,
    storage: 256
  }
}
/**
 * 3. Nested, Array of Object
 */

/*
    {
      id: "U-1",
      name: "Adi dodi",
      address: [
        {
          street : "Jln. Setapak No.2",
          city: "Jakarta"
        },
        {
          street: "Jln. Lebar sekali no 10",
          city: "Medan"
        }
      ]
    }
*/

// inline interface
let productNestedArrayOfObject_inlineInterface: {
  id: string,
  name: string,
  address: Array<{
    street : string,
    city: string
  }>
}
productNestedArrayOfObject_inlineInterface = {
  id: "U-1",
  name: "Adi dodi",
  address: [
    {
      street : "Jln. Setapak No.2",
      city: "Jakarta"
    },
    {
      street: "Jln. Lebar sekali no 10",
      city: "Medan"
    }
  ]
}

// using interface
interface ProductNestedArrayOfObject_address {
  street : string,
    city: string
}
interface ProductNestedArrayOfObject {
  id: string,
  name: string,
  address: Array<ProductNestedArrayOfObject_address>
}

let productNestedArrayOfObject_usingInterface: ProductNestedArrayOfObject
productNestedArrayOfObject_usingInterface = {
  id: "U-1",
  name: "Adi dodi",
  address: [
    {
      street : "Jln. Setapak No.2",
      city: "Jakarta"
    },
    {
      street: "Jln. Lebar sekali no 10",
      city: "Medan"
    }
  ]
}

/**
 * 4. Nested, Object of Object
 */

/*
    {
      idCart: "C1",
      dateOrdered: "2020-05-20",
      items: {
        p1 :{
          "id": "P-1",
          "name": "Mechanical Keyboard",
          "qty": 2
        },
        p2 :{
          "id": "P-2",
          "name": "USB Hub",
          "qty": 1
        },
      }
    }
*/

// using interface
interface ProductNestedObjectOfObject_item {
  id: string,
  name: string,
  qty: number
}
interface ProductNestedObjectOfObject {
  idCart: string,
  dateOrdered: string,
  items: {
    [key: string] : ProductNestedObjectOfObject_item
  }
}

let productNestedObjectOfObject_one: ProductNestedObjectOfObject;
let productNestedObjectOfObject_two: ProductNestedObjectOfObject;
productNestedObjectOfObject_one = {
  idCart: "C1",
  dateOrdered: "2020-05-20",
  items: {
    p1 :{
      "id": "P-1",
      "name": "Mechanical Keyboard",
      "qty": 2
    },
    p2 :{
      "id": "P-2",
      "name": "USB Hub",
      "qty": 1
    },
  }
}

/**
 * 5. Object Destructuring
 */

/*
  let fullName = {
    firstName : "Sastra",
    lastName : "Nababan"
  }
  let {firstName, lastName} = fullName
*/
let fullName = {
  firstName : "Sastra",
  lastName : "Nababan"
}

// type inference
//let {firstName, lastName} = fullName
// inline interface
let {firstName, lastName}: { firstName: string, lastName: string } = fullName