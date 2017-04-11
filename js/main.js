$('body').css('overflow-x', 'hidden');

$("#2").click(function() {
    $('html, body').animate({
        scrollTop: $("#who_we_are").offset().top
    }, 1500);
});

$('#toggle').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
    // $('body').css('overflow-y', 'hidden');
});

$('.search').click(function () {
  $('.dis_sea').css('display', 'block');
});
$('.close_sea').click(function () {
  $('.dis_sea').css('display', 'none');
})
