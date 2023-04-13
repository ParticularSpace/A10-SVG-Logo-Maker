
// Check if a given input is a valid hexadecimal color
function isHexColor(hex) {
    //Credit: ChatGPT for hex regex / Manny Professor(who said we could)
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return hexRegex.test(hex);
  }
  
  // checks if the color is part of our color  array will be true or false
  function isColorKeyword(keyword) {
    const colorOptions = ['red', 'blue', 'green', 'yellow', 'white', 'black', 'gray', 'purple', 'orange', 'cyan', 'magenta','brown', 'pink'];
    return colorOptions.includes(keyword.toLowerCase());
  }
  
  // Check if input is a valid color or hexadecimal will be true or false
  function isValidColor(input) {
    return isColorKeyword(input) || isHexColor(input);
  }
  
  // Convert a hexadecimal value to RGB 
  function hexToRGB(hex) {
    //Credit: Asked ChatGPT for regex to take hex and break into 3 parts
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  
    //pull the rbg from the hex and convert to decimal
    if (result) {
      return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      };
    } else {
      return null;
    }
  }
  
  //export the functions we need
  module.exports = {
    isValidColor,
    hexToRGB,
  };
  