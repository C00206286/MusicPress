class GameOver extends Scene
{
  constructor(title)
  {
    super(title);

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.xYes = 180;
    this.yYes = 500;
    this.heightYes = 300;
    this.widthYes = 100;

    this.xNo = 180;
    this.yNo = 750;
    this.heightNo = 300;
    this.widthNo = 100;
  }


  checkCollisionGameOver(xCord, yCord)
  {
    if(xCord >= this.xYes && xCord <= this.xYes + this.widthYes && yCord >= this.yYes && yCord <= this.yYes + this.heightYes)
     {
       gameNS.sceneManager.jumpToScene('GameScreen');
       gameNS.lives = 10;
       gameNS.score = 0
     }
     if(xCord >= this.xNo && xCord <= this.xNo + this.widthNo && yCord >= this.yNo && yCord <= this.yNo + this.heightNo)
     {
       gameNS.sceneManager.jumpToScene('MainMenu');
       gameNS.sceneManager.index = 1;
       gameNS.lives = 10;
       gameNS.score = 0;
     }
  }

  render()
  {
    document.body.style.backgroundColor = "#DDA0DD";

    var canvas = document.getElementById('mycanvas');
    // Assign the canvas an id so we can reference it elsewhere.
    canvas.id = 'mycanvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    ctx.fillStyle ="#000000";
    // args are x,y,width,height
    ctx.fillRect(this.xYes, this.yYes, this.heightYes, this.widthYes);


    ctx.fillStyle ="#000000";
    // args are x,y,width,height
    ctx.fillRect(this.xNo, this.yNo, this.heightNo, this.widthNo);


    ctx.font = '48px Agency FB';
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Yes", 250, 575);

    ctx.font = '48px Agency FB';
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Score = " + gameNS.score, 250, 400);


    ctx.font = '48px Agency FB';
    ctx.fillStyle = "#ffffff";
    ctx.fillText("No", 250, 800);


    ctx.font = '48px Agency FB';
    ctx.fillText("Play Again?", 200, 320);


  }
}
