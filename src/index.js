import './styles/game.css';
import Game from './partials/Game';
import { GAME_WIDTH, GAME_HEIGHT } from './settings';

const game = new Game('game', GAME_WIDTH, GAME_HEIGHT);

(function gameLoop() {
  game.render();
  requestAnimationFrame(gameLoop);
})();
