const foo = [2, 1, 4, 3];

const greatestToLeast = (arr) => {
  let ret = [];
  let numbers = [];

  ret.push(Math.max(...foo));

  const tree = (arr) => {
    for (j = 0; j < numbers.length; j++) {
      for (let i = 0; i < arr.length; i++) {
        if (foo[i] < Math.max(...foo) || foo[i] > Math.max(...foo)) {
          numbers.push(foo[i]);
        }
      }
      ret.push(Math.max(...numbers));
      console.log(ret);
      return ret;
    }
  };
};
greatestToLeast(foo);
