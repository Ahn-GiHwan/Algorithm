// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString()
let input = fs.readFileSync("input.txt").toString().split("\n");

// ==================================================
let computerLen = Number(input[0]);
let setLen = Number(input[1]);
let data = [];

for (let i = 0; i < computerLen + 1; i++) {
  data[i] = [];
}

for (let i = 2; i <= setLen + 1; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  data[a].push(b);
  data[b].push(a);
}

let visited = Array(computerLen + 1).fill(0);

function dfs(num) {
  if (!visited[num]) {
    visited[num] = 1;
    data[num].forEach((id) => dfs(id));
  }
}

dfs(1);

console.log(visited.filter((computer) => computer).length - 1);

/*
7
6
1 2
2 3
1 5
5 2
5 6
4 7
================
4
 */
