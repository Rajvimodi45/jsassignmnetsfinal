
// Rajvi Nilesh Modi 

$(document).ready(function(){
    $('.accordion').click(function(e) {
        e.preventDefault();

        if ($(this).next().hasClass('show')) {
            $(this).next().removeClass('show');
            $(this).next().slideUp(350);
        } else {
            $(this).parent().parent().find('li .inner').removeClass('show');
            $(this).parent().parent().find('li .inner').slideUp(350);
            $(this).next().toggleClass('show');
            $(this).next().slideToggle(350);
        }
    });

    $(".tabs-list li a").click(function(e){
        e.preventDefault();
    });

    $(".tabs-list li").click(function(){
        var tabid = $(this).find("a").attr("href");
        $(".tabs-list li,.tabs div.tab").removeClass("active");   

        $(".tab").hide();
        $(tabid).show();
        $(this).addClass("active");

    });
});