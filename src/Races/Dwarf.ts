import Race from './Race';

export default class Dwarf extends Race {
  static createdDwarfInstances = 0;
  
  constructor(private _maxLifePoints: number = 80) {
    super('Dwarf', 48);
    Dwarf.createdDwarfInstances += 1;
  }
  
  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Dwarf.createdDwarfInstances;
  }
}

// const dwarf1 = new Dwarf();
// console.log(dwarf1.dexterity);

// console.log(  dwarf1.createdRacesInstances);
// const dwarf2 = new Dwarf();
// console.log(  dwarf2.createdRacesInstances);