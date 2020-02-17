! function(e) {
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