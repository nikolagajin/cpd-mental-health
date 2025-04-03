var cpd = cpd || {};

cpd.app = (function (lib, $) {

    lib.init = function () {
        lib.page = $(".page").data("page");
        lib.messages = {};

        cpd.utils.init();
        cpd.quiz.init();

    };

    return lib;

})(cpd.app || {}, jQuery);


cpd.utils = (function (lib, $) {

    lib.init = function () {
        lib.setRefLinks();
    };

    lib.setRefLinks = function () {
        $(document).on("click", "[data-ref]", function (e) {
            document.location.href = $(this).data('ref');
        })
    };

    lib.randomIntFromInterval = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    return lib;

})(cpd.utils || {}, jQuery);


cpd.quiz = (function (lib, $) {

    lib.init = function(){
        $(document).on("click", ".quiz-option", function() {
            var _option = $(this)
            _option.siblings().removeAttr("selected")
            _option.attr("selected", "selected")
            _option.parents(".options-holder").siblings('.quiz-btn').show();
        });

        $(document).on("click", ".quiz-btn", function() {
            var qbtn = $(this);
            qbtn.siblings(".options-holder").find('.quiz-answer-icon').css({"display": "inline"});
            qbtn.siblings(".answer-btn").show();
            qbtn.hide();
        });
        $(document).on("click", ".answer-btn", function() {
            var abtn = $(this);
            var txt = abtn.val()
            abtn.val(abtn.text());
            abtn.text(txt)
        });
    }

    return lib
})(cpd.quiz || {}, jQuery);

$(function () {
    cpd.app.init();
});



