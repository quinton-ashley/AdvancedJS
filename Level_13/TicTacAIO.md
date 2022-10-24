# TicTacAIO

Artificial Intelligence Os!

## Instructions

For TicTacAIO you'll just be adding onto your code from 'TicTacToe'. Copy and paste the code from `ticTacToe.js` into your `ticTacAIO.js` file.

Make buttons for starting a two player game or one player game against your AI player. Re these buttons from the screen when the game starts using the `eraseRect`.

Start by making the most simple AI player possible. It should pick the first available space.

Next try making the Easy AI, that should pick between remaining available spaces on the Tic Tac Toe grid randomly. This AI plays the game at the level of a very young child that is just learning to play Tic Tac Toe.

The Hard AI should always pick a winning move if available, blocks opponent's winning moves if they have any, and otherwise it should fallback to the Easy level AI code (picking a random available space). The Hard AI plays the game at the level of an average adult.

The Medium AI should only make Hard level AI decisions 75% of the time and otherwise it should fallback to the Easy AI code. The Medium level AI plays the game at the level of an older child that sometimes can still make simple mistakes.

Make buttons for choosing between AI difficulty levels: Easy, Medium, or Hard. These buttons should appear after the user clicks the "One Player Start" button.

BUG FIX! Prevent human players from making moves while any alert windows are being displayed, that includes "game won", "draw", and "this space is taken" alerts.

## CHALLENGE SECTION

TicTacToe is a solved game, meaning that if both players always play their best moves the game will end in a forced draw.

Try implementing an Unbeatable AI player that uses defensive strategies. Remember, the best offense is a good defense! Don't focus on making your Unbeatable AI a winner, just ensure it can never lose.

There are a few three mark formations that skilled players use to force a win in TicTacToe: even if the opponent can block one instance of three in a row win they can't block the second. The Unbeatable AI must prevent their opponent from making these formations.

Try to win against your Hard AI player. Notice where the AI makes the mistake that let you win. Make rules for the Unbeatable AI to follow so it can avoid making the same mistakes.

Doing all the testing manually is slow, ineffiecent, and doesn't prove that the Unbeatable AI can't lose. Test out your Unbeatable AI with a 0 player mode in which the Unbeatable AI and Hard AI can play against each other. If the Hard AI is able to win a match against the Unbeatable AI, you'll know you need to add something to your Unbeatable AI code. When they finish playing a game you should be able to view the score and the results of every match in the console.

To truly test your unbeatable AI it should be able to win hundreds of games against your Hard AI without losing once.
