console.log('%c HI', 'color: firebrick')

// on page load, fetch the images using the url, parse the response as JSON
function fetchDogPics() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

  fetch(imgUrl)
    .then(response => response.json())
    .then(json => {
      json.message.forEach(image => renderDogPics(image))
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
    .then(response => response.json())
    .then(json => renderDogBreeds(json.message))
}

// add the breeds to the page in an <ul> (take a look at the included index.html)
function renderDogBreeds(breedsObject) {
  // the return value is an Array containing all of the keys at the top level of the Object
  const breeds = Object.keys(breedsObject)
  const ul = document.getElementById('dog-breeds')

  for (breed of breeds) {
    const li = document.createElement('li')

    li.innerText = breed
    ul.appendChild(li)
    li.addEventListener('click', changeColor)
  }
}

function changeColor(event) {
  event.target.style.color = 'DeepPink'
}

document.addEventListener('DOMContentLoaded', function() {
  fetchDogPics()
  fetchDogBreeds()
})
