class BankAccount {
    constructor(owner, balance = 0) {
      this.owner = owner;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`$${amount} deposited successfully!`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`$${amount} withdrawn successfully!`);
      } else if (amount > this.balance) {
        console.log("Insufficient funds.");
      } else {
        console.log("Withdrawal amount must be positive.");
      }
    }
  
    checkBalance() {
      console.log(`Current balance: $${this.balance}`);
    }
  }
  
  // Example usage:
  const account = new BankAccount('Vijay', 100);
  account.deposit(50);
  account.withdraw(30);
  account.checkBalance();
  