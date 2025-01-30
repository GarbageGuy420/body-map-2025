(function($) {
    "use strict";

    let selectedObject = null; // Store the last selected object

    function isTouchEnabled() {
        return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    }

    $(document).ready(function() {
        $("path[id^='basic_']").each(function(i, e) {
            addEvent($(e).attr('id'));
        });
    });

    function addEvent(id) {
        var _obj = $('#' + id);
        $('#basic-wrapper').css({'opacity': '1'});

        _obj.attr({'cursor': 'pointer'});

        if (basic_config[id]['active'] === true) {
            _obj.on('mouseenter', function () {
                if (_obj !== selectedObject) {
                    _obj.css({'fill': 'rgba(255, 0, 0, 0.3)'}); // Hover effect
                }
            }).on('mouseleave', function () {
                if (_obj !== selectedObject) {
                    _obj.css({'fill': 'rgba(255, 0, 0, 0)'}); // Reset if not selected
                }
            });

            _obj.on('click', function () {
                if (selectedObject) {
                    selectedObject.css({'fill': 'rgba(255, 0, 0, 0)'}); // Reset previous selection
                }

                selectedObject = _obj;
                _obj.css({'fill': 'rgba(255, 0, 0, 0.7)'}); // Keep selected

                // Optional: Store selection in a hidden field for form submission
                $("#selectedPart").val(id);
            });
        } else {
            _obj.hide();
        }
    }
})(jQuery);
