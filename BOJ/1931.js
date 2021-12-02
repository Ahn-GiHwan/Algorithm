// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString()
let input = fs.readFileSync("input.txt").toString().split("\n");

// ==================================================

let len = Number(input[0]);

input.shift();

let data = input
  .map((input) => input.split(" "))
  .sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

let result = 1;

let a = Number(data[0][1]);

for (let i = 1; i < len; i++) {
  if (Number(data[i][0]) >= a) {
    a = Number(data[i][1]);
    result++;
  }
}

console.log(result);
