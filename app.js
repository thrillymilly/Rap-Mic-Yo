$('.newGameBtn').on('click', function(){
  $('h1').css('color', '#00000')
  player1ChoiceObject = player1ChoiceObjectReset; //reset the player choice objects to original state
  player2ChoiceObject = player2ChoiceObjectReset;
  $('#player1Choice').attr('src', ' ');
  $('#player2Choice').attr('src', ' ');
  for (var i = 1; i < 10; i++) {
    document.getElementById("block_" + i).src = "img/Blank_-_Spacer.png";
    document.getElementById("block_" + i).classList.remove("blinking");
    document.getElementById("block_" + i).classList.add("chart");

  }

  //---MODAL WINDOW----//
  var modal = document.getElementById('myModal');
  var btn = document.getElementById("newGameBtn");

  var span = $(".close")[0];

  modal.style.display = "block";

  span.onclick = function() {
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

});

//----GAME VARIABLES----//

var player1ChoiceObject = {
  rapperChosen: '',
  turn1: '',
  turn3: '',
  turn5: '',
  turn4: '',
  turn7: ''
}

var player1ChoiceObjectReset = {
  rapperChosen: '',
  turn1: '',
  turn3: '',
  turn5: '',
  turn4: '',
  turn7: ''
}

var player2ChoiceObject = {
  rapperChosen: '',
  turn2: '',
  turn4: '',
  turn3: '',
  turn6: '',
  turn8: ''
}

var player2ChoiceObjectReset = {
  rapperChosen: '',
  turn1: '',
  turn3: '',
  turn5: '',
  turn4: '',
  turn7: ''
}

var winningObj = {
  win1: ['block_1', 'block_2', 'block_3'],
  win2: ['block_4', 'block_5', 'block_6'],
  win3: ['block_7', 'block_8', 'block_9'],
  win4: ['block_1', 'block_4', 'block_7'],
  win5: ['block_2', 'block_5', 'block_8'],
  win6: ['block_3', 'block_6', 'block_9'],
  win7: ['block_1', 'block_5', 'block_9'],
  win8: ['block_7', 'block_5', 'block_3'],
}

$('.player1').on('click', 'img', function() {
  $('#player1Choice').attr('src', $(this).attr('src'));
  player1ChoiceObject.rapperChosen = event.target.id;

});

$('.player2').on('click', 'img', function() {
  $('#player2Choice').attr('src', $(this).attr('src'));
  player2ChoiceObject.rapperChosen = event.target.id;
});

var count = 1;

//----Board Game Logic----//

$('.chart').on('click','img', function(){
  if (count % 2) {

    var blockNumber= $(this).attr('id').split('_')[1]; //take the id from
    document.getElementById("block_" + blockNumber).src = (document.getElementById('player1Choice').src); //when a player chooses a square place counter
    var index = 'turn' + count; //go into the player choice object and add the count number to the turn key
    player1ChoiceObject[index]= event.target.id; //push the id of the selected block to the player choice object
    count +=1; //add to the turn counter

    var player1Bets = Object.values(player1ChoiceObject);
    var winValues = Object.values(winningObj);
    for (var i = 0; i < winValues.length; i++) {
      if (player1Bets.indexOf(winValues[i][0]) > 0 &&
          player1Bets.indexOf(winValues[i][1]) > 0 &&
          player1Bets.indexOf(winValues[i][2]) > 0) { //when the index of all player1ChoiceObject matches anything in winningObj return the function of the winning player's counter
            if (player1Bets[0] === 'kanye') {
              kanyeWinner();
            }
            else if (player1Bets[0] === 'tupac') {
              tupacWinner();
            }
            else if (player1Bets[0] === 'biggie') {
              biggieWinner();
            }
      }
    }
  }
  else{
      var blockNumber = $(this).attr('id').split('_')[1];
      document.getElementById("block_" + blockNumber).src = (document.getElementById('player2Choice').src);
      var index = 'turn'+ count;
      player2ChoiceObject[index]= event.target.id;
      count +=1;

      var player2Bets = Object.values(player2ChoiceObject);
      var winValues = Object.values(winningObj);

      for (var i = 0; i < winValues.length; i++) {
        if (player2Bets.indexOf(winValues[i][0]) > 0 &&
            player2Bets.indexOf(winValues[i][1]) > 0 &&
            player2Bets.indexOf(winValues[i][2]) > 0) {
              if (player2Bets[0] === 'drake') {
                drakeWinner();
              }
              else if (player2Bets[0] === 'snoop') {
                snoopWinner();
              }
              else if (player2Bets[0] === 'wayne') {
                wayneWinner();
              }
        }
      }
  }
})

//----WIN FUNCTIONS---//

var tupacWinner = function(){
  $(".cell-image").removeClass("cell-image").addClass("blinking");
  $('h1').css('color', '#0000ff');
  $('*').css('background-color', '#ADD8E6').css('transition', 'background-color 3s ease');
  var audio = new Audio('audio/tupac-audio.mp3');
  audio.play();
}

var biggieWinner = function(){
  $(".cell-image").removeClass("cell-image").addClass("blinking");
  $('h1').css('color', '#ff0000');
  $('*').css('background-color', '#FF7F7F').css('transition', 'background-color 3s ease');
  var audio = new Audio('audio/biggie-audio.mp3');
  audio.play();
}

var kanyeWinner = function(){
  $(".cell-image").removeClass("cell-image").addClass("blinking");
  $('h1').css('color', '#ffff00');
  $('*').css('background-color', '#ffff99').css('transition', 'background-color 3s ease');
  var audio = new Audio('audio/kanye-audio.mp3');
  audio.play();
}

var drakeWinner = function(){
  $(".cell-image").removeClass("cell-image").addClass("blinking");
  $('h1').css('color', '#ffb6c1');
  $('*').css('background-color', '#ff69b4').css('transition', 'background-color 3s ease');
  var audio = new Audio('audio/drake-audio.mp3');
  audio.play();
}

var wayneWinner = function(){
  $(".cell-image").removeClass("cell-image").addClass("blinking");
  $('h1').css('color', '#551A8B');
  $('*').css('background-color', '#cc99cc').css('transition', 'background-color 3s ease');
  var audio = new Audio('audio/wayne-audio.mp3');
  audio.play();
}

var snoopWinner = function(){
  $(".cell-image").removeClass("cell-image").addClass("blinking");
  $('h1').css('color', '#32CD32');
  $('*').css('background-color', '##329932').css('transition', 'background-color 3s ease');
  var audio = new Audio('audio/snoop-audio.mp3');
  audio.play();
}
