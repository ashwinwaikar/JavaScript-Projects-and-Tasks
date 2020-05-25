// Create class student *which has* instance member roll number, name, marks1,marks2,marks3, total, percentage.
// Write getter setter for roll number, name and marks1,marks2,marks3.
// Write a method to calculate total and  percentage.

console.log("this is task2 js file");

class Student {
  constructor(_rollNumber, _name, _marks1, _marks2, _marks3) {
    this.rollNumber = _rollNumber;
    this.name = _name;
    this.marks1 = _marks1;
    this.marks2 = _marks2;
    this.marks3 = _marks3;
    // this.total = _total;
    // this.percentage=_percentage;
  }

  set Roll_Number(x) {
    this.rollNumber = x;
  }
  set Name(x) {
    this.name = x;
  }
  set Marks1(x) {
    this.marks1 = x;
  }
  set Marks2(x) {
    this.marks2 = x;
  }
  set Marks3(x) {
    this.marks3 = x;
  }

  get Roll_Number() {
    return this.rollNumber;
  }
  get Name() {
    return this.name;
  }
  get Marks1() {
    return this.marks1;
  }
  get Marks2() {
    return this.marks2;
  }
  get Marks3() {
    return this.marks3;
  }

  TotalMarks() {
    return (this.total = this.marks1 + this.marks2 + this.marks3);
  }

  Percentage() {
    return (this.total * 100) / 300;
  }
}
let obj1 = new Student(1009, "Ashwin Waikar", 60, 70, 80);
// console.log(obj1);

let first = document.getElementById("first");
first.innerHTML =
  "Total marks=  " +
  obj1.TotalMarks() +
  " Percentage= " +
  obj1.Percentage() +
  " Out of 300";
