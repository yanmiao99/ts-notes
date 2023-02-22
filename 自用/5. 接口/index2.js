"use strict";
// 在 TypeScript 工作中，interface 是一个非常重要的概念，它通常用于以下场景：
//
// 定义对象的类型：interface 可以用来定义对象的类型，指定对象应该具有哪些属性、属性的类型和方法。这在项目开发中非常有用，因为它可以提高代码的可读性和可维护性，以及类型安全性。
//
// 定义函数的类型：interface 也可以用来定义函数的类型，指定函数的参数类型和返回值类型。这样可以在编译时检查函数的参数和返回值类型是否正确，提高代码的健壮性和可维护性。
//
// 扩展类型定义：interface 可以用来扩展已有的类型定义。这在大型项目中非常有用，因为它可以避免重复定义类型和属性，减少代码冗余，提高代码的可维护性。
//
// 类型注解：interface 可以用作类型注解，使得代码更易于阅读和理解。使用接口作为类型注解，可以避免手动书写大量的类型定义，提高开发效率和代码的可读性。
//
// 下面是一些示例代码，用于说明 TypeScript 中 interface 的使用场景：
const person = {
    name: "Alice",
    age1: 30,
    greet: function (name) {
        console.log(`Hello, ${name}, my name is ${this.name}.`);
    },
};
person.greet("Bob"); // 输出 "Hello, Bob, my name is Alice."
const add = function (a, b) {
    return a + b;
};
console.log(add(1, 2)); // 输出 3
const alice = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
    greet: function (name) {
        console.log(`Hello, ${name}, my name is ${this.name}.`);
    },
};
// 类型注解
function displayPerson(person) {
    console.log(`Name: ${person.name}, Age: ${person.age}, Email: ${person.email}`);
}
displayPerson(alice); // 输出 "Name: Alice, Age: 30, Email: alice@example.com"
// 这些使用场景可以帮助我们在项目开发中更加高效、可维护、健壮和类型安全。
