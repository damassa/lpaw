import Circ from '../shapes/Circ';
import { CANVAS } from './canvas';

export function createPoints(quantity: number, pointColor: string) {
  let points: Circ[] = [];
  for (let i = 0; i < quantity; i++) {
    points.push(
      new Circ(
        Math.random() * CANVAS.width,
        Math.random() * CANVAS.height,
        10,
        pointColor
      )
    );
  }

  return points;
}