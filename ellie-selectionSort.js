const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [600, 600],
};

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

const sketch = () => {
  return ({ context }) => {
    context.fillStyle = "pink";
    context.fillRect(40 * 0, 600 - 500, 40, 500);
    context.fillStyle = "lightcoral";
    context.fillRect(40 * 1, 600 - 300, 40, 300);
    context.fillStyle = "khaki";
    context.fillRect(40 * 2, 600 - 430, 40, 430);
    context.fillStyle = "aquamarine";
    context.fillRect(40 * 3, 600 - 200, 40, 200);
    context.fillStyle = "moccasin";
    context.fillRect(40 * 4, 600 - 470, 40, 470);
    context.fillStyle = "lightcyan";
    context.fillRect(40 * 5, 600 - 550, 40, 550);
    context.fillStyle = "lavender";
    context.fillRect(40 * 6, 600 - 260, 40, 260);

    //list:(500, 300, 430, 200, 470, 550, 260)
  };
};

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

const min = (array, start) => {
  let minimum = array[start];
  let position = start;
  for (let i = start + 1; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i];
      position = i;
    }
  }
  return position;
};
console.log(min([1, 2, 3, -3, 4, 5], 4));

const swap = (array, i, j) => {
  const storeNumber = array[i];
  array[i] = array[j];
  array[j] = storeNumber;

  return array;
};

const selectionSort = (array) => {
  for (i = 0; i < array.length; i++) {
    swap(array, i, min(array, i));
    console.log("minimum", min(array, i));
  }
  return array;
};

console.log("result: ", selectionSort([500, -300, -430, 200, 470, 550, 260]));

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

// canvasSketch(sketch, settings);
