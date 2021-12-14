// 이름 오름차순 정렬
fruits.sort(function (a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}); // apple kiwi melon orange pear

// 이름 내림차순 정렬
fruits.sort(function (a, b) {
  return a > b ? -1 : a < b ? 1 : 0;
}); // pear orange melon kiwi apple
