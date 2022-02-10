// Object Literal
const bank = {
  balance: 500,
};

console.log("bank.balance", bank.balance);

// Using Class
class AkBank {
  balance = 600;
}
const classObj = new AkBank();

console.log("classObj.balance", classObj.balance);

// Using Function
function GarantiBank() {
  this.balance = 700;
}

const funcObj = new GarantiBank();

console.log("funcObj.balance", funcObj.balance);

// Using Object.create()
const objCreate = Object.create(bank);

console.log("objCreate.balance", objCreate.balance);
