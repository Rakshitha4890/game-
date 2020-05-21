function playGame()
{
  var randomNumberOne=Math.floor(Math.random()*6)+1;
  var randomImageOnePath="images/"+randomNumberOne+".png";

  var randomNumberTwo=Math.floor(Math.random()*6)+1;
  var randomImageTwoPath="images/"+randomNumberTwo+".png";

  var image1=document.querySelectorAll("img")[0];
  image1.setAttribute("src",randomImageOnePath);

  var image2=document.querySelectorAll("img")[1];
  image2.setAttribute("src",randomImageTwoPath);

  if(randomNumberOne>randomNumberTwo)
  {
    document.querySelector("h1").innerHTML="Player One Wins";
  }

  else if(randomNumberTwo>randomNumberOne)
  {
    document.querySelector("h1").innerHTML="Player Two Wins";
  }

  else{
    document.querySelector("h1").innerHTML="Draw:)";
  }
}

document.querySelector("button").addEventListener("click",playGame);
