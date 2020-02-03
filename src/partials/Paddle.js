import { SVG_NS, PADDLE_SPEED } from '../settings'

export default class Paddle {
  constructor(boardHeight, width, height, x, y, keyUp, keyDown) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = PADDLE_SPEED;
    this.score = 0;

    document.addEventListener("keydown", event => {
      switch (event.key) {
        case keyUp:
          this.moveUp();
          break;
        case keyDown:
          this.moveDown();
          break;
      }
    });
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  getScore() {
    return this.score;
  }

  increaseScore() {
    this.score = this.score + 1;
  }

  getPaddlePosition() {
    const position = {
      top: this.y,
      left: this.x,
      bottom: this.y + this.height,
      right: this.x + this.width,
    };
    return position;
  }

  moveUp() {
    this.y = Math.max(0, this.y - this.speed);
  }

  moveDown() {
    this.y = Math.min((this.boardHeight - this.height), this.y + this.speed);
  }

  render(svg) {
    let paddleRect = document.createElementNS(SVG_NS, "rect");
    paddleRect.setAttributeNS(null, "x", this.x);
    paddleRect.setAttributeNS(null, "y", this.y);
    paddleRect.setAttributeNS(null, "height", this.height);
    paddleRect.setAttributeNS(null, "width", this.width);
    paddleRect.setAttributeNS(null, "fill", "#EB9382");
    svg.appendChild(paddleRect);
  }
}