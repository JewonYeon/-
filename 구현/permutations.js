// 순열
// 서로 다른 n개의 물건 중 r개를 선택하여 순서 있게 배열하는 것 = 순서 상관 O
// nPr

function permutation(N, r) {
  const numbers = [];
  for (let i = 1; i <= N; i++) {
    numbers.push(i);
  }

  if (r === 1) {
    return numbers.map((val) => [val]);
  }

  const result = [];
  function recur(arr = [], count = 0) {
    if (count === r) {
      result.push(arr);
    } else {
      for (let i = 0; i < N; i++) {
        if (!arr.includes(numbers[i])) {
          recur(arr.concat(numbers[i]), count + 1);
        }
      }
    }
  }
  recur();
  return result;
}

console.log(permutation(5, 1));
console.log(permutation(5, 2));
console.log(permutation(5, 3));
