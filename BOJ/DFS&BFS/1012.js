// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString()
let input = fs.readFileSync("input.txt").toString().split("\n");

// ==================================================
let [x, y, num] = input[1].split(" ").map(Number);

if (num === 1) console.log(1);
if (num === 0) console.log(0);

let data = [];

for (let i = 0; i < y; i++) {
  data.push([]);
  for (let j = 0; j < x; j++) {
    data[i].push(0);
  }
}

for (let i = 2; i < num + 2; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  data[y][x] = 1;
}

let result = 0;

for (let i = 0; i < y; i++) {
  for (let j = 0; j < x; j++) {
    result += dfs(i, j);
  }
}

function dfs(i, j) {
  if (i < 0 || j < 0 || i >= y || j >= x) return 0;
  if (data[i][j] === 1) {
    data[i][j] = 0;
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
    return 1;
  }
  return 0;
}

console.log(result);

/*
1
5 3 6
0 2
1 2
2 2
3 2
4 2
4 0
================
2
 */
