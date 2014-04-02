/* moj js subor pre testovanie*/

jQuery(function($) {
     var s = $("#table-of-contents");
    var pos = s.position();                    
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        //s.html("Distance from top:" + pos.top + "<br />Scroll position: " + windowpos);
        if (windowpos >= pos.top) {
            s.addClass("stick");
        } else {
            s.removeClass("stick"); 
        }
    });
});




$(document).ready(function() {
    $('.toc header').click(function() {
            $('#drawer').slideToggle("fast");
    });
});
