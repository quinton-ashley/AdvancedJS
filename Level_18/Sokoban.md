# Sokoban

Sokoban is a popular Japanese puzzle game. The rules of this game are simple but solving some of the puzzles can be super difficult!

## Instructions for Part A

In the Sokoban folder you'll see an `img` folder and a `sounds` folder. The sounds and some images we will use to make this game are premium assets, I have bought them and/or got permission from the creators to use them in this IntroToJS course. If you would like to use them in your own games you must buy your own license to use them.

For starters, make your player character able to walk around the empty screen!

Then make a 10x10 area of floor tile sprites.

Add a box sprite on the floor of this area. Animate the character pushing the box up, down, left, and right.

Make walls around the floor and don't let the player or the box move past the walled area.

Display the number of moves the player has made somewhere on the top or bottom of the screen.

The following table is from the [Sokoban wiki page on level format standardization](http://sokobano.de/wiki/index.php?title=Level_format). It shows the characters used to represent the different elements of a Sokoban level.

| Level element           |  Character  |
|-------------------------|-------------|
| Wall                    |  #          |
| Player                  |  @          |
| Player on goal square   |  +          |
| Box                     |  $          |
| Box on goal square      |  *          |
| Goal square             |  .          |
| Floor                   | ' ' (space) |

Try displaying this simple level in your game:

```txt
#####
#@$.#
#####
```

## Instructions for Part B

The `puzzles.txt` file in the Sokoban starter code folder contains [puzzles by Lee Hayward](http://leehaywood.org/games/crossoban/p/sokevo.txt). Convert this text file into a JSON file (so that later we can more easily load individual puzzles in JavaScript). Edit the text file using find replace in VSCode using ctrl+f (cmd+f on macOS). Hint: If you make each puzzle a string, you'll need to add new line characters `\n` to the end of each puzzle line. You could also make the puzzles an array of strings, making each line a string in the array.

Load your `puzzles.json` file into your game and display the first puzzle in the list. You'll need to make a function that can dynamically create any Sokoban level from the puzzle strings.

Implement the rules of Sokoban and make a function that can check if the player has won the level. Let the player play all the puzzles.
