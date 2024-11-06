document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("section img");
    const urls = [
        'pagina1.html',
        'pagina2.html',
        'pg3.html',
        'pagina4.html',
        'pagina5.html'
    ];

    images.forEach((img, index) => {
        img.addEventListener("click", function() {
            expandImage(img, urls[index]);
        });
    });
});

function expandImage(image, url) {
    image.style.transition = 'width 0.5s ease, height 0.5s ease';
    image.style.width = '500px';
    image.style.height = 'auto';

    setTimeout(function() {
        window.location.href = url;
    }, 800);
}
