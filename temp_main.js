
// A constant variable for the temperature in kelvin
const kelvin = 230;

// celsius is a variable that takes kevlin and subtracts 273
const celsius = kelvin - 273;

// fahrenheit is celsius transformed
let fahrenheit = ((celsius * (9/5)) +32);
fahrenheit = Math.floor(fahrenheit);

//string interpolation to add variables into statements in an easy to read way
console.log(`The temerature is ${fahrenheit} degrees Fahreneit`);
