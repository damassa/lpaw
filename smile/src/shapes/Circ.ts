import { ICirc } from './type/ICirc';

export default class Circ implements ICirc {
  x: number;
  y: number;
  radius: number;
  color: string;
  speed: number;

  constructor(
    x: number,
    y: number,
    radius: number = 20,
    color: string = 'red',
    speed: number = 10
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.speed = speed;
  }

  draw(CTX: CanvasRenderingContext2D) {
    CTX.beginPath();
    CTX.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
    CTX.closePath();
    CTX.fillStyle = this.color;
    CTX.fill();
  }
}