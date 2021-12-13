// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString()
let input = fs.readFileSync("input.txt").toString().split("\n");

// ==================================================
function binarySearch(arr, target, start, end) {
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] == target) return 1;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return 0;
}

let len = Number(input[0]);

let data1 = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let data2 = input[3].split(" ").map(Number);

const map = new Map();

data1.forEach((num) => {
  if (map.has(num)) map.set(num, map.get(num) + 1);
  else map.set(num, 1);
});

const result = data2.map((num) => {
  if (map.has(num)) return map.get(num);
  else return 0;
});

console.log(result.join(" "));

/*
10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10

=> 
3 0 0 1 2 0 0 2
 */
