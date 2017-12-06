/**
 * @author brendanhorlick1997@gmail.com (Brendan Horlick)
 * date: 17/10/2017
 */
class Player

{


constructor(x,y,w,h)
{
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.speed = 20;
}

draw()
{
	var ctx = document.getElementById("mycanvas").getContext("2d")
 	ctx.fillStyle = "#000000";
	//ctx.fillStyle = "#2770e5";
 	// args are x,y,width,height
  ctx.fillRect(this.x,this.y,this.w,this.h);

}
moveLeft()
{
	var ctx = document.getElementById("mycanvas").getContext("2d")
	ctx.clearRect(this.x,this.y,this.w, this.h);
	this.x -= this.speed;
	ctx.fillRect(this.x,this.y,this.w,this.h)
}
moveRight()
{
	var ctx = document.getElementById("mycanvas").getContext("2d")
	ctx.clearRect(this.x,this.y,this.w, this.h);
	this.x += this.speed;
	ctx.fillRect(this.x,this.y,this.w,this.h)
}
moveDown()
{
	var ctx = document.getElementById("mycanvas").getContext("2d")
	ctx.clearRect(this.x,this.y,this.w, this.h);
	this.y += this.speed;
	ctx.fillRect(this.x,this.y,this.w,this.h)
}
moveUp()
{
	var ctx = document.getElementById("mycanvas").getContext("2d")
	ctx.clearRect(this.x,this.y,this.w, this.h);
	this.y -= this.speed;
	ctx.fillRect(this.x,this.y,this.w,this.h)
}
checkCollision(e)
{
	var collides = false;

	if((this.x < e.x + e.w) &&
(this.x + this.w > e.x) &&
(this.y + this.h > e.y) &&
(this.y < e.y + e.h))
{
	collides = true;
}
return collides;
}
}
