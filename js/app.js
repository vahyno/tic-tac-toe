console.log('sanity check')// wait for the DOM to finish loading
$(document).ready(function() {
  console.log('document ready');
  // all code to manipulate the DOM
  // goes inside this function

  let currentTurn = 'X';

    $('.box').on('click', function(event){
      if ($(this).text() === ''){
        $(this).text(currentTurn);
        $(this).addClass(currentTurn);
        //checks for winner X
        if (isWinner(currentTurn)){
          setTimeout(function(){ alert(`${ currentTurn } WINS!!!!!!`); }, 100);
        //checks for winner O
        // }else if (isWinner('O')){
        //   setTimeout(function(){ alert(`O WINS!!!!!!`); }, 100);
        //checks for a DRAW

      } else {
          checkIfBoardIsFilled()
        }

        if (currentTurn === "X"){
          setTimeout(function(){currentTurn = "O"},200);
        }else {setTimeout(function(){currentTurn = "X"},200)}
      }
    });
    //game reset
    $('button').on('click', function(event){
      $('.box').empty();
      $('.box').removeClass('X');
      $('.box').removeClass('O');
      currentTurn = "X";
    })
});




function isWinner(exsOrOs){
  // winningCombos = [[0, 1, 2], [3, 4, 5], [0, 4, 8], [] /....]
  if (
    $('.box').eq(0).hasClass(exsOrOs) && $('.box').eq(1).hasClass(exsOrOs) && $('.box').eq(2).hasClass(exsOrOs) ||
    $('.box').eq(3).hasClass(exsOrOs) && $('.box').eq(4).hasClass(exsOrOs) && $('.box').eq(5).hasClass(exsOrOs) ||
    $('.box').eq(6).hasClass(exsOrOs) && $('.box').eq(7).hasClass(exsOrOs) && $('.box').eq(8).hasClass(exsOrOs) ||
    $('.box').eq(0).hasClass(exsOrOs) && $('.box').eq(3).hasClass(exsOrOs) && $('.box').eq(6).hasClass(exsOrOs) ||
    $('.box').eq(1).hasClass(exsOrOs) && $('.box').eq(4).hasClass(exsOrOs) && $('.box').eq(7).hasClass(exsOrOs) ||
    $('.box').eq(2).hasClass(exsOrOs) && $('.box').eq(5).hasClass(exsOrOs) && $('.box').eq(8).hasClass(exsOrOs) ||
    $('.box').eq(0).hasClass(exsOrOs) && $('.box').eq(4).hasClass(exsOrOs) && $('.box').eq(8).hasClass(exsOrOs) ||
    $('.box').eq(6).hasClass(exsOrOs) && $('.box').eq(4).hasClass(exsOrOs) && $('.box').eq(2).hasClass(exsOrOs) ){
    return true
  } else {
    return false
  }
}


function checkIfBoardIsFilled (){
  let filledBoxes = $('.box').filter(function(idx, eachBox){
    return $(eachBox).text() !== "";
  })
  if (filledBoxes.length === 9){
    setTimeout(function(){ alert(`DRAW !!!!!!`); }, 100);
  }
}
