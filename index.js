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

const isValid = (num) => {
  if (!Number.isNaN(num) && num > 0 && num <= 10) return true;
  if (Number.isNaN(num)) console.log("Please, enter a number".red.bold);
  if (num < 1 || num > 10)
    console.log("Number should be from 1 to 10".red.bold);
  return false;
};

// ** Write winning game results in to the log fale **

// ** Main game cycle **
const game = () => {
  rl.question(
    "Please enter any whole nuber from 1 to 10\n".red.bold,
    (value) => {
      // convert value to number
      const number = Number(value);
      // validate number
      if (!isValid(number)) return game();
      // add attempt counter
      counter += 1;
      // if number is NOT equal mind
      if (number !== mind) {
        console.log("Oh no, try again".bgRed);
        game();
        return;
      }
      // if number is equal mind
      const winningMessage = `Congratulation, You guessed the number in ${counter} step(s)`;
      console.log(winningMessage.bgGreen);
      // exit the game
      process.exit();
    }
  );
};

game();
