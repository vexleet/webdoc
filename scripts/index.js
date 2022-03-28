const name = document.querySelector('.header .name');
const subtitle = document.querySelector('.header .subtitle');
const scrollDown = document.querySelector('.header .scroll-down');

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