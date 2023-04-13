//call my required modules
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require("./lib/shapes");
const { isValidColor, rgbToHex } = require("./lib/color");

//Questions for the user to answer
async function promptUser() {
  const questions = [
    {
      type: "input",
      name: "text",
      message: 'Enter 3 characters for your logo.',
      validate: (input) => {
        if (input.length > 3) {
          return "Please enter exactly 3 characters.";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a color / hexadecimal for your logo text.",
      validate: (input) => {
        if (isValidColor(input)) {
          return true;
        }
        return "Please enter a valid color keyword or hexadecimal number.";
      },
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape for your logo.",
      choices: ["Triangle", "Circle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter the shape's color (color keyword or hexadecimal number):",
      validate: (input) => {
        if (isValidColor(input)) {
          return true;
        }
        return "Please enter a valid color keyword or hexadecimal number.";
      },
    },
  ];

  const answers = await inquirer.prompt(questions);
  return answers;
}

//function to write the file


