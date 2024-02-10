# Contain

Contain is a 1-4 player co-op variant of Pong, with the goal being to keep multiple balls within an area surrounded by paddles. Contain at least two balls or it's game over!

Start thinking of an idea for your own game or interactive art program which I will help you create in Level 19!

## Instructions for Part A

Copy and paste your code from Pong into the empty `contain.js` file.

Remove the walls and add paddles to the top and bottom of the screen.

You can move all paddles using the mouse position coordinates (`mouse.x` and `mouse.y`) or with keyboard controls (more challenging).

Make multiple balls on the screen at once! Make an array called `balls`. The goal of this game is for players to contain at least two of the balls.

Since we don't want all the balls to be served at once, make a new function called `serve`. This function should serve the balls one by one with a delay. Before serving the first ball make a countdown ("3", "2", "1") using `txt()`.

Make a `for` loop in the p5.js `draw` function to loop through all of the balls and check for bounces with the paddles.

Use the `collides` function with a callback to play a sound when the ball bounces off a paddle.

## Instructions for Part B

Make a new boolean property `isActive` on the ball object, a boolean to store whether the ball is actively on the screen or not. By default set this property to false. Set `isActive` to true when the ball is served.

In the for loop for the balls in the p5.js `draw` function, skip the iteration of the loop using `continue` if the ball is inactive. The program doesn't need to check for collisions between the paddles and the balls that are offscreen.

Make the total speed of each ball increase each time they bounce off a paddle.

Use `txt()` to display the player's score, it can be based on the number of bounces they've gotten on their paddles and/or the amount of time they contained at least two balls.
