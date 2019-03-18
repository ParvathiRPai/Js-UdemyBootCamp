//  var num =-10;
// while(num<=19)
// {
// 	console.log(num);
// 	num++;
// }

// var num=10;
// while(num<=40)
// {
// 	if(num % 2 ==0)
// 	{
// 		console.log(num);
// 	}
// 	num++;
// }

// var num=300
// while(num<=333)
// {
// 	if(num%2 !=0)
// 	{
// 		console.log(num);
// 	}
// 	num++;
// }
// var num=5;
// while(num<50)
// {
// 	if(num%5==0 && num%3==0)
// 	{
// 		console.log(num);
// 	}
// 	num++;
// }

// var res=prompt("Are we there yet ?");

// while(res.indexOf("yes") ==-1)
// {
// var res=prompt("Are we there yet ?");
// }
// alert(" yes we made it");

// for(var i=-10;i<=19;i++)
// {
// 	console.log(i);
// }
// for(var i=10;i<=40;i++)
// {
// 	if(i%2==0)
// 	{
// 	console.log(i);
// }
// }

// var isEven=function(num)
// {
// 	if(num%2==0)
// 	{
// 		return true;
// 	}
// 	else
// 	{
// 		return false;
// 	}
// }
// alert(isEven(4));

// var factorial=function(num)
// {
// 	var res=1;
// 	for(var i=1;i<=num;i++)
// 	{
//        res = res*i;
// 	}

// 	return res;
// }

var Kabab=function(str)
{
	var newstr=str.replace(/-/,"_");
	return newstr;
}
