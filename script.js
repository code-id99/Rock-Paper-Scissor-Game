 // Initialize score from localStorage or default to 0
 let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

 // Display the current score when the page is loaded
 updateScoreDisplay();

 // This is the playgame function which takes the player move as an argument.
 function playgame(playerMove) {
   const computerMove = pickComputerMove();
   const result = getResult(playerMove, computerMove);

   // Update score based on the result
   if (result === 'You Win') {
     score.wins += 1;
   } else if (result === 'You lose') {
     score.losses += 1;
   } else if (result === 'Tie') {
     score.ties += 1;
   }

   // Update localStorage and display the result
   localStorage.setItem('score', JSON.stringify(score));
   updateScoreDisplay(playerMove, computerMove, result);
 }

 // Function to pick the computer's move randomly
 function pickComputerMove() {
   const randomNumber = Math.random();  
   if (randomNumber < 1 / 3) return 'Rock';
   if (randomNumber < 2 / 3) return 'Paper';
   return 'Scissors';
 }

 // Function to determine the result of the game
 function getResult(playerMove, computerMove) {
   if (playerMove === computerMove) return 'Tie';
   if (
     (playerMove === 'Rock' && computerMove === 'Scissors') ||
     (playerMove === 'Paper' && computerMove === 'Rock') ||
     (playerMove === 'Scissors' && computerMove === 'Paper')
   ) {
     return 'You Win';
   }
   return 'You lose';
 }

 // Function to update the score display on the page
 function updateScoreDisplay(playerMove = '', computerMove = '', result = '') {
  document.querySelector('.js-points').innerHTML = 
  `
    ${playerMove && computerMove ? `
      You picked 
      <img src="gallery/${playerMove}.png" width="100" height="80"/>

       
      <img src="gallery/${computerMove}.png" width="110" height="80"/> Computer picked
      <br><br>
      Final Results: ${result}.<br><br>
  `: ''
    }

    Wins: ${score.wins}, 
    Losses: ${score.losses}, 
    Ties: ${score.ties}
  `;
}


 // Function to reset the score And
 // Update the score display to reflect the reset score
 function resetScore() {
   score = { wins: 0, losses: 0, ties: 0 };
   localStorage.setItem('score', JSON.stringify(score));
   updateScoreDisplay(); 
   
 }