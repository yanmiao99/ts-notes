// 函数的类型

const num = (x: number, y: number): number => {
  return x + y;
}

console.log(num);

// 函数可选
// 需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必需参数了：
function buildName(firstName: string, lastName?: string):string {
  if (lastName) {
    return firstName + ' ' + lastName;
  } else {
    return firstName;
  }
}

let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

