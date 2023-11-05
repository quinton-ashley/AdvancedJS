# WheelOfFortune

In the American TV game show, "Wheel of Fortune", there's a mini game in which players compete to guess a phrase. Players are shown blank boxes, representing all the letters in a phrase. Letters are revealed to the player slowly, one by one, in their correct position in the phrase. The first player to press the buzzer and guess the phrase correctly wins!

## Instructions for Part A

Split the `phrasesList` into an array of `phrases`.

Select a random phrase, call it `phrase`, and split it into an array of words called `words`. HINT: Review your Hangman program.

```js
// example
phrase -> 'Community Chest'
words -> ['Community', 'Chest']
```

## Instructions for Part B

Make boxes using `textRect` around the blank spaces and letters just like in the Wheel of Fortune TV show. Use `for` loops to make all the boxes for the phrase! HINT: Review your TicTacToe program.

```txt
┌─┐┌─┐┌─┐┌─┐┌─┐
│W││h││e││e││ │
└─┘└─┘└─┘└─┘└─┘
```

## Instructions for Part C

Create an `addLetter` function that uses the `delay` function to delay the rate at which random letters in the phrase are revealed to the player. HINT: `delay` must be used in an async function. Do not reveal the same letters more than once, your `addLetter` function should only reveal a letter at a position in the phrase which has not been revealed previously.

If the player presses the buzzer, the game should stop adding letters and provide a prompt window so that the player can guess the phrase.

If the player guesses wrong or press cancel in the prompt, their score should be decreased by 1 point but the game should keep going and the player should have the opportunity to guess again.

If the player guesses the phrase correctly their score should be increased by the number of blank spaces left on the board.

If the player is too slow and all the letters in the phrase are shown, they should lose that round and their score should be decreased by 3 points.

When the game restarts and a new phrase is chosen, make sure not to use any phrase that the player has already guessed at.

## Instructions for Part D

Even though your `addLetter` function works, it could probably be better. When there is one letter remaining in the phrase, would your code require a lot of loops to randomly pick that letter? If so, note that this method of coding in which randomness must produce a desirable outcome is not efficient, and with larger sets of data could actually cause the program to seem as if it temporarily crashed as it loops repeatedly. The phrases in this game are too small for this to happen in practice. Nevertheless you should modify your `addLetter` function, there are a few ways to do this.

One way would be to pick from an array of available space coordinates. When a letter is added, remove that letter's coordinate from the `avail` array. This way the program will only be able to randomly choose between available coordinates.

phrase -> ['Community', 'Chest']
avail -> [[0,0], [0,1], [0,2], ... [1,2], [1,3], [1,4]]
