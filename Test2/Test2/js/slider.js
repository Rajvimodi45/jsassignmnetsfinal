$(function () {
    $('.slider').each(function () {
        var $this = $(this);
        var $group = $this.find('.slide-group');
        var $slides = $this.find('.slide');
        var buttonArray = [];
        var currentIndex = 0;
        var timeout;

        // the main method defining animation of the sliders when they transition
        function move(newIndex) {
            var animateLeft, slideLeft; 
            advanced();
            if ($group.is(':animated') || currentIndex === newIndex) { 
                return; 
            }
            buttonArray[currentIndex].removeClass('active');
            buttonArray[newIndex].addClass('active');
            if (newIndex > currentIndex) {
                slideLeft = '100%'; 
                animateLeft = '-100%'; 
            } else { 
                slideLeft = '-100%'; 
                animateLeft = '100%'; 
            }

            $slides.eq(newIndex).css({
                left: slideLeft,
                display: 'block'
            });
            $group.animate({
                left: animateLeft
            }, function () {
                $group.css({
                    left: 0
                });
                $slides.eq(currentIndex).hide();
                $slides.eq(newIndex).css({
                    left: 0
                });
                currentIndex = newIndex;
            });
        }

        // automatically advance the slide on an interval
        function advance() {
            clearTimeout(timeout);

            timeout = setTimeout(function () {
                if (currentIndex < ($slides.length - 1)) {
                    move(currentIndex + 1); 
                else{}
            }, 1000);
        }

        // create pagination for each slide
        $.each($slides, function (index) {
            var $button = $('<a href="#" class="slide-btn">&bull;</a>');
            if (index === currentIndex) { 
                $button.addClass('active'); 
            }
            $button.on('click', function (e) {
                e.preventDefault();

            })/
            buttonArray.push($button);  
        });


        advance(); 
    });
});