# Wordle

Wordle is a combination of Mastermind and Hangman in which you must guess a word in six tries. Each guess must be a valid five-letter word. After each guess, the color of the tiles will change to show how close your guess was to the word.

https://www.nytimes.com/games/wordle/index.html

## Instructions for Part A

Split the list of common five letter words from the `words5.txt` file into the array of `commonWords`. Take a look at the file, it has one word per line. HINT: Review your CodeBreaker code for how to load files. Remember the String `split` function.

Split the list of all five letter words from the `dictionary5.txt` file into the array called `dictionary`. Note this will be a bit more challenging since the file has multiple words per line. HINT: Remember you can use the `push` function to add to arrays. Use the spread operator!

Pick a random word from `commonWords`, call it `wordle`. HINT: Review your Hangman program.

## Instructions for Part B

Each letter in each of the player's valid guesses will be displayed inside a box. The player only has 6 chances to guess the 5 letter word. All 30 empty boxes should be displayed in the beginning.

For now try displaying each word the user guesses in the boxes, without checking for if the word is valid yet or if the letters match the wordle. Make a game loop to let the player make guesses. HINT: Review your Hangman program.

When the player guesses a word, check if the word is five letters. If it is not five letters, alert the player.

Also check if the player's guess can be found in the dictionary, if not, alert the player.

Only show the player's guess on the board if it's valid. Do not count invalid guesses as one of the player's six guesses.

## Instructions for Part C

Show the player whether the letters in their guess are in the correct position in the word. Also show the player whether the letters in their guess are found in the word. Use `textRect` border styles and the `delay` function to achieve the dramatic reveal effect that the original game has.

At the bottom of the screen display the alphabet. When the user makes a guess, remove the letters from the guess that aren't found in the wordle from the alphabet.

Let the player start a new game with a new Wordle.

## Instructions for Part D

Remove words the player already got as wordles from the `commonWords` array so they can't get the same word twice.

## CHALLENGE SECTION

Keep track of the player's score, how many times they've gotten the wordle on guess 1, 2, 3, 4, 5, or 6. Display it when the user starts a new game.

Try implementing the actual rules of Wordle, which are more complex than the simplified rules you implemented earlier. Here are some examples:

    If the word is BEING and the player's guess is KNEEL, only the first E in kneel should be marked as appearing in the word, the second E should not be marked as appearing in the word. This indicates there is an E in the word but it is closer to the first E.

    If the word is BEING and the player's guess is SEVEN, the first E should be marked as appearing in the correct position in the word. The second E should not be marked. This shows that there is only one E and the user already found its position.
