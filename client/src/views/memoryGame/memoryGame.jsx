import { useSelector } from "react-redux";

export default function MemoryGame () {

    const allCountries = useSelector(state=> state.allCountries);
    const countries = allCountries.map(country=>({
    imagen: country.imagen,
    id: country.nombre
    }))

    const doubleCountries = countries.concat(countries);
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
  
    // Función para crear y barajar las tarjetas
    function createBoard() {
      doubleCountries.sort(() => 0.5 - Math.random());
  
      for (let i = 0; i < doubleCountries.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        document.querySelector('.memory-game').appendChild(card);
      }
    }
  
    // Función para voltear la tarjeta
    function flipCard() {
      const cardId = this.getAttribute('data-id');
      cardsChosen.push(doubleCountries[cardId]);
      cardsChosenId.push(cardId);
      this.innerHTML = doubleCountries[cardId];
  
      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
      }
    }
  
    // Función para verificar si hay coincidencia
    function checkForMatch() {
      const cards = document.querySelectorAll('.card');
      const [optionOneId, optionTwoId] = cardsChosenId;
  
      if (cardsChosen[0] === cardsChosen[1]) {
        alert('¡Encontraste una pareja!');
        cards[optionOneId].style.visibility = 'hidden';
        cards[optionTwoId].style.visibility = 'hidden';
        cardsWon.push(cardsChosen);
      } else {
        cards[optionOneId].innerHTML = '';
        cards[optionTwoId].innerHTML = '';
      }
  
      cardsChosen = [];
      cardsChosenId = [];
  
      if (cardsWon.length === doubleCountries.length / 2) {
        alert('¡Felicidades! Has encontrado todas las parejas.');
      }
    }
  
    createBoard();
  }
  
  