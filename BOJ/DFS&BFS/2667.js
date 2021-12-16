// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString()
let input = fs.readFileSync("input.txt").toString().split("\n");

// ==================================================
let len = Number(input[0]);
let data = [];

for (let i = 0; i < len; i++) {
  const info = input[i + 1].split("").map(Number);
  data.push(info);
}

function dfs(i, j) {
  if (i >= len || i < 0 || j >= len || j < 0) return 0;
  if (data[i][j] >= 1) {
    data[i][j] = -1;
    let result = 1; // 덩어리의
    result += dfs(i - 1, j);
    result += dfs(i, j - 1);
    result += dfs(i + 1, j);
    result += dfs(i, j + 1);
    return result;
  }
  return 0;
}

let result = []; // 덩어리(단지)를 넣어주는 배열, 배열의 개수가 단지의 개수

for (let i = 0; i < len; i++) {
  for (let j = 0; j < len; j++) {
    let current = dfs(i, j);
    if (current > 0) result.push(current);
  }
}

result = result.sort((a, b) => a - b);

console.log(result.length + "\n" + result.join("\n"));
