// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync('input.txt').toString()
// let input = fs.readFileSync('input.txt').toString().split('\n')

// ==================================================
const numToString = [
  "",
  "",
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
  ["J", "K", "L"],
  ["M", "N", "O"],
  ["P", "Q", "R", "S"],
  ["T", "U", "V"],
  ["W", "X", "Y", "Z"],
];
const data = input.split("");

const result = data.map((str) =>
  numToString.findIndex((nts) => nts.includes(str))
);

console.log(result.reduce((a, b) => Number(a) + Number(b)) + result.length);

// ==================================================
/*
WA

13

 */
