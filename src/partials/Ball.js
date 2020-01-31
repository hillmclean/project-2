import { SVG_NS } from '../settings';

export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
    this.direction = 1;
  }
  render(svg) {
    let pongBall = document.createElementNS(SVG_NS, "circle");
    pongBall.setAttributeNS(null, "cx", this.x);
    pongBall.setAttributeNS(null, "cy", this.y);
    pongBall.setAttributeNS(null, "r", this.radius);
    pongBall.setAttributeNS(null, "fill", "white");
    svg.appendChild(pongBall);
  }
}