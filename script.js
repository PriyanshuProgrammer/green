const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: 'coverflow', // Set the effect to 'coverflow'
    speed: 2000,
    coverflowEffect: {
        depth: 100,               // Depth offset in px (slides translate in Z axis)
        modifier: 1,              // Effect multiplier
        rotate: 40,               // Slide rotate in degrees
        scale: 1,                 // Slide scale effect
        slideShadows: false,       // Enables slide shadows
        stretch: 0,               // Stretch space between slides (in px)
    },

    autoplay:{
        delay:2000,
        disableoninteraction:false,
    },

    direction: 'horizontal', // 'vertical' for vertical slides
    loop: true, // Loop mode

    // If you want to enable pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // If you want to enable navigation buttons
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});

document.querySelectorAll(".yellowbox").forEach((box) => {
    box.addEventListener("mouseover", function () {
        gsap.to(".blackbox", {
            top: "30vh",
            left: "35vw",
            duration: 0.1,
            ease: "none"
        })
    });
})


document.querySelectorAll(".yellowbox").forEach((box) => {
    box.addEventListener("mouseleave", function () {
        gsap.to(".blackbox", {
            top: "33vh",
            left: "38vw",
            duration: 0.1,
            ease: "none"
        })
    });
})


