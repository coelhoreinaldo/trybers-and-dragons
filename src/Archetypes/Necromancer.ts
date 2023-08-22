import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static createdNecromancerInstances = 0;
  private _energyType:EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Necromancer.createdNecromancerInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.createdNecromancerInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;    
  }
}
