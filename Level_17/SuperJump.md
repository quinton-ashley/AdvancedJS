# SuperJump

Watch this video of Papi Jump one of the most popular games for iPhone when it was released back in 2008:
https://www.youtube.com/watch?v=O-EuA_g1wWY

## Instructions

Make your own version of the Papi Jump game! This game used the iPhone's accelerometer to move the player character via tilt controls. When porting this game to the PC you should probably use mouse controls instead. Also add this additional feature that wasn't in the original Papi Jump: if the player does a mouse click right when the ball bounces it should perform a super jump that gives it extra height! If the player's timing is perfect or near perfect they should get a slightly higher super jump. If the player clicks too early or too late they should get less height than a super jump. To make the game more difficult you could even make mistimed super jumps have less height than a normal bounce! Use different animations and sound effects to give the user feedback regarding their jump timing.

Try thinking about how to remake this game in p5play on your own. Use the iterative design approach!

HINTS:

If you need more help you can reference my step by step instructions below the dots.

.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.

## Step by Step Instructions

First start out by making a ball "jump" on a platform. Place a platform at the bottom of the screen and place a ball in the middle of the screen. Set the ball's x and y velocity to zero. Drop the ball by decreasing the ball's y velocity. This force of gravity should be acting on the ball on every frame. The ball should fall onto the platform. Make it bounce by inverting the y velocity.

Next set the ball's x velocity to be related to `mouseX`. This way the player should be able to steer the ball with their mouse. Limit the x velocity that the ball can travel at.

Create an array of platforms. Use a `for` loop to create new platforms to add to the array. There should always be a platform within jumping distance of the ball.

When the ball bounces on a platform, move all the platforms and the ball downwards. This makes it seem like a camera is moving up to follow the ball.

In Papi Jump, the ball is able to jump from one side of the screen to the other. For example, when the ball is crossing the edge of the screen on the right side, it can appear to cross onto the left side. Consider how this could be done, however don't implement this feature since your SuperJump game uses mouse cursor controls instead of phone gyroscope tilt controls.
