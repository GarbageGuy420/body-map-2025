( function( $ ) {

    "use strict";

    function isTouchEnabled() {
        return (('ontouchstart' in window)
            || (navigator.MaxTouchPoints > 0)
            || (navigator.msMaxTouchPoints > 0));
    }

    var selectedPart = null; // Stores the last selected part

    $(document).ready(function () {
        $("path[id^=\"basic_\"]").each(function (i, e) {
            addEvent($(e).attr('id'));
        });

        // Click outside the anatomy model to deselect
        $(document).on('click touchstart', function () {
            if (selectedPart) {
                $('#' + selectedPart).css({'fill': 'rgba(255, 0, 0, 0)'}); // Remove highlight
                selectedPart = null;
                $('#tip-basic').hide(); // Hide tooltip
            }
        });

        // Prevent deselection when clicking inside the anatomy model
        $('#basic-wrapper').on('click touchstart', function (e) {
            e.stopPropagation();
        });
    });

    function addEvent(id) {
        var _obj = $('#' + id);
        $('#basic-wrapper').css({'opacity': '1'});

        _obj.attr({'fill': 'rgba(255, 0, 0, 0)', 'stroke': 'rgba(255, 102, 102, 1)'});
        _obj.attr({'cursor': 'default'});

        if (basic_config[id]['active'] === true) {
            _obj.attr({'cursor': 'pointer'});

            _obj.on('mouseenter', function () {
                if (selectedPart !== id) {
                    _obj.css({'fill': 'rgba(255, 0, 0, 0.3)'});
                }
                $('#tip-basic').show().html(basic_config[id]['hover']);
            }).on('mouseleave', function () {
                if (selectedPart !== id) {
                    _obj.css({'fill': 'rgba(255, 0, 0, 0)'});
                }
                if (!selectedPart) {
                    $('#tip-basic').hide();
                }
            });

            // Temporary highlight on touchstart/mousedown
            _obj.on('mousedown touchstart', function (e) {
                _obj.css({'fill': 'rgba(255, 0, 0, 0.7)'}); // Temporary highlight
                e.stopPropagation(); // Prevent deselection
            });

            // Persistent highlight on selection (mouseup/touchend)
            _obj.on('mouseup touchend', function (e) {
                // Reset previous selection
                if (selectedPart) {
                    $('#' + selectedPart).css({'fill': 'rgba(255, 0, 0, 0)'});
                }

                // Set new selection
                selectedPart = id;
                _obj.css({'fill': 'rgba(255, 0, 0, 0.3)'}); // Persistent highlight

                // Keep tooltip visible and update content
                $('#tip-basic').show().html(basic_config[id]['hover']);

                e.stopPropagation(); // Prevent deselection
            });
        } else {
            _obj.hide();
        }
    }

})(jQuery);
