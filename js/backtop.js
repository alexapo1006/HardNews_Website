//George-Alexandru Apopei-Guraliuc, 2015
//Script for returning to the top of the page

$(document).ready(function(){
	$(".backtop").click(function(e){
		e.preventDefault();
		$("html, body").animate({scrollTop:0},300)}
)})