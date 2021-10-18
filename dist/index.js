"use strict";
let id = 5;
let company = "Nguyen Bach Nghia";
let isPublished = true;
let x = "Good bye";
let ids = [1, 2, 3, 4, 5];
ids.push(-100);
let arr = [1, true, "Hello"];
let person = [79, "Hel", false];
let employee;
employee = [
    [1, "Meo"],
    [-8, "Until"],
    [148, "ghoul"],
];
let pid;
pid = "22";
pid = Infinity;
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "up";
    Direction1["Down"] = "down";
    Direction1["Left"] = "left";
    Direction1["Right"] = "right";
})(Direction1 || (Direction1 = {}));
const userA = {
    id: 1,
    name: "Thao",
};
let cid = 354;
let customerId = cid;
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const userB = {
    id: 1,
    name: "John",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const nghia = new Person(8793, "Nghia Nguyen");
const thao = new Person(19822, "Thao Le", 25);
class Employee extends Person {
    constructor(id, name, age, position) {
        super(id, name, age);
        this.position = position;
    }
}
const tommy = new Employee(109928, "Tommy Vercetti", 34, "Front End");
function getTuple(a, b) {
    return [a, b];
}
let stringArray = getTuple("hello", "world");
let numberArray = getTuple(1.25, 2.56);
let ucStrings = stringArray.map((s) => s.toUpperCase());
let numInts = numberArray.map((n) => n.toFixed());
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Brad", "John", "Jill"]);
numArray.push(5);
