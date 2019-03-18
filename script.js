// var userName=prompt("whats your name");
// alert("nice to meet you" + userName);
// console.log("also great to meet you");

// var firstName=prompt("whats your first name ?");
// var lastName=prompt("whats your last name ?");
// alert("welcome" + " "+firstName + lastName);
// var age=prompt(" how old are you ?");
// console.log("hello" + firstName + lastName );

// var age= prompt("Enter your age");
// var daysLived=age*365;
// alert("you have lived" + " " + daysLived +" "+ "days");

var age= prompt("please enter the age");
if(age<0)
{
	alert("ERROR");
}
else if(age==21)
{
	alert("happy 21st");
}
else if(age%2 !=0)
{
	alert("odd");
}
else if(age% Math.sqrt(age)==0)
{
	alert("age is  a perfect square");
}