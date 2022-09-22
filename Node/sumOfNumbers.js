const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let sum = 0;
const getNumber = function () {
  readline.question('Enter a number, or "stop" to exit: ', (input) => {
    if (input.toLowerCase() === "stop") {
      console.log(`SUM: ${sum}`);
      readline.close();
    } else {
      sum += parseInt(input);
      getNumber();
    }
  });
};
getNumber();
