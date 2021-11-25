// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync('input.txt').toString().split('\n')
// let input = fs.readFileSync('input.txt').toString()

// ==================================================
const result = [];

const totalLength = Number(input[0]);

for (let i = 1; i <= totalLength; i++) {
  const data = input[i].split("");
  const length = data.length;
  let score = 1;
  let totalScore = 0;
  for (let j = 0; j < length; j++) {
    if (data[j] === "O") totalScore += score++;
    else score = 1;
  }
  result.push(totalScore);
}

console.log(result.join("\n"));

/*

5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX

10
9
7
55
30
 */
