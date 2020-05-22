// • Create class Account having property name, balance. 
// Write method deposit whose job is to increase balance with the amount deposited by user. 
// Create two objects and call deposit method. Write method display which will display name and 
// balance

class Account {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    deposite(amountIncrease) {
        this.balance = this.balance + amountIncrease;
    }
    display(){
        let print=document.getElementById("print");
        print.innerHTML=`<h1><b> The balance of ${this.name} is ${this.balance} </b</h1>`
    }
}

let obj1=new Account("Ashwin",5000);
let obj2=new Account("Shyam",8000);

obj1.deposite(10000);
obj2.deposite(9000)

obj1.display();
obj2.display();