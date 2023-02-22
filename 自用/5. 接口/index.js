"use strict";
// 接口 Interfaces
Object.defineProperty(exports, "__esModule", { value: true });
//
// let tom: PersonInterface = {
//   name: 'Tom',
//   age: 25
// };
// 属性不能少
// let tom: PersonInterface = {
//   name: 'Tom',
//   // age: 25
// };
// 属性不能多
let tom = {
    name: 'Tom',
    age: 1,
    ss: 'sdf',
    ss123: 'sdf'
};
console.log(tom);
let index = {
    name: 'zs',
    age: 18
};
console.log(index);
// 实在写不出来的终级解决方案
let list = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
