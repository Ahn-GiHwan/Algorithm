function binarySearch(arr, target, start, end) {
  let a = 0;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    // 찾은 경우 중간점 인덱스 반환
    const list = arr.reduce((acc, cur) => {
      if (cur > mid) return (acc += Number(mid));
      else return (acc += Number(cur));
    }, 0);

    if (Number(list) === Number(target)) return mid;
    // 중간점의 값보다 찾고자 하는 값이 작은 경우 왼쪽 확인
    else if (Number(list) > Number(target)) end = mid - 1;
    // 중간점의 값보다 찾고자 하는 값이 큰 경우 오른쪽 확인
    else {
      a = mid;
      start = mid + 1;
    }
  }
  return a;
}

// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString()
let input = fs.readFileSync("input.txt").toString().split("\n");

// ==================================================
const list = input[1].split(" ");
const totalPrice = Number(input[2]);
const max = Number(Math.max(...list));
const min = Number(Math.min(...list));
const result = binarySearch(list, totalPrice, 0, max);

console.log(result);

/*
4
120 110 140 150
485
 */
