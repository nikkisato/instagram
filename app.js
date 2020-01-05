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

