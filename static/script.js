window.onload = function () {
    const gameBoard = document.getElementById('game-board');
    const winMessage = document.createElement('div');
    winMessage.id = 'win-message';
    winMessage.innerText = 'You Win!';
    document.body.appendChild(winMessage); 
    const cards = [];

    fetch('/get-symbols')
        .then(response => response.json())
        .then(symbols => {
        // Create two cards for each symbol

            shuffle(cards);
            cards.forEach(card => {
                gameBoard.appendChild(card);
            });
        });

    function createCard(symbol) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.symbol = symbol.name;

        const img = document.createElement('img');
        img.src = symbol.image;
        img.classList.add('card-image'); 
        card.appendChild(img);

        card.addEventListener('click', flipCard);

        return card;
    }

    function shuffle(array) {
    // Shuffle the array using the Fisher-Yates algorithm
    }

    let flippedCards = [];
    function flipCard() {
        if (flippedCards.length < 2 && !this.classList.contains('flipped') && !this.classList.contains('matched')) {
            this.classList.add('flipped');
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                setTimeout(checkMatch, 1000);
            }
        }
    }

    function checkMatch() {
        const [card1, card2] = flippedCards;

        // Check if the two flipped cards have the same symbol

        flippedCards = [];
        checkWin();
    }

    function checkWin() {
    // Check if all cards are matched
    }
};

