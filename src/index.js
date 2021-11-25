import createHome from './pageLoad.js' 
import contactPage from './contact.js'
import menuPage from './menu.js'
console.log('check if worky')

const content = document.querySelector('#content')
content.appendChild(menuPage())


