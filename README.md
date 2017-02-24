[![Rap-Mic-Yo](images/header.png)
("Rap-Mic-Yo")

# RAP-MIC-YO - A version of tic, tac, toe made using HTML5, CSS3, Javascript and the jQuery library.

## How I did it:

I can see tic-tac-toe shining on the horizon and I’m at a forked road of logic.

In the planning process I fleshed out two types of winning conditions for the game: one that pushed the index of each array 
into an empty array of each player and then compared that with index values of win conditions and one that simply compared classes and used if statements to confirm if the win conditions were met. In the end I just had to get the engine running, so I went with the if statements, but I feel like if I pursued the other win condition logic I would be far more satisfied.

I then used jQuery to access and edit parts of the DOM.

---

## What I learnt:

Plan, plan, plan, plan….plan. If I had planned more on the first day, I definitely would have had a much easier time figuring this out. Although it did mean that I got a much better grip on CSS.

Javascript is hard, jQuery makes it so much easier. yay. Manipulation through jQuery is just that much easier, accessing elements through .hasClass, .addClass, .css was one of the great joys I found in this project.

Fiddling around with the logic where I pushed the index of the cells into an empty array and then getting that to log was a particularly happy moment for me. this is the code bellow
 
~~~
//WIN CONDITION = GIVE EACH CELL A VALUE AND IF PLAYER MATCHES WINNING COMBINATION
var winConditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]]

//push clicked cells into here, once winning condition is met
var clickedCells = {
  'blue': [],
  'red': []
}

//RECORD SQUARE CLICKED UNTIL LINE WIN CONDITION HAS OCCURED
var indexOfCell = $('.board-wrapper .cell').index($cell);
var currentPlayerCells = clickedCells[currentPlayer]
currentPlayerCells.push(indexOfCell);
~~~

I am disappointed that I didn't have the time to then compare the player arrays to the win conditions but I'll work on this in the future.

Adding styling and audio to the win conditions gave me a certain satisfaction. Unfortunately I ran out of time and could only get the reset button to function as a reset the page button, I started to make one that targeted the board, but realised that many elements of my page changed (titles, music, message, each cell), so I settled with just reseting the page. 

Finally, the value of clean code and indenting. I thought that I was doing it before, but now I'm crazy with it. 

---

## To Do
* An outcome for draw scenarios
* Change the hover for each counter
* Implement the index.array win logic that I didn’t finish
* Make the reset button reset the board, message, header & music without reloading the entire page
  implement
* Win counter for both players

---

## Future Features:
* Choose from a group of counters
* Auto restart board, not the entire
* Responsive screen

[Rap battle here!](https://thrillymilly.github.io/mic-rap-yo/)
