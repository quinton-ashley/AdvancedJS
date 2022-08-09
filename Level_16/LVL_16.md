# Level 16 A

## Reading Documentation

When you start making your own programming projects there won't be a lesson plan that you can follow. An important part of learning to program is learning how to find the information you want in reference documentation on your own.

Here's a link to the p5.play reference documentation:

https://molleindustria.github.io/p5.play/v3_docs/classes/Sprite.html

Browse the docs to find out how to:

- specify the tile size of all sprites
- load a sprite sheet image and assign it to a sprite or group
- load sprite animations from a sprite sheet
- create a sprite with an image/animation
- change a sprite's animation

# Level 16 B

## Reading Documentation

Use the p5.play reference site to learn how to:

- move a sprite
- teleport a sprite
- flip a sprite
- rotate a sprite

# Level 16 C

## Reading Documentation

Reference the p5.play docs to learn how to:

- remove a sprite

## Promise.all

Sometimes you will need to `await` multiple Promises at once. For example, to wait for multiple sprites to move at the same time with the async `sprite.move` function.

```js
let movements = [];
movements.push(group[0].move('up'));
movements.push(group[1].move('up'));
await Promise.all(movements);
```

- [Level 16 A](#level-16-a)
	- [Reading Documentation](#reading-documentation)
- [Level 16 B](#level-16-b)
	- [Reading Documentation](#reading-documentation-1)
- [Level 16 C](#level-16-c)
	- [Reading Documentation](#reading-documentation-2)
	- [Promise.all](#promiseall)
