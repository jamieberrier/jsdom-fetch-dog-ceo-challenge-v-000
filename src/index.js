console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchDogs() {
  fetch(imgUrl)
  .then(response => response.json())
  .then(json => renderDogs(json))
}

function renderDogs(json) {
  const main = document.getElementById('dog-image-container')

  /*for (const element of json.values) {
    const image = document.createElement('img')
    image.src = element
    main.appendChild(image)
  }*/
}

document.addEventListener('DOMContentLoaded', function() {
  fetchDogs()
})
/*
function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
*/
