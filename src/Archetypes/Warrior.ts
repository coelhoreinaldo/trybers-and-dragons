import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static createdWarriorInstances = 0;
  private _energyType:EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior.createdWarriorInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.createdWarriorInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;    
  }
}
