# Level 16 A

## Reading Documentation

When you start making your own programming projects there won't be a lesson plan that you can follow. An important part of learning to program is learning how to find the information you want in reference documentation on your own. This is a skill that you will use for the rest of your life as a programmer!

https://p5play.org/learn/tiles.html

- learn about the Tiles class

# Level 16 B

## Reading Documentation

Use the p5.play reference site to learn how to:

- use the `sprite.move` function
- teleport a sprite by changing its `x` and `y` position
- rotate a sprite
- flip (mirror) a sprite

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
