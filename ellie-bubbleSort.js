const swap = (array, i, j) => {
  const storeNumber = array[i];
  array[i] = array[j];
  array[j] = storeNumber;

  return array;
};

const bubbleSort = (array) => {
  console.log("WLL");
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let aboveNumberIndex = array.length - (j + 1);
      let belowNumberIndex = array.length - j;
      console.log(array[aboveNumberIndex], array[belowNumberIndex]);
      if (array[aboveNumberIndex] < array[belowNumberIndex]) {
        swap(array, aboveNumberIndex, belowNumberIndex);
      }
    }
  }
  return array;
};

console.log(bubbleSort([0, 1, -4, 3, -6, 2, 0, -8, -5, 9, 6, 0]));
