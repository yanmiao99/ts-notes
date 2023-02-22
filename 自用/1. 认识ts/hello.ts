// 1. 我在 text 形参中写了 string 类型的校验 , 所以传入的类型必须是 string ,否则报错
const hello = (text: String) => {
  document.write('hello' + text)
}

// 2. 我如果不传递参数或者传递一个非string 类型的值也会报错
hello('world')

// 3. 手动编译
// 在终端中 运行 tec ./hello.ts 则会自动编译一个 js 文件

// 4. 自动编译
// 4.1 执行 tsc --init
// 4.2 执行 tsc -p ./tsconfig.json --watch
