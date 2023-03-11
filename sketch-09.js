const canvasSketch = require("canvas-sketch");

const getCC = (letterLength) => Math.ceil(Math.sqrt(letterLength));
// const getCC = (letterLength) => {
//   let cc = 1;
//   while (true) {
//     if (letterLength < cc * cc) {
//       return cc;
//     }
//     cc++;
//   }
// };

const settings = {
  dimensions: [2048, 2048],
};

let manager;
let text;

const drawCross = (typeContext, x, y) => {
  typeContext.strokeStyle = "red";
  typeContext.beginPath();
  typeContext.moveTo(0, y);
  typeContext.lineTo(2048, y);
  typeContext.stroke();

  typeContext.beginPath();
  typeContext.moveTo(x, 0);
  typeContext.lineTo(x, 2048);
  typeContext.stroke();
};

const drawLetter = (typeContext, letter, x, y) => {
  const metrics = typeContext.measureText(letter);
  console.log(metrics);
  const mx = metrics.actualBoundingBoxLeft * -1;
  const my = metrics.actualBoundingBoxAscent * -1;
  const mw =
    metrics.actualBoundingBoxRight - metrics.actualBoundingBoxLeft * -1;
  const mh =
    metrics.actualBoundingBoxDescent - metrics.actualBoundingBoxAscent * -1;

  typeContext.translate(x, y);
  typeContext.translate(-mw / 2 - mx, -mh / 2 - my);
  typeContext.fillText(letter, 0, 0);
  typeContext.strokeStyle = "black";
  typeContext.beginPath();
  typeContext.moveTo(mx + mw / 2, my);
  typeContext.lineTo(mx + mw / 2, my + mh);
  typeContext.stroke();

  typeContext.beginPath();
  typeContext.moveTo(mx, my + mh / 2);
  typeContext.lineTo(mx + mw, my + mh / 2);
  typeContext.stroke();

  typeContext.beginPath();
  typeContext.moveTo(mx, my);
  typeContext.lineTo(mx, my + mh);
  typeContext.stroke();

  typeContext.beginPath();
  typeContext.moveTo(mx + mw, my);
  typeContext.lineTo(mx + mw, my + mh);
  typeContext.stroke();

  typeContext.beginPath();
  typeContext.moveTo(mx, my);
  typeContext.lineTo(mx + mw, my);
  typeContext.stroke();

  typeContext.beginPath();
  typeContext.moveTo(mx, my + mh);
  typeContext.lineTo(mx + mw, my + mh);
  typeContext.stroke();
};

const sketch = () => {
  return ({ typeContext, width, height }) => {
    typeContext.fillStyle = "white";
    typeContext.fillRect(0, 0, width, height);

    typeContext.fillStyle = "black";
    typeContext.font = "500px Tahoma";
    typeContext.textBaseline = "top";

    const letters = "A".split("");

    const cc = getCC(letters.length);

    const step = width / cc / 2;
    for (let i = 0; i < cc; i++) {
      for (let j = 0; j < cc; j++) {
        if (j + cc * i < letters.length) {
          typeContext.save();
          drawCross(typeContext, step + step * (2 * j), step + step * (2 * i));
          drawLetter(
            typeContext,
            letters[j + cc * i],
            step + step * (2 * j),
            step + step * (2 * i)
          );
          typeContext.restore();
        }
      }
    }

    // const url = "https://picsum.photos/200";

    // const loadMeSomeImage = (url) => {
    //   return new Promise((resolve, reject) => {
    //     const img = new Image();
    //     img.onload = () => resolve(img);
    //     img.onerror = () => reject();
    //     img.src = url;
    //   });
    // };

    // const start = async () => {
    //   const img = await loadMeSomeImage(url);
    //   console.log("image width", img.width);
    //   console.log("this line");
    // };

    // const start = () => {
    //   loadMeSomeImage(url).then((img) => {
    //     console.log("image width", img.width);
    //   });
    //   console.log("this line");
    // };

    start();

    // if (letters.length <= 2 * 2) {
    //   for (let i = 0; i < 2; i++) {
    //     for (let j = 0; j < 2; j++) {
    //       typeContext.save();
    //       drawCross(typeContext, 512, 512);
    //       drawLetter(
    //         typeContext,
    //         letters[i + j + i],
    //         512 + 512 * (2 * i),
    //         512 + 512 * (2 * j)
    //       );
    //       typeContext.restore();
    //     }
    //   }
    // } else if (letters.length <= 3 * 3) {
    //   const step = width / 3 / 2;
    //   for (let i = 0; i < 3; i++) {
    //     for (let j = 0; j < 3; j++) {
    //       if (j + 3 * i < letters.length) {
    //         typeContext.save();
    //         drawCross(typeContext, step + step * (2 * j), step + step * (2 * i));
    //         drawLetter(
    //           typeContext,
    //           letters[j + 3 * i],
    //           step + step * (2 * j),
    //           step + step * (2 * i)
    //         );
    //         typeContext.restore();
    //       }
    //     }
    //   }
    // }

    // typeContext.save();
    // drawCross(typeContext, 512 * 3, 512);
    // drawLetter(typeContext, letters[i], 512 * 3, 512);
    // typeContext.restore();

    // typeContext.save();
    // drawCross(typeContext, 512, 512 * 3);
    // drawLetter(typeContext, letters[i], 512, 512 * 3);
    // typeContext.restore();

    // typeContext.save();
    // drawCross(typeContext, 512 * 3, 512 * 3);
    // drawLetter(typeContext, letters[i], 512 * 3, 512 * 3);
    // typeContext.restore();
  };
};
// canvasSketch(sketch, settings);

const onKeyUp = (e) => {
  text = e.key;
  manager.render();
};

document.addEventListener("keyup", onKeyUp);

const start = async () => {
  manager = await canvasSketch(sketch, settings);
};

start();
