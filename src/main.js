'use strict';

const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');
const modal = document.getElementById('modal');

btnClose.addEventListener('click', () => {
  modal.classList.add('modal--hidden');
});

btnOpen.addEventListener('click', () => {
  modal.classList.remove('modal--hidden');
});
