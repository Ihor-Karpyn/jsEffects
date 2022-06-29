'use strict';

function newSlider(slider, isAuto) {
  const btnPrev = slider.querySelector('.button--prev');
  const btnNext = slider.querySelector('.button--next');
  const list = slider.querySelector('.list');
  const dots = slider.querySelectorAll('.dot');
  const counter = slider.querySelector('.counter');

  const slideCount = list.childElementCount;

  let currentPosition = 0;

  function moveTo(targetPosition) {
    if (targetPosition < 0) {
      currentPosition = slideCount - 1;
    } else if (targetPosition > slideCount - 1) {
      currentPosition = 0;
    } else {
      currentPosition = targetPosition;
    }

    if (dots.length) {
      clearDotsColor(dots);
      dots[currentPosition].classList.add('active');
    }

    counter.textContent = currentPosition + 1;

    list.style.transform = `translateX(${-currentPosition * 100}%)`;
  }

  function clearDotsColor(dots) {
    for (const dot of dots) {
      dot.classList.remove('active');
    }
  }

  btnNext.addEventListener('click', () => {
    moveTo(currentPosition + 1);
  });

  btnPrev.addEventListener('click', () => {
    moveTo(currentPosition - 1);
  });

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => {
      moveTo(i);
    });
  }

  moveTo(0);

  if (isAuto) {
    setInterval(() => moveTo(currentPosition + 1), 2000);
  }
}

const slider1 = document.getElementById('slider1');
const slider2 = document.getElementById('slider2');

newSlider(slider1, true);
newSlider(slider2, true);
