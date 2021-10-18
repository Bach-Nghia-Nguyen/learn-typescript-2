// Basic Types
let id: number = 5;
let company: string = "Nguyen Bach Nghia";
let isPublished: boolean = true;
let x: any = "Good bye";

let ids: number[] = [1, 2, 3, 4, 5];
ids.push(-100);
// console.log(ids);

let arr: any[] = [1, true, "Hello"];

// Tuple
let person: [number, string, boolean] = [79, "Hel", false];

// Tuple Array
let employee: [number, string][];
employee = [
  [1, "Meo"],
  [-8, "Until"],
  [148, "ghoul"],
];

// Union
let pid: string | number;
pid = "22";
pid = Infinity;

// Enum
enum Direction1 {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}

// console.log(Direction1.Left);

// Objects
type User = {
  id: number;
  name: string;
};

const userA: User = {
  id: 1,
  name: "Thao",
};

// Type Assertion
let cid: any = 354;
// let customerId = <number>cid;
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}
// console.log(addNum(3, 9));

// void
function log(message: string | number): void {
  console.log(message);
}
// log("aaa");

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number; // optional
}

const userB: UserInterface = {
  id: 1,
  name: "John",
};

// Interface in Function
interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;
// console.log(sub(17, 5));

// Interface in Classes
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;
  age?: number;

  constructor(id: number, name: string, age?: number) {
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
// console.log(nghia, thao);
// console.log(nghia.register());
// console.log(thao.register());

class Employee extends Person {
  position: string;

  constructor(id: number, name: string, age: number, position: string) {
    super(id, name, age);
    this.position = position;
  }
}

const tommy = new Employee(109928, "Tommy Vercetti", 34, "Front End");
// console.log(tommy.register());

// Generics
function getTuple<T>(a: T, b: T): [T, T] {
  return [a, b];
}

let stringArray = getTuple<string>("hello", "world");
let numberArray = getTuple<number>(1.25, 2.56);
let ucStrings = stringArray.map((s) => s.toUpperCase());
let numInts = numberArray.map((n) => n.toFixed());
// console.log(ucStrings);
// console.log(numInts);

// let mixedArray = getTuple("world", 1.25);

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Brad", "John", "Jill"]);

numArray.push(5);
