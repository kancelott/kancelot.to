//
// Displays or hides footer when at end of page (requires jQuery)
//
$(document).ready(function() {
    showHideFooter();
});
$(window).scroll(function() {
    showHideFooter($(window).scrollTop());
});
$(window).resize(function() {
    showHideFooter();
});

function showHideFooter(scroll) {
    if (scroll === undefined) {
        scroll = 0;
    }
    if ($(window).height() + scroll > $(document).height() - 50) {
        $('footer').slideDown();
    } else {
        $('footer').slideUp();
    }
}
