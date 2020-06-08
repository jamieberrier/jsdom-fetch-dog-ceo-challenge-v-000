console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener('DOMContentLoaded', function() {
  fetch(imgUrl)
  .then(response => response.json())
  .then(json => renderDogs(json))
})

function renderDogs(json) {
  const main = document.getElementById('dog-image-container')
  json.for (const element of json) {
    const image = document.createElement('image')
    image.innerHTML =
    main.appendChild(image)
  }
}
/*
function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
*/
