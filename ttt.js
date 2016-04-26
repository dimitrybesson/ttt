$(document).on('ready', function() {

  var turn = 0;
  var xList = [];
  var oList = [];

  $('td').on('click', function() {
    if (turn % 2 === 0) {
      $(this).html("X").addClass('x');
      xList.push(parseInt(this.className))
    } else {
      $(this).html("O").addClass('o');
      oList.push(parseInt(this.className))
    }

    gameOver();

    if (timeToCheck()) {
      if (turn % 2 == 0) {
        if (checkWinner(xList)) {
          $('h2').html("Player X wins!")
          $('td').off()
        }
      } else {
        if (checkWinner(oList)) {
          $('h2').html("Player O wins!")
          $('td').off()
        }
      }
    }
    turn++;
  })

  function timeToCheck() {
    if (turn > 3) {
      return true;
    }
  }

  function gameOver() {
    if (turn > 8) {
      $('h2').html("Game Over")
    }
  }

  function checkWinner(list) {
    console.log(list)
    var l = list.length
    for(i = 0; i < l; i++) {
      for(j = i + 1; j < l; j++) {
        for(k = j + 1; k < l; k++) {
          if ((list[i] + list[j] + list[k]) === 15) {
            return true;
          }
        }
      }
    }


  }


});
