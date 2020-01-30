import { SVG_NS } from '../settings';

export default class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  render(svg) {
    let boardSvg = document.createElementNS(SVG_NS, "rect");
    boardSvg.setAttributeNS(null, "x", 0);
    boardSvg.setAttributeNS(null, "y", 0);
    boardSvg.setAttributeNS(null, "width", this.width);
    boardSvg.setAttributeNS(null, "height", this.height);
    boardSvg.setAttributeNS(null, "fill", '#353535');
    svg.appendChild(boardSvg);
  }
}