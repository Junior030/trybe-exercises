// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
      const body = document.querySelector('body');
      const p = document.createElement('p');

      p.innerHTML = `Está é a piada: ${data.id} ${data.joke} ${data.status}`;
      body.appendChild(p);
      console.log(data);
      
    });
};

window.onload = () => fetchJoke();