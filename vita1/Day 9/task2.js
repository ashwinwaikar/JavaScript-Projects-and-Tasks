// write a self invoking function whose job is to return square of a number
console.log("this is task 2");

var x=(function (a) {
//   var a = 5;
  return document.write(a * a);
})(5);

document.getElementById("demo").innerHTML="Square of Number = "+ x;
