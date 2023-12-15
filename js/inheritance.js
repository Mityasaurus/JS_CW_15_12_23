class Hero {
  constructor({ name = "Hero", xp = 0 }) {
    this.name = name;
    this.xp = xp;
  }
  gainXP(amount) {
    console.log(`${this.name} отримує ${amount} досвіду`);
    this.xp += amount;
  }
}

class Warrior extends Hero {
  constructor({ weapon, ...restProps } = {}) {
    super(restProps);
    this.weapon = weapon;
  }
  attack() {
    console.log(`${this.name} атакує, використовуючи ${this.weapon}`);
  }
}

console.dir(Warrior);

class Berserk extends Warrior {
  constructor({ warCry, ...restProps } = {}) {
    super(restProps);
    this.warCry = warCry;
  }
  rage() {
    console.log(this.warCry);
  }
}

class Druid extends Berserk {
  constructor({ skill, ...restProps } = {}) {
    super(restProps);
    this.skill = skill;
  }
  invoke() {
    console.log(`${this.name} використовує ${this.skill}`);
  }
}

const jack = new Druid({
  name: "Jack",
  xp: 500,
  weapon: "axe",
  warCry: "Deus vult!",
  skill: "Convert to wolf",
});

jack.rage();
jack.invoke();
jack.attack();
jack.gainXP(300);
console.log(jack.xp);
