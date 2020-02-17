! function (e) {
    function a() {
        if (100 < e("#mainNav").offset().top) {
            e("#logo-principal").addClass("show");
            e("#logo-principal").removeClass("hide")
        } else {
            e("#logo-principal").removeClass("show");
            e("#logo-principal").addClass("hide");
        }
    }
    a(), e(window).scroll(a)
}(jQuery);

$(document).ready(function () {
    $.ajax("https://www.instagram.com", {
        type: "GET",
    }).fail(function () {
        $("#exodium-instagram").html('<img id="instagram-error" src="./img/error/instagram-error.png" alt="" class="img-fluid"></img>');
    });
    $.ajax("https://www.twitter.com", {
        type: "GET",
    }).fail(function () {
        $("#exodium-twitter").html('<img id="twitter-error" src="./img/error/twitter-error.png" alt="" class="img-fluid"></img>');
    });
    $.ajax("https://www.facebook.com", {
        type: "GET",
    }).fail(function () {
        $("#exodium-facebook").html('<img id="facebook-error" src="./img/error/facebook-error.png" alt="" class="img-fluid"></img>');
    });
});
