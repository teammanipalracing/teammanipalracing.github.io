$(document).ready(function(){
	$('#burger-container').on('click', function(){
		$(this).toggleClass('open');
		$('nav').slideToggle();
	});

	var i = 2; //1
	setInterval( () => {
		// $('#home .fullpage').css("background-image", "url('images/pics/IMG_" + i + ".JPG')");
		$('#home .fullpage').css("background-image", "url('images/homepics/pic" + i + ".jpg')");
		i++;
		if(i == 20) i = 1; //10, 0
	}, 4000);

});