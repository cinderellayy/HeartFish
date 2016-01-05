//判断大鱼和果实的距离完成碰撞
function momFruitCollision() {
    for (var i = 0; i < fruit.num; i++) {
        if (fruit.alive[i]) {
            //calculate le
            var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
            if (l < 900) {
                fruit.dead(i);
                data.fruitNum++;
                mom.bigBodyCount++;
                if (mom.bigBodyCount > 7) {
                    mom.bigBodyCount = 7;
                }
                if (fruit.fruitType[i] == "blue") {
                    data.double = 2;

                }
            }
        }
    }
}
//大鱼喂小鱼
function momBabyCollision() {
    var l = calLength2(baby.x, baby.y, mom.x, mom.y);
    if (l < 500) {
        baby.babyBodyCount = 0;
        //data -> 0
        mom.bigBodyCount = 0;
        // data.reset(); //身体颜色清0;
        //score update 
        data.addScore();

    }
}
