/**
 * main is the entry point for Javascript programs.
 * @author brendanhorlick1997@gmail.com (Brendan Horlick)
 * date: 25/10/2017
 * time: 4 hours
 */

 lastFrameTimeMs = 0,
 maxFPS = 60,
 delta = 0,
 timestep = 1000 / 60;

 var rightPressed = false;
 var leftPressed = false;
 var upPressed = false;
 var downPressed = false;

var gameNS = {};

/**
 * main is the entry point for Javascript programs.
 * the game functions are called here.
 */
function main()
{
	var canvas = initCanvas();
	game = new Game();
  gameNS.game = game;
  gameNS.game.init();

	touchTest = new TouchTest();
  document.title = "Cool Game";
  touchTest.is_touch_device();
  console.log(touchTest.is_touch_device());

	document.addEventListener("touchstart", onTouchStart);
	document.addEventListener("touchmove", onTouchMove, {passive:false});
	document.addEventListener("touchend", onTouchEnd);

}
function update(delta) {
    gameNS.game.update();
}

function draw() {
    gameNS.game.draw();
}
function panic() {
    delta = 0;
}

function mainLoop(timestamp) {
    // Throttle the frame rate.
    if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
        requestAnimationFrame(mainLoop);
        return;
    }
    delta += timestamp - lastFrameTimeMs;
    lastFrameTimeMs = timestamp;

    var numUpdateSteps = 0;
    while (delta >= timestep) {
        update(timestep);
        delta -= timestep;
        if (++numUpdateSteps >= 240) {
            panic();
            break;
        }
    }
    draw();
    requestAnimationFrame(mainLoop);
}

requestAnimationFrame(mainLoop);

 /**
  * Initialises the canvas - the drawing surface. The canvas
  * is added to the document. When a HTML document is loaded into a
  * browser, it becomes a document object. This document object is
  * the root node of the HTML document and is considered the 'owner' of all other
  * nodes such as forms, buttons, the canvas etc.
  */
	/**
   * Initialises the canvas - the drawing surface. The canvas
   * is added to the document. When a HTML document is loaded into a
   * browser, it becomes a document object. This document object is
   * the root node of the HTML document and is considered the 'owner' of all other
   * nodes such as forms, buttons, the canvas etc.
   */

  function initCanvas()
  {
  	// Use the document object to create a new element canvas.
  	var canvas = document.createElement('canvas');
  	// Assign the canvas an id so we can reference it elsewhere.
  	canvas.id = 'mycanvas';
  	canvas.width = window.innerWidth;
  	canvas.height = window.innerHeight;
  	// We want this to be a 2D canvas.
  	var ctx = canvas.getContext("2d");
  	// Adds the canvas element to the document.
  	document.body.appendChild(canvas);

 	window.addEventListener("keydown", function(e) {
     // Space and arrow keys
     if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
         e.preventDefault();
     }
 }, false);

   return canvas;
  }

 /**
  * This function detects when a touch event occurs.
	* It assigns the location of the touch to touches.
	* It logs the position of the touch.
	* @param {event} e touch event.
  */
 function onTouchStart(e)
{
 touches = e.touches;

 // Print out (x,y) co-ords of touch: touches[0].clientX contains
 //  the x position.
 //console.log(touches[0].clientX);
 startX = touches[0].clientX;
 startY = touches[0].clientY;

 gameNS.swipeStartX = startX;
 gameNS.swipeStartY = startY;

 gameNS.time1 = new Date()
 gameNS.game.checkCollision(startX,startY);
}
/**
 * This function detects when a touch move event occurs.
 * It assigns the location of the touchMove to touches2.
 * It draws a line starting from touches and continuing
 * along with the moved touches until there it ends.
 * @param {event} e touch move event.
 */
function onTouchMove(e)
{
 e.preventDefault();
 var touches2 = e.changedTouches;
 // Print out (x,y) co-ords of touch: touches[0].clientX contains
 //  the x position.
 var ctx = document.getElementById("mycanvas").getContext("2d")

 endX= touches2[0].clientX;
 endY = touches2[0].clientY;

 //console.log(touches2[0].clientX);
 ctx.beginPath();
 ctx.moveTo(startX,startY);	//the previous touch
 ctx.lineTo(endX,endY);	//the current touch
 ctx.stroke();

 startX = touches2[0].clientX;
 startY = touches2[0].clientY;



}
/**
 * This function detects when a touch end event occurs.
 * This function works out the time taken and distance of swipe.
 * This function decides if a swipe occured and clears screen in response.
 * @param {event} e touch event.
 */
function onTouchEnd(e)
{
var ctx = document.getElementById("mycanvas").getContext("2d")
var time2 = new Date()
var timeTaken = time2 - gameNS.time1;

// Calcuale distance of the swipe
var distance = Math.sqrt(((endX - gameNS.swipeStartX) * (endX - gameNS.swipeStartX))
 + ((endY - gameNS.swipeStartY)*(endY - gameNS.swipeStartY)));

if (timeTaken > 0 && timeTaken < 200 && distance >= 150)
{
	//console.log("Swipe");
	//ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
}
console.log(timeTaken);
console.log("distance = " + distance);

}