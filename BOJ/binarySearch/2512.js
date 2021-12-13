// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString()
let input = fs.readFileSync("input.txt").toString().split("\n");

// ==================================================
function binarySearch(arr, target, start, end) {
  let result = 0;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    const newArr = arr
      .map((price) => {
        if (price > mid) return mid;
        else return price;
      })
      .reduce((a, b) => a + b);

    if (newArr == target) return result;
    else if (newArr > target) end = mid - 1;
    else {
      result = mid;
      start = mid + 1;
    }
  }
  return result;
}

const len = Number(input[0]);
const prices = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const limitTotalPrice = Number(input[2]);

const result = binarySearch(prices, limitTotalPrice, 0, prices[len - 1]);

console.log(result);
/*
4
120 110 140 150
485

=> 127
 */
