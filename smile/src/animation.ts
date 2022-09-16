import { removeKeyDownEvent } from './keyboard';
import Circ from './shapes/Circ';
import { Player } from './shapes/Player';
import { CANVAS } from './utils/canvas';

function handlePoint(
  points: Circ[],
  player: Player,
  CTX: CanvasRenderingContext2D
) {
  let pointsContainer: any = document.getElementById('points');

  points.forEach((point, index) => {
    point.draw(CTX);

    if (player.colide(point)) {
      player.points++;
      pointsContainer.innerHTML = player.points;
      console.log(player.points);
      points.splice(index, 1);
      points.push(
        new Circ(
          Math.random() * CANVAS.width,
          Math.random() * CANVAS.height,
          10,
          'yellow'
        )
      );
    }
  });
}

function handlePlayer(
  CTX: CanvasRenderingContext2D,
  player: Player,
  points: Circ[]
) {
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
  player.draw(CTX);
  handlePoint(points, player, CTX);
}

function handleEnemies(
  CTX: CanvasRenderingContext2D,
  enemies: Circ[],
  player: Player,
  keys: boolean[]
) {
  enemies.forEach((enemy, index) => {
    enemy.draw(CTX);
    enemy.y += 5;

    if (player.colide(enemy)) {
      gameOver(keys, player);
    }

    if (enemy.y > CANVAS.height) enemies.splice(index, 1);
  });
}

function gameOver(keys: boolean[], player: Player) {
  removeKeyDownEvent(keys, player);
  let gameOverContainer: any = document.getElementById('game-over');
  gameOverContainer.style.display = 'flex';
  player.hasColided = true;
}

export function animate(
  CTX: CanvasRenderingContext2D,
  player: Player,
  enemies: Circ[],
  points: Circ[],
  keys: boolean[]
) {
  handlePlayer(CTX, player, points);
  handleEnemies(CTX, enemies, player, keys);

  if (player.hasColided) return;

  requestAnimationFrame(() => animate(CTX, player, enemies, points, keys));
}