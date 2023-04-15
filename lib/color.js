
// Check if a given input is a valid hexadecimal color
function isHexColor(hex) {
    //Credit: ChatGPT(regex GOD) for hex regex / Manny Professor
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return hexRegex.test(hex);
  }
  
  // checks if the color is part of our color  array will be true or false
  function isColorKeyword(keyword) {
    const colorOptions = ['red', 'blue', 'green', 'yellow', 'white', 'black', 'gray', 'purple', 'orange', 'cyan', 'magenta','brown', 'pink'];
    return colorOptions.includes(keyword.toLowerCase());
  }
  
  // Check if input is a valid will output 
  function isValidColor(input) {
    return isColorKeyword(input) || isHexColor(input);
  }
  

  //export the functions we need
  module.exports = {
    isValidColor
  };
  