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

console.log(data2.map((num) => binarySearch(data1, num, 0, len)).join("\n"));

/*
5
4 1 5 2 3
5
1 3 7 9 5

=> 
1
1
0
0
1
 */
