$(document).ready(function(){
var wid=1;
$("img").effect("bounce",{times: 4},5000);
$(".container-fluid").css("marginTop","1%");

$(document).on("click","#close",function(){
	$("#overlay").remove();
	$('#bg').get(0).play();
	$("#speaker").attr('src','../img/speaker.png');


});
$(document).on("click","#mainsrc",function(){

val = $(this).attr("alt");
//arr = val.split(".");
//myval = arr[0];

	$("#myvoice").get(0).src = "../img/" + val + ".mp3";
$("#myvoice").get(0).play();


});


$(".clickme").click(function()
{
$('#bg').each(function(){
	this.pause(); // Stop playing
	$("#speaker").attr('src',"../img/speakerout.png");
 });
//$(this).hide(10);
$.fn.displayOverlay('<img align="right" id="close" src="../img/close-icon.png" width="100" height="100" style="position:absolute;" /><img style="min-width:90%;min-height:80%;" id="mainsrc" src="' + $(this).attr("src") + '"  alt="' + $(this).attr("alt") + '"  />');
//$(this).show( "scale", {percent: 200, direction: 'horizontal' },2000 );
val = $(this).attr("alt");
//arr = val.split(".");
//myval = arr[0];
$("#myvoice").get(0).src = "../img/" + val + ".mp3";
$("#myvoice").get(0).play();

});

$.fn.displayOverlay = function (text) {
    $("<table id='overlay'><tbody><tr><td>" + text + "</td></tr></tbody></table>").css({
        "position": "fixed",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "background-color": "rgba(0,0,0,0.8)",
        "z-index": 10000,
        "vertical-align": "middle",
        "text-align": "center",
        "color": "#fff",
        "font-size": "30px",
        "font-weight": "bold",
        "cursor": "hand"
    }).appendTo("body");
}
$("#speaker").click(function(){
	if($("#bg").get(0).paused == false)
	{
		$("#bg").get(0).pause();
		$(this).attr('src',"../img/speakerout.png");
	}
	else {
		$("#bg").get(0).play();
		$(this).attr('src',"../img/speaker.png");
	}
});

});
