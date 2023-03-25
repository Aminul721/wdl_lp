(function($){
    function marQFun() {
        let widthResize = jQuery(window).width();
        let appendMarQ = jQuery('.marquee_style_area');

        if (widthResize < 992) {
            jQuery('.header_container').prepend(appendMarQ);
        }else {
            jQuery('.right_headerInner').prepend(appendMarQ);
        }
    }

    marQFun();
    jQuery(window).resize(function() {
        marQFun();
    });

    jQuery('.common_btn').click(function () {
        let header_Height = jQuery('.header_container').height();
        var Lochref = jQuery(this).attr('href');
        jQuery("html, body").stop().animate({
        scrollTop: jQuery(Lochref).offset().top - header_Height
        }, 1500);
        return false;
    });

    if(matchMedia('only screen and (max-width: 991px)').matches) {
        var $mwo = $('.marquee-with-options');
        jQuery('.marquee').marquee();
        jQuery('.marquee-with-options').marquee({
            speed: 40,
            gap: 0,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true
        });

        //pause and resume links
        jQuery('.pause').click(function(e){
            e.preventDefault();
            $mwo.trigger('pause');
        });

        jQuery('.resume').click(function(e){
            e.preventDefault();
            $mwo.trigger('resume');
        });

        //toggle
        jQuery('.toggle').hover(function(e){
            $mwo.trigger('pause');
            },function(){
            $mwo.trigger('resume');
        })
        .click(function(e){
            e.preventDefault();
        })
    }


    jQuery( ".toggle_view_bg" ).click(function(e) {
        if(jQuery(this).parent('.toggle_view_item').hasClass('active')) {
        } else {
            $( ".toggle_view_bg" ).each(function() {
                if(jQuery(this).parent('.toggle_view_item').hasClass('active')) {
                    jQuery(this).parent('.toggle_view_item').toggleClass('active');
                    jQuery(this).next('.show_details').slideToggle('hide');
                }
            });
        }
        jQuery(this).parent('.toggle_view_item').toggleClass('active');
        jQuery(this).next('.show_details').slideToggle('slow');
        e.preventDefault();
    });
})(jQuery);

    


jQuery(document).ready(function(){
    	// var total_entrepreneursitems = jQuery(".entrepreneurs_carouselslider_item").length;
    	// var total_entrepreneursitemsMath = Math.ceil(total_entrepreneursitems / 1);

    	var entrepreneurs_carouselslider = jQuery(".entrepreneurs_carouselslider");
    	entrepreneurs_carouselslider.owlCarousel({
    		loop:true,
    		margin:0,
    		items: 1,
    		nav:true,
    		dots:true,
            autoHeight: true,
    		slideBy: 1,
    		// dotsEach: total_entrepreneursitemsMath,
    		responsiveClass:true,
    		responsive:{
    			0:{
    				items:1,
    				stagePadding: 0,
                    nav:true,
                    dots:true,
    			},
    		}
    	});
});


// scrolling event floating btn
jQuery(document).ready(function (){
    jQuery(window).scroll(function(){});
});
