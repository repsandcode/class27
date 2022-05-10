//Create a button that adds 1 to a botScore stored in localStorage 

document.querySelector('button').addEventListener('click', addOne)

function addOne() {
  const show = document.querySelector('h2')

  show.innerText = +(show) + 1
}

