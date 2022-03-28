const name = document.querySelector('.header .name');
const subtitle = document.querySelector('.header .subtitle');
const scrollDown = document.querySelector('.header .scroll-down');
const playVideo = document.getElementById('play-video');
const modal = document.getElementById("myModal");
const closeModal = document.querySelector('#myModal .close');
const documentaryVideo = document.querySelector('#myModal #documentary')
anime({
  targets: name,
  fontSize: 120,
  easing: 'linear',
  duration: 500
});

anime({
  targets: subtitle,
  translateY: [130, 0], // from 100 to 250
  opacity: [0, 1],
  easing: 'linear',
  duration: 500,
})

anime({
  targets: scrollDown,
  translateY: 15,
  direction: 'alternate',
  loop: true,
  easing: 'spring(1, 80, 10, 0)'
})

function lifeImagesAnim() {
  anime({
    targets: '.life-images > .image-card-wrapper path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 4500,
  });

  anime({
    targets: '.image-card',
    opacity: [0, 1],
    delay: anime.stagger(820), // increase delay by 100ms for each elements.
    rotate: anime.stagger([-15, 15])
  });
}

const page = new Pageable("#fullpage", {
  animation: 400,
  delay: 200,
  events: {
    wheel: true,
    mouse: false,
  },
  onInit: function(data) {
    lifeImagesAnim();
  },
  onStart: function (data) {
    if(data === 'life-images') {
      lifeImagesAnim()
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
