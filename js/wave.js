var waveObj = function() {
  this.x = [];
  this.y = [];
  this.alive = [];
  this.r = [];
};

waveObj.prototype.num = 10;
waveObj.prototype.init = function() {
  for (var i = 0; i < this.num; i++) {
    this.alive[i] = false;
    this[i] = 0;
  }
};

waveObj.prototype.draw = function() {
  ctx1.save();
  ctx1.lineWidth = 1;
  ctx1.shadowBlur = 4;
  ctx1.shadowColor = 'white';
  for (var i = 0; i < this.num; i++) {
    if (!this.alive[i]) continue;
    this.r[i] += deltaTime * 0.01;
    if (this.r[i] > 20) {
      this.alive[i] = false;
      break;
    }

    var alpha = 1 - this.r[i] / 20;
    ctx1.beginPath();
    ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2);
    ctx1.closePath();
    ctx1.strokeStyle = 'rgba(255,255,255,' + alpha + ')';
    ctx1.stroke();
  }

  ctx1.restore();
};

waveObj.prototype.born = function(x, y) {
  for (var i = 0; i < this.num; i++) {
    if (this.alive[i]) continue;
    this.alive[i] = true;
    this.r[i] = 8;
    this.x[i] = x;
    this.y[i] = y;

    //born
    return;
  }
};
