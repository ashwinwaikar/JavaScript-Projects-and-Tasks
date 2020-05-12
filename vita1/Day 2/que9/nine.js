let a = "ashwinwaikar@gmail.com";
let c = "ashwinwaikargmail.com;";
var b = 0;
Array.from(a).forEach(function (element) {
  if (element.includes("@")) {
    document.write(a);
    document.write("yes @ is there");
    b++;
  }
});
if (b == 0) {
  document.write("@ is not present");
}
