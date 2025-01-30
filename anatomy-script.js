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
            _obj.on('mouseenter', function (e) {
                if (_obj !== selectedObject) {
                    _obj.css({'fill': 'rgba(255, 0, 0, 0.3)'}); // Hover effect
                }

                // Tooltip (Label Display)
                let x = e.pageX + 10, y = e.pageY - 15;
                let $tip = $('#tip-basic');
                let tipWidth = $tip.outerWidth(), tipHeight = $tip.outerHeight();

                x = (x + tipWidth > $(document).scrollLeft() + $(window).width()) ? x - tipWidth - 20 : x;
                y = (y + tipHeight > $(document).scrollTop() + $(window).height()) ? $(document).scrollTop() + $(window).height() - tipHeight - 10 : y;

                $tip.show().html(basic_config[id]['hover']).css({ left: x, top: y });
            });

            _obj.on('mouseleave', function () {
                if (_obj !== selectedObject) {
                    _obj.css({'fill': 'rgba(255, 0, 0, 0)'}); // Reset if not selected
                }
                $('#tip-basic').hide(); // Hide tooltip on mouse leave
            });

            _obj.on('click', function (e) {
                if (selectedObject) {
                    selectedObject.css({'fill': 'rgba(255, 0, 0, 0)'}); // Reset previous selection
                }

                selectedObject = _obj;
                _obj.css({'fill': 'rgba(255, 0, 0, 0.7)'}); // Keep selected

                // Store selection for form submission
                $("#selectedPart").val(id);

                // Tooltip stays visible on selection
                let x = e.pageX + 10, y = e.pageY - 15;
                let $tip = $('#tip-basic');
                let tipWidth = $tip.outerWidth(), tipHeight = $tip.outerHeight();

                x = (x + tipWidth > $(document).scrollLeft() + $(window).width()) ? x - tipWidth - 20 : x;
                y = (y + tipHeight > $(document).scrollTop() + $(window).height()) ? $(document).scrollTop() + $(window).height() - tipHeight - 10 : y;

                $tip.show().html(basic_config[id]['hover']).css({ left: x, top: y });
            });
        } else {
            _obj.hide();
        }
    }
})(jQuery);
