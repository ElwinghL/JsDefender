class Tower {
  constructor(lvl = 1) {
    this.lvl = lvl;
    this.properties();
  }

  properties() {
    this.firerate = 1 + this.lvl / 10;
    this.range = 100 + 10 * this.lvl;
    this.bounce = 0;
    this.damage = 10 + this.lvl;
  }

  upgrades() {
    ++this.lvl;
    this.properties();
  }

  attack(target, ...nextTargets) {
    target.life -= this.damage;
    while (this.bounce > 0) this.attack(nextTargets);
  }
}

class ElectricTower extends Tower {
  properties() {
    this.firerate = 1 + this.lvl / 10;
    this.range = 70 + 10 * this.lvl;
    this.bounce = this.lvl;
    this.damage = 5 + this.lvl;
  }
}
