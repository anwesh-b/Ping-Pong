import { Player } from "./player.js";
// import { get3d } from '../utils.js';
import { BOARD, DISTANCE_TO_BOARD } from '../constants/board.js';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../constants/constants.js';

export class Human extends Player{
    constructor(ctx,x,y,z){
        super(ctx,x,y,z);
        document.getElementsByTagName('canvas')[0].addEventListener('mousemove',(x)=>{
            this.batPosition.x = x.x - CANVAS_WIDTH/2;
            this.batPosition.z = (CANVAS_HEIGHT - x.y) * BOARD.LENGTH / CANVAS_HEIGHT;             
            document.getElementById('ping-pong-container').style.cursor = 'none';
        })
    }
}