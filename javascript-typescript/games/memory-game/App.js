document.addEventListener("DOMContentLoaded", () => {
  // card options
  const cardArray = [
    {
      name: "blank",
      img: "img/blank.png",
    },
    {
      name: "cheeseburger",
      img: "img/cheeseburger.png",
    },
    {
      name: "fries",
      img: "img/fries.png",
    },
    {
      name: "hotdog",
      img: "img/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "img/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "img/milkshake.png",
    },
    {
      name: "pizza",
      img: "img/pizza.png",
    },
    {
      name: "white",
      img: "img/white.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  var cardChoosen = [];
  var cardChoosenId = [];
  var cardWon = [];
  const resultDisplay = document.querySelector("#result");

  // create board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "img/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardChoosenId[0];
    const optionTwoId = cardChoosenId[1];
    if (optionOneId === optionTwoId) {
      alert("You Found a Match");
      cards[optionOneId].setAttribute("src", "img/white.png");
      cards[optionTwoId].setAttribute("src", "img/white.png");
      cardWon.push(cardChoosen);
    } else {
      cards[optionOneId].setAttribute("src", "img/blank.png");
      cards[optionTwoId].setAttribute("src", "img/blank.png");
      alert("Try Again");
    }
    cardChoosen = [];
    cardChoosenId = [];
    resultDisplay.textContent = cardWon.length;
    if (cardWon.length === cardArray / 2) {
      resultDisplay.textContent = "Congratulations! You Found Them All";
    }
  }

  // flip your card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardChoosen.push(cardArray[cardId].name);
    cardChoosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardChoosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
