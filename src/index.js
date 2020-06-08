console.log('%c HI', 'color: firebrick')

function fetchDogs() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(response => response.json())
    .then(json => {
      json.messages.forEach(image => renderDogs(image))
    })
}

function renderDogs(dogPic) {
  const main = document.getElementById('dog-image-container')

  const image = document.createElement('img')
  image.src = dogPic
  main.appendChild(image)
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
