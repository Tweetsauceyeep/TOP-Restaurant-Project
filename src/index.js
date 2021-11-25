import createHome from './pageLoad.js' 
import contactPage from './contact.js'
import menuPage from './menu.js'

console.log('check if worky')
const content = document.querySelector('#content')

// Create Nav bar in index.js file so that it remains in all pages
function navBar(){
  const navbar = document.createElement('nav')
   
  navbar.appendChild(navButton('Home'))
  navbar.appendChild(navButton('Contact'))  
  navbar.appendChild(navButton('Menu'))
  return navbar;
}

function navButton(idName){
  const button = document.createElement('button')
  button.id = idName.toLowerCase(); // id is lowercase
  button.textContent = idName;
  return button;
}


//ayy?
content.appendChild(navBar());
content.appendChild(menuPage());


