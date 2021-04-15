const slide = document.querySelector('.hike');

// scroll triger #1

// window.addEventListener('scroll', scrollReveal);

// function scrollReveal() {
//   const hikePos = hikeExp.getBoundingClientRect().top;
//   const windowHeight = window.innerHeight / 1.8;
//   if (hikePos < windowHeight) {
//     hikeExp.style.color = 'red';
//   }
// }

// scroll triger #2

let options = {
  threshold: 0.5,
};

let observer = new IntersectionObserver(slideAnim, options);

function slideAnim(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      slide.style.background = 'white';
    }
  });
}

observer.observe(slide);
