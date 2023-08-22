import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static createdMageInstances = 0;
  private _energyType:EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage.createdMageInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.createdMageInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;    
  }
}

// const mage1 = new Mage('Xd')
// console.log(mage1.energyType);
// console.log(mage1.createdArchetypeInstances)
// const mage2 = new Mage('Xd')
// console.log(mage2.createdArchetypeInstances)
