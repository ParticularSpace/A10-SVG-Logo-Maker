//import required modules
const fs = require('fs');
// const {Triangle, Circle, Square} = require("./lib/shapes");
const {isValidColor} = require("./lib/color");
const LogoMaker = require("./lib/logoMaker");

(async () => {

  // Import inquirer
 const { default: inquirer } = await import('inquirer'); 

//Questions for the user to answer
async function promptUser() {
  const questions = [
    {
      type: "list",
      name: "shape",
      message: "Choose a shape for your logo.",
      choices: ["Triangle", "Circle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "What color do you want your shape to be?",
      validate: (input) => {
        if (isValidColor(input)) {
          return true;
        }
        return "Please enter a valid color keyword or hexadecimal number.";
      },
    },
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
    }
  ];

  const answers = await inquirer.prompt(questions);
  return answers;
}

//Calls user to input answers
//Gathers all the answers up
//Takes answers and pushes them into the LogoMaker class
//Use LogoMaker class to generate the logo
//Save the logo to a file
async function main() {
    const answers = await promptUser();
    const logoMaker = new LogoMaker(
      answers.text,
      answers.textColor,
      answers.shape,
      answers.shapeColor
    );
    const svgMarkup = logoMaker.generateLogo();
    saveSVGToFile(svgMarkup);
    console.log("Generated logo.svg");
  }

  //write the file that contains our svg logo
  function saveSVGToFile(svgMarkup) {
    fs.writeFileSync("logo.svg", svgMarkup, "utf8");
  }
  
  main();
})();
