const renderBoard = function () {
    $('table').addClass('grid');
    $('td').addClass('box');
  };

$(document).ready(function() {
  renderBoard();

/*
//  Should make this the selector class instead of using id#crosses and id#noughts.
// Could make the player = this. find closest i? couldn't get it to work!
$('.selector').on('click', function(){
  let $startPlayer = $(this).closest('i').find().slidedown;
  console.log($startPlayer);
});
*/

  let playerX = "X";
  let playerO = "O";
  let startPlayer = "";
  let nextPlayer = "";

  $('#crosses').on('click', function(){
      startPlayer = playerX;
      $('span').text(startPlayer);
      return startPlayer;
    });

    $('#noughts').on('click', function(){
      startPlayer = playerO;
      $('span').text(startPlayer);
      return startPlayer;
    });

// stop it from proceeding if the X or O is not selected first?

  let player = "";

  // player = $('span').text();
  // console.log(player); //this isn't working !!!

  if (startPlayer === playerX) {
    player = playerX; // IT'S NOT PICKING THIS UP
  } else {
        console.log(startPlayer);
    player = playerO;
  }

//let player = playerX; //THIS WORKS BECAUSE IT'S HARD-CODED

if (player){
$('.box').on('click', function(){
    $(this).text(player);
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
    });

});
