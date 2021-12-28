graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];
visited = Array(9).fill(false);

bfs(graph, 1, visited);

function bfs(graph, start, visited) {
  queue = new Queue();
  queue.enqueue(start);

  while (queue.getLength() != 0) {
    v = queue.dequeue();

    for (i of graph[v]) {
      if (!visited[i]) {
        queue.enqueue(i);
        visited[i] = true;
      }
    }
  }
}
