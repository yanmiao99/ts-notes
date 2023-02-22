"use strict";
// 1. 定义了 ts 的类型, 让形参只能输入string类型
const hello = (text) => {
    console.log('hello' + text);
    let num = 123;
    console.log(num);
};
// 2. 调用了函数
// 2.1 如果没有传值 或者传值的类型不是 string 类型, 则会报错
hello('world');
// 3. 手动调试
// 在终端中 使用 tsc hello.ts 进行手动编译
// 4. 自动编译
// 4.1 tsc --init
// 4.2 tsc -p ./tsconfig.json --watch
