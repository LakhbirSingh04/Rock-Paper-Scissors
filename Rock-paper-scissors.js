let score = JSON.parse(localStorage.getItem('score')) || {
        win: 0,
        losses: 0,
        tie: 0
      };

      updateScoreElement(); // Call this initially to load stored score

      function playGame(playerMove) {
        let computerMove = pickComputerMove();
        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose';
          } else if (computerMove === 'paper') {
            result = 'You win';
          } else {
            result = 'Tie';
          }
        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win';
          } else if (computerMove === 'paper') {
            result = 'Tie';
          } else {
            result = 'You lose';
          }
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie';
          } else if (computerMove === 'paper') {
            result = 'You lose';
          } else {
            result = 'You win';
          }
        }

        if (result === 'You win') {
          score.win++;
        } else if (result === 'You lose') {
          score.losses++;
        } else if (result === 'Tie') {
          score.tie++;
        }

        localStorage.setItem('score', JSON.stringify(score));
        updateScoreElement();

        document.querySelector('.js-result').innerHTML = result;
		
        document.querySelector('.js-moves').innerHTML 
		= `You <img src="images/${playerMove}-emoji.png" class="move-icon">
		Computer <img src="images/${computerMove}-emoji.png" class="move-icon">`;
      }

      function updateScoreElement() {
        document.querySelector('.js-score').innerHTML = `Wins: ${score.win}, Losses: ${score.losses}, Ties: ${score.tie}`;
      }

      function pickComputerMove() {
        const randomNumber = Math.random();
        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }

        return computerMove;
      }