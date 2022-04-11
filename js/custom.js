// Carousel JS

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplaytimeout:500,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        900:{
            items:4
        }
}
})