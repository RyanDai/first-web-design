var numberOfImage = 0; //set Images/image0.jpg to display firstly

function showchangeImg() {
	
		var changeImg = document.getElementById("changeImg");  //get source of images
		
		if(numberOfImage == 4){     //after image3 is displayed, back to image0
			numberOfImage = 0;
		}
		changeImg.src = "Images/image" + numberOfImage + ".jpg";  //display Images/image X.jpg
		                                    //X are 0,1,2,3
		numberOfImage += 1;  
		setTimeout(showchangeImg, 1000)   //set the time of image change
}
showchangeImg();
