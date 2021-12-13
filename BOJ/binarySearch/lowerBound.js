function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    // 최대한 왼쪽으로 이동하기
    else start = mid + 1;
  }
  return end;
}
