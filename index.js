// importing chalk npm module
const chalk = require('chalk')
// importing readline module for interface to read data from console
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
// readline questions to console for user input
readline.question(chalk.yellow('Enter a number: '), number => {
  if (isNaN(number)) {
    console.log(chalk.blue('Enter a number'));
  } else {
    console.log(
      chalk.green(`The factorial of ${number} is ${factorial(number)}`)
    );
  }

  readline.close();
});
// finding the factorial of a number
function factorial (number) {
  if (isNaN(number) || number < 0) {
    return ('Invalid Input')
  } else if (number === 0 || number === 1) { return 1 }
  for (let i = number - 1; i >= 1; i--) {
    number *= i
  }
  return number
}
module.exports = factorial

