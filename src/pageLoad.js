export default function createHome(){
  const home =  document.createElement('div')
  const header = document.createElement('h1')
  header.textContent = 'generic restaurant'
  
  let image = document.createElement('img')
  image.src = "https://static5.depositphotos.com/1003434/514/i/950/depositphotos_5147838-stock-photo-attractive-smiling-cook.jpg"
  image.alt = 'chef do be smiling doe'

  let paragraph = document.createElement('p')
  paragraph.textContent = 'hiiii guys welcome to my vlog';

  home.appendChild(header)
  home.appendChild(image)
  home.appendChild(paragraph)

  return home
}

