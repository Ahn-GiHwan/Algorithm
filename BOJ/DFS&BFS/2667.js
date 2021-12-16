// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString()
let input = fs.readFileSync("input.txt").toString().split("\n");

// ==================================================
let len = Number(input[0]);

let data = [];

for (let i = 1; i <= len; i++) {
  const info = input[i].split("").map(Number);
  data.push(info);
}

function dfs(i, j) {
  if (i >= len || i < 0 || j >= len || j < 0) return 0;
  if (data[i][j] === 1) {
    data[i][j] = 0;
    let count = 1;
    count += dfs(i, j + 1);
    count += dfs(i, j - 1);
    count += dfs(i + 1, j);
    count += dfs(i - 1, j);
    return count;
  }
  return 0;
}

let result = [];

for (let i = 0; i < len; i++) {
  for (let j = 0; j < len; j++) {
    const output = dfs(i, j);
    if (output > 0) result.push(output);
  }
}

result = result.sort((a, b) => a - b);

console.log(result.length + "\n" + result.join("\n"));

/*
7
0110100
0110101
1110101
0000111
0100000
0111110
0111000
================
3
7
8
9
 */
