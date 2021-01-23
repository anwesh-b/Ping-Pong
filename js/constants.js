export const PLAYER_PROJECTOR = {
    cameraPosition: {
      x: 0,
      y: -30,
      z: -10
    },
    cameraOrientation: {
      x: -Math.PI / 8,
      y: 0,
      z: 0
    },

    viewerPosition: {
      x: -400,
      y: -100,
      z: 500
    }
  };


//Board
export const DISTANCE_TO_BOARD = 50;

// Official Sizes in cm
const OFFICIAL_HEIGHT = 76;
const OFFICIAL_LENGTH = 274;
const OFFICIAL_THICKNESS = 5;
const OFFICIAL_WIDTH = 152.5;
const OFFICIAL_MID_LINE = 0.3;
const OFFICIAL_SIDE_LINES = 2;
const OFFICIAL_BALL_RADIUS = 2;
const OFFICIAL_NET_LENGTH = 183;
const OFFICIAL_NET_HEIGHT = 15.25;

//Relative size for game in px
export const BOARD_LENTH = 200;
export const BOARD_STAND_WIDTH = 5;
export const BOARD_TO_STAND_DISTANCE = BOARD_LENTH/16;
export const BOARD_WIDTH = BOARD_LENTH * OFFICIAL_WIDTH / OFFICIAL_LENGTH;
export const BOARD_HEIGHT = BOARD_LENTH * OFFICIAL_HEIGHT / OFFICIAL_LENGTH;
export const BOARD_MID_LINE = BOARD_LENTH * OFFICIAL_MID_LINE / OFFICIAL_LENGTH;
export const BOARD_THICKNESS = BOARD_LENTH * OFFICIAL_THICKNESS / OFFICIAL_LENGTH;
export const BOARD_NET_HEIGHT = BOARD_LENTH * OFFICIAL_NET_HEIGHT / OFFICIAL_LENGTH;
export const BOARD_NET_LENGTH = BOARD_LENTH * OFFICIAL_NET_LENGTH / OFFICIAL_LENGTH;
export const BOARD_SIDE_LINES = BOARD_LENTH * OFFICIAL_SIDE_LINES / OFFICIAL_LENGTH;
export const BOARD_BALL_RADIUS = BOARD_LENTH * OFFICIAL_BALL_RADIUS / OFFICIAL_LENGTH;

