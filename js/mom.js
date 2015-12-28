var momObj = function() {
    this.x;
    this.y;
    this.angle;
    this.bigEye = new Image();
    this.bigBody = new Image();
    this.bigTail = new Image();

    this.bigTailTimer = 0;
    this.bigTailCount = 0;

}

momObj.prototype.init = function() {
    this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;
    this.angle = 0;
    this.bigEye.src = "./src/bigEye0.png";
    this.bigBody.src = "./src/bigSwim0.png";
    
}

momObj.prototype.draw = function() {
	//lerp x,y
	this.x = lerpDistance(mx,this.x,0.99);
	this.y = lerpDistance(my,this.y,0.99);
	//delta angle 角度差
	//Math.atan2(y,x);
	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	var beta = Math.atan2(deltaY,deltaX) + Math.PI;//-PI,PI;
	//lerp angle
	this.angle = lerpAngle(beta, this.angle,0.4);
   //mom tail  count
   this.bigTailTimer += deltaTime;
   if (this.bigTailTimer > 50) {
    
    this.bigTailCount = (this.bigTailCount + 1) % 8;
    this.bigTailTimer %= 50;

   }
    ctx1.save();
    ctx1.translate(this.x, this.y);
    ctx1.scale(0.5,0.5);
    ctx1.rotate(this.angle);
    var bigTailCount = this.bigTailCount;
    ctx1.drawImage(bigTail[bigTailCount], -bigTail[bigTailCount].width * 0.5 + 30,  -bigTail[bigTailCount].height * 0.5);
    ctx1.drawImage(this.bigBody, -this.bigBody.width * 0.5, -this.bigBody.height * 0.5);
    ctx1.drawImage(this.bigEye, -this.bigEye.width * 0.5, -this.bigEye.height * 0.5);
    ctx1.restore();
}
