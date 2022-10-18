# Level 15 A

## Check if a variable is defined

Sometimes you'll need to check if a variable is defined before you do something with it. If you put a variable that doesn't have a boolean value in a boolean condition by itself, Javascript will evaluate its "truthiness". You can check if a variable exists by putting it on it's own in a boolean condition.

```js
let robot; // robot created but not defined

// only have the robot shoot lasers if it is defined!
if (robot) {
	robot.shootLasers();
}
```

## Check if a variable is undefined

To check if a variable is undefined (falsy), put a negation operator `!` in front of the variable name in the boolean condition. Variables are considered undefined if they were not assigned a value.

```js
let robot;

if (!robot) {
	robot = createRobot();
}
```

## Adding properties to an existing object

Adding properties to an existing object is super easy, just give it a value as if the property already existed!

```js
ball.active = true;
```

# Level 15 B

## Skip iterations of a for loop

Use `continue` to skip an iteration of a for loop but continue looping. Unlike `break` which is for exiting the loop early.

```js
for (let i = 0; i < 8; i++) {
	if (i == 2) {
		continue;
	}
	if (i > 5) {
		break;
	}
	console.log(i);
}
```

Console Output:

```txt
0
1
3
4
5
```
