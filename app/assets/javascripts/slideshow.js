$(document).ready(function() {
    let title_element, imageId = 0, imageElements = [], slideshowInterval, photos, first_photo;

    $("img").filter("#slide").dblclick(

        function(){
            //console.log($(this));
            //console.log($(this).attr('data-delete'));
            $.ajax({type: 'DELETE',
                url: $(this).attr('data-delete'),
                timeout: 5000,
                success: location.reload,
                error: function(xhrObj, textStatus, exception) { console.log(xhrObj); }
                // 'success' and 'error' functions will be passed 3 args
            });
        });

    $("img").filter("#slide").hover( function() {
        first_photo = $(this);
        photos = $(this).filter("#slide").next().find("img");
        title_element = $(this).filter("#slide").prev()[0];
        photos.each( function (index) {
            const image = new Image();
            image.src = $(this).attr("src");
            image.title = $(this).attr("alt");
            image.href = $(this).attr("href");
            imageElements[index] = image;
            $(image).attr("data-delete", $(this).attr("data-delete"))
        });
        slideshowInterval = setInterval(function () {
            first_photo.fadeOut(1000, function() {
                imageId = (imageId + 1) % imageElements.length;
                $(this).attr("href", imageElements[imageId].href);
                $(this).attr("src", imageElements[imageId].src).fadeIn(1000);
                title_element.innerHTML = imageElements[imageId].title;
                $(this).attr("data-delete", $(imageElements[imageId]).attr("data-delete"))
            });
        }, 3000);},
        function() {
            clearInterval(slideshowInterval);
            const first_photo = imageElements[0];
            $(this).attr("href",first_photo.href);
            $(this).attr("src", first_photo.src);
            $(this).attr("alt",first_photo.alt);
            title_element.innerHTML = first_photo.title;
            $(this).attr("data-delete", $(first_photo).attr("data-delete"))
        }
    ).filter("#slide").click( () => clearInterval(slideshowInterval));
});