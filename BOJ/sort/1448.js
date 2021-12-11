// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString()
let input = fs.readFileSync("input.txt").toString().split("\n");

// ==================================================
const len = input[0];
let data = [];

for (let i = 1; i <= len; i++) {
  data.push(Number(input[i]));
}

data = data.sort((a, b) => a - b);

let result = -1;

for (let i = 0; i < len - 2; i++) {
  const a = data[i];
  const b = data[i + 1];
  const c = data[i + 2];
  if (c < a + b) result = Math.max(result, a + b + c);
}

console.log(result);

/*
6
2
3
2
3
2
4

=> 10
 */
