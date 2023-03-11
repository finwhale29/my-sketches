// Do not change

const canvasSketch = require("canvas-sketch");
const { arePointsCollinear } = require("canvas-sketch-util/geometry");
const { drawSVGPath } = require("canvas-sketch-util/penplot");
const random = require("canvas-sketch-util/random");

const W = 600;
const H = 600;

const settings = {
  dimensions: [W, H],
  // animate: false,
  animate: true,
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

const sq = (x) => {
  return x * x;
};

const distance = (v1, v2) => {
  return Math.sqrt(sq(v2.x - v1.x) + sq(v2.y - v1.y));
};

class Dot {
  constructor(x, y) {
    // console.log("Dot's constructor", x, y);
    this.pos = new Vector(x, y);
    this.velocity = new Vector(random.range(-10, 10), random.range(-10, 10));
    this.radius = random.range(5, 15);
  }

  update() {
    if (this.pos.y < this.radius || this.pos.y > H - this.radius) {
      this.velocity.y = this.velocity.y * -1;
    }
    if (this.pos.x < this.radius || this.pos.x > W - this.radius) {
      this.velocity.x *= -1;
    }

    if (distance(this.pos, new Vector(300, 300)) + this.radius > RRR) {
      this.velocity.x = 0;
      this.velocity.y = 0;
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

  draw(typeContext, j) {
    // console.log("dot " + j + "x=", this.pos.x, "y=,", this.pos.y);
    typeContext.beginPath();

    typeContext.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);

    typeContext.fillStyle = "lawnGreen";
    typeContext.fill();

    typeContext.strokeStyle = "black";
    typeContext.stroke();
  }
}
const RRR = 250;
const DOT_COUNT = 100;

const sketch = () => {
  const dots = [];
  for (i = 0; i < DOT_COUNT; i++) {
    const aNewDot = new Dot(W / 2, H / 2);
    dots.push(aNewDot);
    // console.log("dots.length", dots.length);
  }

  // console.log("dots", dots[0].pos.x);

  return ({ typeContext, width, height, time }) => {
    console.log("time", time);
    typeContext.fillStyle = "lightblue";
    typeContext.fillRect(0, 0, W, H);

    typeContext.beginPath();
    typeContext.arc(W / 2, H / 2, RRR, 0, 2 * Math.PI);
    typeContext.fillStyle = "AliceBlue";
    typeContext.fill();

    // if (time > 5) {
    for (let j = 0; j < dots.length; j++) {
      const dot = dots[j];
      dot.update();
    }
    // }

    for (let j = 0; j < dots.length; j++) {
      const dot = dots[j];
      dot.draw(typeContext, j);
    }
  };
};

canvasSketch(sketch, settings);
