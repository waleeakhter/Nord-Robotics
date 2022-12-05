$(document).ready(function () {
    $('.menu_btn').click(function (e) {
        $(this).toggleClass('active');
    });

    $('#profilebuttons button').click(function () {
        if ($(this).hasClass('historyBtn')) {
            $('.searchNav').show();
        } else {
            $('.searchNav').hide();
        }
    });
});
