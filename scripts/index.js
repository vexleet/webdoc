import PhotoSwipeLightbox from './photoswipe-lightbox.esm.min.js';

const name = document.querySelector('.header .name');
const subtitle = document.querySelector('.header .subtitle');
const scrollDown = document.querySelector('.header .scroll-down');
const playVideo = document.getElementById('play-video');
const modal = document.getElementById("myModal");
const closeModal = document.querySelector('#myModal .close');
const documentaryVideo = document.querySelector('#myModal #documentary')

let headerHasAnimated = false;
let aboutHasAnimated = false;
let lifeImagesHasAnimated = false;

(function () {
  function headerAnim() {
    anime({
      targets: '.name span:first-of-type',
      opacity: [0, 1],
      translateY: [-500, 0],
      easing: 'easeOutQuad',
      duration: 800,
      delay: 800,
    });

    anime({
      targets: '.name span:last-of-type',
      opacity: [0, 1],
      translateY: [500, 0],
      easing: 'easeOutQuad',
      duration: 800,
      delay: 800,
    });

    anime({
      targets: subtitle,
      translateX: [-500, 0],
      opacity: [0, 1],
      easing: 'easeOutQuad',
      duration: 600,
      delay: 1000,
    })

    anime({
      targets: scrollDown,
      translateY: 15,
      direction: 'alternate',
      loop: true,
      easing: 'spring(1, 80, 10, 0)',
    })
  }

  function aboutVinceAnim() {
    const delayStagger = 600;
    anime({
      targets: '.about-vince h2 span',
      translateX: [-400, 0],
      opacity: [0, 1],
      delay: anime.stagger(delayStagger),
      easing: 'easeOutCubic',
      duration: 1000,
    })

    anime({
      targets: '.about-vince .about-wrapper p',
      translateX: [-400, 0],
      opacity: [0, 1],
      delay: delayStagger * 2 + 200,
      easing: 'easeOutCubic',
      duration: 1000,
    })

    anime({
      targets: '.about-vince #play-video',
      translateY: [200, 0],
      opacity: [0, 1],
      delay: delayStagger * 2 + 500,
      easing: 'easeOutExpo',
      duration: 1000,
    })
  }


  function lifeImagesAnim() {
    anime({
      targets: '.life-images .life-images-about h2',
      easing: 'easeInOutCubic',
      opacity: [0, 1],
      duration: 800,
      translateY: [100, 0],
    })

    anime({
      targets: '.life-images > .image-card-wrapper .path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 4500,
    });

    anime({
      targets: '.image-card',
      opacity: [0, 1],
      translateY: [100, 0],
      delay: anime.stagger(750), // increase delay by 100ms for each elements.
      rotate: function () {
        return anime.random(-15, 15)
      }
    });
  }

  function moreAboutAnim() {
    const delay = 600;
    anime({
      targets: '.more-about h2',
      easing: 'easeInOutCubic',
      opacity: [0, 1],
      duration: 800,
      translateY: [200, 0],
      delay: delay,
    });

    anime({
      targets: '.more-about img',
      easing: 'easeInOutCubic',
      opacity: [0, 1],
      duration: 800,
      translateY: [200, 0],
      delay: delay * 2 + 200,
    })

    anime({
      targets: '.more-about p',
      easing: 'easeInOutCubic',
      opacity: [0, 1],
      duration: 800,
      translateY: [200, 0],
      delay: delay * 2,
    })
  }

  const page = new Pageable("#fullpage", {
    animation: 400,
    delay: 200,
    events: {
      wheel: true,
      mouse: false,
    },
    onInit: function(data) {
      if(data.index === 0) {
        headerAnim();
        headerHasAnimated = true;
      }
      if(data.index === 1) {
        aboutVinceAnim();
        aboutHasAnimated = true;
      }
      if(data.index === 2) {
        lifeImagesAnim();
        lifeImagesHasAnimated = true;
      }
      if(data.index === 3) {
        moreAboutAnim();
      }
    },
    onStart: function (data) {
      if(data === 'header' && !headerHasAnimated) {
        headerAnim();
        headerHasAnimated = true;
      }
      if(data === 'about' && !aboutHasAnimated) {
        aboutVinceAnim();
        aboutHasAnimated = true;
      }
      if(data === 'life-images' && !lifeImagesHasAnimated) {
        lifeImagesAnim()
        lifeImagesHasAnimated = true;
      }
      if(data === 'more-about') {
        moreAboutAnim();
      }
    }
  });


  playVideo.addEventListener('click', function () {
    modal.style.display = "block";
    documentaryVideo.play();
  });

  closeModal.addEventListener('click', function () {
    modal.style.display = "none";
    documentaryVideo.pause();
    documentaryVideo.currentTime = 0;
  })

  const lightbox = new PhotoSwipeLightbox({
    gallery: '.image-card-wrapper',
    children: '.image-card',
    pswpModule: () => import('./photoswipe.esm.min.js')
  });
  lightbox.init();
})();
