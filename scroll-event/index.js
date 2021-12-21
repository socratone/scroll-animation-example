const CIRCLE_RADIUS = 25;
const windowWidth = window.innerWidth;
const circles = document.querySelectorAll('.circle');
circles.forEach((circle, index) => {
  if (index % 2 === 0) {
    circle.style.transform = `translateX(${windowWidth / 2 + CIRCLE_RADIUS}px)`;
  } else {
    circle.style.transform = `translateX(-${
      windowWidth / 2 + CIRCLE_RADIUS
    }px)`;
  }
});

let scrollPosition = 0;
let index = 0;

document.addEventListener('scroll', function (e) {
  scrollPosition = window.scrollY;

  if (scrollPosition >= index * 200) {
    if (circles.length - 1 >= index) {
      circles[index].style.transform = 'translateX(0)';
      index++;
    }
  }
});
