//Create overlay div. Create image tag. Append the image to the overlay. Append the entire structure to the body. Check using inspect. 
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);

//Function for what happens when an image is clicked:
$(".gallery a").click(function(event){
//Grab image by selecting it's CSS selector. On click start a function
	event.preventDefault();
	//Pass a variable (event) into the function and use preventDefault() to stop it from opening the image in a new window as that is what it was doing originally. 
	var imageLocation = $(this).attr("href");
	//Grab the link location of what the user is clicking and give it a variable name. 
	$image.attr("src", imageLocation);
	//Set the source attribute to be the image location.
	var captionText = $(this).next().text();
	//Grab the alt text of the image. Text is sibling of click handler (link)
	$caption.text(captionText);
	//Set the text of the caption p tag to be the text associated with that image
	$overlay.show();
	//Show the overlay. In CSS the overlay was set to display: none.
});

$overlay.click(function(){
	$overlay.hide();
});
//When the overlay is showing and is clicked, it will be hidden


//Turn off in small screens
$(window).resize(function() {
    // Detect the current screen width.
    var width = $(window).width();
    // Determine what you define a as a mobile screen size.
    var mobileScreen = 700;
    // Check whether the condition applies.
    if(width <= mobileScreen) {
        $(".gallery a").click(function(){
        	//Start a function for clicking on an image in small screens
        	$overlay.hide();
        	//Hide the overlay
        })
    }
});


//Function for what happens when the video is clicked:
$("#trapeze").click(function(){
	$image.hide();
	$caption.hide();
	//Hide the original image and caption
	$video = $("<video src='img/trapeze.mp4' width='800' controls></video>");
	$overlay.append($video);
	//Append the video to the overlay
	$overlay.show();
	//Show the overlay
	$overlay.click(function(){
	//Function to re-hide the video after you click the overlay to close the video.
		$overlay.hide();
		$video.hide();
		$image.show();
		$caption.show();
	});
});