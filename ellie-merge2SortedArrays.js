const merge2SortedArrays = (a1, a2) => {
  let newList = [];
  let cycle1 = 0;
  let cycle2 = 0;
  while (newList.length < a1.length + a2.length) {
    if (cycle2 === a2.length) {
      newList.push(a1[cycle1]);
      cycle1 += 1;
    } else if (cycle1 === a1.length) {
      newList.push(a2[cycle2]);
      cycle2 += 1;
    } else {
      if (a1[cycle1] <= a2[cycle2]) {
        newList.push(a1[cycle1]);
        cycle1 += 1;
      }
      if (a2[cycle2] < a1[cycle1]) {
        newList.push(a2[cycle2]);
        cycle2 += 1;
      }
    }
  }

  return newList;
};

console.log(merge2SortedArrays([2], [-3, -1, 4, 7, 9, 10, 100, 20000]));
