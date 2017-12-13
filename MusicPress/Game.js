

gameNS.score = 0;
var oneThird = window.innerWidth / 3;
var goalArray = [];
var goal2Array = [];
var musicAmount = 1;
var musicDoubleAmount = 1;
var difficulty = 120;

var somethingCollided = false;
var scoreMultiplier = 1;

var startDificulty = 120;

var counter = 0;
var musicStarted = false;

var tutorialOver = true;

var tutorialCounter = 0;

var x = 0, y = 0, z = 0,
    vx = 0, vy = 0,
  ax = 0, ay = 0;

class Game
{



  init()
  {
  console.log("Initialising game world");
  var ctx = document.getElementById("mycanvas").getContext("2d")
  this.player = new Player(oneThird - 250,window.innerHeight - 200,200,200);
  this.player2 = new Player(oneThird + oneThird - 250,window.innerHeight - 200,200,200);
  this.player3 = new Player(oneThird + oneThird + oneThird -250,window.innerHeight - 200,200,200);

  this.game = new Game();
  document.addEventListener("keydown", this.keyDownHandler);
  //setInterval(this.createMusic, 5000);
  //setInterval(this.createDoubleMusic, 5000);
  gameNS.lives = 10;



  }
  startMusic()
  {
    gameNS.soundManager.playSound('background',true,0.8);
    musicStarted = true;
  }
  getLives()
  {
    return gameNS.lives;
  }
  lowerLives()
  {
    if(gameNS.lives > 0)
    {
    gameNS.lives = gameNS.lives - 1;
    }
  }

  createMusic()
  {
      console.log("created");
      for(var i = 0; i < musicAmount; i++)
      {
        var spawnLocation = Math.floor(Math.random() * 3);
        if(spawnLocation === 0)
        {
        goalArray.push(new Goal(oneThird - 200,100,100,100));
        }
        if(spawnLocation === 1)
        {
        goalArray.push(new Goal(oneThird + oneThird - 200,100,100,100));
        }
        if(spawnLocation === 2)
        {
        goalArray.push(new Goal(oneThird + oneThird + oneThird - 200,100,100,100));
        }
      }
  }
  createDoubleMusic()
  {
      console.log("createdDouble");
      for(var i = 0; i < musicDoubleAmount; i++)
      {
        var spawnLocation = Math.floor(Math.random() * 3);
        if(spawnLocation === 0)
        {
        goal2Array.push(new Goal2(oneThird - 200,100,100,100));
        console.log("Spawn1");
        }
        if(spawnLocation === 1)
        {
        goal2Array.push(new Goal2(oneThird + oneThird - 200,100,100,100));
        console.log("Spawn2");
        }
        if(spawnLocation === 2)
        {
        goal2Array.push(new Goal2(oneThird + oneThird + oneThird - 200,100,100,100));
        console.log("Spawn3");
        }
      }
  }

