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
function renderDogBreeds(breedArray) {
  const breeds = Object.keys(breedArray)

  const ul = document.getElementById('dog-breeds')
  const li = document.createElement('li')

  for (const key of breeds) {
    console.log(breeds.key)
    li.innerText = breeds[key]
    ul.appendChild(li)
  }
}

document.addEventListener('DOMContentLoaded', function() {
  fetchDogPics()
  fetchDogBreeds()
})
