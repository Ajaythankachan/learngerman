$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: ["<img src='img/arrow-l.png'>", "<img src='img/arrow.png'>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})