  update()
  {



    if (window.DeviceMotionEvent != undefined) {
    	window.ondevicemotion = function(e) {
    		ax = event.accelerationIncludingGravity.x * 5;
    		ay = event.accelerationIncludingGravity.y * 5;
    		x = e.accelerationIncludingGravity.x;
    		y = e.accelerationIncludingGravity.y;
    		z = e.accelerationIncludingGravity.z;


    		//if ( e.rotationRate ) {
    		//	document.getElementById("rotationAlpha").innerHTML = e.rotationRate.alpha;
    		//	document.getElementById("rotationBeta").innerHTML = e.rotationRate.beta;
    		//	document.getElementById("rotationGamma").innerHTML = e.rotationRate.gamma;
    		//}
    	}

    	setInterval( function() {
    		var landscapeOrientation = window.innerWidth/window.innerHeight > 1;
    		if ( landscapeOrientation) {
    			vx = vx + ay;
    			vy = vy + ax;
    		} else {
    			vy = vy - ay;
    			vx = vx + ax;
    		}
    		vx = vx * 0.98;
    		vy = vy * 0.98;
    		y = parseInt(y + vy / 50);
    		x = parseInt(x + vx / 50);

    	}, 25);
    }

    if(ax <= -30 || ax >= 30)
    {
      scoreMultiplier = 4;
    }
    else if(ax <= -20 || ax >= 20)
    {
      scoreMultiplier = 3;
    }
    else if(ax <= -10 || ax >= 10)
    {
      scoreMultiplier = 2;
    }
    else
    {
      scoreMultiplier = 1;
    }


      if (gameNS.lives > 0)
      {
        for (var i = 0; i < goalArray.length; i++)
        {
          if (goalArray[i].alive === true)
          {
            goalArray[i].update();
          }
        }

      for (var i = 0; i < goal2Array.length; i++)
      {
        if (goal2Array[i].lives > 0)
        {
        goal2Array[i].update();
        }

      }

    if(tutorialOver == true)
    {
    counter = counter + 1;
    if(counter == 10 && musicStarted == false)
    {
    this.startMusic();
    }
    if(counter >= difficulty)
    {
      this.createMusic();
      counter = 0;
      difficulty = difficulty - 10;
      if (difficulty <= 0)
      {
      console.log("reset")
      startDificulty = startDificulty - 20;
      if(startDificulty <= 30)
      {
        startDificulty = 120;
      }
      difficulty = startDificulty;
      }
    }
    if(counter == 40)
    {
      this.createDoubleMusic();
    }
  }
}
  }


  response()
  {
    gameNS.score = gameNS.score + 10 * scoreMultiplier;
    gameNS.soundManager.playSound('clap',false,0.05);
  }
  response2()
  {
    gameNS.soundManager.playSound('back',false,0.1);
    if(gameNS.score > 0)
    {
    gameNS.score = gameNS.score - 10;
    }
    else {
      gameNS.game.lowerLives();
    }
  }
  draw()
  {
  var ctx = document.getElementById("mycanvas").getContext("2d");

  ctx.clearRect(0,0,window.innerWidth,window.innerHeight);

  if (gameNS.lives <= 0)
  {
    goalArray = [];
    goal2Array = [];
    gameNS.sceneManager.jumpToScene('GameOver');
  }

  // Code for tutorial
  if(tutorialOver == false)
  {
    var ctx = document.getElementById("mycanvas").getContext("2d");
    tutorialCounter = tutorialCounter + 1;
    if(tutorialCounter <= 80)
    {
    ctx.fillStyle = "#e50909";
    //ctx.fillStyle = "#2770e5";
    ctx.font = 'italic 30pt Calibri';
    ctx.textBaseline = "top";
    ctx.fillText("Tap your button when the block is inside",10,200);
    }
    if(tutorialCounter > 120 && tutorialCounter < 220)
    {
    ctx.fillStyle = "#e50909";
    //ctx.fillStyle = "#2770e5";
    ctx.font = 'italic 30pt Calibri';
    ctx.textBaseline = "top";
    ctx.fillText("Blue blocks need to be hit twice",10,200);
    }
    if(tutorialCounter > 240)
    {
    ctx.fillStyle = "#e50909";
    //ctx.fillStyle = "#2770e5";
    ctx.font = 'italic 30pt Calibri';
    ctx.textBaseline = "top";
    ctx.fillText("Tilt your device for a higher multiplier",10,200);
        if(scoreMultiplier === 2)
        {
          tutorialOver = true;
        }
    }
    if(tutorialCounter === 80)
    {
      this.createMusic();
    }
    if(tutorialCounter === 200)
    {
      this.createDoubleMusic();
    }

  }


  ctx.fillStyle = "#7125a8";
  //ctx.fillStyle = "#2770e5";
  ctx.font = 'italic 40pt Calibri';
  ctx.textBaseline = "top";
  ctx.fillText("Score = " + gameNS.score, 10,10);

  ctx.fillStyle = "#7125a8";
  //ctx.fillStyle = "#2770e5";
  ctx.font = 'italic 40pt Calibri';
  ctx.textBaseline = "top";
  ctx.fillText("Multiplier = " + scoreMultiplier, 10,60);

  ctx.fillStyle = "#7125a8";
  //ctx.fillStyle = "#2770e5";
  ctx.font = 'italic 40pt Calibri';
  ctx.textBaseline = "top";
  ctx.fillText("Lives = " + gameNS.lives, window.innerWidth - 260,10);

  this.player.draw();
  this.player2.draw();
  this.player3.draw();

  for (var i = 0; i < goalArray.length; i++)
  {
    if (goalArray[i].alive === true)
    {
    goalArray[i].draw();
    }
    else
    {
    goalArray.splice(i,1);
    }
  }
  for (var i = 0; i < goal2Array.length; i++)
  {
    if (goal2Array[i].lives > 0)
    {
    goal2Array[i].draw();
    }
    else
    {
    goal2Array.splice(i,1);
    }
  }

  // If the goal dies spawn one at one of three locations


  if (rightPressed === true)
  {
    this.player.moveRight();
    rightPressed = false;
  }
  if (leftPressed === true)
  {
    this.player.moveLeft();
    leftPressed = false;
  }
  if (upPressed === true)
  {
    this.player.moveUp();
    upPressed = false;
  }
  if (downPressed === true)
  {
    this.player.moveDown();
    downPressed = false;
  }
  }

