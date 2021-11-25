const result = [];

function d(n) {
  let resultNum = n;
  String(n)
    .split("")
    .forEach((num) => (resultNum += Number(num)));
  return resultNum;
}

for (let i = 1; i <= 10000; i++) {
  result.push(i);
}

for (let i = 1; i < 10000; i++) {
  const index = result.findIndex((num) => num === d(i));
  if (index !== -1) {
    result.splice(index, 1);
  }
}

console.log(result.join("\n"));
