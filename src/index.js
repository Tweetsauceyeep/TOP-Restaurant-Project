import createHome from './pageLoad.js' 
import contactPage from './contact.js'

console.log('check if worky')

const content = document.querySelector('#content')



content.appendChild(contactPage())


