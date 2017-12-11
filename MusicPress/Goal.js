/**
 * @author brendanhorlick1997@gmail.com (Brendan Horlick)
 * date: 17/10/2017
 */
class Goal

{


constructor(x,y,w,h)
{
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.alive = true;
}

draw()
{
	if (this.alive === true)
	{
	var ctx = document.getElementById("mycanvas").getContext("2d")
 	ctx.strokeStyle = "#000000";
 	// args are x,y,width,height
	//ctx.clearRect(this.x,this.y,this.w, this.h);
  ctx.strokeRect(this.x,this.y,this.w,this.h);
  }
}
update()
{
	this.y = this.y + 10;
	if(this.y >= window.innerHeight)
	{
		gameNS.game.lowerLives();
		this.alive = false;
	}
}


}
