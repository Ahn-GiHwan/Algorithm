// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("input.txt").toString().split("\n");

data = input[0].split(" ");

a = Number(data[0]);
b = Number(data[1]);

if (a === b) {
  console.log("==");
} else if (a < b) {
  console.log("<");
} else {
  console.log(">");
}

// if(a > b) console.log('>')
// else if (a < b) console.log('<')
// else console.log('==')
