// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString()
let input = fs.readFileSync("input.txt").toString().split("\n");

// ==================================================
let ball = Number(input[0].split(" ")[0]);
const cart = Number(input[0].split(" ")[1]);

let avg = 0;

for (let i = 1; i <= cart; i++) {
  avg += i;
}

if (avg > ball) console.log(-1);
else {
  ball -= avg;
  if (ball % cart === 0) console.log(cart - 1);
  else console.log(cart);
}

/*
 */
