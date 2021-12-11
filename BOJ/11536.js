const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const len = Number(input[0]);

  const arr = [];

  for (let i = 1; i <= len; i++) {
    arr.push(input[i]);
  }

  let increasing = true;
  let decreasing = true;

  for (let i = 0; i < len - 1; i++) {
    if (arr[i] < arr[i + 1]) decreasing = false;
    else if (arr[i] > arr[i + 1]) increasing = false;
  }

  if (increasing) console.log("INCREASING");
  else if (decreasing) console.log("DECREASING");
  else console.log("NEITHER");
  process.exit();
});
