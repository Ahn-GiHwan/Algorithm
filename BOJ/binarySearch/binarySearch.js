function binarySearch(arr, target, start, end) {
  // 찾은 범위가 겹치거나 크로스 되면 반복문 종료
  while (start <= end) {
    // 절반을 나누고 나머지값 버리기
    let mid = parseInt((start + end) / 2);

    // 찾는 값이 있으면 리턴
    if (arr[mid] == target) return mid;
    // 찾고자 하는 값이 중간값보다 작으면 end의 값을 mid-1값으로 변경
    else if (arr[mid] > target) end = mid - 1;
    // 찾고자 하는 값이 중간값보다 크면 start의 값을 mid+1값으로 변경
    else start = mid + 1;
  }
  return -1;
}
