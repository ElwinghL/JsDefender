class Tower {
  constructor(lvl = 1) {
    this.lvl = lvl;
    this.properties();
  }

  properties() {
    this.firerate = 1 + this.lvl / 10;
    this.range = 100 + 10 * this.lvl;
    this.bonce = 0;
  }

  upgrades() {
    ++this.lvl;
    this.properties();
  }
}

class ElectricTower extends Tower {
  properties() {
    this.firerate = 1 + this.lvl / 10;
    this.range = 70 + 10 * this.lvl;
    this.bonce = this.lvl;
  }
}
