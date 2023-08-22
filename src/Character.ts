import Archetype from './Archetypes/Archetype';
import Mage from './Archetypes/Mage';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Elf from './Races/Elf';
import Race from './Races/Race';
import getRandomInt, { formatEnergyObject } from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(
    private _name: string,
  ) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(this._name, this._dexterity);
    this._archetype = new Mage(this._name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = formatEnergyObject(
      this._archetype.energyType,
      getRandomInt(1, 10),
    );
  }

  get race():Race { return this._race; }
  get archetype():Archetype { return this._archetype; }
  get lifePoints():number { return this._lifePoints; }
  get strength():number { return this._strength; }
  get defense():number { return this._defense; }
  get dexterity():number { return this._dexterity; }
  get energy():Energy {
    return formatEnergyObject(this._energy.type_, this._energy.amount);
  }

  receiveDamage(attackPoints: number): number {
    const totalDamage = attackPoints - this._defense;

    if (totalDamage > 0) {
      this._lifePoints -= totalDamage;
    } else {
      this._lifePoints -= 1;
    }
      
    if (this._lifePoints < -1) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);

    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }
}