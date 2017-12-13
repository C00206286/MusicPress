class CreditsScreen extends Scene
{
  constructor(title, developers)
  {
    super(title);

    this.developers = developers;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.xBack = 200;
    this.yBack = 1000;
    this.heightBack = 300;
    this.widthBack = 100;

  }

  checkCollisionGameCredits(xCord, yCord)
  {
    if(xCord >= this.xBack && xCord <= this.xBack + this.widthBack && yCord >= this.yBack && yCord <= this.yBack + this.heightBack)
     {
       gameNS.sceneManager.jumpToScene('MainMenu');
       gameNS.sceneManager.index = 1;
     }
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


    ctx.font = '48px Agency FB';
    ctx.fillText(this.title, 10, 50);


    ctx.fillStyle ="#000000";
    // args are x,y,width,height
    ctx.fillRect(this.xBack, this.yBack, this.heightBack, this.widthBack);


    ctx.font = '48px Agency FB';
    ctx.fillStyle = "#000000";
    ctx.fillText("Back", 300, 1050);

    this.showDevelopers(this.developers);

  }

  showDevelopers(jsonObj) {
    var developers = jsonObj['members'];

    for(var i = 0; i < developers.length; i++) {
      var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myList = document.createElement('ul');


      myH2.textContent = developers[i].name;
      myPara1.textContent = 'Secret identity: ' + developers[i].secretIdentity;
      myPara2.textContent = 'Age: ' + developers[i].age;
      myPara3.textContent = 'Superpowers:';

      var canvas = document.getElementById('mycanvas');
      var ctx = canvas.getContext('2d');
      ctx.font = '48px Agency FB';
      ctx.fillStyle = "#000000";
      ctx.fillText(myH2.textContent, 300, 100 * (i + 1));

      var superPowers = developers[i].powers;
      for(var j = 0; j < superPowers.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }

      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);

    //  section.appendChild(myArticle);
    }
  }
}
