//Need to include circle, square and triangle need to make logo figur out shape, apply color to shape, and apply the text to that colored shape. Then create the svg file

const { Triangle, Circle, Square } = require("./shapes");

class LogoMaker {
  constructor(text, textColor, shapeType, shapeColor) {
    // Initialize the properties based on the user input
  }

  createShape() {
    // Create the appropriate shape instance based on the user input shape and color
  }

  renderShape() {
    // Render the SVG markup for the selected shape with the appropriate color
  }

  addTextToSVG() {
    // Add the text to the SVG markup with the appropriate textColor
  }

  generateLogo() {
    // Generate the complete SVG markup by combining the shape and text
  }
}

module.exports = LogoMaker;
