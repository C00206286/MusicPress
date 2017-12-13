class CreditsScreen extends Scene
{
  constructor(title, developers)
  {
    super(title);

    this.developers = developers;
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

    this.showHeroes(this.developers);

  }

  showHeroes(jsonObj) {
    var heroes = jsonObj['members'];

    for(var i = 0; i < heroes.length; i++) {
      var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myList = document.createElement('ul');


      myH2.textContent = heroes[i].name;
      myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
      myPara2.textContent = 'Age: ' + heroes[i].age;
      myPara3.textContent = 'Superpowers:';

      var superPowers = heroes[i].powers;
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
      console.log(myH2);
    //  section.appendChild(myArticle);
    }
  }
}
