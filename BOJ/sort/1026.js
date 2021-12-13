// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString()
let input = fs.readFileSync("input.txt").toString().split("\n");

// ==================================================
let len = Number(input[0]);
let data1 = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let data2 = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

let result = 0;

for (let i = 0; i < len; i++) {
  result += data1[i] * data2[i];
}

console.log(result);

/*
5
1 1 1 6 0
2 7 8 3 1

=> 18
 */
