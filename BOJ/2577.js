// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync('/dev/stdin').toString()
//let input = fs.readFileSync('input.txt').toString().split('\n')
// let input = fs.readFileSync('input.txt').toString()

// ==================================================

const result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

const totalNum = String(a * b * c).split("");

for (let i = 0; i < totalNum.length; i++) {
  result[Number(totalNum[i])] += 1;
}

console.log(result.join("\n"));

/*
세 개의 자연수 A, B, C가 주어질 때 A × B × C를 계산한 결과에 0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 구하는 프로그램을 작성하시오.

예를 들어 A = 150, B = 266, C = 427 이라면 A × B × C = 150 × 266 × 427 = 17037300 이 되고, 계산한 결과 17037300 에는 0이 3번, 1이 1번, 3이 2번, 7이 2번 쓰였다.


150
266
427

3
1
0
2
0
0
0
2
0
0
 */
