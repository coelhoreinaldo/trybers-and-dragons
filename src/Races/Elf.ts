import Race from './Race';

export default class Elf extends Race {
  static createdElfInstances = 0;
  
  constructor(private _maxLifePoints: number = 99) {
    super('Elf', 48);
    Elf.createdElfInstances += 1;
  }
  
  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Elf.createdElfInstances;
  }
}

// const Elf1 = new Elf();
// console.log(  Elf1.createdRacesInstances);
// const Elf2 = new Elf();
// console.log(  Elf2.createdRacesInstances);