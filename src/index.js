import createHome from './pageLoad.js';
import contactPage from './contact.js';
import menuPage from './menu.js';
import navBar from './Navbar.js';

const content = document.querySelector('#content');
const navigationBar = document.getElementsByClassName('navbarButton');

content.appendChild(navBar());
content.appendChild(createHome());

// helper functions to clean up code
function childRemover() { // removes children from content div
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

// try to seperate dom  from logic components (apparently this good)
function childAppender(newPage){ //appends new page to current page
  content.appendChild(navBar())
  content.appendChild(newPage)
}

// logic for switching pages
function pageSwitcher(navId) {
  if (navId.id === 'home') {
    console.log('home was switched tomy penis');
    childRemover();
    childAppender(createHome())
  } else if (navId.id === 'menu') {
    console.log('menu was switched to');
    childRemover();
    childAppender(menuPage())
  } else if (navId.id === 'contact') {
    console.log('contact was switched to');
    childRemover();
    childAppender(contactPage())
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

