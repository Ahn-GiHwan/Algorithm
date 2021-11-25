// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync('/dev/stdin').toString()
//let input = fs.readFileSync('input.txt').toString().split('\n')
// let input = fs.readFileSync('input.txt').toString()

// ==================================================
const length = Number(input[0]);
const scores = input[1].split(" ");

const max = Math.max(...scores);

const newScore = scores.map((score) => (Number(score) / Number(max)) * 100);

console.log(newScore.reduce((a, b) => a + b) / length);

/*
세준이는 기말고사를 망쳤다. 세준이는 점수를 조작해서 집에 가져가기로 했다. 일단 세준이는 자기 점수 중에 최댓값을 골랐다. 이 값을 M이라고 한다. 그리고 나서 모든 점수를 점수/M*100으로 고쳤다.

예를 들어, 세준이의 최고점이 70이고, 수학점수가 50이었으면 수학점수는 50/70*100이 되어 71.43점이 된다.

세준이의 성적을 위의 방법대로 새로 계산했을 때, 새로운 평균을 구하는 프로그램을 작성하시오.

3
40 80 60
예제 출력 1 
75.0

3
10 20 30
예제 출력 2 
66.666667

 */
