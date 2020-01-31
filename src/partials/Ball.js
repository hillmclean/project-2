import { SVG_NS } from '../settings';

export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
    this.direction = 1;
    this.reset();
  }

  reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
    this.vy = 0;
    while (this.vy === 0) {
      this.vy = (Math.random() * 10) - 5;
    }
    this.vx = (6 - Math.abs(this.vy)) * this.direction;
  }

  ballMove() {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }

  render(svg) {
    let pongBall = document.createElementNS(SVG_NS, "circle");
    pongBall.setAttributeNS(null, "cx", this.x);
    pongBall.setAttributeNS(null, "cy", this.y);
    pongBall.setAttributeNS(null, "r", this.radius);
    pongBall.setAttributeNS(null, "fill", "white");
    svg.appendChild(pongBall);
    this.ballMove();
  }
}