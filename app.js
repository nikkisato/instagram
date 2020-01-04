$('body').toggleClass(localStorage.toggled);

function darkLight() {
    if (localStorage.toggled != 'dark') {
        $('body, p').toggleClass('dark', true);
        localStorage.toggled = 'dark';
    } else {
        $('body, p').toggleClass('dark', false);
        localStorage.toggled = '';
    }
}

if ($('body').hasClass('dark')) {
    $('#checkBox').prop('checked', true);
} else {
    $('#checkBox').prop('checked', false);
}

$(document).ready(function(){
    $('.your-class').slick({
        setting-name: setting - value
    });
});

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
});
          
       