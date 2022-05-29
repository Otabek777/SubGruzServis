$(".jobs__block .btn").click(function() {
    $(".jobs__modal").addClass('active');
});
$(".jobs__modal_close").click(function() {
    $(".jobs__modal").removeClass('active');
});