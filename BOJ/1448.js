// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync('input.txt').toString()
//let input = fs.readFileSync('input.txt').toString().split('\n')

// ==================================================

const length = input[0];
let arr = [];
let result = -1;

for (let i = 1; i <= length; i++) {
  arr.push(input[i]);
}

arr = arr.sort((a, b) => b - a);

for (let i = 0; i < length; i++) {
  if (Number(arr[i]) < Number(arr[i + 1]) + Number(arr[i + 2])) {
    result = Number(arr[i]) + Number(arr[i + 1]) + Number(arr[i + 2]);
    break;
  }
}

console.log(result);

// ==================================================
