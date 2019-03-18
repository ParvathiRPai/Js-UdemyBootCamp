	
var thingToDo=prompt("what would you like to do ?");
var list=[];
while(thingToDo!= 'quit')
{
	if(thingToDo==="new")
	{
		var add=prompt("what would you like to add ?");
		list.push(add);
	}
	else if(thingToDo==="list")
	{
		for(var i=0; i<list.length;i++)
		{
			console.log(list[i])
		}
	}
	else if(thingToDo==="Delete")
	{
		var itemNumber=prompt("index to be deleted");
		list.Splice(itemNumber,1);
	}
	var thingToDo=prompt("what would you like to do ?");
}
console.log("ok, Quit the app");
