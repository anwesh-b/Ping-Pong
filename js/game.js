import { Ball } from './ball.js';
import { Board } from "./board.js";
import { Human } from './players/human.js';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from './constants.js';

export class Game{
    constructor(gameContainer){
        gameContainer.innerHTML = '<canvas></canvas>'
        this.canvas = gameContainer.getElementsByTagName('canvas')[0];
        this.ctx = this.canvas.getContext('2d');
        this.canvas.height = CANVAS_HEIGHT;
        this.canvas.width = CANVAS_WIDTH;
        this.board = new Board(this.ctx);
        this.ball = new Ball(this.ctx, this.board);
        this.player1 = new Human(this.ctx,10,50,150);
        this.animate();
    }

    animate(){
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ball.moveBall();
        this.board.drawBoard();
        this.ball.drawBall();
        this.player1.drawBat();
        requestAnimationFrame(this.animate.bind(this));
    }
}
