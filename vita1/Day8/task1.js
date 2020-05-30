// Create class Employee which has instance member id, name , salary, net salary.
//  Also Write getter setter for each instance member.Write calculate net salary function whose job is to
// calculate net salary after deduction of 10 % TDS Create 2 objects of the class and call method.

// console.log("this is task1 of Day 8");

class Employee {
  constructor(_memberId, _name, _salary) {
    this.memberId = _memberId;
    this.name = _name;
    this.salary = _salary;
    this.netSalary;
  }

  set Id(x) {
    this.memberId = x;
  }
  set Name(x) {
    this.name = x;
  }
  set Salary(x) {
    this.salary = x;
  }


  get Id() {
    return this.memberId;
  }
  get Name() {
    return this.name;
  }
  get Salary() {
    return this.salary;
  }


  CalculateNetSal() {
    return (this.netSalary = this.salary-(this.salary * 0.1));
  }
}
let obj1 = new Employee(1009, "Ashwin Waikar", 55000);
// console.log(obj1);

let obj2 = new Employee(2419, "Himanshu Raulkar", 40000);
// console.log(obj2);

let first = document.getElementById("first");
first.innerHTML = obj1.CalculateNetSal();

let second = document.getElementById("second");
second.innerHTML = obj2.CalculateNetSal();

//we can call and change any setter method eg-
// obj1.salary= 70000;
// console.log(obj1);
// first.innerHTML = obj1.CalculateNetSal();

// if we want to add any property for only any one object then
// obj1.expense=5000;
// console.log(obj1);

//or if we want to add any property for all the objects and we can use it (it will present in the prototype)
Employee.prototype.housingloan="10000";
console.log(obj1);
console.log(obj2);
//similary we can use this for adding methods for all the objects at a time and we can use it (it will present in the prototype)
