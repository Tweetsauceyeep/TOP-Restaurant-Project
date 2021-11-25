export default function contactPage() {
  const contact = document.createElement('div')
  
  const contactInfo = document.createElement('div')
  contactInfo.textContent = 'Contact us at 0502211692'

  contact.appendChild(contactInfo)
  return contact
}
