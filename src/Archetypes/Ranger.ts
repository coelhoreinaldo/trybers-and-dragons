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
