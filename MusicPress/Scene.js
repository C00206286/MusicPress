class Scene
{
  constructor(title)
  {
    this.title = title;
  }
  render()
  {
    document.body.style.backgroundColor = "#AA0000";
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    ctx.font = '48px serif';
    ctx.fillText(this.title, 10, 50);
  }
}
