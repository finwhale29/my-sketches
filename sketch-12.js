const canvasSketch = require("canvas-sketch");

const degree = (2 * Math.PI) / 360;
const settings = {
  dimensions: [600, 600],
  animate: true,
  fps: 20,
  playbackRate: "throttle",
};

const frequency = 1; // sec
const sketch = () => {
  return ({ context, width, height }) => {
    const now = new Date().valueOf();
    const nowFraction = now % (frequency * 1000);
    const angle = (nowFraction * 180) / (frequency * 1000);
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    class Vector {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
    }

    class Line {
      constructor(x, y) {
        this.pos = new Vector(x, y);
        this.velocity = new Vector(
          random.range(-10, 10),
          random.range(-10, 10)
        );
      }

      update() {
        this.pos.x = this.pos.x + this.velocity.x;
        this.pos.y = this.pos.y + this.velocity.y;
      }

      draw(context) {
        context.beginPath();
        context.moveTo(250 + 30, 250);
        context.lineTo(350 - 30, 250);
        context.stroke();
      }
    }
    context.translate(300, 300);

    // context.save();
    // context.translate(0, -20 - 20 * Math.sqrt(2));
    // context.rotate(angle);
    // context.beginPath();
    // context.moveTo(-20, 0);
    // context.lineTo(20, 0);
    // context.stroke();
    // context.restore();

    const colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
    ];

    for (i = 0; i < 360; i++) {
      context.save();
      context.rotate(i * 1 * degree);
      context.translate(0, -20 - 20 * Math.sqrt(2));
      context.rotate(angle * degree);
      context.beginPath();
      context.strokeStyle = colors[Math.floor(i / 10) % 7];
      context.moveTo(-20, 0);
      context.lineTo(50, 0);
      context.stroke();
      context.restore();
    }

    // context.save();
    // context.translate(-20 - 20 * Math.sqrt(2), 0);
    // context.rotate(angle);
    // context.beginPath();
    // context.moveTo(0, -20);
    // context.lineTo(0, 20);
    // context.stroke();
    // context.restore();

    // context.save();
    // context.translate(20 + 20 * Math.sqrt(2), 0);
    // context.rotate(angle);
    // context.beginPath();
    // context.moveTo(0, -20);
    // context.lineTo(0, 20);
    // context.stroke();
    // context.restore();

    // context.beginPath();
    // context.moveTo(250 + 30, 250);
    // context.lineTo(350 - 30, 250);
    // context.stroke();

    // context.beginPath();
    // context.moveTo(250, 250 + 30);
    // context.lineTo(250, 350 - 30);
    // context.stroke();

    // context.beginPath();
    // context.moveTo(350 - 30, 350);
    // context.lineTo(250 + 30, 350);
    // context.stroke();

    // context.beginPath();
    // context.moveTo(350, 350 - 30);
    // context.lineTo(350, 250 + 30);
    // context.stroke();

    // context.rotate(Math.PI / 4);
    // context.translate(125, -300);

    // context.beginPath();
    // context.moveTo(250 + 30, 250);
    // context.lineTo(350 - 30, 250);
    // context.stroke();

    // context.beginPath();
    // context.moveTo(250, 250 + 30);
    // context.lineTo(250, 350 - 30);
    // context.stroke();

    // context.beginPath();
    // context.moveTo(350 - 30, 350);
    // context.lineTo(250 + 30, 350);
    // context.stroke();

    // context.beginPath();
    // context.moveTo(350, 350 - 30);
    // context.lineTo(350, 250 + 30);
    // context.stroke();
  };
};

canvasSketch(sketch, settings);
