import Circ from './Circ';
import { IPlayer } from './type/IPlayer';

export class Player extends Circ implements IPlayer {
  points: number = 0;
  hasColided: boolean = false;

  constructor(
    x: number,
    y: number,
    radius: number = 20,
    color: string = 'red',
    speed: number = 10
  ) {
    super(x, y, radius, color, speed);
  }

  colide(circleCompare: Circ) {
    let dx = Math.abs(this.x - circleCompare.x);
    let dy = Math.abs(this.y - circleCompare.y);
    let distance = Math.sqrt(dx * dx + dy * dy);
    let sumRadius = this.radius + circleCompare.radius;

    if (distance <= sumRadius) return true;
    else return false;
  }
}