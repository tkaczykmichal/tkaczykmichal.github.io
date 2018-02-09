$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 600);
            return false;
        }
    }
});

$(document).on('scroll', function(){
    changeLogo();
});

function changeLogo() {
    if($(document).scrollTop() >= $("#timeline").position().top){
        $(".navbar-logo__minimal").removeClass("hidenav");
        $(".navbar-logo").addClass("hidenav");
    }
    else{
        $(".navbar-logo__minimal").addClass("hidenav");
        $(".navbar-logo").removeClass("hidenav");
    }
}

$(function(){
    changeLogo();
});
