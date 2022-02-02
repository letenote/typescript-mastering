"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let productInfrence = {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    note: ""
};
let productInlineInterface;
productInlineInterface = {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    note: ""
};
let product_one;
let product_two;
product_one = {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    note: ""
};
product_two = {
    id: "ID-2",
    productName: "Macbook Pro",
    price: 2017,
    note: ""
};
let productNestedObject_inference = {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    productDetail: {
        year: 2009,
        storage: 256
    }
};
let productNestedObject_inlineInterface;
productNestedObject_inlineInterface = {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    productDetail: {
        year: 2009,
        storage: 256
    }
};
let productNestedObject_usingInterface;
productNestedObject_usingInterface = {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    productDetail: {
        year: 2009,
        storage: 256
    }
};
let productNestedArrayOfObject_inlineInterface;
productNestedArrayOfObject_inlineInterface = {
    id: "U-1",
    name: "Adi dodi",
    address: [
        {
            street: "Jln. Setapak No.2",
            city: "Jakarta"
        },
        {
            street: "Jln. Lebar sekali no 10",
            city: "Medan"
        }
    ]
};
let productNestedArrayOfObject_usingInterface;
productNestedArrayOfObject_usingInterface = {
    id: "U-1",
    name: "Adi dodi",
    address: [
        {
            street: "Jln. Setapak No.2",
            city: "Jakarta"
        },
        {
            street: "Jln. Lebar sekali no 10",
            city: "Medan"
        }
    ]
};
let productNestedObjectOfObject_one;
let productNestedObjectOfObject_two;
productNestedObjectOfObject_one = {
    idCart: "C1",
    dateOrdered: "2020-05-20",
    items: {
        p1: {
            "id": "P-1",
            "name": "Mechanical Keyboard",
            "qty": 2
        },
        p2: {
            "id": "P-2",
            "name": "USB Hub",
            "qty": 1
        },
    }
};
let fullName = {
    firstName: "Sastra",
    lastName: "Nababan"
};
let { firstName, lastName } = fullName;
