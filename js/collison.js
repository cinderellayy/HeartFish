//判断大鱼和果实的距离完成碰撞
function momFruitCollision() {
  if (data.gameOver) return;
  for (var i = 0; i < fruit.num; i++) {
    if (!fruit.alive[i]) continue;

    //calculate le
    var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
    if (l >= 600) continue;
    fruit.dead(i);
    data.fruitNum++;
    mom.bigBodyCount++;
    mom.bigBodyCount = mom.bigBodyCount > 7 ? 7 : mom.bigBodyCount;
    data.double = fruit.fruitType[i] == 'blue' ? 2 : data.double;
    wave.born(fruit.x[i], fruit.y[i]);
  }
}

//大鱼喂小鱼
function momBabyCollision() {

  if (data.fruitNum <= 0 || data.gameOver) return;
  var l = calLength2(baby.x, baby.y, mom.x, mom.y);
  if (l >= 500) return;
  baby.babyBodyCount = 0;

  //data -> 0
  mom.bigBodyCount = 0;

  // data.reset(); //身体颜色清0;
  //score update
  data.addScore();

  //draw halo
  halo.born(baby.x, baby.y);

}
