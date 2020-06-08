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
    .then(json => {
      // the return value is an Array containing all of the keys at the top level of the Object
      const breeds = Object.keys(json.message)
      renderDogBreeds(breeds)
      addBreedSelectListener()
    })
}

// add the breeds to the page in an <ul> (take a look at the included index.html)
function renderDogBreeds(breeds) {
  const ul = document.getElementById('dog-breeds')
  //removeChildren(ul)

  for (breed of breeds) {
    const li = document.createElement('li')

    li.innerText = breed
    ul.appendChild(li)
    li.addEventListener('click', changeColor)
  }
}

// add JavaScript so that the font color of a particular <li> changes on click.
// This can be a color of your choosing.
// When the user clicks any of the dog breed list items, the color the text should change.
function changeColor(event) {
  event.target.style.color = 'DeepPink'
}

// Once we are able to load all of the dog breeds onto the page,
// add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.
function addBreedSelectListener() {
  const dropDown = document.getElementById('breed-dropdown')
  dropDown.addEventListener('change', updateBreedList)
}

// For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a.
function updateBreedList(event) {
  console.log(event.target.value)
  // update ul with breeds that start with event.target.value
}

document.addEventListener('DOMContentLoaded', function() {
  fetchDogPics()
  fetchDogBreeds()
})