//Board Coordinates
export const BOARD_COORDINATE = {
  leftBot: { x: -1*BOARD_WIDTH/2, y: BOARD_HEIGHT, z: DISTANCE_TO_BOARD+BOARD_LENTH },
  leftTop: { x: -1*BOARD_WIDTH/2, y: BOARD_HEIGHT, z: DISTANCE_TO_BOARD },
  rightBot: { x: BOARD_WIDTH/2, y: BOARD_HEIGHT, z: DISTANCE_TO_BOARD+BOARD_LENTH },
  rightTop: { x: BOARD_WIDTH/2, y: BOARD_HEIGHT, z: DISTANCE_TO_BOARD },
  //Board Inner Edges
  innerLeftBot: { x: -1*BOARD_WIDTH/2 + BOARD_SIDE_LINES, y:BOARD_HEIGHT, z: DISTANCE_TO_BOARD+BOARD_LENTH-BOARD_SIDE_LINES },
  innerLeftTop: { x: -1*BOARD_WIDTH/2 + BOARD_SIDE_LINES, y: BOARD_HEIGHT, z: DISTANCE_TO_BOARD+BOARD_SIDE_LINES },
  innerRightBot: { x: BOARD_WIDTH/2 - BOARD_SIDE_LINES, y: BOARD_HEIGHT, z: DISTANCE_TO_BOARD+BOARD_LENTH-BOARD_SIDE_LINES}, 
  innerRightTop: { x: BOARD_WIDTH/2 - BOARD_SIDE_LINES, y: BOARD_HEIGHT, z: DISTANCE_TO_BOARD+BOARD_SIDE_LINES}, 
  innerMidLeftBot:  {x: -1*BOARD_MID_LINE/2 + BOARD_SIDE_LINES, y: BOARD_HEIGHT, z: DISTANCE_TO_BOARD+BOARD_LENTH-BOARD_SIDE_LINES },
  innerMidLeftTop: {x: -1*BOARD_MID_LINE/2, y: BOARD_HEIGHT, z: DISTANCE_TO_BOARD+BOARD_SIDE_LINES },
  innerMidRightBot:  {x: BOARD_MID_LINE/2 + BOARD_SIDE_LINES, y: BOARD_HEIGHT, z: DISTANCE_TO_BOARD+BOARD_LENTH-BOARD_SIDE_LINES},
  innerMidRightTop: {x: BOARD_MID_LINE/2, y: BOARD_HEIGHT, z: DISTANCE_TO_BOARD+BOARD_SIDE_LINES},
  //Net Edges
  netLeftBot: { x: -1*BOARD_NET_LENGTH/2, y: BOARD_HEIGHT+BOARD_NET_HEIGHT, z:DISTANCE_TO_BOARD+(BOARD_LENTH/2)},
  netLeftTop: { x: -1*BOARD_NET_LENGTH/2, y: BOARD_HEIGHT, z:DISTANCE_TO_BOARD+(BOARD_LENTH/2)},
  netRightBot: { x: BOARD_NET_LENGTH/2, y: BOARD_HEIGHT+BOARD_NET_HEIGHT, z:DISTANCE_TO_BOARD+(BOARD_LENTH/2) }, 
  netRightTop: { x: BOARD_NET_LENGTH/2, y: BOARD_HEIGHT, z: DISTANCE_TO_BOARD+(BOARD_LENTH/2)},
  //Stand Positions
  leftTopStandUpper: {x: -1*BOARD_WIDTH/2 + BOARD_TO_STAND_DISTANCE, y: BOARD_HEIGHT, z: DISTANCE_TO_BOARD+BOARD_LENTH  - BOARD_TO_STAND_DISTANCE},
  leftTopStandLower: {x: -1*BOARD_WIDTH/2 + BOARD_TO_STAND_DISTANCE, y: BOARD_HEIGHT*2, z: DISTANCE_TO_BOARD+BOARD_LENTH  - BOARD_TO_STAND_DISTANCE},
  leftBotStandUpper: {x: -1*BOARD_WIDTH/2 + BOARD_TO_STAND_DISTANCE, y: BOARD_HEIGHT, z: DISTANCE_TO_BOARD + BOARD_TO_STAND_DISTANCE},
  leftBotStandLower: {x: -1*BOARD_WIDTH/2 + BOARD_TO_STAND_DISTANCE, y: BOARD_HEIGHT*2, z: DISTANCE_TO_BOARD + BOARD_TO_STAND_DISTANCE},
  rightTopStandUpper: {x: BOARD_WIDTH/2 - BOARD_TO_STAND_DISTANCE, y: BOARD_HEIGHT, z: DISTANCE_TO_BOARD+BOARD_LENTH - BOARD_TO_STAND_DISTANCE},
  rightTopStandLower: {x: BOARD_WIDTH/2 - BOARD_TO_STAND_DISTANCE, y: BOARD_HEIGHT*2, z: DISTANCE_TO_BOARD + BOARD_LENTH - BOARD_TO_STAND_DISTANCE},
  rightBotStandUpper: {x: BOARD_WIDTH/2 - BOARD_TO_STAND_DISTANCE, y: BOARD_HEIGHT, z: DISTANCE_TO_BOARD + BOARD_TO_STAND_DISTANCE},
  rightBotStandLower: {x: BOARD_WIDTH/2 - BOARD_TO_STAND_DISTANCE, y: BOARD_HEIGHT*2, z: DISTANCE_TO_BOARD + BOARD_TO_STAND_DISTANCE}
}

//Balls
export const MAX_BALL_Z_DISTANCE = 20;
export const MAX_BALL_X_DISTANCE = BOARD_WIDTH*5/8 ;
export const MAX_BALL_Y_DISTANCE = BOARD_HEIGHT*2;