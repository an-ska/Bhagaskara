$(document).ready(function(){


//progress bars
    $('.our_skills').on('mouseenter', function() {
        $('.skillbar').each(function(){
        	$(this).find('.skillbar_bar').animate({
        		width:$(this).attr('data-percent')
        	}, 2000);
        });
    });

// bottom navigation
    var navBottomLinks = $('#nav_bottom li').find('a');
    // console.log(navBottomLinks);
    navBottomLinks.on('click', function(){
        navBottomLinks.css('color', 'black');
        $(this).css('color', 'grey');
    });

//filters in gallery
    var galleryHeadings = $('.portfolio_filter');
    // console.log(galleryFilters);
    galleryHeadings.on('click', function(){
        galleryHeadings.css({
            'background': 'white',
            'border': '2px solid black',
            'color': 'black',
            'font-weight': 'normal'
        });
        $(this).css({
            'background': 'purple',
            'border': ' 2px solid purple',
            'color': 'white',
            'font-weight': 'bold'
        });
    })

// gallery
    $('.portfolio_filter').on('click', function() {
        var galleryFilters = $(this).attr('data-filter');
        // console.log(filter);
        if (galleryFilters == 'all') {
            $('.gallery_pic_selection').removeClass('gallery_pic_hide');
         } else {
            $('.gallery_pic_selection').addClass('gallery_pic_hide');
            $('.gallery_pic_selection[data-filter=' + galleryFilters + ']').removeClass('gallery_pic_hide');
            $('.gallery_pic_selection[data-filter=' + galleryFilters + ']').next().removeClass('gallery_pic_hide');
            $('.gallery_pic_selection[data-filter=' + galleryFilters + ']').next().next().removeClass('gallery_pic_hide');
        };
    });

//slow scrolling - main, top navigation
    var navTop = $('#home').find('a');
    // console.log(navTop);
    navTop.on('click', function(){
        var hrefValue = $(this).attr('href');
        var hrefValueOffset = $(hrefValue).offset();
        $('body, html').animate({scrollTop: hrefValueOffset.top}, 'slow');
    });


// slow scrolling - bottom navigation
    var navBottom = $('#nav_bottom').find('a');
    // console.log(navBottom);
    navBottom.on('click', function(){
        var hrefValue = $(this).attr('href');
        var hrefValueOffset = $(hrefValue).offset();
        $('body, html').animate({scrollTop: hrefValueOffset.top}, 'slow');
    });

//slow scrolling - bottom right arrow
    $("a[href='#toTop']").on('click', function() {
    $('body, html').animate({ scrollTop: 0 }, 'slow');
    });

});

// slider
document.addEventListener("DOMContentLoaded", function(){
    var buttonNext = document.querySelector('.team_arrow_right');
        var buttonPrev = document.querySelector('.team_arrow_left');
        var list = document.querySelectorAll(".slider li");
        var picIndex = 0;

        console.log(buttonNext);
        console.log(buttonPrev);
        console.log(list);
        console.log(picIndex);
        list[picIndex].className = "visible";

        buttonNext.addEventListener("click", function(event) {
            // console.log("I was clicked");
            list[picIndex].classList.remove("visible");
            picIndex++;
            if (picIndex > list.length - 1) {
                picIndex = list.length - 1;
            }
            list[picIndex].className = "visible";

        });
        buttonPrev.addEventListener("click", function(event) {
            // console.log("I was clicked as well");
            list[picIndex].classList.remove("visible");
            picIndex--;
            if (picIndex < 0) {
                picIndex = 0;
            }
            list[picIndex].className = "visible";
        });
});
