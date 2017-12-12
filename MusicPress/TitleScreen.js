class TitleScreen extends Scene
{
  constructor(title)
  {
    super(title);



    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.widthRec = 300;
    this.heightRec = 100;
    this.x = 100;
    this.y = 100;
  }

  checkCollisionTitle(xCord, yCord)
  {
    if(xCord >= this.x && xCord <= this.x + this.widthRec && yCord >= this.y && yCord <= this.y + this.heightRec)
     {
       gameNS.sceneManager.jumpToScene('Menu');
       //gameNS.game.sceneManager.jumpToNextScene();
     }
  }

  render()
  {
    document.body.style.backgroundColor = "#ff15";
    var canvas = document.getElementById('mycanvas');

    // Assign the canvas an id so we can reference it elsewhere.

    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = '48px Agency FB';
    ctx.fillText(this.title, 10, 50);

    var ctxTitle = canvas.getContext('2d');
    ctxTitle.font = '48px Agency FB';
    ctxTitle.fillStyle = "#ffffff";
    ctxTitle.fillText("Music Press", 120, 150);

		ctx.fillStyle ="#000000";
		// args are x,y,width,height
		ctx.fillRect(this.x, this.y, this.widthRec, this.heightRec);


    var ctxTitle = canvas.getContext('2d');
    ctxTitle.font = '30px Agent Orange';
    ctxTitle.fillStyle = "#ffffff";
    ctxTitle.fillText("Music Press", 120, 160);
  }
}
