import { EnergyType } from './Energy';

function getRandomInt(min: number, max: number) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin)) + newMin;
}

export default getRandomInt;

export function formatEnergyObject(type_: EnergyType, amount: number) {
  return {
    type_,
    amount,
  };
}