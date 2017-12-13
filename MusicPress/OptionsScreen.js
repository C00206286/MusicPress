class OptionsScreen extends Scene
{
  constructor(title)
  {
    super(title);

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.xRed = 50;
    this.yRed= 100;
    this.heightRed= 100;
    this.widthRed = 300;

    this.xBlack = 50;
    this.yBlack = 300;
    this.widthBlack = 300;
    this.heightBlack = 100;

    this.xYellow = 50;
    this.yYellow = 500;
    this.widthYellow = 300;
    this.heightYellow = 100;

    this.xBack = 200;
    this.yBack = 1000;
    this.heightBack = 300;
    this.widthBack = 100;

  }

  checkCollisionOptions(xCord, yCord)
  {
    if(xCord >= this.xRed && xCord <= this.xRed + this.widthRed && yCord >= this.yRed && yCord <= this.yRed + this.heightRed)
     {
       gameNS.colour = "#ef2323";
       console.log("red");
     }
     if(xCord >= this.xBlack && xCord <= this.xBlack + this.widthBlack && yCord >= this.yBlack && yCord <= this.yBlack + this.heightBlack)
     {
       gameNS.colour = "#000000";
       console.log("black");
     }
     if(xCord >= this.xYellow && xCord <= this.xYellow + this.widthYellow && yCord >= this.yYellow && yCord <= this.yYellow + this.heightYellow)
     {
       gameNS.colour = "#ffff4c";
       console.log("yellow");
     }
     if(xCord >= this.xBack && xCord <= this.xBack + this.widthBack && yCord >= this.yBack && yCord <= this.yBack + this.heightBack)
      {
        gameNS.sceneManager.jumpToScene('MainMenu');
        gameNS.sceneManager.index = 1;
      }
  }

  render()
  {
    document.body.style.backgroundColor = "#DDA0DD";

    var canvas = document.getElementById('mycanvas');
    // Assign the canvas an id so we can reference it elsewhere.
    canvas.id = 'mycanvas';
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var ctx = canvas.getContext('2d');
    ctx.font = '48px Agency FB';
    ctx.fillText(this.title, 10, 50);

    var ctxPlay = canvas.getContext('2d');
    ctxPlay.fillStyle ="#000000";
    // args are x,y,width,height
    ctxPlay.fillRect(this.xRed, this.yRed, this.widthRed, this.heightRed);

    var ctxTitle = canvas.getContext('2d');
    ctxTitle.font = '30px Agent Orange';
    ctxTitle.fillStyle = "#ffffff";
    ctxTitle.fillText("Red", 120, 160);




    var ctxOptions = canvas.getContext('2d');
    ctxOptions.fillStyle ="#000000";
    // args are x,y,width,height
    ctxOptions.fillRect(this.xBlack, this.yBlack, this.widthBlack, this.heightBlack);

    var ctxTitle = canvas.getContext('2d');
    ctxTitle.font = '30px Agent Orange';
    ctxTitle.fillStyle = "#ffffff";
    ctxTitle.fillText("Black", 120, 360);




    var ctxLeader = canvas.getContext('2d');
    ctxLeader.fillStyle ="#000000";
    // args are x,y,width,height
    ctxLeader.fillRect(this.xYellow, this.yYellow, this.widthYellow, this.heightYellow);

    var ctxTitle = canvas.getContext('2d');
    ctxTitle.font = '30px Agent Orange';
    ctxTitle.fillStyle = "#ffffff";
    ctxTitle.fillText("Yellow", 110, 560);





    var ctxExit = canvas.getContext('2d');
    ctxExit.fillStyle ="#000000";
    // args are x,y,width,height
    ctxLeader.fillRect(this.xBack, this.yBack, this.heightBack, this.widthBack);

    var ctxTitle = canvas.getContext('2d');
    ctxTitle.font = '30px Agent Orange';
    ctxTitle.fillStyle = "#ffffff";
    ctx.fillText("Back", 300, 1050);

    var ctxTitle = canvas.getContext('2d');
    ctxTitle.font = '30px Agent Orange';
    ctxTitle.fillStyle = "#000000";
    ctx.fillText("Choose the colour", 400, 140);

    var ctxTitle = canvas.getContext('2d');
    ctxTitle.font = '30px Agent Orange';
    ctxTitle.fillStyle = "#000000";
    ctx.fillText("of your buttons", 400, 170);


  }
}
