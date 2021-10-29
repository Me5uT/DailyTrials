// basic types

let var1 = "text";
const var2 = "text";
const var3: string = "text";

interface User {
  name: string;
  age: number;
}

const var5: User = {
  name: "thomas",
  age: 20,
};

// functions

function func1(user: User): number {
  return user.age;
}

function func2(user: User): void {
  //do something
}

function func3(user: User) {
  // return 23 | "Age<=50"
  if (user.age > 50) {
    return 23;
  } else {
    return "Age<=50";
  }
}

// any

let var6: any;

var6 = "text";

let var7: string = var6; // no error

//unknown

let var8: unknown;

let var9: string = var8 as string;

// Arrays

let var10: Array<string>;

var10 = ["asd"];

let var11: Array<{ name: string }>;

var11 = [
  {
    name: "s",
  },
  {
    name: "a",
  },
];

// intermediate

type Status1 = "ready" | "notReady" | "inProgress";

type Status2 = {
  name: string;
};

interface Status3 {
  name: string;
}

let var12: Status1 = "ready";

type StringOrArray = string | Array<string>;

function toArray(input: StringOrArray): Array<string> {
  if (typeof input === "string") {
    return [input];
  }
  return input;
}

// never
type Status4 = string & number;

// optional variables

type User2 = {
  name: string;
  team?: number;
};

let var13: User2 = {
  name: "Mesut",
  team: 1,
};

const var14 = var13.team; // number | undefined

const var15 = var13.team!; // number

// Utility types

let fullUser: Required<User2>;

fullUser = {
  name: "asd",
  team: 2,
};

let partialUser: Partial<User2>;

partialUser = {};

interface Users1 {
  [userName: string]: User2;
}

const users1: Users1 = {
  mesut: {
    name: "caga",
    team: 3,
  },
};

// Generics
// Array<T>

function castToType<T>(obj1: any) {
  return obj1 as T;
}

let result = castToType<string>(23);

// Type inference

function returnSelf<T>(obj1: T) {
  return obj1 as T;
}

let val1 = "34";

const val2 = returnSelf(val1);

function createArray<T>(obj1: T, obj2: T) {
  return [obj1, obj2];
}

const val3 = createArray("asd", "fdgd");

// Type predicates

interface IYoungUser {
  name: string;
  age: number;
}

interface IOldUser {
  name: string;
  age: number;
}

function isOldUser(user: IYoungUser | IOldUser): user is IOldUser {
  return user.age > 50;
}

const newUser = {
  name: "mesut",
  age: 32,
};

if (isOldUser(newUser)) {
  newUser;
}

// Types from types

// keyof
type Point = {
  x: number;
  y: string;
};

type P = keyof Point;
const var16: P = "y";

const var17: Point["x"] = 12;

const var18: Point[keyof Point] = 1;

// Conditional Types

type checkString<T> = T extends "string" ? string : any;

//const var19: checkString<"anything"> = 11; // number
const var19: checkString<"string"> = "text"; // string
//const var19: checkString<string> = "text"; // string
