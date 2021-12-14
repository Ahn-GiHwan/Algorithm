// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync('input.txt').toString()
let input = fs.readFileSync("input.txt").toString().split("\n");

// ==================================================
function binarySearch(arr, target, start, end) {
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}

const len = Number(input[0]);

let data = input[1].split(" ").map(Number);
let sortData = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const set = new Set([...sortData]);

let setData = [];

set.forEach((num) => setData.push(num));

let result = Array(len).fill(0);

for (let i = 0; i < len; i++) {
  const target = data[i];
  const searchIndex = binarySearch(setData, target, 0, setData.length - 1);
  result[i] = searchIndex;
}

console.log(result.join(" "));

/*
5
2 4 -10 4 -9
*/
