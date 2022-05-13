//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
const carousel = document.querySelector(".carousel");
document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
  const drink = document.querySelector('input').value
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)

      let index = 0;
      const len = data.drinks.length

      setInterval(function() {
        startCarousel();
      }, 3000);

      const startCarousel = () => {
        document.querySelector('h2').innerText = data.drinks[index].strDrink
        document.querySelector('img').src = data.drinks[index].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[index].strInstructions

        index++
        
        carousel.classList.remove("fade");
        void carousel.offsetWidth;
        carousel.classList.add("fade");
        if(index > len - 1) index = 0;
      }
    })

    .catch(err => {
        console.log(`error ${err}`)
    });
}