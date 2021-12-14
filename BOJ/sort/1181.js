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
  data.push(input[i]);
}

data = data.sort((a, b) => {
  if (a.length === b.length) {
    if (a < b) return -1;
    else if (a > b) return 1;
  } else return a.length - b.length;
});

const set = new Set([...data]);

set.forEach((str) => console.log(str));

/*
if(a < b) return -1
    else if(a > b) return 1
 */
