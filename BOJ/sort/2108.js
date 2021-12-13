// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString()
let input = fs.readFileSync("input.txt").toString().split("\n");

// ==================================================
const len = Number(input[0]);

let data = [];

for (let i = 1; i <= len; i++) {
  data.push(Number(input[i]));
}

data = data.sort((a, b) => a - b);

const totalSum = data.reduce((a, b) => a + b);

const a = Math.round(totalSum / len);
const b = data[parseInt(len / 2)];

const map = new Map();

data.forEach((num) => {
  if (map.has(num)) map.set(num, map.get(num) + 1);
  else map.set(num, 1);
});

let count = 0;
map.forEach((num) => {
  count = Math.max(count, num);
});

const three = [];

map.forEach((num, value) => {
  if (num === count) three.push(value);
});

let c = data[1];

if (three.length === 1) c = three[0];
else c = three[1];

const d = data[len - 1] - data[0];

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// console.log(result.join('\n'))

/*
산술평균 : N개의 수들의 합을 N으로 나눈 값
중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
최빈값 : N개의 수들 중 가장 많이 나타나는 값
범위 : N개의 수들 중 최댓값과 최솟값의 차이
 */
