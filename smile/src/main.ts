import Circ from './shapes/Circ';
import { animate } from './animation';
import { addKeyEvents } from './keyboard';
import { Player } from './shapes/Player';
import { CANVAS, CTX } from './utils/canvas';
import { createPoints } from './utils/createPoints';


let numberOfPoints: number = 1;
let enemyRate: number = 0.5;
let playerSpeed: number = 10;
let playerColor: string = 'green';
let enemyColor: string = 'black';
let pointColor: string = 'yellow';
let enemyRadius: number = 15;

let player = new Player(
  CANVAS.width / 2,
  CANVAS.height / 2,
  20,
  playerColor,
  playerSpeed
);
let keys: boolean[] = [];
let enemies: Circ[] = [];
let points: Circ[] = createPoints(numberOfPoints, pointColor);

addKeyEvents(keys, player);

setInterval(() => {
  enemies.push(
    new Circ(Math.random() * CANVAS.width, 0, enemyRadius, enemyColor, 5)
  );
}, 1000 * enemyRate);

animate(CTX, player, enemies, points, keys);