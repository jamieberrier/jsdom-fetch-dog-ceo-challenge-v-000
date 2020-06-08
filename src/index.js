console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener('DOMContentLoaded', function() {
  fetch(imgUrl)
  .then(response => response.json())
  .then(json => renderDogs(json))
})

function renderDogs(json) {
  for (const element of myArray) {
    console.log(element);
  }
}
