document.addEventListener('DOMContentLoaded', function() {
    
 
const toggleBtn = document.querySelector('#toggle');
const body = document.body;

// Listen for a click event on the toggle button
toggleBtn.addEventListener('click', function() {
    console.log('Button clicked!');
    body.classList.toggle('night-mode');
  });
});