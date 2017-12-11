/**
 * @author brendanhorlick1997@gmail.com (Brendan Horlick)
 * date: 17/10/2017
 */
class Goal2

{


constructor(x,y,w,h)
{
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.alive = true;
	this.lives = 2;
}

draw()
{
	if (this.lives > 0)
	{
	var ctx = document.getElementById("mycanvas").getContext("2d")
 	ctx.fillStyle = "#2770e5";
 	// args are x,y,width,height
	//ctx.clearRect(this.x,this.y,this.w, this.h);
  ctx.fillRect(this.x,this.y,this.w,this.h);

}

}
update()
{
	this.y = this.y + 10;
	if(this.y >= window.innerHeight)
	{
		if (this.alive == true)
		{
			gameNS.game.lowerLives();
		}
		this.lives = 0;
	}
}
}
