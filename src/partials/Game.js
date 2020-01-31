import { SVG_NS, PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE_GAP, BALL_RADIUS } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.gameElement = document.getElementById(this.element);
    this.board = new Board(this.width, this.height);

    const paddle_mid = (this.height - PADDLE_HEIGHT) / 2;
    const right_gap = this.width - PADDLE_GAP - PADDLE_WIDTH;
    this.paddle1 = new Paddle(this.height, PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE_GAP, paddle_mid, 'w', 's');
    this.paddle2 = new Paddle(this.height, PADDLE_WIDTH, PADDLE_HEIGHT, right_gap, paddle_mid, 'ArrowUp', 'ArrowDown');
    this.pongBall = new Ball(BALL_RADIUS, this.width, this.height);
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
    this.pongBall.render(svg, this.paddle1, this.paddle2);
  }
}
