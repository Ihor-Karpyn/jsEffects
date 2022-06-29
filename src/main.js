'use strict';

const btn = document.getElementById('btn');
const acordion = document.getElementById('acordion');

btn.addEventListener('click', () => {
  acordion.classList.toggle('wrapper--hidden');
})
