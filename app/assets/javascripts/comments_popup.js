var commentPopup = {
    setup: function() {
        // add hidden 'div' to end of page to display popup:
        var popupDiv = $('<div id="photoComments"></div>');
        popupDiv.hide().appendTo($('body'));
        $(document).on('click', '#slide', commentPopup.getPhotoInfo);
    }
    ,getPhotoInfo: function() {
        $.ajax({type: 'GET',
            url: $(this).attr('href'),
            timeout: 5000,
            success: commentPopup.showPhotoInfo,
            error: function(xhrObj, textStatus, exception) { console.log(xhrObj); }
            // 'success' and 'error' functions will be passed 3 args
        });
        return false;
    }
    ,showPhotoInfo: function(data, requestStatus, xhrObject) {
        // center a floater 1/2 as wide and 1/4 as tall as screen
        var oneFourth = Math.ceil($(window).width() / 4);
        $('#photoComments').css({'left': oneFourth,  'width': 2*oneFourth, 'top': 250}).html(data).show();
        // make the Close link in the hidden element work
        $('#closeLink').click(commentPopup.hidePhotoInfo);
        return false ;  // prevent default link action
    }
    ,hidePhotoInfo: function() {
        $('#photoComments').hide();
        return false;
    }
};
$(commentPopup.setup);