  checkCollision(xCord,yCord)
  {
      if(xCord >= this.player.x && xCord <= this.player.x + this.player.w && yCord >= this.player.y && yCord <= this.player.y + this.player.h)
        {
          for (var i = 0; i < goalArray.length; i++)
          {

            if (this.player.checkCollision(goalArray[i]) === true)
            {
              goalArray[i].alive = false;
              this.game.response();
              somethingCollided = true;
            }
          }
          for (var i = 0; i < goal2Array.length; i++)
          {

            if (this.player.checkCollision(goal2Array[i]) === true)
            {
              goal2Array[i].lives = goal2Array[i].lives - 1;
              this.game.response();
              somethingCollided = true;
            }
          }
          if(somethingCollided == false)
          {
            this.game.response2();
          }
          somethingCollided = false;
        }
      if(xCord >= this.player2.x && xCord <= this.player2.x + this.player2.w && yCord >= this.player2.y && yCord <= this.player2.y + this.player2.h)
        {
          for (var i = 0; i < goalArray.length; i++)
          {

            if (this.player2.checkCollision(goalArray[i]) === true)
            {
              goalArray[i].alive = false;
              this.game.response();
              somethingCollided = true;
            }
          }
          for (var i = 0; i < goal2Array.length; i++)
          {

            if (this.player2.checkCollision(goal2Array[i]) === true)
            {
              goal2Array[i].lives = goal2Array[i].lives - 1;
              this.game.response();
              somethingCollided = true;
            }
          }
          if(somethingCollided == false)
          {
            this.game.response2();
          }
          somethingCollided = false;
        }
      if(xCord >= this.player3.x && xCord <= this.player3.x + this.player3.w && yCord >= this.player3.y && yCord <= this.player3.y + this.player3.h)
      {
          for (var i = 0; i < goalArray.length; i++)
          {

          if (this.player3.checkCollision(goalArray[i]) === true)
          {
            goalArray[i].alive = false;
            this.game.response();
            somethingCollided = true;
          }
        }
        for (var i = 0; i < goal2Array.length; i++)
        {

          if (this.player3.checkCollision(goal2Array[i]) === true)
          {
            goal2Array[i].lives = goal2Array[i].lives - 1;
            this.game.response();
            somethingCollided = true;
          }
        }
        if(somethingCollided == false)
        {
          this.game.response2();
        }
        somethingCollided = false;
      }

  }
  keyDownHandler(e)
  {

    var ctx = document.getElementById("mycanvas").getContext("2d")
    // Code triggered when Left Arrow is pressed.
    if(e.keyCode === 37){

      leftPressed = true;

  	}
    // Code triggered when Up arrow is pressed.
  	if(e.keyCode === 38){

      upPressed = true;
  	}
    // Code triggered when Right Arrow is pressed.
    if(e.keyCode === 39){
  		rightPressed = true;
  	}
    // Code triggered when Down Arrow is pressed.
  	if(e.keyCode === 40){

      downPressed = true;

  	}
  }



}
