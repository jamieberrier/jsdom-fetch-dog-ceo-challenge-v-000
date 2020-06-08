console.log('%c HI', 'color: firebrick')

function fetchDogPics() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

  fetch(imgUrl)
    .then(response => response.json())
    .then(json => {
      json.message.forEach(image => renderDogs(image))
    })
}

// add image elements to the DOM for each🤔 image in the array
function renderDogPics(dogPic) {
  const main = document.getElementById('dog-image-container')

  const image = document.createElement('img')
  image.src = dogPic
  main.appendChild(image)
}

// on page load, fetch all the dog breeds using the url
function fetchDogBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
}

document.addEventListener('DOMContentLoaded', function() {
  fetchDogPics()
  fetchDogBreeds()
})
