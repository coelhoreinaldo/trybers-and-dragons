import Race from './Race';

export default class Dwarf extends Race {
  static createdDwarfInstances = 0;
  
  constructor(
    name: string,
    dexterity:number, 
    private _maxLifePoints: number = 80,
  ) {
    super(name, dexterity);
    Dwarf.createdDwarfInstances += 1;
  }
  
  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Dwarf.createdDwarfInstances;
  }
}
