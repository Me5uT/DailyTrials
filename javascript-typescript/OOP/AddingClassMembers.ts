class CheckingAccount {
  private _balance: number = 0;

  get balance() {
    return this._balance;
  }

  set balance(value: number) {
    if (value > 0) {
      this._balance = value;
    }
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  withdrawal(amount: number) {
    this.balance -= amount;
  }
}

const mesut = new CheckingAccount();

mesut.deposit(5);

console.log(mesut.balance);
mesut.balance = 6;
console.log(mesut.balance);

mesut.balance = 0;
console.log(mesut.balance);
