interface IIndex {
  name: string,
  age: number,
  add: (num: number) => string
}


const test: IIndex = {
  name: 'zs',
  age: 19,
  add: (num) => {
    return num + ''
  }
}

console.log(test.add(123));
