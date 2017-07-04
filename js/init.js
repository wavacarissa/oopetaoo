$(document).ready(function() {
    $('[data-toggle="popover"]').popover({
        html: true,
        placement: 'top',
//        trigger: 'focus',
        content: function() {
            return '<p>' + $(this).data('deskripsi') + '</p>' +
                '<a href="' + $(this).data('link') + '">' + $(this).data('link') + '</a>' +
                '<img src="' + $(this).data('img') + '" />'
        },
        template: '<div class="popover">' +
            '<div class="arrow"></div>' +
            '<i class="close fa fa-times" aria-hidden="true"></i>' +
            '<h3 class="popover-title"></h3>' +
            '<div class="popover-content"></div>' +
            '</div>'
    });
});