$(document).ready( init() )

function init()
{
	$("#reverseButton").on("click", reverseText);
	$("#textInput").focus();
	
}

function reverseText()
{
	var text= $("#textInput").val();
	$("#textInput").val("");
	if(text == "")
	{
		alert("Please, Type something!!!");
		return false;
	}
	
	var arr= text.split(" ");
	arr.reverse();
	
	var finaltext="";
	for(a of arr)
	{
		finaltext += reverse(a);
		finaltext += " ";
	}
	
	$("#print").text(finaltext);
	
	return false;
}


function reverse(a)
{
	a= a.split('').reverse().join("");
	return a;
}


