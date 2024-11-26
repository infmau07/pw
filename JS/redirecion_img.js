document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("section img");
    const urls = [
        'menu_colores.html',
        'menu_letras.html',
        'Sobre_Willy.html',
        'menu_numeros.html',
        'menu_animales.html'
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
