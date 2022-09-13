function sum(nums) {
  return nums.reduce((accumulator, current) => accumulator + current, 0);
}

console.log(sum([1, 2, 3, 4]));

function multiply(nums) {
  return nums.reduce((accumulator, current) => accumulator * current, 1);
}

console.log(multiply([1, 2, 3, 4]));

function reverse(word) {
  return [...word].reduce((x, y) => y.concat(x));
}

console.log(reverse("kevin"));

function filterLongWords(words, i) {
  return words.filter((word) => word.length > i);
}

console.log(filterLongWords(["kevin", "kinuthia"], 4));
