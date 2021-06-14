// 이분검색
// *정렬된 배열* 내에서 대상 값의 위치를 찾는 탐색 알고리즘

// 임의의 숫자 배열(arr)이 주어졌을 때, 오름차순으로 정렬 후 M이 있는 위치를 찾아라.

function binarysearch(arr, M) {
  let answer;
  arr.sort((a, b) => a - b);
  let lt = 0;
  let rt = arr.length - 1;

  while (lt <= rt) {
    const mid = parseInt((lt + rt) / 2);
    if (arr[mid] === M) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > M) {
      rt = mid - 1;
    } else if (arr[mid] < M) {
      lt = mid + 1;
    }
  }
  return answer;
}

console.log(binarysearch([23, 87, 65, 12, 57, 32, 99, 81], 32)); // 3
