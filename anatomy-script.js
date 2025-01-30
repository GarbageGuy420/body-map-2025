(function($) {
    "use strict";

    function isTouchEnabled() {
        return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    }

    $(document).ready(function () {
        $("path[id^='basic_']").each(function () {
            addEvent($(this).attr('id'));
        });
    });

    function addEvent(id) {
        var _obj = $('#' + id);
        $('#basic-wrapper').css({'opacity': '1'});

        // Ensure body parts are fully interactive
        _obj.css({
            'pointer-events': 'all',  // Ensures clicks work
            'cursor': 'pointer',
            'fill': 'rgba(255, 0, 0, 0.2)', // Slight fill so it's visible/selectable
            'stroke': '#8C8C8C'
        });

        if (basic_config[id]['active'] === true) {
            _obj.on('mouseenter', function () {
                $('#info-title').text(basic_config[id]['hover']);
                $('#info-content').text("Details about " + basic_config[id]['hover'] + ".");
                _obj.css({'fill': 'rgba(255, 0, 0, 0.5)'}); // Highlight effect
            });

            _obj.on('mouseleave', function () {
                $('#info-title').text("Select a body part");
                $('#info-content').text("Hover over or click a part to see details.");
                _obj.css({'fill': 'rgba(255, 0, 0, 0.2)'}); // Reset fill
            });

            _obj.on('click', function () {
                $('#info-title').text(basic_config[id]['hover']);
                $('#info-content').text("You selected " + basic_config[id]['hover'] + ".");
                $('.selected-part').removeClass('selected-part'); // Remove previous selection
                _obj.addClass('selected-part').css({'fill': 'rgba(255, 0, 0, 0.7)'}); // Click effect
            });
        }
    }
})(jQuery);
