$('.navbar-nav li').click(function () {
    $('.navbar-nav li').removeClass('active');
    $(this).addClass('active');
  });



  $(document).ready(function() {
 
    $("#jjkellerslider").owlCarousel({
   
        navigation : true, // Show next and prev buttons
        slideSpeed : 1000,
        paginationSpeed : 1000,
        singleItem:true,
        autoPlay : 3000,
  
   
        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
   
    });
   
  });

  $("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
    $(e.target)
      .prev()
      .find("i:last-child")
      .toggleClass("fa-minus fa-plus");
  });
  


  $(function(){
    $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            });
    });
    
  
  
  


  
  

 
  
  
  
