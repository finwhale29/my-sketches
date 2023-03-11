const canvasSketch = require("canvas-sketch");
const { arePointsCollinear } = require("canvas-sketch-util/geometry");
const { drawSVGPath } = require("canvas-sketch-util/penplot");
const random = require("canvas-sketch-util/random");

const W = 600;
const H = 600;

// const drawBetween2Dots = (context, dot1, dot2) => {
//   context.beginPath(); // Start a new path
//   context.moveTo(dot1.pos.x, dot1.pos.y); // Move the pen to (30, 50)
//   context.lineTo(dot2.pos.x, dot2.pos.y); // Draw a line to (150, 100)
//   context.stroke(); // Render the path
// };

// const distance = (dot1, dot2) => {
//   return Math.sqrt(sq(dot1.pos.x - dot2.pos.x) + sq(dot1.pos.y - dot2.pos.y));
// };

const settings = {
  dimensions: [W, H],
  // animate: false,
  animate: false,
  fps: 10,
  playbackRate: "throttle",
};

class Vector {
  constructor(x, y) {
    // console.log("Point's constructor", x, y);
    this.x = x;
    this.y = y;
  }
}

// const sq = (x) => {
//   return x * x;
// };
const colors = [
  "lightgreen",
  "lightblue",
  "lightgray",
  "lavender",
  "lightpink",
  "greenyellow",
  "violet",
];

class Dot {
  constructor(x, y) {
    // console.log("Dot's constructor", x, y);
    this.pos = new Vector(x, y);
    this.velocity = new Vector(random.range(-10, 10), random.range(-10, 10));
    // this.radius = random.range(5, 15);
    this.radius = 10;
  }

  update() {
    if (this.pos.y < this.radius || this.pos.y > H - this.radius) {
      this.velocity.y = this.velocity.y * -1;
    }
    if (this.pos.x < this.radius || this.pos.x > W - this.radius) {
      this.velocity.x *= -1;
    }

    // if (this.pos.x < W && this.pos.y < H) {
    this.pos.x = this.pos.x + this.velocity.x;
    this.pos.y = this.pos.y + this.velocity.y;
    // typeContext.rotate();
    // } else {
    //   this.pos.x = 0;
    //   this.pos.y = 0;
    // }
  }

  draw(context, j) {
    context.beginPath();

    // context.arc(
    //   this.pos.x,
    //   this.pos.y,
    //   // (this.radius = random.range(5, 10)),
    //   0,
    //   2 * Math.PI
    // );
    context.arc(this.pos.x, this.pos.y, 10, 0, 2 * Math.PI);

    context.fillStyle = colors[Math.floor(this.radius) % 6];
    context.fill();

    context.strokeStyle = "black";
    context.stroke();
  }
}

const DOT_COUNT = 10;

const sketch = () => {
  const dots = [];
  for (i = 0; i < DOT_COUNT; i++) {
    const aNewDot = new Dot(W / 2, H / 2);
    dots.push(aNewDot);
  }

  return ({ context, width, height, time }) => {
    console.log("time", time);
    context.fillStyle = "white";
    context.fillRect(0, 0, W, H);

    // if (time > 5) {
    for (let j = 0; j < dots.length; j++) {
      const dot = dots[j];
      dot.update();
    }
    // }

    // drawBetween2Dots(typeContext, dots[0], dots[1]);
    // drawBetween2Dots(typeContext, dots[0], dots[2]);
    // drawBetween2Dots(typeContext, dots[0], dots[3]);
    // drawBetween2Dots(typeContext, dots[0], dots[4]);
    // drawBetween2Dots(typeContext, dots[1], dots[2]);
    // drawBetween2Dots(typeContext, dots[1], dots[3]);
    // drawBetween2Dots(typeContext, dots[1], dots[4]);
    // drawBetween2Dots(typeContext, dots[2], dots[3]);
    // drawBetween2Dots(typeContext, dots[2], dots[4]);
    // drawBetween2Dots(typeContext, dots[3], dots[4]);

    // for (let i = 0; i < DOT_COUNT - 1; i++) {
    //   for (let j = i + 1; j < DOT_COUNT; j++) {
    //     const d = distance(dots[i], dots[j]);
    //     if (d < 250) {
    //       context.lineWidth = (0.01 * (350 - d)) / 5;
    //       // drawBetween2Dots(context, dots[i], dots[j]);
    //     }
    //   }
    // }
    context.lineWidth = 1;
    for (let j = 0; j < dots.length; j++) {
      const dot = dots[j];
      dot.draw(context, j);
    }
  };
};

canvasSketch(sketch, settings);
