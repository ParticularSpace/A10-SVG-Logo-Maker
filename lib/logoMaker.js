// Imprt the shapes from the shapes.js file
const { Triangle, Circle, Square } = require("./shapes");

// Main class for creating the logo
class LogoMaker {
  constructor(text, textColor, shapeType, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeType = shapeType;
    this.shapeColor = shapeColor;
  }

  // Get user input and create the shape type assign to the shapeObject variable
  createShape() {
    let shapeObject;
    switch (this.shapeType) {
        case "Triangle":
            shapeObject = new Triangle(this.shapeColor);
            break;
        case "Circle":
            shapeObject = new Circle(this.shapeColor);
            break;
        case "Square":
            shapeObject = new Square(this.shapeColor);
            break;
        default:
            throw new Error("Invalid shape type");
  }
    return shapeObject;
    }


    // Create the SVG  using 
    generateLogo() {
      const shape = this.createShape();
      const shapeSVG = shape.render();
      return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" version="1.1">
          ${shapeSVG}
          
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${this.textColor}" font-size="24" font-family="Arial">
          ${this.text}
        </text>
      
        </svg>
      `;
    }  
}

module.exports = LogoMaker;
