// 联合类型


const getNum = () => {
  return '10'
}


let num: number | string = getNum()

console.log(num);  // string | number


const num1 = (n: string | number) => {
  // console.log(n.length)
}


// 可能为多种类型的变量
let myVariable: string | number; // 变量 myVariable 可以是字符串类型或数字类型

myVariable = "Hello, world!"; // 合法赋值
myVariable = 123; // 合法赋值
// myVariable = true; // 不合法赋值，因为布尔类型不是 myVariable 的一种类型

// 处理不同类型的返回值
function getStatus(): 'success' | 'error' {
  // 返回值可以是字符串 "success" 或 "error"
  const isSuccess = Math.random() < 0.5;
  return isSuccess ? "success" : "error";
  // return '123' // 返回的不是 success 或者 error
}

if (getStatus() === "success") {
  console.log("操作成功");
} else {
  console.log("操作失败");
}

// 匹配不同类型的值
interface SuccessResponse {
  status: "success";
  data: string;
}

interface ErrorResponse {
  status: "error";
  message: string;
}

function handleResponse(response: SuccessResponse | ErrorResponse) {
  if (response.status === "success") {
    console.log("操作成功，数据为：" + response.data);
  } else {
    console.log("操作失败，错误信息为：" + response.message);
  }
}

const successResponse: SuccessResponse = {status: "success", data: "Hello, world!"};
const errorResponse: ErrorResponse = {status: "error", message: "请求失败"};

handleResponse(successResponse); // 打印 "操作成功，数据为：Hello, world!"
handleResponse(errorResponse); // 打印 "操作失败，错误信息为：请求失败"




