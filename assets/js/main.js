// HIDE PRELOADER as soon as the DOM is ready, with a safety timeout
// in case heavy assets (videos/images) delay the window load event.
jQuery(function () {
    $(".preloader").addClass("hide-preloader");
});
setTimeout(function () {
    if (window.jQuery) { jQuery(".preloader").addClass("hide-preloader"); }
}, 2000);


jQuery(document).ready(function($) {
	"use strict";
    
    // PORTFOLIO GALLERY 
    $('.portfolio a').featherlightGallery({
		previousIcon: '&#9664;',   
		nextIcon: '&#9654;',         
		galleryFadeIn: 100,
		galleryFadeOut: 300    
	});
    
});