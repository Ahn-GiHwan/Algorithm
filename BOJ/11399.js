// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString()
let input = fs.readFileSync("input.txt").toString().split("\n");

// ==================================================

let len = Number(input[0]);

let data = input[1].split(" ").sort((a, b) => a - b);

let result = 0;

for (let i = 0; i < len; i++) {
  result += Number(data[i]);
  for (let j = 0; j < i; j++) {
    if (i === 0) continue;
    else result += Number(data[j]);
  }
}

console.log(result);
