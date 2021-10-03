import $ from 'jquery';

$(function () {
    if ($.fn.classyNav) {
        $('#vizewNav').classyNav();
    }

    // :: 8.0 Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // :: 10.0 Prevent Default a Click
    $('a[href="#"]').on('click', function (e) {
        e.preventDefault();
    });
});