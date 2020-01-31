import { SVG_NS } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.paddleWidth = 8;
    this.paddleHeight = 56;
    this.boardGap = 10;
    this.gameElement = document.getElementById(this.element);
    this.board = new Board(this.width, this.height);
    this.paddle1 = new Paddle(this.height, this.paddleWidth, this.paddleHeight, this.boardGap, ((this.height - this.paddleHeight) / 2));
    this.paddle2 = new Paddle(this.height, this.paddleWidth, this.paddleHeight, (this.width - (this.paddleWidth + this.boardGap)), ((this.height - this.paddleHeight) / 2));
    this.pongBall = new Ball(8, this.width, this.height);
    // Other code goes here...
  }

  render() {
    // More code goes here....
    this.gameElement.innerHTML = '';
    let svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
    this.gameElement.appendChild(svg);

    this.board.render(svg);
    this.paddle1.render(svg);
    this.paddle2.render(svg);
    this.pongBall.render(svg);
  }
}
