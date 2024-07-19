import {b} from './util'
class Person {
  constructor(name) {
    this.name = name;
    this.a = 'a';
  }

  sayHello() {
    b()
    console.log(`Hello, my name is ${this.name}`);
  }
}
class Man extends Person {
  sayHello() {
    console.log(`Hello, my name is ${this.name}, I am man`);
  }
}

export {
    Person,
    Man
}
