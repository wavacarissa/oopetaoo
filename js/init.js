$(document).ready(function() {
    $('[data-toggle="popover"]').popover({
        html: true,
        placement: 'top',
        trigger: 'focus',
        content: function() {
            return '<p>' + $(this).data('deskripsi') + '</p>' +
                '<p><a href="' + $(this).data('link') + '" target="_blank">' + $(this).data('link') + '</a></p>' +
                '<img src="' + $(this).data('img') + '" />'
        },
        template: '<div class="popover">' +
            '<div class="arrow"></div>' +
            '<i class="close fa fa-times" aria-hidden="true"></i>' +
            '<h3 class="popover-title"></h3>' +
            '<div class="popover-content"></div>' +
            '</div>'
    });


    $('#sepeda-kampus').click(function() {
        $('img.sepeda-kampus').toggle();
    });

    $('#kantong-parkir').click(function() {
        $('img.kantong-parkir').toggle();
    });

    $('img.kantong-parkir').click(function() {
        $('#modalParkir').modal('toggle');
    });
    
    $('img.sepeda-kampus').click(function() {
        $('#modalSepeda').modal('toggle');
    });
});
