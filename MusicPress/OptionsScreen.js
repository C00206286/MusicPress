class OptionsScreen extends Scene
{
  constructor(title)
  {
    super(title);

    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  render()
  {
    document.body.style.backgroundColor = "#ffffff";

    var canvas = document.getElementById('mycanvas');
    // Assign the canvas an id so we can reference it elsewhere.
    canvas.id ='mycanvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var ctx = canvas.getContext('2d');
    ctx.font = '48px Agency FB';
    ctx.fillText(this.title, 10, 50);
    
  }
}
