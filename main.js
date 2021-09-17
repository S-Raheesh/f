canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

function add() {
	background_imgTag = new Image(); 
	background_imgTag.onload = uploadBackground; 
	background_imgTag.src = background_image;   
  
}
function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed>=97 && keyPressed<=122  || (keyPressed>=65 && keyPressed<=90))
		{
			
            document.getElementById("e").innerHTML = "YOU CLICKED AN ALPHABET KEY";
            
			
		}
        if(keyPressed>=48 && keyPressed<=57)
		{
			
            document.getElementById("e").innerHTML = "YOU CLICKED A NUMBER KEY";
			
		}
        

}


	