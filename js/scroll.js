// Clément Guillou's
// Fancy Mobile Flat Navigation
// http://codepen.io/cguillou/pen/jmkfK/

// and I added a feature for the bottom of the page

$(document).ready(function() {
  
  // On click, remove class on active element, add it to the new one
  
  $('nav a').click(function(e) {
    
    $('nav a.current').removeClass('current');
    $(this).addClass('current');
    
    // Scroll to anchor
    
    $('html,body').animate({scrollTop: $($(this).attr('href')).offset().top - 78},'slow');
    
    e.preventDefault();
    return false;
    
  });
  
  // On scroll, remove class on active element and add it to the new one
  
  $(document).scroll(function() {
     
     var position = Math.floor($(this).scrollTop() / 400) + 1;
    
     $('nav a.current').removeClass('current');
     $('nav a.link-' + position).addClass('current');
	 
	 // Added a trick for the Contact box of navigation, because Footer is not exactly a section
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
	   $('nav a.current').removeClass('current');
	   $('nav a.link-5').addClass('current');
   }
    
  });
  
 
  
});