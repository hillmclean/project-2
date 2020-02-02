import { SVG_NS } from '../settings';

export default class Winner {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  render(svg, winner) {
    const winnerSvg = document.createElementNS(SVG_NS, "text");
    winnerSvg.setAttributeNS(null, "x", this.x);
    winnerSvg.setAttributeNS(null, "y", this.y);
    winnerSvg.setAttributeNS(null, "font-size", this.size);
    winnerSvg.setAttributeNS(null, "font-family", "'Silkscreen Web', monotype");
    winnerSvg.setAttributeNS(null, "fill", "white");
    winnerSvg.textContent = winner;
    svg.appendChild(winnerSvg);
  }
}