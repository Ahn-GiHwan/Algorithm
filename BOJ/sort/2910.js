// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString()
let input = fs.readFileSync("input.txt").toString().split("\n");

// ==================================================
const len = Number(input[0].split(" ")[0]);
const pointNum = Number(input[0].split(" ")[1]);
const arr = input[1].split(" ");

const data = [];

for (let i = 0; i < len; i++) {
  if (pointNum >= arr[i]) data.push(Number(arr[i]));
}

let result = [];

const set = new Set([...data]);

set.forEach((num) => {
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (num === data[i]) count++;
  }
  result.push([num, count]);
});

result = result.sort((a, b) => b[1] - a[1]);

const array = [];
for (let i = 0; i < result.length; i++) {
  const a = result[i][1];
  for (let j = 0; j < a; j++) {
    array.push(result[i][0]);
  }
}

console.log(array.join(" "));
/*
5 2
2 1 2 1 2

=> 2 2 2 1 1
 */
