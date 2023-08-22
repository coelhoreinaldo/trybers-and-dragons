import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(private _player1:Fighter, private _enemies:SimpleFighter[]) {
    super(_player1);
  }

  fight(): number {
    for (let i = 0; i < this._enemies.length; i += 1) {
      while (this._player1.lifePoints !== -1 
        && this._enemies[i].lifePoints !== -1) {
        this._player1.attack(this._enemies[i]);
        this._enemies[i].attack(this._player1);
      }
    }
    return this._player1.lifePoints > 1 ? 1 : -1;
  }
}