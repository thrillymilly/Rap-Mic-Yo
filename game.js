// //WIN CONDITION = GIVE EACH CELL A VALUE AND IF PLAYER MATCHES WINNING COMBINATION
// var winConditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]]
//
// //push clicked cells into here, once winning condition is met
// var clickedCells = {
//   'blue': [],
//   'red': []
// }
//
// //RECORD SQUARE CLICKED UNTIL LINE WIN CONDITION HAS OCCURED
// var indexOfCell = $('.board-wrapper .cell').index($cell);
// var currentPlayerCells = clickedCells[currentPlayer]
// currentPlayerCells.push(indexOfCell);


var currentPlayer = 'blue';

$('.cell').on('click', function(event) {
  var $cell = $(event.target);

  //for readme add HAS CLASS, this was used to make sure that nothing else could
  //Player class to be added to the selected cell.
    if (!$cell.hasClass('player-blue') && !$cell.hasClass('player-red')) {
      $cell.addClass('player-' + currentPlayer);

//SWAP PLAYER
    if (currentPlayer === 'blue') {
        $
        currentPlayer = 'red';
      }  else {
      currentPlayer = 'blue';

    }

  }

//WHEN PLAYER WINS MANIPULATES CLASSES, PLAYS AUDIO

    if (checkIfPlayerWon('player-blue')) {
      $('.reg-head').removeClass('reg-head').addClass('blue-head');
      $('.message').text('Grab your glock when you see Tupac!');
      $('.cell').removeClass('player-red').addClass('player-blue');
      $('*').css('background-color', '#ADD8E6').css('transition', 'background-color 3s ease');
      var audio = new Audio('audio/tupac-audio.mp3');
      audio.play();
  } else if (checkIfPlayerWon('player-red')) {
      $('.reg-head').removeClass('reg-head').addClass('red-head');
      $('.message').text('Biggie Smalls the savage, doin your brain cells much damage!');
      $('.cell').removeClass('player-blue').addClass('player-red');
      $('*').css('background-color', '#FF7F7F').css('transition', 'background-color 3s ease');
      var audio = new Audio('audio/biggie-audio.mp3');
      audio.play();
  } else if (checkIfPlayerWon(false)) {
      $('.message').text('TRY AGIAIN');
  }


//This was the reset for the board, but because I have too many variables to change
// (titles, music, message, each cell) thought I would just reload the entire page.
    // $('.play-again').click(function() {
    //   $('.cell').removeClass('player-red');
    //   $('.cell').removeClass('player-blue');
    //   $('message').text('Where Brooklyn At!')
    // });

});

//CHECK IF PLAYER HAS WON WITH IF STATEMENTS (GET THE ENGINE WORKING)
//problem with this approach is that it doesn't take into account all the potential draw scenarios

var checkIfPlayerWon = function(playerColour) {
         if ($('.cell-0').hasClass(playerColour) && $('.cell-1').hasClass(playerColour) && $('.cell-2').hasClass(playerColour)) {
        return true;
    }
    else if ($('.cell-3').hasClass(playerColour) && $('.cell-4').hasClass(playerColour) && $('.cell-5').hasClass(playerColour)) {
        return true;
    }
    else if ($('.cell-6').hasClass(playerColour) && $('.cell-7').hasClass(playerColour) && $('.cell-8').hasClass(playerColour)) {
        return true;
    }
    else if ($('.cell-3').hasClass(playerColour) && $('.cell-3').hasClass(playerColour) && $('.cell-6').hasClass(playerColour)) {
        return true;
    }
    else if ($('.cell-1').hasClass(playerColour) && $('.cell-4').hasClass(playerColour) && $('.cell-7').hasClass(playerColour)) {
        return true;
    }
    else if ($('.cell-2').hasClass(playerColour) && $('.cell-5').hasClass(playerColour) && $('.cell-8').hasClass(playerColour)) {
        return true;
    }
    else if ($('.cell-0').hasClass(playerColour) && $('.cell-4').hasClass(playerColour) && $('.cell-8').hasClass(playerColour)) {
        return true;
    }
    else if ($('.cell-2').hasClass(playerColour) && $('.cell-4').hasClass(playerColour) && $('.cell-6').hasClass(playerColour)) {
        return true;
    }
    else {
        return false;
    }
};

$('.play-again').click(function() {
    location.reload();
});
