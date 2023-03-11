const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");
const canvasW = 600;
const canvasH = 600;

const settings = {
  dimensions: [canvasW, canvasH],
  animate: true,
  fps: 3,
  playbackRate: "throttle",
};

class Circle {
  constructor(fillIn, radius) {
    this.fillIn = fillIn;
    this.radius = radius;
  }

  drawCircle = (typeContext) => {
    if (this.fillIn) {
      typeContext.beginPath();
      typeContext.fillStyle = "rgba(255, 0, 0, 0.1)";
      typeContext.arc(300, 300, this.radius, 0, 2 * Math.PI);
      typeContext.fill();
    } else {
      typeContext.beginPath();
      typeContext.strokeStyle = "green";
      typeContext.arc(300, 300, this.radius, 0, 2 * Math.PI);
      typeContext.stroke();
    }
  };
}

const sketch = () => {
  return ({ typeContext, width, height }) => {
    mylist = [true, false];

    // const myCircle = new Circle(Math.random() * 50, random.choice(mylist));
    // const myCircle = new Circle(50, "Yes");

    const circles = [];
    for (let i = 10; i < 200; i += 20) {
      circles.push(new Circle(Math.random() < 0.5, random.range(20, 100)));
    }

    for (let j = 0; j < circles.length; j++) {
      circles[j].drawCircle(typeContext);
    }
    typeContext.fillStyle = "white";
    typeContext.fillRect(0, 0, width, height);

    typeContext.translate(canvasW / 2, canvasH / 2);

    const rectH = 10;

    const radius = 100;
    const tickCount = 12;

    for (let i = 0; i < tickCount; i++) {
      const rectW = random.range(1, 500);
      console.log(rectW);
      typeContext.save();
      typeContext.rotate(math.degToRad((360 / tickCount) * i));
      typeContext.translate(radius, 0);
      typeContext.fillStyle = "red";
      typeContext.fillRect(0, -0.5 * rectH, rectW, rectH);
      typeContext.restore();
    }

    for (let i = 0; i < tickCount; i++) {
      const rotateDegree = (360 / tickCount) * i;
      typeContext.save();
      typeContext.translate(
        radius * Math.cos(math.degToRad(rotateDegree - 180)),
        radius * Math.sin(math.degToRad(rotateDegree - 180))
      );
      typeContext.rotate(math.degToRad(rotateDegree));
      typeContext.fillStyle = "green";
      typeContext.fillRect(0, -0.5 * rectH, rectW, rectH);
      typeContext.restore();
    }
  };
};

canvasSketch(sketch, settings);
