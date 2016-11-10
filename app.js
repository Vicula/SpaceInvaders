var canvas = document.querySelector("canvas");
var game = canvas.getContext("2d");
var x = 0;
var y = 0;
var xspeed = 0;
var yspeed = 0;
var gravity = 1;
var height = 100;
var ground = 139;
var playerBullets = [];
var enemyBullets = [];


var theEnimes = [
  {
    x: 8,
    y: 2,
    health: 4,
    alive: true
  },
  {
    x: 38,
    y: 2,
    health: 4,
    alive: true
  },
  {
    x: 68,
    y: 2,
    health: 4,
    alive: true
  },
  {
    x: 98,
    y: 2,
    health: 4,
    alive: true
  },
  {
    x: 128,
    y: 2,
    health: 4,
    alive: true
  },
  {
    x: 158,
    y: 2,
    health: 4,
    alive: true
  },
  {
    x: 188,
    y: 2,
    health: 4,
    alive: true
  },
  {
    x: 218,
    y: 2,
    health: 4,
    alive: true
  },
  {
    x: 248,
    y: 2,
    health: 4,
    alive: true
  },
  {
    x: 278,
    y: 2,
    health: 4,
    alive: true
  },
  {
    x: 8,
    y: 13,
    health: 3,
    alive: true
  },
  {
    x: 38,
    y: 13,
    health: 3,
    alive: true
  },
  {
    x: 68,
    y: 13,
    health: 3,
    alive: true
  },
  {
    x: 98,
    y: 13,
    health: 3,
    alive: true
  },
  {
    x: 128,
    y: 13,
    health: 3,
    alive: true
  },
  {
    x: 158,
    y: 13,
    health: 3,
    alive: true
  },
  {
    x: 188,
    y: 13,
    health: 3,
    alive: true
  },
  {
    x: 218,
    y: 13,
    health: 3,
    alive: true
  },
  {
    x: 248,
    y: 13,
    health: 3,
    alive: true
  },
  {
    x: 278,
    y: 13,
    health: 3,
    alive: true
  },
  {
    x: 8,
    y: 24,
    health: 2,
    alive: true
  },
  {
    x: 38,
    y: 24,
    health: 2,
    alive: true
  },
  {
    x: 68,
    y: 24,
    health: 2,
    alive: true
  },
  {
    x: 98,
    y: 24,
    health: 2,
    alive: true
  },
  {
    x: 128,
    y: 24,
    health: 2,
    alive: true
  },
  {
    x: 158,
    y: 24,
    health: 2,
    alive: true
  },
  {
    x: 188,
    y: 24,
    health: 2,
    alive: true
  },
  {
    x: 218,
    y: 24,
    health: 2,
    alive: true
  },
  {
    x: 248,
    y: 24,
    health: 2,
    alive: true
  },
  {
    x: 278,
    y: 24,
    health: 2,
    alive: true
  },
  {
    x: 8,
    y: 35,
    health: 1,
    alive: true
  },
  {
    x: 38,
    y: 35,
    health: 1,
    alive: true
  },
  {
    x: 68,
    y: 35,
    health: 1,
    alive: true
  },
  {
    x: 98,
    y: 35,
    health: 1,
    alive: true
  },
  {
    x: 128,
    y: 35,
    health: 1,
    alive: true
  },
  {
    x: 158,
    y: 35,
    health: 1,
    alive: true
  },
  {
    x: 188,
    y: 35,
    health: 1,
    alive: true
  },
  {
    x: 218,
    y: 35,
    health: 1,
    alive: true
  },
  {
    x: 248,
    y: 35,
    health: 1,
    alive: true
  },
  {
    x: 278,
    y: 35,
    health: 1,
    alive: true
  }
];




var background = new Image();
background.src = "http://scp-wiki.wdfiles.com/local--files/scp-1685/starf.png";
background.onload = function(){
    game.drawImage(background,0,0);
}

var enemy = new Image();
enemy.src = "thumb_design_product-15449-5872-759.png"

var enemy2 = new Image();
enemy2.src = 'invader-yellow.png'

var enemy3 = new Image();
enemy3.src = 'invader-purple.png'

var enemy4 = new Image();
enemy4.src = "invader-red.png"


var playerRight = new Image();
playerRight.src = "https://beaconcoderdojo.files.wordpress.com/2013/05/spaceship.gif?w=584";
playerRight.width = 10;
playerRight.height = 10;
var imageRatio = 1;
playerRight.onload = function() {
  imageRatio = playerRight.width / playerRight.height;
}
var playerLeft = new Image();
playerLeft.src = "https://beaconcoderdojo.files.wordpress.com/2013/05/spaceship.gif?w=584";
var playerImage = playerRight;

