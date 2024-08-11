class AccountHolder {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.accountBalance = 0;
  }

  static rateOfInterest = 4;

  static getRateOfInterest() {
    console.log(`Rate of interest is ${this.rateOfInterest}%`);
  }

  credit(amount) {
    this.accountBalance += amount;
  }

  debit(amount) {
    this.accountBalance -= amount;
  }

  getAccountBalance() {
    console.log(`${this.firstName + ' ' + this.lastName}'s account balance is ${this.accountBalance}`);
  }
}

let smriti = new AccountHolder("Smriti", "Cat");
smriti.getAccountBalance();
smriti.credit(1000);
smriti.debit(200);
smriti.getAccountBalance();

//smriti.getRateOfInterest();
AccountHolder.getRateOfInterest();