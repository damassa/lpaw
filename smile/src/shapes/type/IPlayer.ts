import Circ from '../Circ';

export interface IPlayer {
  points: number;
  hasColided: boolean;
  colide(circleCompare: Circ): boolean;
}