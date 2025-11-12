'use strict';

const form = document.querySelector('form');
const query = document.querySelector('input[name=q]');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${query.value}`
    );
    if (!response.ok) {
      throw new Error('XD');
    }

    console.log(await response.json());
  } catch (error) {
    console.log(error.message);
  }
});
