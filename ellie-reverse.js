const foo = [1, 2, 3, 4, 100];

const reverse = (arr) => {
  let ret = [];
  for (let i = arr.length - 1; i > -1; i--) {
    ret.push(arr[i]);
  }
  return ret;
};

// revers
console.log(reverse(foo));
