// Sticky Navigation Tutorial by Brad Schiff

jQuery(document).ready(function() {
	
	// define variables
	var navOffset, scrollPos = 0;
	
	// add utility wrapper elements for positioning
	jQuery(".nav-container").wrap('<div class="nav-placeholder"></div>');
	jQuery(".nav-placeholder").wrapInner('<div class="nav-inner"></div>');
	jQuery(".nav-inner").wrapInner('<div class="nav-inner-most"></div>');
	
	// function to run on page load and window resize
	function stickyUtility() {
		
		// only update navOffset if it is not currently using fixed position
		if (!jQuery(".nav-container").hasClass("fixed")) {
			navOffset = jQuery(".nav-container").offset().top;
		}
		
		// apply matching height to nav wrapper div to avoid awkward content jumps
		jQuery(".nav-placeholder").height(jQuery(".nav-container").outerHeight());
		
	} // end stickyUtility function
	
	// run on page load
	stickyUtility();
	
	// run on window resize
	jQuery(window).resize(function() {
		stickyUtility();
	});
	
	// run on scroll event
	jQuery(window).scroll(function() {
		
		scrollPos = jQuery(window).scrollTop();
		
		if (scrollPos >= navOffset) {
			jQuery(".nav-container").addClass("fixed");
		} else {
			jQuery(".nav-container").removeClass("fixed");
		}
		
	});
	
});