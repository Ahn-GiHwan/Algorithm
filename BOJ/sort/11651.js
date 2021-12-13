// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString()
let input = fs.readFileSync("input.txt").toString().split("\n");

// ==================================================
const len = input[0];
input.shift();
let data = input
  .map((num) => num.split(" "))
  .sort((a, b) => {
    if (Number(a[1]) === Number(b[1])) return Number(a[0]) - Number(b[0]);
    else return Number(a[1]) - Number(b[1]);
  })
  .map((num) => num.join(" "))
  .join("\n");

console.log(data);

/*
5
0 4
1 2
1 -1
2 2
3 3
 */
