import Race from './Race';

export default class Halfling extends Race {
  static createdHalflingInstances = 0;
  
  constructor(
    name: string,
    dexterity:number, 
    private _maxLifePoints: number = 60,
  ) {
    super(name, dexterity);
    Halfling.createdHalflingInstances += 1;
  }
  
  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Halfling.createdHalflingInstances;
  }
}