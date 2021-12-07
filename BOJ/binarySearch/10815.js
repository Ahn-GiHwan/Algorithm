function binarySearch(sortedArray, seekElement) {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    if (Number(sortedArray[middleIndex]) === Number(seekElement)) {
      return true;
    }
    if (Number(sortedArray[middleIndex]) < Number(seekElement)) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return false;
}

// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString()
let input = fs.readFileSync("input.txt").toString().split("\n");

// ==================================================
const myCards = input[1].split(" ").sort((a, b) => Number(a) - Number(b));
const cards = input[3].split(" ");

const arr = cards
  .map((num) => {
    if (binarySearch(myCards, num)) return 1;
    else return 0;
  })
  .join(" ");

console.log(arr);

/*
5
6 3 2 10 -10
8
10 9 -5 2 3 4 5 -10
 */
