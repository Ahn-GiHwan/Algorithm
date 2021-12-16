// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString()
let input = fs.readFileSync("input.txt").toString().split("\n");

// ==================================================
const a = Number(input[0]);
const b = Number(input[1]);

let data = [];

for (let i = 1; i <= a; i++) {
  data[i] = [];
}

for (let i = 2; i <= b + 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  data[a].push(b);
  data[b].push(a);
}

let result = 0;
let visited = Array(a).fill(0);

function dfs(idx) {
  visited[idx] = 1;
  result++;
  data[idx].forEach((num) => {
    if (!visited[num]) dfs(num);
  });
}

dfs(1);

console.log(result - 1);
