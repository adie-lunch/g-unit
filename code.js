const img3link = document.getElementById('img3link');
    const img3image = document.getElementById('img3image');


    img3image.addEventListener('mouseenter', function() {
    img3link.classList.add('bose');
    });

    img3image.addEventListener('mouseleave', function() {
    img3link.classList.remove('bose');
    });
