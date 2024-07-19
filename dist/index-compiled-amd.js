define(["exports", "./util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Person = _exports.Man = void 0;
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
  _exports.Person = Person;
  class Man extends Person {
    sayHello() {
      console.log(`Hello, my name is ${this.name}, I am man`);
    }
  }
  _exports.Man = Man;
});
