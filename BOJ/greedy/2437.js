// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString()
let input = fs.readFileSync("input.txt").toString().split("\n");

// ==================================================
const len = Number(input[0]);
const data = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let target = 1;

for (x of data) {
  if (target < x) break;
  target += x;
}

console.log(target);

/*
 */
