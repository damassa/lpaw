import Circ from './Circ';
import { IPlayer } from './type/IPlayer';

export class Player extends Circ implements IPlayer {
  points: number = 0;
  hasColided: boolean = false;
  image: HTMLImageElement;
  size: number;
  currentSprite: number;
  totalSprites: number;
  counter: number;

  constructor(
    x: number,
    y: number,
    radius: number = 128,
    color: string = 'red',
    speed: number = 10,
  ) {
    super(x, y, radius, color, speed);
    this.size = 128;
    this.image = new Image();
    this.image.src = '/images/char-front.png';
    this.currentSprite = 1;
    this.totalSprites = 3;
    this.counter = 7;
  }

  colide(circleCompare: Circ) {
    let dx = Math.abs(this.x - circleCompare.x);
    let dy = Math.abs(this.y - circleCompare.y);
    let distance = Math.sqrt(dx * dx + dy * dy);
    let sumRadius = this.radius + circleCompare.radius;

    if (distance <= sumRadius) return true;
    else return false;
  }

  draw(CTX: CanvasRenderingContext2D) {
    if(this.counter <= 0) {
      this.currentSprite = this.currentSprite < this.totalSprites -1 ? this.currentSprite + 1 : 0;
      this.counter = 7;
    } else {
      this.counter--;
    }
    CTX.drawImage(
      this.image,
      this.currentSprite * this.size,
      0,
      this.size,
      this.size,
      this.x - this.size / 2,
      this.y - this.size / 2 -10,
      this.size,
      this.size
    )
  }
}