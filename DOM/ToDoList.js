var list=document.querySelectorAll("li");
for(var li=0;li<list.length;li++)
{
	list[li].addEventListener("mouseover", function(){
		//this.style.color="green";
		this.classList.add("selected");
	});
	list[li].addEventListener("mouseout",function(){
		this.classList.remove("selected");
	});
	list[li].addEventListener("click", function(){
		this.classList.toggle("done");
	});
}