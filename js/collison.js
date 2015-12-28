//判断大鱼和果实的距离完成碰撞
function momFruitCollision() {
    for (var i = 0; i < fruit.num; i++) {
        if (fruit.alive[i]) {
            //calculate le
            var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
            if (l < 900) {
                fruit.dead(i);
            }
        }
    }
}
//大鱼喂小鱼
function  momBabyCollision() {
   var l = calLength2(baby.x,baby.y,mom.x,mom.y);
   if (l < 500) {
   	  baby.babyBodyCount = 0;


   }
}