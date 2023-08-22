import Energy from '../Energy';

export default interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
  special?(enemy:Fighter):void;
  attack(enemy:Fighter):void;
  levelUp(): void;
  receiveDamage(attackPoints:number):number;
}