console.log('%c HI', 'color: firebrick')

function fetchDogPics() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

  fetch(imgUrl)
    .then(response => response.json())
    .then(json => {
      json.message.forEach(image => renderDogs(image))
    })
}

function renderDogPics(dogPic) {
  const main = document.getElementById('dog-image-container')

  const image = document.createElement('img')
  image.src = dogPic
  main.appendChild(image)
}

function fetchDogBreeds() {
  
}

document.addEventListener('DOMContentLoaded', function() {
  fetchDogPics()
  fetchDogBreeds()
})
