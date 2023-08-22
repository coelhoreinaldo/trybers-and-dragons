// req 2 - create Orc class

import Race from './Race';

export default class Orc extends Race {
  static createdOrcInstances = 0;
  
  constructor(private _maxLifePoints: number = 74) {
    super('Orc', 48);
    Orc.createdOrcInstances += 1;
  }
  
  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Orc.createdOrcInstances;
  }
}

// const Orc1 = new Orc();
// console.log(  Orc1.createdRacesInstances);
// const Orc2 = new Orc();
// console.log(  Orc2.createdRacesInstances);