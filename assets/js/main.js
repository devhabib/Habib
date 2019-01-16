(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		// Owl carousel
		$('.owl-theme').owlCarousel({
			items: 3,
			loop:true,
			autoplay:true,
			responsive: {
				992:{
					items: 3
				},
				768:{
					items: 2
				},
				320:{
					items: 1
				}
			}
		});
		// Owl Carousel ends

		// Wow Js for Animation load
		new WOW().init();

		// One page nav

		$('#menu').onePageNav({
			scrollSpeed: 600,
			scrollThreshold: 1
		});
		$('.logo').onePageNav({
			scrollSpeed: 600,
			scrollThreshold: 1
		});

		// SlickNav
		$('#menu').slicknav();

		// Ripples
		$(document).ready(function() {
			try {
				$('.ripples').ripples({
					resolution: 256,
					perturbance: 0.09,
					dropRadius: 20
				});
			}
			catch (e) {
				$('.error').show().text(e);
			}
		});

       // Bar Filler
		$(document).ready(function(){
		    $('#bar1').barfiller({
		    	barColor:"#99b3e6",
		    	duration: 3000
		    });
		    $('#bar2').barfiller({
		    	barColor:"#ff6b81",
		    	duration: 3000
		    });
		    $('#bar3').barfiller({
		    	barColor:"#7bed9f",
		    	duration: 3000
		    });
		    $('#bar4').barfiller({
		    	barColor:"#2c2c54",
		    	duration: 3000
		    });
		    $('#bar5').barfiller({
		    	barColor:"#218c74",
		    	duration: 3000
		    });
		    $('#bar6').barfiller({
		    	barColor:"#4bcffa",
		    	duration: 3000
		    });
		});

		// TypedIt
		new TypeIt('.type-it', {
		    strings: 'Habibur Rahman',
		    loop: true
		});

		// Isotope click function
		$('.iso-nav').click(function(){
	        $('.iso-nav').removeClass('active');
	        $(this).addClass('active');

	        var selector = $(this).attr('data-filter');
	        $('.iso-items').isotope({
	            filter: selector
	        });
	        return false;
		});
	});


	jQuery(window).load(function () {

		/* Sticky Header */
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 100) {
				$('.header-fixed').addClass("sticky");
			} else {
				$('.header-fixed').removeClass("sticky");
			}
		});
		
	});
}(jQuery));
