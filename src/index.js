import createHome from './pageLoad.js';
import contactPage from './contact.js';
import menuPage from './menu.js';
import navBar from './Navbar.js';

console.log('pooo');
const content = document.querySelector('#content');
const navigationBar = document.querySelectorAll('.navbarButton');

content.appendChild(navBar());
content.appendChild(menuPage());


for (let i = 0; i < navigationBar.length; i++) {
  navigationBar[i].addEventListener("click", function() {
        alert("Button Clicked");
  });
}

