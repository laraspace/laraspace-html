var Editors = function () {

    var Summernote = function () {
        $('.ls-summernote').summernote();
    };

    var Simplemde = function () {
        var editor = $('.ls-simplemde')[0];


        if (editor) {
            var simplemde = new SimpleMDE({element: editor});
        }
    };

    return {
        init: function () {
            Summernote();
            Simplemde();
        }
    };

}();

jQuery(document).ready(function () {

    Editors.init();

});
