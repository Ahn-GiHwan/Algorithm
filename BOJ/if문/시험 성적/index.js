// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync('input.txt').toString().split('\n');

data = input[0].split(" ")[0];

if (data >= 90) {
  console.log("A");
} else if (data >= 80 && data <= 89) {
  console.log("B");
} else if (data >= 70 && data <= 79) {
  console.log("C");
} else if (data >= 60 && data <= 69) {
  console.log("D");
} else {
  console.log("F");
}

// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
