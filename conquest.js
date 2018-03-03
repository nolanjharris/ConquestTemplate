$(document).ready(function(){
    var $win = $(window);

    $('div.backgroundHead').each(function(){
        var scroll_speed = 2;
        var $this = $(this);
        $(window).scroll(function() {
            var bgScroll = -(($this.offset().top - $win.scrollTop() ) / scroll_speed);
            var bgPosition = 'center '+ bgScroll + 'px';
            $this.css({ backgroundPosition: bgPosition});
        });
    });
});

$(document).ready(function(){
    var $win = $(window);

    $('div.servicesBG').each(function(){
        var scroll_speed = 2;
        var $this = $(this);
        $(window).scroll(function() {
            var bgScroll = -(($this.offset().top - $win.scrollTop() ) / scroll_speed);
            var bgPosition = 'center '+ bgScroll + 'px';
            $this.css({ backgroundPosition: bgPosition});
        });
    });
});

$(document).ready(function(){
    var $win = $(window);

    $('div.contactBG').each(function(){
        var scroll_speed = 2;
        var $this = $(this);
        $(window).scroll(function() {
            var bgScroll = -(($this.offset().top - $win.scrollTop() ) / scroll_speed);
            var bgPosition = 'center '+ bgScroll + 'px';
            $this.css({ backgroundPosition: bgPosition});
        });
    });
});

$(function() {
   $("li").click(function() {
      $("li").removeClass("active");
      $(this).addClass("active");
   });
});


