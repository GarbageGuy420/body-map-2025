(function ($) {
    "use strict";

    function isTouchEnabled() {
        return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    }

    $(document).ready(function () {
        $("path[id^='basic_']").each(function (i, e) {
            addEvent($(e).attr('id'));
        });
    });

    function addEvent(id) {
        var _obj = $('#' + id);
        $('#basic-wrapper').css({'opacity': '1'});

        _obj.attr({'fill': 'rgba(255, 0, 0, 0)', 'stroke': 'rgba(255, 102, 102, 1)', 'cursor': 'pointer'});

        if (basic_config[id]['active'] === true) {
            // **Click Event: Update Display Instead of Tooltip**
            _obj.on('click', function () {
                let partName = basic_config[id]['hover']; // Get part name from config
                updateSelectedPart(partName); // Update the selection display

                // Handle links if applicable
                if (basic_config[id]['target'] === '_blank') {
                    window.open(basic_config[id]['url']);
                } else if (basic_config[id]['target'] === '_self') {
                    window.parent.location.href = basic_config[id]['url'];
                }
            });

            // **Remove Tooltip Handling**
            _obj.off('mousemove'); // Disable tooltip movement
            _obj.off('mouseenter mouseleave'); // Disable hover tooltip

            // Keep hover highlight effect
            _obj.on('mouseenter', function () {
                _obj.css({'fill': 'rgba(255, 0, 0, 0.3)'});
            }).on('mouseleave', function () {
                _obj.css({'fill': 'rgba(255, 0, 0, 0)'});
            });
        } else {
            _obj.hide();
        }
    }
})(jQuery);
