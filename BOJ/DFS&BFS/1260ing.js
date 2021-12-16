// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString()
let input = fs.readFileSync("input.txt").toString().split("\n");

// ==================================================
class Queue {
  constructor() {
    this.items = [];
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let [node, connect, startNode] = input[0].split(" ").map(Number);

let data = [];
for (let i = 0; i < node + 1; i++) {
  data.push([]);
}

for (let i = 1; i < connect + 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  data[a].push(b);
  data[b].push(a);
}

// DFS

let dfsArr = [];
let dfsVisited = Array(node + 1).fill(0);

function dfs(num) {
  if (!dfsVisited[num]) {
    dfsVisited[num] = 1;
    dfsArr.push(num);
    data[num].forEach((id) => dfs(id));
  }
}

dfs(startNode);

console.log(dfsArr.join(" "));

// BFS

let bfsArr = [];
let bfsVisited = Array(node + 1).fill(0);

function bfs(num) {
  const queue = new Queue();
  queue.enqueue(num);
  bfsVisited[num] = 1;
  while (queue.getLength() != 0) {
    let v = queue.dequeue();
    bfsArr.push(v);

    data[v].forEach((id) => {
      queue.enqueue(id);
      bfsVisited[id] = 1;
    });
  }
}

bfs(startNode);

console.log(bfsArr);

/*
4 5 1
1 2
1 3
1 4
2 4
3 4
================
1 2 4 3
1 2 3 4
 */
