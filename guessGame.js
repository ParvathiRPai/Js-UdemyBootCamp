var guessNumber=prompt("Enter the number");
var guess=10;
if(guessNumber==guess)
{
	alert("Won the game number is" + guess);
}
else if( guessNumber< guess)
{
	alert(" guess a higher number");
}
else if (guessNumber > guess)
{
	alert("guess a lower number");
}
