/********************************************************
READY FUNCTION
********************************************************/
jQuery('.home-slider').owlCarousel({
    //stagePadding: 50,
    loop: jQuery(".home-slider > div").length > 1 ? true : false,
    margin: 0,
    nav: jQuery(".home-slider > div").length > 1 ? true : false,
    dots: false,
    singleItem: true,
    autoplay: jQuery(".home-slider > div").length > 1 ? 8000 : false,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:1
        },
        700:{
            items:1
        },
        1200:{
            items:1
        }
    }
  });

  jQuery(document).ready(function() {
  /* OWL */
  jQuery('.werken-bij-slider').owlCarousel({
    //stagePadding: 50,
    loop:true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:1
        },
        700:{
            items:1
        },
        1200:{
            items:1
        }
    }
  });

  jQuery('.owl-carousel').owlCarousel({
    loop:true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: false,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:1
        },
        700:{
            items:1
        },
        1200:{
            items:1
        }
    },
    // Enable thumbnails
    thumbs: true,
    // When only using images in your slide (like the demo) use this option to dynamicly create thumbnails without using the attribute data-thumb.
    thumbImage: false,
    // Enable this if you have pre-rendered thumbnails in your html instead of letting this plugin generate them. This is recommended as it will prevent FOUC
    thumbsPrerendered: true,
    // Class that will be used on the thumbnail container
    thumbContainerClass: 'owl-thumbs',
    // Class that will be used on the thumbnail item's
    thumbItemClass: 'owl-thumb-item'
  });
});