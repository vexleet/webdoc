import PhotoSwipeLightbox from './photoswipe-lightbox.esm.min.js';

const name = document.querySelector('.header .name');
const subtitle = document.querySelector('.header .subtitle');
const scrollDown = document.querySelector('.header .scroll-down');
const playVideo = document.querySelectorAll('.play-video');
const modal = document.getElementById("myModal");
const closeModal = document.querySelector('#myModal .close');
const documentaryVideo = document.querySelector('#myModal #documentary')

let aboutHasAnimated = false;
let lifeImagesHasAnimated = false;
let moreAboutHasAnimated = false;
let accommodationsHasAnimated = false;
let contactHasAnimated = false;
let travelHasAnimated = false;

const videoUrls = {
  welcome: `<iframe width="70%" height="550" src="https://www.youtube.com/embed/fSNU6uW0eI0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  accommodations: `<iframe width="70%" height="550" src="https://www.youtube.com/embed/AzYMZmSud_Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  'travel-aarhus': `<iframe width="70%" height="550" src="https://www.youtube.com/embed/iq38T4EAFok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
}

const anchors = document.querySelectorAll('#fullpage > *')
let index = 0;

(function () {
  window.scrollTo(0, 0);
  headerAnim();

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
      opacity: [1, 1],
      loop: true,
      easing: 'spring(1, 80, 10, 0)',
    })
  }

  function aboutVinceAnim() {
    const delayStagger = 800;
    anime({
      targets: '.about-vince h2',
      translateX: [-400, 0],
      opacity: [0, 1],
      delay: delayStagger,
      easing: 'easeOutCubic',
      duration: 1000,
    })

    anime({
      targets: '.about-vince .about-wrapper p',
      translateX: [-400, 0],
      opacity: [0, 1],
      delay: delayStagger + 200,
      easing: 'easeOutCubic',
      duration: 1000,
    })

    anime({
      targets: '.about-vince .play-video',
      translateY: [200, 0],
      opacity: [0, 1],
      delay: delayStagger + 500,
      easing: 'easeOutExpo',
      duration: 1000,
    })
  }

  function lifeImagesAnim() {
    anime({
      targets: '.life-images .life-images-about *',
      easing: 'easeInOutCubic',
      opacity: [0, 1],
      duration: 800,
      translateY: [100, 0],
      delay: anime.stagger(200),
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

    anime({
      targets: '.life-images .destiny',
      easing: 'easeInOutCubic',
      opacity: [0, 1],
      duration: 800,
      translateY: [100, 0],
      delay: 750 * 5 + 200,
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
      delay: delay * 2 + 200,
    })

    anime({
      targets: '.more-about p:first-of-type',
      easing: 'easeInOutCubic',
      opacity: [0, 1],
      duration: 800,
      translateY: [150, 0],
      delay: delay * 2,
    })
    anime({
      targets: '.more-about .anim',
      easing: 'easeInOutCubic',
      opacity: [0, 1],
      duration: 800,
      translateY: [150, 0],
      delay: delay * 2 + 300,
    })
  }

  function accommodationsAnim() {
    const delayStagger = 800;
    anime({
      targets: '.accommodations h2',
      translateX: [400, 0],
      opacity: [0, 1],
      delay: delayStagger,
      easing: 'easeOutCubic',
      duration: 1000,
    })

    anime({
      targets: '.accommodations .about-wrapper p, .accommodations .about-wrapper a',
      translateX: [400, 0],
      opacity: [0, 1],
      delay: delayStagger + 200,
      easing: 'easeOutCubic',
      duration: 1000,
    })

    anime({
      targets: '.accommodations .play-video',
      translateY: [-200, 0],
      opacity: [0, 1],
      delay: delayStagger + 500,
      easing: 'easeOutExpo',
      duration: 1000,
    })
  }

  function travelAarhusAnim() {
    const delayStagger = 800;
    anime({
      targets: '.travel-aarhus h2',
      translateX: [-400, 0],
      opacity: [0, 1],
      delay: delayStagger,
      easing: 'easeOutCubic',
      duration: 1000,
    })

    anime({
      targets: '.travel-aarhus .about-wrapper p',
      translateX: [-400, 0],
      opacity: [0, 1],
      delay: delayStagger + 200,
      easing: 'easeOutCubic',
      duration: 1000,
    })

    anime({
      targets: '.travel-aarhus .play-video',
      translateY: [200, 0],
      opacity: [0, 1],
      delay: delayStagger + 500,
      easing: 'easeOutExpo',
      duration: 1000,
    })
  }

  function contactAnim() {
    const delayStagger = 300;
    anime({
      targets: '.contact *:not(a, i)',
      translateY: [400, 0],
      opacity: [0, 1],
      delay: anime.stagger(delayStagger),
      easing: 'easeOutCubic',
      duration: 1000,
    });
    anime({
      targets: '.contact .social-media a',
      translateY: [400, 0],
      opacity: [0, 1],
      delay: delayStagger * 4 + delayStagger,
      easing: 'easeOutCubic',
      duration: 1000,
    })
  }

  playVideo.forEach((play) => {
    play.addEventListener('click', function (e) {
      const videoUrl = e.target.getAttribute('data-video-url');

      modal.insertAdjacentHTML('beforeend', videoUrls[videoUrl])

      modal.style.display = "flex";
    });

  })


  closeModal.addEventListener('click', function () {
    document.querySelector('.modal iframe').remove();
    modal.style.display = "none";
  })

  function callbackFunc(entries, observer)
  {
    entries.forEach(entry => {
      const id = entry.target.id;

      if(id === 'about' && !aboutHasAnimated && entry.isIntersecting) {
        aboutVinceAnim();
        aboutHasAnimated = true;
      }
      if(id === 'life-images' && !lifeImagesHasAnimated && entry.isIntersecting) {
        lifeImagesAnim();
        lifeImagesHasAnimated = true;
      }
      if(id === 'more-about' && !moreAboutHasAnimated && entry.isIntersecting) {
        moreAboutAnim();
        moreAboutHasAnimated = true;
      }
      if(id === 'accommodations' && !accommodationsHasAnimated && entry.isIntersecting) {
        accommodationsAnim();
        accommodationsHasAnimated = true;
      }
      if(id === 'contact' && !contactHasAnimated && entry.isIntersecting) {
        contactAnim();
        contactHasAnimated = true;
      }
      if(id === 'travel-aarhus' && !travelHasAnimated && entry.isIntersecting) {
        travelAarhusAnim();
        travelHasAnimated = true;
      }
    });
  }

  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.35
  };

  let observer = new IntersectionObserver(callbackFunc, options);

  anchors.forEach((el) => {
    observer.observe(el);
  })

  const lightbox = new PhotoSwipeLightbox({
    gallery: '.image-card-wrapper',
    children: '.image-card',
    pswpModule: () => import('./photoswipe.esm.min.js')
  });
  lightbox.init();
})();
