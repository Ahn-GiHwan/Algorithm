let graph = [
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

let visited = Array(9).fill(false);

dfs(graph, 1, visited);

function dfs(graph, v, visited) {
  for (i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i, visited);
    }
  }
}
