const renderBoard = function () {
    $('table').addClass('grid');
    $('td').addClass('box');
    $('.turn').hide();
  };

let playerX = "X";
let playerO = "O";
let startPlayer = "Starting player";
let player = "";
let nextMove;
let gameBoard = [];

$(document).ready(function() {
  renderBoard();

  $('#crosses').on('click', function(){
      startPlayer = playerX;
      player = playerX
      $('span').text(startPlayer);
      $('.turn').show();
      });

    $('#noughts').on('click', function(){
      startPlayer = playerO;
      player = playerO;
      $('span').text(startPlayer);
      $('.turn').show();
    });


if (startPlayer){
  $('.box').on('click', function(){
      $(this).text(player);
      gameBoard[this.id] = player;

      if(player == playerX) {
        nextMove = true;
      } else if (player == playerO) {
        nextMove = false;
      }

      if (nextMove){
        $('span').text(playerO);
        player = playerO;
      } else {
        $('span').text(playerX);
        player = playerX;
      }

      let checkWin = function(){
          let winnerMessage = "";
          let winner;

          for(i=0; i<gameBoard.length; i++){
            if(gameBoard[0]!=null && gameBoard[0]===gameBoard[1] && gameBoard[1]===gameBoard[2]){
                winner = gameBoard[0];
                winnerMessage += `The winner is: ${winner}`;
                $('.turn').addClass('ghost');
            } else if(gameBoard[3]!=null && gameBoard[3]===gameBoard[4] && gameBoard[4]===gameBoard[5]){
                winner = gameBoard[3];
                winnerMessage += `The winner is: ${winner}`;
                $('.turn').addClass('ghost');
            } else if(gameBoard[6]!=null && gameBoard[6]===gameBoard[7] && gameBoard[7]===gameBoard[8]){
                winner = gameBoard[6];
                winnerMessage += `The winner is: ${winner}`;
                $('.turn').addClass('ghost');
            } else if (gameBoard[0]!=null && gameBoard[0]===gameBoard[3] && gameBoard[3]===gameBoard[6]){
                winner = gameBoard[0];
                winnerMessage += `The winner is: ${winner}`;
                $('.turn').addClass('ghost');
            } else if (gameBoard[1]!=null && gameBoard[1]===gameBoard[4] && gameBoard[4]===gameBoard[7]){
                winner = gameBoard[1];
                winnerMessage += `The winner is: ${winner}`;
                $('.turn').addClass('ghost');
            } else if (gameBoard[2]!=null && gameBoard[2]===gameBoard[5] && gameBoard[5]===gameBoard[8]){
                winner = gameBoard[2];
                winnerMessage += `The winner is: ${winner}`;
                $('.turn').addClass('ghost');
            } else if (gameBoard[0]!=null && gameBoard[0]===gameBoard[4] && gameBoard[4]===gameBoard[8]){
                winner = gameBoard[0];
                winnerMessage += `The winner is: ${winner}`;
                $('.turn').addClass('ghost');
            } else if (gameBoard[6]!=null && gameBoard[6]===gameBoard[4] && gameBoard[4]===gameBoard[2]){
                winner = gameBoard[6];
                winnerMessage += `The winner is: ${winner}`;
                $('.turn').addClass('ghost');
            } else if (gameBoard[0]!=null && gameBoard[1]!=null && gameBoard[2]!=null && gameBoard[3]!=null && gameBoard[4]!=null && gameBoard[5]!=null && gameBoard[6]!=null && gameBoard[7]!=null && gameBoard[8]!=null){
                winnerMessage += `It's a draw!`;
                $('.turn').addClass('ghost');
            } else {
              winnerMessage += "";
            }
            return winnerMessage;
          }
        }

      var score = checkWin();


        $('.score').show();
        $('.score').text(score);
    });
  }

  $('.restart').on('click', function(){
    $('td').text('');
    $('span').html('');
    $('.score').hide();
    $('.turn').removeClass('ghost');
    player = "";
    gameBoard = [];


    });

});
