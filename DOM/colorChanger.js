var tag=document.querySelector("button");
var ispink=false;
tag.addEventListener("click", function(){
	if(ispink)
	{
		document.body.style.background="white";
		ispink=false;
	}
	else
	{
		document.body.style.background="pink";
          ispink=true;
	}

	});
