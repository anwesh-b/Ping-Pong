import { get2dCoordinate } from './utils.js';
import { ACCELERATION_DUE_TO_GRAVITY, SPEED_AFTER_BOUNCE, BOARD_COORDINATE, BOARD_HEIGHT, BOARD_BALL_RADIUS, MAX_BALL_Z_DISTANCE, BOARD_LENTH, DISTANCE_TO_BOARD } from './constants.js';

export class Ball{
    constructor(ctx,board){
        this.ctx = ctx;
        this.board = board;
        this.position = { x: 10, y: 100, z:250};
        this.dZ = 7.8;
        this.dY = 0;
        this.dX = 1;
        this.position2d = get2dCoordinate(this.position);
    }

    drawBall(){
        this.position2d = get2dCoordinate(this.position);
        this.currentRadius = this.position2d.x2d - get2dCoordinate({x: this.position.x + BOARD_BALL_RADIUS,y: this.position.y,z:this.position.z}).x2d;
        this.ctx.beginPath();
        this.ctx.arc(this.position2d.x2d, this.position2d.y2d, Math.abs(this.currentRadius), 0, 2 * Math.PI);
        this.ctx.fillStyle = 'white'
        this.ctx.fill();
        this.ctx.stroke();
        if (this.ballAboveBoard()) this.drawShadow();
    }

    drawShadow(){
        let shadowPos = {x: this.position.x, y:BOARD_HEIGHT, z: this.position.z };
        var shadow = get2dCoordinate(shadowPos);
    
        this.ctx.beginPath();
        this.ctx.arc(shadow.x2d, shadow.y2d, Math.abs(this.currentRadius), 0, 2 * Math.PI);
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.21)'
        this.ctx.fill();
    }

    ballAboveBoard(){
        if(this.position.x>BOARD_COORDINATE.leftBot.x && this.position.x<BOARD_COORDINATE.rightBot.x && this.position.z<BOARD_COORDINATE.leftBot.z && this.position.z>BOARD_COORDINATE.leftTop.z){
            return true;
        }
        return false;
    }

    moveBall(){
        if(this.position.z<= DISTANCE_TO_BOARD - MAX_BALL_Z_DISTANCE || this.position.z>= DISTANCE_TO_BOARD + BOARD_LENTH + MAX_BALL_Z_DISTANCE) {
            this.dZ *= -1;
            this.dX *= -1;
        }
        this.dY += ACCELERATION_DUE_TO_GRAVITY;
        if(this.detectCollision()) this.dY = SPEED_AFTER_BOUNCE;
        this.position.x += this.dX;
        this.position.y += this.dY;
        this.position.z += this.dZ;
    }

    detectCollision(){
        if(this.position.y + BOARD_BALL_RADIUS >= BOARD_HEIGHT ) return true;
        return false
    }
}