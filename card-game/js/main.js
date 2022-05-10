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
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      // show the cards' images
      document.querySelector('#player1').src = data.cards[0].image
      document.querySelector('#player2').src = data.cards[1].image

      // get the value of the cards
      let player1Val = Number(data.cards[0].value)
      let player2Val = Number(data.cards[1].value)

      // if the values are a number, change their data type
      player1Val = convertToNum(player1Val) 
      player2Val = convertToNum(player2Val) 
      

      // get the h3 from the DOM
      let res = document.querySelector('h3')

      if (player1Val > player2Val) 
      {
        res.innerText = 'Player 1 Wins'
      } 
      else if(player2Val > player1Val) 
      {
        res.innerText = 'Player 2 Wins'
      } 
      else 
      {
        res.innerText = 'Time for War'
      }

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}


function convertToNum(val) {
  if (val === 'ACE') {
    return 14
  } else if (val === 'KING'){
    return 13
  } else if (val === 'QUEEN'){
    return 12
  } else if (val === 'JACK'){
    return 11
  }
  return val
}