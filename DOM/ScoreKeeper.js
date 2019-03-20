var p1button=document.getElementById("p1");
var p2button = document.getElementById("p2");
var reset=document.getElementById("reset");
var h1=document.querySelector("h1");
var numInput=document.querySelector("input");
var p1display=document.getElementById("p1display");
var p2display=document.getElementById("p2display");
var para =document.querySelector("p");
var winningScoreDisplay=document.querySelector("h3 span");
var p1count =0;
var p2Count=0;
var gameOver=false;
var winningScore=5;


p1button.addEventListener("click", function(){
	if(!gameOver)
	{
	p1count++;
    }
    if(p1count===winningScore)
    {
    	p1display.classList.add("winner");
    	gameOver=true;
    }
	p1display.textContent=p1count;
    
});

p2button.addEventListener("click", function(){
	if(! gameOver)
	{
	p2Count++;
     }
     if(p2Count===winningScore)
      {
      	p2display.classList.add("winner");
      	gameOver=true;
      }

	p2display.textContent=p2Count;
     
});
reset.addEventListener("click", function(){
resetButton();
});

function resetButton(){
p1count=0;
p2count=0;
p1display.textContent=0;
p2display.textContent=0; 
p1display.classList.remove("winner");
p2display.classList.remove("winner");
gameOver=false;
};

numInput.addEventListener("click",function()
{
	
	winningScoreDisplay.textContent=numInput.value;
    winningScore=Number(numInput.value);
    resetButton();
});