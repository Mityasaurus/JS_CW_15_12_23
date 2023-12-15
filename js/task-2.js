class Client {
  constructor({ name, lastname, balance } = {}) {
    this.name = name;
    this.lastname = lastname;
    balance >= 0 ? (this.balance = balance) : (this.balance = 0);
  }
  get balance() {
    return this._balance;
  }
  set balance(newBalance) {
    newBalance >= 0 ? (this._balance = newBalance) : (this._balance = 0);
  }
  fullname() {
    return `${this.name} ${this.lastname}`;
  }
}

const client1 = new Client({
  name: "Oleg",
  lastname: "Testov",
  balance: 180,
});
console.log(client1);
console.log(client1.fullname());
client1.balance = -50;
console.log(client1.balance);
