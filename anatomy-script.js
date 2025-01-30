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

        _obj.attr({'fill': 'rgba(255, 0, 0, 0)', 'stroke': 'rgba(255, 102, 102, 1)'});
        _obj.attr({'cursor': 'pointer'});

        if (basic_config[id]['active'] === true) {
            _obj.on('mouseenter', function () {
                $('#info-title').text(basic_config[id]['hover']);
                $('#info-content').text("Details about " + basic_config[id]['hover'] + ".");
            });

            _obj.on('mouseleave', function () {
                $('#info-title').text("Select a body part");
                $('#info-content').text("Hover over or click a part to see details.");
            });

            _obj.on('click', function () {
                $('#info-title').text(basic_config[id]['hover']);
                $('#info-content').text("You selected " + basic_config[id]['hover'] + ".");
            });
        }
    }
})(jQuery);
