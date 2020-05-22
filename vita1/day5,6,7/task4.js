// Create class Account having instance member name , balance . It has method deposit whose job is to 
// increase balance. Create a child class current account inheriting from Account class. It has method 
// withdraw whose job is to  reduce the balance. 


// Create two objects of current account and call deposit 
// and withdraw method. Child class has show method whose job is to display name and new balance.

class Account {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    deposite(amountIncrease) {
        this.balance = this.balance + amountIncrease;
    }
}

class currentAccount extends Account {
    constructor(name, balance) {
        super(name, balance);
    }

    withdraw(amountDecrease) {
        this.balance = this.balance - amountDecrease;
    }

    show() {
    return "<b>Name is</b>"+" "+this.name+"<br>"+ "<b>after withdraw balance:</b>"+this.balance;    
    }

}

let obj1 = new currentAccount("Ashwin", 6000);
let obj2 = new currentAccount("Himanshu", 5000);

obj1.deposite(5000);
obj1.withdraw(3000);


document.getElementById("print").innerHTML = obj1.show();