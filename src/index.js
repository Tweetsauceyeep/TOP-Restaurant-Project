import createHome from './pageLoad.js' 

console.log('check if worky')

const content = document.querySelector('#content')

content.appendChild(createHome())
