class User {
  constructor({ name, lastname, age, email } = {}) {
    this.name = name;
    this.lastname = lastname;
    age >= 18 && age <= 120 ? (this.age = age) : (this.age = 18);
    this.email = email;
  }
  get age() {
    return this._age;
  }
  set age(newAge) {
    newAge >= 18 && newAge <= 120 ? (this._age = newAge) : (this._age = 18);
  }
  get email() {
    return this._email;
  }
  set email(newEmail) {
    if (newEmail.includes("@")) {
      this._email = newEmail;
    }
  }
  printInfo() {
    console.log(
      `Name - ${this.name}\nLastname - ${this.lastname}\nAge - ${this.age}\nEmail - ${this.email}`
    );
  }
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

const user1 = new User({
  name: "Oleg",
  lastname: "Testov",
  age: 25,
  email: "oleg@gmail.com",
});

user1.printInfo();

user1.changeEmail("test@example.com");
user1.printInfo();
