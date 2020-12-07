/*dice1*/
var randomnumber1=Math.floor((Math.random()*6)+1);
var diceimages1="images/dice"+randomnumber1+".png";
 document.querySelectorAll("img")[0].setAttribute("src",diceimages1);
 
 /**dice 2 */
 var randomnumber2=Math.floor((Math.random()*6)+1);
 var diceimage2="images/dice"+randomnumber2+".png";
 document.querySelectorAll("img")[1].setAttribute("src",diceimage2);

 if(randomnumber1===randomnumber2)
 {

     document.querySelector("h1").innerHTML="DRAW 😅";
     document.querySelector("h1").style.color="green ";
    
 }
 else if(randomnumber1<randomnumber2)
 {
     document.querySelector("h1").innerHTML="Player 2 Wins 🏆";
     document.querySelector("h1").style.color="red ";
 }
 else
 {
     document.querySelector("h1").innerHTML=" Player 1 Wins 🏆";
     document.querySelector("h1").style.color="blue ";
 }