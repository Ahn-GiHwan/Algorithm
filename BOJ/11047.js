// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString()
let input = fs.readFileSync("input.txt").toString().split("\n");

// ==================================================

let data = Number(input[0].split(" ")[1]);
input.shift();
const arr = input.sort((a, b) => b - a);

let result = 0;

const startIndex = arr.findIndex((num) => num < data);

for (let i = startIndex; i < arr.length; i++) {
  result += parseInt(data / arr[i]);
  data %= arr[i];
  if (data === 0) break;
}

console.log(result);

// ==================================================
