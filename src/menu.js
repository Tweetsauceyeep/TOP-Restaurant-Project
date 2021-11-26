function menuPage(){
  const menu = document.createElement('div');
  menu.classList.add('page') 
  menu.appendChild(createParagraph('Chicken Adobo: $14'))
  menu.appendChild(createParagraph('Chicken Nilaga: $15'))
  menu.appendChild(createParagraph('Pork Adobo: $16'))
  menu.appendChild(createParagraph('Fresh Fruit: $21'))

  return menu
}

function createParagraph(text){
  const paragraph = document.createElement('p')
  paragraph.textContent = text

  return paragraph
}

export default menuPage
