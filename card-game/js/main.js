//Example fetch using pokemonapi.co
let deckId = ''

if(!localStorage.setItem('deck id', deckId)){
  localStorage.setItem('deck id', deckId)
}

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    deckId = data['deck_id']
  })
  .catch(err => {
      console.log(`error ${err}`)
  });




document.querySelector('button').addEventListener('click', drawTwo)



function drawTwo(){
  const choice = document.querySelector('input').value

  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}