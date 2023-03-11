const foo = [1, 2, 3, 4];

const reverse = (arr) => {
  let ret = [];
  for (let i = arr.length - 1; i > -1; i--) {
    ret.push(arr[i]);
  }

  return ret;
};

console.log(reverse(foo));
