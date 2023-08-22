// req 2 - create Halfling class

import Race from './Race';

export default class Halfling extends Race {
  static createdHalflingInstances = 0;
  
  constructor(private _maxLifePoints: number = 60) {
    super('Halfling', 48);
    Halfling.createdHalflingInstances += 1;
  }
  
  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Halfling.createdHalflingInstances;
  }
}

// const Halfling1 = new Halfling();
// console.log(  Halfling1.createdRacesInstances);
// const Halfling2 = new Halfling();
// console.log(  Halfling2.createdRacesInstances);