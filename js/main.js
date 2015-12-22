var can1,
    can2,
    ctx1,
    ctx2;
var canWidth, canHeight;
var lastTime,
    deltaTime;

var bgPic = new Image(); //绘制背景新建图片对象
var ane; //绘制海葵
var fruit; //绘制果实
var mom; //绘制大鱼

var mx; //鼠标坐标
var my;


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
    can1.addEventListener('mousemove', onMouseMove, false);
    bgPic.src = "./src/background.jpg";
    canWidth = can1.width;
    canHeight = can1.height;
    ane = new aneObj();
    ane.init();
    fruit = new fruitObj();
    fruit.init();
    mom = new momObj();
    mom.init();

    mx = canWidth * 0.3;
    my = canHeight * 0.3;
}

function gameloop() {
    window.requestAnimFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    drawbackground();
    ane.draw();
    fruitMonitor();
    fruit.draw();
    ctx1.clearRect(0, 0, canWidth, canHeight);
    mom.draw();

}

function onMouseMove(e) {
    if (e.offsetX || e.layerX) {
        mx = e.offsetX == undefined ? e.layerX : e.offsetX;
        my = e.offsetY == undefined ? e.layerY : e.offsetY;


    }
}
