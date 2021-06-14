// 조합
// 서로 다른 n개의 원소 중 r개를 선택하여 조를 만들 때, 각각의 조들의 모임 = 순서 상관 X
// nCr

// 1부터 N(> 1)까지 숫자가 담긴 배열이 있을 때, r(0 < 1 <= N)개를 선택하는 조합을 만들어라.

function combination(N, r) {
  const numbers = [];
  for (let i = 1; i <= N; i++) {
    numbers.push(i);
  }

  if (r === 1) {
    return numbers.map((val) => [val]);
  }

  const result = [];
  function recur(nums, arr, count) {
    if (count === r) {
      result.push(arr);
    } else {
      for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        recur(nums.slice(i + 1), [...arr, val], count + 1);
      }
    }
  }
  recur(numbers, [], 0);
  return result;
}

console.log(combination(5, 0));
console.log(combination(5, 1));
console.log(combination(5, 3));
