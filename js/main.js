const elPsotList = document.querySelector('.list')

function Render(array, node) {
  node.innerHTML = null

  array.forEach(element => {

    const newLi = document.createElement('li')
    const newImg = document.createElement('img')
    const newHeading = document.createElement('h1')
    const newTime = document.createElement('time')

    newImg.src = element.Poster
    newHeading.textContent = element.Title
    newTime.textContent = element.Year

    newLi.appendChild(newImg)
    newLi.appendChild(newHeading)
    newLi.appendChild(newTime)

    node.appendChild(newLi)

  });
}

(async function () {
  const response = await fetch('https://omdbapi.com/?i=tt3896198&apikey=91bdfb98&s=iron%20man')
  const data = await response.json()

  if(data.Response === 'True') {
    Render(data.Search, elPsotList);
  }
})()

