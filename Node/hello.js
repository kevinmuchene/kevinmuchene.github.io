const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("What is your name? ", (name) => {
  console.log(`Welcome ${name}`);
  //   readline.pause();
  readline.question("What is your age? ", (age) => {
    // console.log(`Age ${age}`);

    if (age < 16) {
      console.log("You're not allowed to drive in Iowa");
    } else {
      console.log("You're allowed to get a drivers licence in Iowa");
    }

    readline.close();
  });
});
