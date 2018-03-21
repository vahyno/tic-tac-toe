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
        if (isWinner('X') === true){
          setTimeout(function(){ alert(`X WINS!!!!!!`); }, 100);
        }else if (isWinner('O') === true){
          setTimeout(function(){ alert(`O WINS!!!!!!`); }, 100);
        }
        if (currentTurn === "X"){
          currentTurn = "O";
        }else {currentTurn = "X"}
      }
    });
    //game reset
    $('button').on('click',function(event){
      $('.box').empty();
      $('.box').removeClass('X');
      $('.box').removeClass('O');
      currentTurn = "X";
    })
});




function isWinner(exsOrOs){
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
  }else {
    return false
  }
}
