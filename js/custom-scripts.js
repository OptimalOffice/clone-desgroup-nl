/********************************************************
READY FUNCTION
********************************************************/
jQuery(document).ready(function() {
  /* ADD CLASS TO FIRST TAB */
  jQuery("li.step-1").addClass( "active" );
  jQuery(".step-1-text").addClass( "active" );
  jQuery(".colleagues-slider-navigation ul li:first").addClass( "active" );

  jQuery('li.step-1').click(function(){
    jQuery(this).addClass('active');
    jQuery('.step-1-text').addClass('active');
    jQuery('li.step-2, li.step-3').removeClass('active');
    jQuery('.step-2-text, .step-3-text').removeClass('active');
  });
  jQuery('li.step-2').click(function(){
    jQuery(this).addClass('active');
    jQuery('.step-2-text').addClass('active');
    jQuery('li.step-1, li.step-3').removeClass('active');
    jQuery('.step-1-text, .step-3-text').removeClass('active');
  });
  jQuery('li.step-3').click(function(){
    jQuery(this).addClass('active');
    jQuery('.step-3-text').addClass('active');
    jQuery('li.step-1, li.step-2').removeClass('active');
    jQuery('.step-1-text, .step-2-text').removeClass('active');
  });

  jQuery('a.open-overlay').click(function(){
    jQuery('.overlay-solliciteren').addClass('active');
  });
  jQuery('.close-overlay').click(function(){
    jQuery('.overlay-solliciteren').removeClass('active');
  });
});