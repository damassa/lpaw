import { Player } from './shapes/Player';
import { CANVAS } from './utils/canvas';

export function addKeyEvents(keys: boolean[], player: Player) {
  window.addEventListener(
    'keydown',
    (e) => keysPressed(e, keys, player),
    false
  );
  window.addEventListener('keyup', (e) => keysReleased(e, keys), false);
}

function checkLimits(player: Player) {
  if (player.x > CANVAS.width) player.x = 0;
  if (player.x < 0) player.x = CANVAS.width;
  if (player.y > CANVAS.height) player.y = 0;
  if (player.y < 0) player.y = CANVAS.height;
}

export function keysPressed(e: KeyboardEvent, keys: boolean[], player: Player) {
  keys[e.keyCode] = true;

  checkLimits(player);

  // left
  if (keys[65] || keys[37]) {
    player.x -= player.speed;
  }

  // right
  if (keys[68] || keys[39]) {
    player.x += player.speed;
  }

  // down
  if (keys[87] || keys[38]) {
    player.y -= player.speed;
  }

  // up
  if (keys[83] || keys[40]) {
    player.y += player.speed;
  }

  e.preventDefault();
}

function keysReleased(e: KeyboardEvent, keys: boolean[]) {
  keys[e.keyCode] = false;
}

export function removeKeyDownEvent(keys: boolean[], player: Player) {
  window.removeEventListener(
    'keyup',
    (e) => keysPressed(e, keys, player),
    false
  );
}