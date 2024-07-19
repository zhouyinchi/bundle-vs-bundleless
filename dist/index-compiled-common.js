"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Person = exports.Man = void 0;
var _util = require("./util");
class Person {
  constructor(name) {
    this.name = name;
    this.a = 'a';
  }
  sayHello() {
    (0, _util.b)();
    console.log(`Hello, my name is ${this.name}`);
  }
}
exports.Person = Person;
class Man extends Person {
  sayHello() {
    console.log(`Hello, my name is ${this.name}, I am man`);
  }
}
exports.Man = Man;
