// Data Types in JavaScript

/** Primitive Types **/
// string: "This is a string" | 'This is also a string' | `This is a template string` | "55" | "true",

// number: 42 | 3.14 | -1000,

// boolean: true | false | 0:false | >0:true,

// null: null, 
// undefined: undefined,

// symbol: Symbol("unique"),

// bigint: BigInt(9007199254740991)


/** Reference Types **/
// object: { key: "value", number: 42, isActive: true }
// array: [1, 2, 3, "four", true]

/* ============================= STRING ============================= */
const name = 'Alex'; // string
const address = `124 Elm Street
Apt 4B
New York, NY 10001`;

console.log('Name:', name,);
console.log('Address:', address);
// to know the datatype we can use typeof operator
console.log('Type of name:', typeof name);
console.log('Type of address:', typeof address);


// ES6 - 2015

// const and let
// var, const, and let are used to declare variables

/* ============================= NUMBER ============================= */
console.log('===============================================================');
const age = 30; // number
const pi = 3.14; // number
const negativeNumber = -42; // number

console.log('Age:', age);
console.log('Pi:', pi);
console.log('Negative Number:', negativeNumber);

console.log('Type of age:', typeof pi);
console.log('Type of pi:', typeof pi);
console.log('Type of negativeNumber:', typeof negativeNumber);


/* ============================= boolean ============================= */
console.log('===============================================================');

const isEmployed = true; // boolean
const isStudent = false; // boolean

console.log('Is Employed:', isEmployed);
console.log('Is Student:', isStudent);

console.log('Type of isEmployed:', typeof isEmployed);
console.log('Type of isStudent:', typeof isStudent);


/* ============================= null ============================= */
console.log('===============================================================');

const salary = null; // null
const userAdmin = null;

console.log('Salary:', salary);
console.log('User Admin:', userAdmin);
console.log('Type of salary:', typeof salary);
console.log('Type of userAdmin:', typeof userAdmin);


/* ============================= undefined ============================= */
console.log('===============================================================');
const middleName = undefined; // undefined
let userRole;

console.log('Middle Name:', middleName);
console.log('User Role:', userRole);

console.log('Type of middleName:', typeof middleName);
console.log('Type of userRole:', typeof userRole);


/* ============================= bigint ============================= */
console.log('===============================================================');

const bigNumber = BigInt(1234567890123456789012345678901234567890);
const largeNumber = 123_456_789_012_345_678_901_234_567_890_123_456_789_0; // This is a regular number, not bigint

console.log('Big Number:', bigNumber);
console.log('Type of bigNumber:', typeof bigNumber);

console.log('Large Number:', largeNumber);
console.log('Type of largeNumber:', typeof largeNumber);

/* ============================= Symbol ============================= */
console.log('===============================================================');

const uniqueId = Symbol("id");
const user = {
    [Symbol("id")]: 12345,
    name: "John Doe",
    address: "123 Main St"
}

const user2 = {
    id: 12345,
    name: "Jane Doe",
    address: "456 Elm St",
    id: 11111
}

console.log('Unique ID:', uniqueId);
console.log('Type of uniqueId:', typeof uniqueId);



/* ============================= Reference Data types - Object ============================= */
console.log('===============================================================');

// example 1
const person = {
    name: "Alice",
    age: 28,
    isEmployed: true,
    address: {
        street: "456 Oak St",
        city: "Los Angeles",
        state: "CA"
    }
};

// person.isSuperAdmin = true; // Adding a new property
// person.name = "Alice Smith"; // Modifying an existing property
// delete person.isEmployed; // Deleting a property



const person2 = person;
person2.name = "Bob"; // Modifying the name in person2 will also affect person

console.log('Person 2:', person2);
console.log('Person 1:', person);

let num1 = 10;
let num2 = num1; // 10
num2 = 20;

console.log('Num1:', num1);
console.log('Num2:', num2);



// example 2
const car = new Object(); // car = {}
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;
car.features = ["Bluetooth", "Backup Camera", "Blind Spot Monitoring"];


/* ============================= Reference Data types - Array ============================= */
console.log('===============================================================');
// example 1
const fruits = ["Apple", "Banana", "Cherry"];
const userList= [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

const fruits2 = fruits; // Reference to the same array
fruits2[0] = "Mango";

console.log('Fruits:', fruits);
console.log('Fruits 2:', fruits2);
