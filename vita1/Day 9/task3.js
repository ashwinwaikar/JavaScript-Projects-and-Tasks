// • write a function sum with no parameter but it will do the sum of numbers passed in function call
// eg sum(2,3,5), sum(2,4).So your definition will work irrespective of the number of parameters passed

console.log("this is task 3");

function Sum_Of_Numbers() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}

let sum = document.getElementById("sum");
sum.innerHTML =
  "<b> Sum of Passed Parameters = " + Sum_Of_Numbers(55, 10, 28, 73);
