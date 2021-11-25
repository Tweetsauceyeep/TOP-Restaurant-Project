// Create Nav bar in index.js file so that it remains in all pages
function navBar(){
  const navbar = document.createElement('nav')
  navbar.id = 'navbar';

  navbar.appendChild(navButton('Home'))
  navbar.appendChild(navButton('Contact'))  
  navbar.appendChild(navButton('Menu'))
  return navbar;
}

function navButton(idName){
  const button = document.createElement('button')
  button.id = idName.toLowerCase(); // id is lowercase
  button.classList.add('navbarButton')
  button.textContent = idName;
  return button;
}

export default navBar
