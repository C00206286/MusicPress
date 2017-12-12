class SceneManager
{
  constructor()
  {
    this.currentScene = null;
    this.scenes = {};
    this.titles = [];
    this.index = -1;
    this.numberOfScences = -1

  }

  createScene(scene)
  {
    this.numberOfScences++;
    this.titles.push(scene.title);
    this.scenes[this.numberOfScences] = scene;

  }

  jumpToNextScene()
  {
    this.index++;
    if(this.index > this.numberOfScences)
    {
      this.index = this.i;
    }
    this.currentScene = this.scenes[this.index];
    this.render();
  }

  jumpToScene(title)
  {
    console.log("jump called");
    console.log(title);
    for(this.i = 0; this.i < this.titles.length; this.i++)
    {
      if(this.titles[this.i] == title)
      {
        console.log(this.i);
        this.index = this.i;
      }
    }
    this.currentScene = this.scenes[this.index];
    console.log("this = " + this);
    //this.render();
  }

  render()
  {
  //  var canvas = document.getElementById('mycanvas');
    //canvas.id = "mycanvas";
    //canvas.width = window.innerWidth;
    //canvas.height = window.innerHeight;
    var ctx = document.getElementById("mycanvas").getContext("2d");
  	//var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, ctx.width, ctx.height);
    this.currentScene = this.scenes[this.index];
    this.currentScene.render();

  }
}
