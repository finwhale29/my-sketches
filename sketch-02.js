const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [600, 600],
};

const sketch = () => {
  return ({ typeContext, width, height }) => {
    // typeContext.fillStyle = 'black';
    // typeContext.fillRect(0, 0, width, height);

    // typeContext.translate(100, 100)

    // typeContext.fillStyle = 'lavender'
    // typeContext.fillRect(0, 0, 100, 100)

    // Moved square

    typeContext.translate(300, 300);
    typeContext.rotate(Math.PI / 4);

    typeContext.fillStyle = "red";
    // typeContext.fillRect(0, 0, 80, 80);
    typeContext.fillRect(0, 0, -80, -80);
    typeContext.fillStyle = "blue";
    typeContext.fillRect(0, 0, 80, 80);
    typeContext.fillStyle = "yellow";
    typeContext.fillRect(80, 0, -80, -80);
    typeContext.fillStyle = "green";
    typeContext.fillRect(0, 0, -80, 80);

    // Reset current transformation matrix to the identity matrix
    // typeContext.setTransform(1,0,0,1,1,1);

    // Unmoved square
    // typeContext.fillStyle = 'gray';
    // typeContext.fillRect(0, 0, 80, 80);
  };
};
canvasSketch(sketch, settings);

//bottom right corner, angel
//top left of square compared to top left of canvas)
//width (the bigger the number the thiner)
//length
// x
// y
