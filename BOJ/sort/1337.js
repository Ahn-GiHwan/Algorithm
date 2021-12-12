// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString()
let input = fs.readFileSync("input.txt").toString().split("\n");

// ==================================================
const len = Number(input[0]);
let data = [];
for (let i = 1; i <= len; i++) {
  data.push(Number(input[i]));
}

data = data.sort((a, b) => a - b);

const result = [];

for (let i = 0; i < len; i++) {
  let emptyNum = 0;
  for (let j = 0; j < 5; j++) {
    if (data.includes(data[i] + j)) emptyNum++;
  }
  result.push(emptyNum);
}

console.log(5 - Math.max(...result));
