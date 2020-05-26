// • write a self invoking function  whose job is to print your name.

console.log("this is task 1");

(function () {
  var a = "Ashwin Waikar";
  document.write(a);
})();
//OR

// (function(){document.write("Ashwin Waikar");}());

//just another example of IFFE(immediately invoked function expression)  also called Self invoking function
/*(function (a, b) {
  document.write(a + " " + b);
})(10, 20);*/
