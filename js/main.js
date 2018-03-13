const renderBoard = function () {
    $('table').addClass('grid');
    $('td').addClass('box');
  };

let playerX = "X";
let playerO = "O";
let startPlayer = "Starting player"; // this doesn't work if initialised as an emty string
let player = "";
//let nextMove = "";

$(document).ready(function() {
  renderBoard();

  $('#crosses').on('click', function(){
      startPlayer = playerX;
      player = playerX
      $('span').text(startPlayer);
      //return startPlayer; // this is not needed as it's not returning to anything
    });

    $('#noughts').on('click', function(){
      startPlayer = playerO;
      player = playerO;
      $('span').text(startPlayer);
      //return startPlayer; // this is not needed as it's not returning to anything
    });

//console.log ( $('span').text(startPlayer).html() ); // Scope: This logs "Starting player" at this point


if (startPlayer){

$('.box').on('click', function(){

    $(this).text(player); // this is the point at which the startPlayer is set to X or O - ie. it doesn't happen until the td with box class is clicked.
    //console.log ( $('span').text(startPlayer).html() )

    // flip player turn here

/*
    if(startPlayer == playerX) {
      //playerX = true;
      //playerO = false;
    }
    else if (startPlayer == playerO) {
      //playerO = true;
      //playerX = false;
    }
    */

    if(player == playerX) {
      nextMove = true;
    }
    else if (player == playerO) {
      nextMove = false;
    }

    if (nextMove){
      $('span').text(playerO);

    } else {
      $('span').text(playerX);
    }

  });
}

//toggle between X & O in span to change players?

/*
  $('td').on('click', function(){
     $('#player').toggle();
     });
*/


  $('.restart').on('click', function(){
    $('td').text('');
    $('span').html('');
    //playerX = "";
    //player0 = "";
    player = "";
    });

});
