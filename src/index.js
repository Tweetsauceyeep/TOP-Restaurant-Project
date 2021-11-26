import createHome from './pageLoad.js';
import contactPage from './contact.js';
import menuPage from './menu.js';
import navBar from './Navbar.js';

const content = document.querySelector('#content');
const navigationBar = document.getElementsByClassName('navbarButton');

content.appendChild(navBar());
content.appendChild(createHome());

function childRemover() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

function pageSwitcher(navId) {
  if (navId.id === 'home') {
    console.log('home was switched to');
    childRemover();
    content.appendChild(navBar());
    content.appendChild(createHome());
  } else if (navId.id === 'menu') {
    console.log('menu was switched to');
    childRemover();
    content.appendChild(navBar());
    content.appendChild(menuPage());
  } else if (navId.id === 'contact') {
    console.log('contact was switched to');
    childRemover();
    content.appendChild(navBar());
    content.appendChild(contactPage());
  }
}

function doStuff() {
  for (let i = 0; i < navigationBar.length; i++) {
    navigationBar.item(i).addEventListener('click', function() {
      console.log(navigationBar.item(i).id);
      pageSwitcher(navigationBar.item(i));
      doStuff() //RECURSION BABY
    });
  }
}

doStuff()
