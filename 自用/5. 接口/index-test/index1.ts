// interface IndexInterface {
//   name: string,
//   age: number
// }

namespace MyApp {
  export interface IndexInterface {
    name: string;
    age: number;
  }
}





const indexTest: MyApp.IndexInterface = {
  name: '张三',
  age: 18
}






console.log(indexTest);
