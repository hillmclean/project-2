import { SVG_NS } from '../settings';

export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
  }
  render(svg) {
    let pongBall = document.createElementNS(SVG_NS, "circle");
    pongBall.setAttributeNS(null, "cx", this.boardWidth);
    pongBall.setAttributeNS(null, "cy", this.boardHeight);
    pongBall.setAttributeNS(null, "r", this.radius);
    pongBall.setAttributeNS(null, "fill", "white");
    svg.appendChild(pongBall);
  }
}