// 接口 Interfaces


import {TestInterface} from "./interfaceList";

interface PersonInterface1 {
  // readonly id: number; // 只能在初始化的时候定义, 后续不能更改
  name: string;
  age?: number;  // 添加问号, 就可以把age 定义成可选的
  [propName: string]: any;
}

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
let tom: PersonInterface1 = {
  name: 'Tom',
  age: 1,
  ss: 'sdf',
  ss123: 'sdf'
};


console.log(tom);



let index:TestInterface = {
  name:'zs',
  age:18
}

console.log(index);


// 实在写不出来的终级解决方案
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];




