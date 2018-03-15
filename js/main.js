//render game board by adding classes to the table & td HTML elements
const renderBoard = function () {
  $('table').addClass('grid');
  $('td').addClass('box');
  $('.turn').hide();
};

let playerX = "X";
let playerO = "O";
let player = "";
let nextMove;
let gameBoard = [];

$(document).ready(function() {
  renderBoard();

  //when the player clicks on the X token, the starting player is set to X
  $('#crosses').on('click', function(){
    player = playerX;
    $('span').text(player);
    $('.turn').show();
  });

  //when the player clicks on the O token, the starting player is set to O
  $('#noughts').on('click', function(){
    player = playerO;
    $('span').text(player);
    $('.turn').show();
  });

  //when the player clicks on a box in the game board, it displays the player's token in that box
  //the #id of the box that is clicked is set as the index in the gameBoard array to which the player's token is added
  $('.box').on('click', function(){
    $(this).text(player);
    gameBoard[this.id] = player;

    //the player is switched by assigning a boolean value to the nextMove variable
    if (player == playerX) {
      nextMove = true;
    } else if (player == playerO) {
      nextMove = false;
    }

    //displays which player takes the next turn
    if (nextMove){
      $('span').text(playerO);
      player = playerO;
    } else {
      $('span').text(playerX);
      player = playerX;
    }

    //checks for win or draw by comparing the combinations of #ids (by rows, columns & diagonals) against the values in the gameBoard array
    let checkWin = function(){
      let winnerMessage = "";
      let winner;

      for(let i=0; i<gameBoard.length; i++){
        if(gameBoard[0]!=null && gameBoard[0]===gameBoard[1] && gameBoard[1]===gameBoard[2]){
          winner = gameBoard[0];
          winnerMessage += `Winner: ${winner}`;
          $('.turn').addClass('ghost');
        } else if(gameBoard[3]!=null && gameBoard[3]===gameBoard[4] && gameBoard[4]===gameBoard[5]){
          winner = gameBoard[3];
          winnerMessage += `Winner: ${winner}`;
          $('.turn').addClass('ghost');
        } else if(gameBoard[6]!=null && gameBoard[6]===gameBoard[7] && gameBoard[7]===gameBoard[8]){
          winner = gameBoard[6];
          winnerMessage += `Winner: ${winner}`;
          $('.turn').addClass('ghost');
        } else if (gameBoard[0]!=null && gameBoard[0]===gameBoard[3] && gameBoard[3]===gameBoard[6]){
          winner = gameBoard[0];
          winnerMessage += `Winner: ${winner}`;
          $('.turn').addClass('ghost');
        } else if (gameBoard[1]!=null && gameBoard[1]===gameBoard[4] && gameBoard[4]===gameBoard[7]){
          winner = gameBoard[1];
          winnerMessage += `Winner: ${winner}`;
          $('.turn').addClass('ghost');
        } else if (gameBoard[2]!=null && gameBoard[2]===gameBoard[5] && gameBoard[5]===gameBoard[8]){
          winner = gameBoard[2];
          winnerMessage += `Winner: ${winner}`;
          $('.turn').addClass('ghost');
        } else if (gameBoard[0]!=null && gameBoard[0]===gameBoard[4] && gameBoard[4]===gameBoard[8]){
          winner = gameBoard[0];
          winnerMessage += `Winner: ${winner}`;
          $('.turn').addClass('ghost');
        } else if (gameBoard[6]!=null && gameBoard[6]===gameBoard[4] && gameBoard[4]===gameBoard[2]){
          winner = gameBoard[6];
          winnerMessage += `Winner: ${winner}`;
          $('.turn').addClass('ghost');
        } else if (gameBoard[0]!=null && gameBoard[1]!=null && gameBoard[2]!=null && gameBoard[3]!=null && gameBoard[4]!=null && gameBoard[5]!=null && gameBoard[6]!=null && gameBoard[7]!=null && gameBoard[8]!=null){
          winnerMessage += `Draw!`;
          $('.turn').addClass('ghost');
        } else {
          winnerMessage += "";
        }
        return winnerMessage;
      }
    };

    //displays a message if there is a win or draw
    let score = checkWin();
    $('.score').show();
    $('.score').text(score);
  });

  //when the restart button is clicked the game is reset by clearing values added during the game
  $('.restart').on('click', function(){
    $('td').text('');
    $('span').html('');
    $('.score').hide();
    $('.turn').removeClass('ghost');
    player = "";
    gameBoard = [];
  });

});
