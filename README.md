# Tic Tac Toe Lab

**Objective:** Build a tic-tac-toe game in HTML, CSS, and JavaScript.


We've been learning about working with conditionals and loops, as well as writing functions. We've also learned about the structure of the DOM and how we can interact with it using CSS and JavaScript. We've looked at Bootstrap's CSS library and at jQuery, a JavaScript library for front end web development.

For this lab, we'll be making a tic-tac-toe game using the knowledge and skills you've learned so far.

## Baseline Requirements
* Users should be able to click on any empty box to make a move.   
* Every move should alternate between marking an `X` and `O` (the two players).  
* A user should not be able to claim a box that has already been claimed for `X` or `O`.
* Users should be able to click a "reset" button to clear all `X`'s and `O`'s from the board and restart the game.

## How to Get Started

**Play Tic-Tac-Toe**

Remind yourself how tic-tac-toe works by playing a few games with a classmate.

**Set up repository, files, and basic structure.**

1. Fork this repository to create a copy on your GitHub account.

1. Clone the tic-tac-toe repository from *your GitHub account* into your `wdi` folder to create a local copy on your computer.

2. Use `index.html` as your starting point on this project. There is already some starter code in `index.html`, `css/style.css`, and `js/app.js`.

1. Include Bootstrap's CSS and JS CDN links in your `index.html`'s `<head>`. Bootstrap's JS will require JQuery as a dependency, so make sure you include JQuery's CDN link ABOVE your Bootstrap links. Also link your custom CSS and JavaScript files using `<link>` and `<script>` tags.

3. Test that your CSS and JavaScript files are linked to your `index.html`. Add an alert or a `console.log` to `app.js`, and change the color of the body in `style.css`. Then open `index.html` in the browser. You should see part of an empty tic-tac-toe game board with your background color, and you should also see your alert or log message.

1. There's part of a board in `index.html` already. Use Bootstrap's grid system to create the rest of the empty tic-tac-toe game board. The empty board should look like this:

    <img src="board.png" width="300px" alt="empty tic tac toe board">

1. Add a reset button below the board.

1. In your `app.js` file, write some JQuery code so that clicking on a box will fill it with the text 'X'.

1. To track turns, set a variable called `currentTurn` to 'X' at the top of your `$(document).ready()` function (before your box click handler). Inside your box click handler, make sure you fill in the clicked box with the `currentTurn` value. Afterwards, it should change `currentTurn` from 'X' to 'O' (or 'O' to 'X' if it's already 'O').

1. Click around on your board to make sure turns alternate (i.e. should fill in a box with 'X', then 'O', then 'X', etc.)

1. You'll notice that clicking on an already-filled box will still fill it with the new value. You want to prevent this! Add some code in your box click handler that does NOT run the code if the currently clicked box is already filled with some text.

1. When you click the "Reset" button at the bottom of the page, it should reset the board to have only empty boxes. Write some JQuery code below your box click handler to [empty](https://api.jquery.com/empty/) the board's boxes on reset button click. It should also reset the `currentTurn` to its original value.


<details><summary>

Style `X`s and `O`s

</summary><p>Use jQuery to add a CSS class to the box when a player makes a move. (Not sure how? Google "jQuery add class", choose the jQuery API Documentation result, and find some examples!)</p></details>

<details><summary>Detect a Draw</summary><p>The game can end when someone wins or when the board fills up. How can you check whether the board is full or still has space for the players to move?</p></details>

<details><summary>Win!</summary>
    <details><summary>Hint: what is winning?</summary><p>Start by listing all the ways to win at tic-tac-toe. There are 8 winning combinations of boxes!<p></details>
    <details><summary>Big Hint: when to check for winner?</summary>Check for your winning combinations every time someone could win -- after every move!</p></details>  
    <details><summary>Hint: showing a message</summary>Try an `alert`. For an extra challenge, put a message directly onto the page using jQuery!</details>
</details>


## Tips:

* Don't hesitate to reference the JQuery API docs for help and code examples! <a href="https://api.jquery.com/category/manipulation/">DOM Manipulation</a> and <a href="https://api.jquery.com/category/css/">CSS</a> may be particularly useful.

* When a JQuery selector returns an "array" of elements, it's actually giving us a special JQuery collection. Use the  [`.eq`](https://api.jquery.com/eq/) method with regular array indices to get the jQuery elements out of the collection:

   ```js
   var paragraphs = $('p');
   var firstParagraph = paragraphs.eq(0); 
   // returns the jQuery element at index 0 (can call jQuery functions on `firstParagraph` bc it is a JQuery object)
   
   var vanillaVersion = paragraphs[0]; 
   // returns the JavaScript version of the element at indexo 0 (can NOT call jQuery functions on `vanillaVersion` bc it is NOT a JQuery object)
   ```
   
<!--
## Submission

* As you make code changes, frequently commit and push to GitHub.
* Once you've finished the assignment and pushed your work to GitHub, you will fill out the daily pulse check with a link on Monday.
* When we come back, you'll show off your tic-tac-toe game in a "science fair" style open presentation!
-->



## Further Challenge Ideas

* Display a message to indicate which player's turn is about to be played (`X` or `O`).    

* If a player wins, show a message with the mark of the winner.  Separate your code that finds the winner (if there is a winner) into its own function.

* If the board fills up before anyone wins, show a message declaring the game a draw.

* Display separate colors for `X`'s and `O`'s.

* Creatively style your tic-tac-toe game!  

* Research "event delegation," and attach your event listeners to the whole board instead of individual boxes.
