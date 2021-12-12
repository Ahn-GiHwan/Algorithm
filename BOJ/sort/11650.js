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
  data.push(input[i].split(" "));
}

data.sort((a, b) => {
  if (a[0] === b[0]) return Number(a[1]) - Number(b[1]);
  else return Number(a[0]) - Number(b[0]);
});

const result = data.map((arr) => arr.join(" "));

console.log(result.join("\n"));

/*
 */
