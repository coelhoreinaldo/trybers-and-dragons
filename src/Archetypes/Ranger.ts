import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static createdRangerInstances = 0;
  private _energyType:EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Ranger.createdRangerInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.createdRangerInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;    
  }
}

// const Ranger1 = new Ranger('Xd')
// console.log(Ranger1.energyType);
// console.log(Ranger1.createdArchetypeInstances)
// const Ranger2 = new Ranger('Xd')
// console.log(Ranger2.createdArchetypeInstances)
