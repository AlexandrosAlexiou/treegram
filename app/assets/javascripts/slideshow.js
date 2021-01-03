$(document).ready(function() {
    let title_element, imageId = 0, imageElements = [], slideshowInterval, photos, first_photo;

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
        });
        slideshowInterval = setInterval(function () {
            first_photo.fadeOut(1000, function() {
                imageId = (imageId + 1) % imageElements.length;
                $(this).attr("href", imageElements[imageId].href);
                $(this).attr("src", imageElements[imageId].src).fadeIn(1000);
                title_element.innerHTML = imageElements[imageId].title;
            });
        }, 3000);},
        function() {
            clearInterval(slideshowInterval);
            const first_photo = imageElements[0];
            $(this).attr("href",first_photo.href);
            $(this).attr("src", first_photo.src);
            $(this).attr("alt",first_photo.alt);
            title_element.innerHTML = first_photo.title;
        }
    ).filter("#slide").click( () => clearInterval(slideshowInterval));
});