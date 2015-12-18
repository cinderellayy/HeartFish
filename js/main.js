var can1,
    can2,
    ctx1,
    ctx2;
var canWidth, canHeight;
var lastTime,
    deltaTime;
var bgPic = new Image(); //新建图片对象

document.body.onload = game;

function game() {
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameloop();
}

function init() {
    can1 = document.getElementById("canvas1");
    ctx1 = can1.getContext('2d');
    can2 = document.getElementById("canvas2");
    ctx2 = can2.getContext('2d');
    bgPic.src = "./src/background.jpg";
    canWidth = can1.width;
    canHeight = can1.height;
}

function gameloop() {
    window.requestAnimFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    drawbackground();
}
