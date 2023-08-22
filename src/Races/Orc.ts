import Race from './Race';

export default class Orc extends Race {
  static createdOrcInstances = 0;
  
  constructor(
    name: string,
    dexterity:number, 
    private _maxLifePoints: number = 74,
  ) {
    super(name, dexterity);
    Orc.createdOrcInstances += 1;
  }
  
  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Orc.createdOrcInstances;
  }
}
