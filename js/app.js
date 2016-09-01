$(document).ready(function() {


//progress bars
    $('.our-skills').on('mouseenter', function() {
        $('.skillbar').each(function() {
        	$(this).find('.skillbar-bar').animate({
        		width:$(this).attr('data-percent')
        	}, 2000);
        });
    });

// bottom navigation
    var navBottomLinks = $('#nav-bottom li').find('a');
    navBottomLinks.on('click', function() {
        navBottomLinks.removeClass('navBottomLinksClick');
        $(this).addClass('navBottomLinksClick')
    });

//filters in gallery
    var galleryHeadings = $('.portfolio-filter');
    galleryHeadings.on('click', function() {
        galleryHeadings.removeClass('portfolio-filter-click');
        $(this).addClass('portfolio-filter-click');
    })

// gallery
    $('.portfolio-filter').on('click', function() {
        var galleryFilters = $(this).attr('data-filter');
        if (galleryFilters == 'all') {
            $('.gallery-pic-selection').removeClass('gallery-pic-hide');
         } else {
            $('.gallery-pic-selection').addClass('gallery-pic-hide');
            $('.gallery-pic-selection[data-filter=' + galleryFilters + ']').removeClass('gallery-pic-hide');
            $('.gallery-pic-selection[data-filter=' + galleryFilters + ']').next().removeClass('gallery-pic-hide');
            $('.gallery-pic-selection[data-filter=' + galleryFilters + ']').next().next().removeClass('gallery-pic-hide');
        };
    });

//slow scrolling - main, top navigation
    var navTop = $('#home').find('a');
    navTop.on('click', function(){
        var hrefValue = $(this).attr('href');
        var hrefValueOffset = $(hrefValue).offset();
        $('body, html').animate({scrollTop: hrefValueOffset.top}, 'slow');
    });


// slow scrolling - bottom navigation
    var navBottom = $('#nav-bottom').find('a');
    navBottom.on('click', function() {
        var hrefValue = $(this).attr('href');
        var hrefValueOffset = $(hrefValue).offset();
        $('body, html').animate({scrollTop: hrefValueOffset.top}, 'slow');
    });

//slow scrolling - bottom right arrow
    $("a[href='#to-top']").on('click', function() {
    $('body, html').animate({scrollTop: 0}, 'slow');
    });

});

// slider
document.addEventListener('DOMContentLoaded', function() {
    var buttonNext = document.querySelector('.team-arrow-right');
        var buttonPrev = document.querySelector('.team-arrow-left');
        var list = document.querySelectorAll('.slider li');
        var picIndex = 0;
        list[picIndex].className = 'visible';

        buttonNext.addEventListener('click', function(event) {
            list[picIndex].classList.remove('visible');
            picIndex++;
            if (picIndex > list.length - 1) {
                picIndex = list.length - 1;
            }
            list[picIndex].className = 'visible';

        });
        buttonPrev.addEventListener('click', function(event) {
            list[picIndex].classList.remove('visible');
            picIndex--;
            if (picIndex < 0) {
                picIndex = 0;
            }
            list[picIndex].className = 'visible';
        });
});
