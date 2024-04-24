import "colors";
// console.log("Hello baby".bgYellow);
import readline from "readline";
import { promises } from "fs";
import { program } from "commander";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// example of readline usage //

// rl.on("line", (txt) => {
//   console.log(txt);
//   process.exit;
// });

// ** Counter of attempts **
let counter = 0;

// ** Guests number from 1 to 10 **
const mind = Math.ceil(Math.random() * 10);

// ** Path to the logs **
const logFile = "game_results.log";

// ** Main game cycle **
const game = () => {
  rl.question(
    "Please enter any whole nuber wrom 1 to 10\n".bgGreen,
    (value) => {
      // convert value to number
      const number = Number(value);
      // validate number
      // add attempt counter
      counter += 1;
      // if number is NOT equal mind
      if (number !== mind) {
        console.log("Oh no, try again".bgGreen);
        game();
        return;
      }
      // if number is equal mind
      const winningMessage = `Congratulation, You guessed the number in ${counter} step(s)`;
      console.log(winningMessage.bgBlue);
      // exit the game
      process.exit();
    }
  );
};

game();
