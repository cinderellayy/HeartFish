//绘制果实
var fruitObj = function() {
    this.x = [];
    this.y = [];
    this.alive = [];
    //果实上浮
    this.l = [];
    this.spd = [];
    this.orange = new Image();
    this.blue = new Image();


}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function() {
    for (var i = 0; i < this.num; i++) {
        this.alive[i] = true;
        this.x[i] = 0;
        this.y[i] = 0;
        this.l[i] = 0;
        this.spd[i] = Math.random() * 0.005 + 0.005;
        this.born(i);

    }
    this.orange.src = "./src/fruit.png";
    this.blue.src = "./src/blue.png"
}
fruitObj.prototype.draw = function() {

    for (var i = 0; i < this.num; i++) {
        if (this.alive[i]) {
            if (this.l[i] <= 4) {
                this.l[i] += this.spd[i] * deltaTime;
            } else {
                this.y[i] -= this.spd[i] * 7 * deltaTime;
            }
            ctx2.drawImage(this.orange, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);

            if (this.y[i] < 10) {
                this.alive[i] = false;
            }
        }

    }

}
fruitObj.prototype.born = function(i) {
    // body...
    var aneID = Math.floor(Math.random() * ane.num);
    this.x[i] = ane.x[aneID];
    this.y[i] = ane.len[aneID] - canHeight;
    this.l[i] = 0;

}
