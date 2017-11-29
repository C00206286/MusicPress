/**
 * @author brendanhorlick1997@gmail.com (Brendan Horlick)
 * date: 17/10/2017
 */
var score = 0;
var oneThird = window.innerWidth / 3;
var goalArray = [];
var musicAmount = 1;
var difficulty = 120;
var counter = 0;
class Game
{
  init()
  {
  console.log("Initialising game world");
  var ctx = document.getElementById("mycanvas").getContext("2d")
  console.log(window.innerWidth);
  console.log(oneThird);
  this.player = new Player(oneThird - 250,window.innerHeight - 200,200,200);
  this.player2 = new Player(oneThird + oneThird - 250,window.innerHeight - 200,200,200);
  this.player3 = new Player(oneThird + oneThird + oneThird -250,window.innerHeight - 200,200,200);

  this.game = new Game();
  document.addEventListener("keydown", this.keyDownHandler);
  setInterval(this.createMusic, 5000);
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
        //this.goalArray[i] = new Goal(100,100,50,50);
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

  update()
  {
    counter = counter + 1;
    if(counter >= difficulty)
    {
      this.createMusic()
      counter = 0;
      difficulty = difficulty - 10;
      if (difficulty <= 0)
      {
      console.log("reset")
      difficulty = 120;
      }
    }
  }
  response()
  {
    score = score + 10;

  }
  draw()
  {
  var ctx = document.getElementById("mycanvas").getContext("2d")

  ctx.clearRect(0,0,window.innerWidth,window.innerHeight);

  ctx.fillStyle = "#FFFF00";
  ctx.font = 'italic 30pt Calibri';
  ctx.textBaseline = "top";
  ctx.fillText("Score = " + score, 10,10);

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
  this.player.draw();
  this.player2.draw();
  this.player3.draw();
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
            }
          }
        }
      if(xCord >= this.player2.x && xCord <= this.player2.x + this.player2.w && yCord >= this.player2.y && yCord <= this.player2.y + this.player2.h)
        {
          for (var i = 0; i < goalArray.length; i++)
          {

            if (this.player2.checkCollision(goalArray[i]) === true)
            {
              goalArray[i].alive = false;
              this.game.response();
            }
          }
        }
      if(xCord >= this.player3.x && xCord <= this.player3.x + this.player3.w && yCord >= this.player3.y && yCord <= this.player3.y + this.player3.h)
      {
          for (var i = 0; i < goalArray.length; i++)
          {

          if (this.player3.checkCollision(goalArray[i]) === true)
          {
            goalArray[i].alive = false;
            this.game.response();
          }
        }
      }

  }
  keyDownHandler(e)
  {

    var ctx = document.getElementById("mycanvas").getContext("2d")
    ctx.fillStyle = "#000000";
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
