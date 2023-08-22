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