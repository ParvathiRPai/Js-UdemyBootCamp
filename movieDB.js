var movies=[{
	watched:true,
	Name: "bruges",
	Rating:5
},
{
	watched:false,
	Name: "frozen",
	Rating:4.5

},

{
	watched:true,
	Name: "speed",
	Rating:4
}
]

// movies.forEach(function(movie)
// {
//  var result=" you have  ";
//  if(movie.watched==true)
//  {
//  	result+="watched";
//  }
//  else
//  {
//  	result+="not watched";
//  }
//  result+="\""+movie.Name+"\" -";
//  result+=movie.Rating+"starts";
//   console.log(result);

// })
function buildString(movie)
{
	var result=" you have  ";
 if(movie.watched==true)
 {
 	result+="watched";
 }
 else
 {
 	result+="not watched";
 }
 result+="\""+movie.Name+"\" -";
 result+=movie.Rating+"starts";
  console.log(result);
  return result;
}
movies.forEach(function(movie)
{
console.log(buildString(movie));
});
