let numbers = [0, 1, 12, 3, 10, 20, 30, 56, 23, 43, 89];
numbers.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
document.write(numbers);
