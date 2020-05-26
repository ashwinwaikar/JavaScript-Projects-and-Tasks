// write a self invoking function whose job is to return square of a number
console.log("this is task 2");

(function (a) {
  document.getElementById("demo").innerHTML = "Square of Number = " + a * a;
})(5);
