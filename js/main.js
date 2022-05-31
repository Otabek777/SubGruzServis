$(".jobs__block .btn").click(function() {
    $(".jobs__modal").addClass('active');
});
$(".jobs__modal_close").click(function() {
    $(".jobs__modal").removeClass('active');
});
$(".header_mobile .burgir").click(function() {
    $(".header").toggleClass('active');
    $(this).toggleClass('active');
});
$(".footer__block h5").click(function() {
    $(this).toggleClass('active');
});