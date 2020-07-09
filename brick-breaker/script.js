//alert("hello")
import Paddle from "./paddle.js";


const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext("2d");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

//at first clear rectangle for changed positions
ctx.clearRect(0,0,800,600);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
paddle.draw(ctx);
