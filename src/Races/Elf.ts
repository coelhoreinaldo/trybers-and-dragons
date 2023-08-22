import Race from './Race';

export default class Elf extends Race {
  static createdElfInstances = 0;
  
  constructor(
    name: string,
    dexterity:number, 
    private _maxLifePoints: number = 99,
  ) {
    super(name, dexterity);
    Elf.createdElfInstances += 1;
  }
  
  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Elf.createdElfInstances;
  }
}
