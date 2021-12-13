// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString()
let input = fs.readFileSync("input.txt").toString().split("\n");

// ==================================================
function binarySearch(arr, target, start, end) {
  // 찾은 범위가 겹치거나 크로스 되면 반복문 종료
  while (start <= end) {
    // 절반을 나누고 나머지값 버리기
    let mid = parseInt((start + end) / 2);

    // 찾는 값이 있으면 리턴
    if (arr[mid] == target) return 1;
    // 찾고자 하는 값이 중간값보다 작으면 end의 값을 mid-1값으로 변경
    else if (arr[mid] > target) end = mid - 1;
    // 찾고자 하는 값이 중간값보다 크면 start의 값을 mid+1값으로 변경
    else start = mid + 1;
  }
  return 0;
}

const num1Len = Number(input[0]);
const num2Len = Number(input[2]);

const data1 = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const data2 = input[3].split(" ").map(Number);

const result = data2.map((num) => binarySearch(data1, num, 0, num1Len - 1));

console.log(result.join(" "));
/*
5
6 3 2 10 -10
8
10 9 -5 2 3 4 5 -10
 */