function draw() {
  game.drawImage(background,0,0);
  x = x + xspeed;
  y = y + yspeed;
  yspeed = yspeed + gravity;

  if (y > ground) {
    y = ground;
    yspeed = 0;
  }



  if (x < 0){
    x = 0;
  }


  if (x > 285){
    x = 285;
  }

  game.drawImage(playerImage, x, y,15,8);


  theEnimes.forEach(function(enemyData){
     if(enemyData.y === 2){
        if (enemyData.health === 1){
           game.drawImage(enemy4, enemyData.x,enemyData.y ,15,8)
        } else if (enemyData.health === 2){
           game.drawImage(enemy3, enemyData.x,enemyData.y ,15,8)
        }else if (enemyData.health === 3){
           game.drawImage(enemy2, enemyData.x,enemyData.y ,15,8)
        } else {
           game.drawImage(enemy, enemyData.x,enemyData.y ,15,8)
        }

     } else if (enemyData.y === 13){
        if (enemyData.health === 1){
           game.drawImage(enemy4, enemyData.x,enemyData.y ,15,8)
        } else if (enemyData.health === 2){
           game.drawImage(enemy2, enemyData.x,enemyData.y ,15,8)
        } else{
           game.drawImage(enemy, enemyData.x,enemyData.y ,15,8)
        }

     } else if (enemyData.y === 24){
        if (enemyData.health === 1){
           game.drawImage(enemy4, enemyData.x,enemyData.y ,15,8)
        } else {
           game.drawImage(enemy, enemyData.x,enemyData.y ,15,8)
        }

     } else {
        game.drawImage(enemy, enemyData.x,enemyData.y ,15,8)
     }

  })


  playerBullets.forEach(function(bullet) {
    bullet.draw();
  });
  playerBullets.forEach(function(bullet) {
    bullet.update();
  });
  enemyBullets.forEach(function(bullets) {
    bullets.draw();
  });
  enemyBullets.forEach(function(bullets) {
    bullets.update();
  });
  playerBullets = playerBullets.filter(function(bullet) {
    return bullet.active;
  });

  enemyBullets = enemyBullets.filter(function(bullet){
     return bullet.active;
 })

  theEnimes = theEnimes.filter(function(enemyThing){
    return enemyThing.alive
  })

  handleTheCollisions();

}

setInterval(draw, 20);

function startMove(event) {

  if (event.keyCode == 32){
    playershoot();
  }

  // pressed left
  if (event.keyCode == 37) {
    xspeed = -5;
    playerImage = playerLeft;
  }
  // pressed right
  if (event.keyCode == 39) {
    xspeed = 5;
    playerImage = playerRight;
  }
  // pressed up

   if (event.keyCode == 38) {
     if (y < 110){
       y = 120;
       yspeed = -5;
     } else {
       yspeed = -5;
     }

  }

  playerBullets.forEach(function(bullet) {
    bullet.update();
  });



}

var bullet = function (I) {
   I.active = true;

  I.xVelocity = 0;
  I.yVelocity = I.speed;
  I.width = 3;
  I.height = 3;
  I.color = "#FFF";

  I.inBounds = function() {


    if(I.y >= 0){
      return false
    }
  }

  I.draw = function() {
    game.fillStyle = this.color;
    game.fillRect(this.x, this.y, this.width, this.height);
  };

  I.update = function() {
    I.x += I.xVelocity;
    I.y += -5;



    if(I.y <= 0){
      I.active = false
    } else {
      I.active = I.active
    }



    console.log('tickle')
    console.log(playerBullets)
  };

  return I;

}

var deadlyBullet = function (I) {
   I.active = true;

  I.xVelocity = 0;
  I.yVelocity = I.speed;
  I.width = 3;
  I.height = 3;
  I.color = "#FFF";

  I.inBounds = function() {


    if(I.y >= 0){
      return false
    }
  }

  I.draw = function() {
    game.fillStyle = this.color;
    game.fillRect(this.x, this.y, this.width, this.height);
  };

  I.update = function() {
    I.x += I.xVelocity;
    I.y += 5;



    if(I.y >= 150){
      I.active = false
    } else {
      I.active = I.active
    }




  };

  return I;

}

var playershoot = function() {
  var bulletPosition = playermidpoint()

  playerBullets.push(bullet({
    speed: 10,
    x: bulletPosition.x,
    y: bulletPosition.y
  }));
};

var playermidpoint = function() {

  return {
    x: x + 8/2,
    y: y + 15/2
  };
};


var collision = function (a, b){

  if(a.x < b.x + 15 &&
     a.x + a.width > b.x &&
     a.y < b.y + 8 &&
     a.y + a.height > b.y){
    return true
  }

}

var playerCollision = function (a, b){

  if(a.x < b.x + 15 &&
     a.x + a.width > b.x &&
     a.y < b.y + 8 &&
     a.y + a.height > b.y){
    return true
  }

}


var handleTheCollisions = function (){
  playerBullets.forEach(function(bullet) {
    theEnimes.forEach(function(enemy) {
      if (collision(bullet, enemy)) {
        enemy.health += -1;
        bullet.active = false;

        if (enemy.health === 0){
           enemy.alive = false;

        }
      }
    });
  });

  enemyBullets.forEach(function(bullet){
     var crntPlayer = {
        x: x,
        y: y
     }
     if(playerCollision(bullet, crntPlayer)){
        bullet.active = false;
        playerRight.src = ''
        playerLeft.src = ''
        setInterval(function(){
           playerBullets = []
        }, 10)
     }
 })
}


var enemyShooting = function(){
   var crntEnemy = theEnimes[Math.floor(Math.random()*theEnimes.length)];
   var enemyBulletPosition = enemyMidpoint(crntEnemy)

   enemyBullets.push(deadlyBullet({
     speed: -10,
     x: enemyBulletPosition.x,
     y: enemyBulletPosition.y
   }));
}

var enemyMidpoint = function(theEnemy){
   return {
     x: theEnemy.x + 8/2,
     y: theEnemy.y + 15/2
   };
}

setInterval(enemyShooting, 400);






document.onkeydown = startMove;

function stopMove(event) {
  if (event.keyCode == 37 || event.keyCode == 39) {
    xspeed = 0;
  }
}

document.onkeyup = stopMove;
