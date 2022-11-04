// menu collepse
function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu'
        ?
        (e.name = "close", list.classList.add('xlscreen:bg-white', 'xlscreen:top-[200px]', 'lgscreen:top-[110px]', 'xlscreen:ease-in', 'xlscreen:duration-500', 'xlscreen:border-t', 'xlscreen:whitespace-pre-line', 'xlscreen:text-gray-100'), list.classList.remove('xlscreen:opacity-0'))
        :
        (e.name = "menu", list.classList.add('xlscreen:opacity-0'), list.classList.remove('xlscreen:opecity-1'))
}

// animate
gsap.registerPlugin(ScrollTrigger)
const boxes = gsap.utils.toArray('.fadeIn');

boxes.forEach((fadeIn, i) => {
    const anim = gsap.fromTo(fadeIn, { autoAlpha: 0, y: 40 }, { duration: 1, autoAlpha: 1, y: 0 });
    ScrollTrigger.create({
        trigger: fadeIn,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
    });
});

// sliders
var swiper = new Swiper(".banner-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

// card slider
var swiper = new Swiper(".card-swiper", {
    slidesPerView: 3,
    spaceBetween: 94,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev"
    }
});

// wide slider

var swiper = new Swiper(".wideSwiper", {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      },
});
