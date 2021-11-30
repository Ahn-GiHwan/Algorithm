// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//let input = fs.readFileSync('input.txt').toString()
//let input = fs.readFileSync('input.txt').toString().split('\n')

// ==================================================

let arr = [];
for (let i = 1; i <= input[0]; i++) {
  arr.push(input[i]);
}

arr = arr.sort((a, b) => a - b);

console.log(arr.join("\n"));

// ==================================================
/*
2
yzyzy
zyzyz

// 0 
*/
