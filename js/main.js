$(".header__call").click(function() {
    $(".modal").addClass('active');
});
$(".modal__close").click(function() {
    $(".modal").removeClass('active');
});

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

if(document.querySelector(".services__table .top .left")) {
    $(".services__table .top .left").click(function() {
        $(this).toggleClass('active');
        $(".services__aside").toggleClass('active');
    });
};

if(document.querySelector(".jobs__select")) {
    $(".jobs__select").click(function() {
        $(this).toggleClass('active');
        $(".services__aside").toggleClass('active');
    });
};