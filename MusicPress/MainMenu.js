class MainMenu extends Scene
{
  constructor(title)
  {
    super(title)

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.xPlay = 50;
    this.yPlay = 100;
    this.heightPlay = 100;
    this.widthPlay = 300;

    this.xOptions = 75;
    this.yOptions = 300;
    this.widthOptions = 300;
    this.heightOptions = 100;

    this.xLeader = 100;
    this.yLeader = 500;
    this.widthLeader = 300;
    this.heightLeader = 100;

    this.xExit = 125;
    this.yExit = 700;
    this.widthExit = 300;
    this.heightExit = 100;
  }

  checkCollisionMenu(xCord, yCord)
  {
    if(xCord >= this.xPlay && xCord <= this.xPlay + this.widthPlay && yCord >= this.yPlay && yCord <= this.yPlay + this.heightPlay)
     {
       gameNS.sceneManager.jumpToScene('GameScreen');
     }
     if(xCord >= this.xOptions && xCord <= this.xOptions + this.widthOptions && yCord >= this.yOptions && yCord <= this.yOptions + this.heightOptions)
     {
       gameNS.sceneManager.jumpToScene('CreditsScreen');
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
    ctxPlay.fillRect(this.xPlay, this.yPlay, this.widthPlay, this.heightPlay);

    var ctxTitle = canvas.getContext('2d');
    ctxTitle.font = '30px Agent Orange';
    ctxTitle.fillStyle = "#ffffff";
    ctxTitle.fillText("Play", 120, 160);




    var ctxOptions = canvas.getContext('2d');
    ctxOptions.fillStyle ="#000000";
    // args are x,y,width,height
    ctxOptions.fillRect(this.xOptions, this.yOptions, this.widthOptions, this.heightOptions);

    var ctxTitle = canvas.getContext('2d');
    ctxTitle.font = '30px Agent Orange';
    ctxTitle.fillStyle = "#ffffff";
    ctxTitle.fillText("Options", 120, 360);




    var ctxLeader = canvas.getContext('2d');
    ctxLeader.fillStyle ="#000000";
    // args are x,y,width,height
    ctxLeader.fillRect(this.xLeader, this.yLeader, this.widthLeader, this.heightLeader);

    var ctxTitle = canvas.getContext('2d');
    ctxTitle.font = '30px Agent Orange';
    ctxTitle.fillStyle = "#ffffff";
    ctxTitle.fillText("Leaderboard", 110, 560);





    var ctxExit = canvas.getContext('2d');
    ctxExit.fillStyle ="#000000";
    // args are x,y,width,height
    ctxLeader.fillRect(this.xExit, this.yExit, this.widthExit, this.heightExit);

    var ctxTitle = canvas.getContext('2d');
    ctxTitle.font = '30px Agent Orange';
    ctxTitle.fillStyle = "#ffffff";
    ctxTitle.fillText("Exit", 220, 760);
  }
}
