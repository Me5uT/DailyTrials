// Way 1
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};

circle.draw();

// Way 2

function circle2() {
  return {
    radius: 1,
    location: {
      x: 1,
      y: 1,
    },
    draw: function () {
      console.log("draw2");
    },
  };
}

const funcObj = circle2();
funcObj.draw();
funcObj.constructor;
// Way 3

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw3");
  };
}

const constructorFunc = new Circle(1);

constructorFunc.draw();
constructorFunc.constructor;

Circle.name;
Circle.length;
Circle.constructor;
const propName = "centre-location";
constructorFunc[`${propName}`] = { x: 1 };
console.log(constructorFunc);
delete constructorFunc["draw"];
console.log(constructorFunc);
