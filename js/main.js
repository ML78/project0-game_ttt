const renderBoard = function () {
    $('table').addClass('grid');
    $('td').addClass('box');
  };


$(document).ready(function() {

  renderBoard();


/*  Should make this the selector class instead of using id#crosses and id#noughts.
// Could make the player = this. find closest i? couldn't get it to work!

returns undefined
$('.selector').on('click', function(){
  let player1 = $(this).closest('i').find().slidedown;
  console.log(player1);
});
*/

  let playerX = "X";
  let playerO = "O";

    $('#crosses').on('click', function(){
      //alert('X clicked');
      //update turn
      let player1 = playerX;
      $('span').html(player1);
    });

    $('#noughts').on('click', function(){
      //alert('O clicked');
      //update turn
      let player1 = playerO;
      $('span').html(player1);
    });

// let player = document.getElementById('player').innerHTML;
// console.log(player);

// stop it from proceeding if the X or O is not selected first?

let player = playerX;

if (player){
$('#aa').on('click', function(){
    $(this).text(player);
});
$('#ab').on('click', function(){
    $(this).text(player);
});
$('#ac').on('click', function(){
    $(this).text(player);
});
$('#ba').on('click', function(){
    $(this).text(player);
});
$('#bb').on('click', function(){
    $(this).text(player);
});
$('#bc').on('click', function(){
    $(this).text(player);
});
$('#ca').on('click', function(){
    $(this).text(player);
});
$('#cb').on('click', function(){
    $(this).text(player);
});
$('#cc').on('click', function(){
    $(this).text(player);
});
}

/*
  $('td').on('click', function(){
     $('#cross').toggle();
     $('#nought').toggle();
   });
*/


  $('.restart').on('click', function(){
    $('td').text('');
    $('span').html('');
    });

});
