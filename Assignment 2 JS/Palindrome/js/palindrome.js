$(document).ready( init() )

function init()
{
	$("#reverseButton").on("click", checkPalindrome);
	$("#textInput").focus();
	
}

function checkPalindrome()
{
	var text= $("#textInput").val();
	$("#textInput").val("");
	if(text == "")
	{
		alert("Please, Type something!!!");
		return false;
	}

	var is= true;
	
	for(var i=0,j=text.length-1;i<text.length/2;i++)
	{
		if(!(text[i] == text[j--]))
		{
			is= false;
			break;
		}
	}

	if(is)
	$("#print").text("String is Palindrome");
	else
	$("#print").text("String is NOT Palindrome");	
	
	return false;
}




