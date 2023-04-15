// Create the shape class and the three shape classes that extend it
class Shape {
  constructor(color) {
    // need the user input to be able to change the color
    this.color = color;
  }
}

class Triangle extends Shape {
  render() {
    //Credit: mdn basic shapes
    return `<polygon points="150,10 270,190 30,190" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="30" y="30" width="240" height="240" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Circle, Square };
