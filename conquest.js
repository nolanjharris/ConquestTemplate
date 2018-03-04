function parallax(element){
$(document).ready(function(){
    var $win = $(window);
    $(element).each(function(){
        var scroll_speed = 2;
        var $this = $(this);
        $(window).scroll(function() {
            var bgScroll = -(($this.offset().top - $win.scrollTop() ) / scroll_speed);
            var bgPosition = 'center '+ bgScroll + 'px';
            $this.css({ backgroundPosition: bgPosition});
        });
    });
});
}

parallax('div.backgroundHead');
parallax('div.servicesBG');
parallax('div.contactBG');



$(function() {
   $("a").click(function(e){
        var navH = $('#menu').height();
        var linkHref = $(this).attr('href');
        $("a").removeClass("active");
        $(this).addClass("active");
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - navH + 12
        }, 1000);

        e.preventDefault();

   });
});


$(function(){
    var navLinks = $('#menu ul li a'),
        navH = $('#menu').height(),
        section = $('section'),
        documentEl = $(document);

    documentEl.on('scroll', function(){
        var currentScrollPos = documentEl.scrollTop();

        section.each(function(){
            var self = $(this);
            if ( self.offset().top < (currentScrollPos + navH) && (currentScrollPos + navH) < (self.offset().top + self.outerHeight()) ) {
                var targetClass = '.' + self.attr('class') + "-marker";
                navLinks.removeClass('active');
                $(targetClass).addClass('active');
            }
        });
    });

});


