jQuery(document).ready(function(){
jQuery("#speaker").click(function(){
	if(jQuery("#bg").get(0).paused == false)
	{
		jQuery("#bg").get(0).pause();
		jQuery(this).attr('src',"../img/speakerout.png");
	}
	else {
		jQuery("#bg").get(0).play();
		jQuery(this).attr('src',"../img/speaker.png");
	}	
});

});