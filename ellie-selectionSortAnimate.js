const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [600, 600],
  animate: true,
  fps: 2,
  playbackRate: "throttle",
};

const swap = (array, i, j) => {
  const storeNumber = array[i];
  array[i] = array[j];
  array[j] = storeNumber;

  return array;
};

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

const sketch = () => {
  let heights = [];
  for (let i = 0; i < 10; i++) {
    let something = Math.floor(Math.random() * 600);
    heights.push(something);
  }
  console.log("heights", heights);
  let p = 0;
  setInterval(() => {
    // next step
    // CHANGE THE CONTENT OF HEIGHTS
  }, 1000);

  return ({ context, width, height, time }) => {
    // context.clearRect(0, 0, 600, 600);
    console.log("time", time);
    if (p >= heights.length) {
      return;
    }
    swap(heights, p, min(heights, p));
    p++;

    context.fillStyle = `hsl(${Math.floor((time * 10) % 255)}, 100%, 80%)`;
    context.fillRect(0, 0, width, height);

    context.strokeStyle = "black";

    context.lineWidth = 2;

    let heights2 = heights;

    console.log(heights);
    for (let i = 0; i < 10; i++) {
      context.beginPath();
      // context.moveTo(i * 60, 600);
      // context.lineTo(i * 60, 600 - heights[i]);
      // context.stroke();

      context.rect(10 * 5 * i, 600 - heights2[i], 50, heights2[i]);
      context.stroke();
    }
  };
};

canvasSketch(sketch, settings);
