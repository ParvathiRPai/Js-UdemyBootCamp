
function Reverse(arr)
{
for(var i=arr.length;i>=0;i--)
{
	console.log(arr[i]);
}
}
Reverse([1,2,3,4]);

function uniform(arr)
{
	var first=arr[0];
	for(var i=1;i<arr.length;i++)
	{
		if(first != arr[i])
		{
			return false;
		}
	}
	return true;
}
var result=uniform([1,1,1,2]);
console.log(result);

function SumArray(arr)
{
	var sum=0;
	for(var i=0; i<arr.length;i++)
	{
		sum=sum+arr[i];
	}
	return sum;
}
var sumresult=SumArray([1,1,1]);
console.log(sumresult);

function max(arr)
{
	var max=0;
	for(var i=0;i<arr.length;i++)
	{
		if(max<arr[i])
		{
			max=arr[i];
		}
	}
	return max;
}
var resultmax=max([1,2,3,5,1]);
console.log(resultmax);