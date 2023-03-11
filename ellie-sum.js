const foo = [1, 2, 3, 4, 100];

const sum = (arr) => {
  let ret = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    arr[i];
    ret += arr[i];
  }
  return ret;
};

sum(foo);
// console.log(sum(foo));
