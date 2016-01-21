//绘制海葵
var aneObj = function() {
  this.x = [];
  this.len = [];
};

aneObj.prototype.num = 50;
aneObj.prototype.init = function() {
  for (var i = 0; i < this.num; i++) {
    this.x[i] = i * 10 + Math.random() * 6;
    this.len[i] = 240 + Math.random() * 5;
  }
};

aneObj.prototype.draw = function() {
  ctx2.save();
  ctx2.globalAlpha = 0.6;
  ctx2.lineWidth = 10;

  ctx2.lineCap = 'round';
  ctx2.strokeStyle = '#3b154e';
  for (var i = 0; i < this.num; i++) {
    ctx2.beginPath();
    ctx2.moveTo(this.x[i], canHeight);
    ctx2.lineTo(this.x[i], this.len[i] - canHeight);
    ctx2.stroke();
  }

  ctx2.restore();
};

