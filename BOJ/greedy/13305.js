// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString()
let input = fs.readFileSync("input.txt").toString().split("\n");

// ==================================================
let len = Number(input[0] - 1);
let kms = input[1].split(" ").map(BigInt);
let prices = input[2].split(" ").map(BigInt);

let price = prices[0];
let totalPrice = price * kms[0];

for (let i = 1; i < len; i++) {
  let currentPrice = prices[i];
  if (price >= currentPrice) price = prices[i];
  totalPrice += price * kms[i];
}

console.log(totalPrice);

/*
  왜 BingInt로 변환 후 마지막에 String으로 감싸는지는 모르겠다...
*/
