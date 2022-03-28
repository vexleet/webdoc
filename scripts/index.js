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

new Pageable("#fullpage", {
  animation: 400,
  delay: 200,
  events: {
    wheel: true,
    mouse: false,
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
