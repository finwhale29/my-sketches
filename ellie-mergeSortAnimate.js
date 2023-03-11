const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [600, 600],
  animate: false,
  fps: 2,
  playbackRate: "throttle",
};

const sketch = () => {
  let heights = [];
  for (let i = 0; i < 10; i++) {
    let something = Math.floor(Math.random() * 600);
    heights.push(something);
  }

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
  const mergeSort = (array) => {
    if (array.length === 1) {
      return array;
    }

    let middleIndex = Math.ceil(array.length / 2);

    let leftSlice = array.slice(0, middleIndex);
    let rightSlice = array.slice(middleIndex);

    let sortedLeft = mergeSort(leftSlice);
    let sortedRight = mergeSort(rightSlice);

    let merged = merge2SortedArrays(sortedLeft, sortedRight);
    console.log("merged", merged);

    return merged;
  };

  let p = 0;

  return ({ context, width, height, time }) => {
    if (array.length === p) {
      return array;
    }

    let middleIndex = Math.ceil(array.length / 2);

    let leftSlice = array.slice(0, middleIndex);
    let rightSlice = array.slice(middleIndex);

    let sortedLeft = mergeSort(leftSlice);
    let sortedRight = mergeSort(rightSlice);

    let merged = merge2SortedArrays(sortedLeft, sortedRight);
    console.log("merged", merged);

    let heights2 = heights;

    for (let i = 0; i < heights.length; i++) {
      context.beginPath();
      context.rect(10 * 5 * i, 600 - heights2[i], 50, heights2[i]);
      context.stroke();
    }
  };
};

canvasSketch(sketch, settings);
