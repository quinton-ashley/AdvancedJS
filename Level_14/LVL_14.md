# Level 14 A

## Review of Objects in JavaScript

Objects are a way to store data in JavaScript. They are similar to arrays but instead of using numbers to access data, objects use properties/keys. Keys can be Strings or Numbers.

Objects can be dynamically changed, you can add keys and values to an object at any time.

```js
let obj = {};

obj.key = 'value';
```

Remember you can also set the name of a property using a variable.

```js
let keyName = 'hello';
obj[keyName] = 'world';
```

# Level 14 B

## Working with Inputs directly

Up to this point whenever we worked with inputs we used `prompt()`, now we're going to be using inputs directly.

```js
let inp = input(value, x, y, onSubmit, onChange);
```

`inp` is the the `Input` object created, cursor blinking on the screen at position (x, y).

`value` is the initial text in the input, set to an empty String by default.

`onSubmit` called when the user presses the enter key.

`onChange` called when the user types any key that changes the input's value.

## Example use of Inputs

Here's the code for the Calculator that runs after you exit the GuessTheNumber game. Load the calculator and check it out.

```js
function start() {
	let inp;

	// value is the text the user entered in the input
	function calculate(value) {
		// eval() is a global function that evaluates the String input value as
		// JavaScript code, for example if value is "5+3", result will be the number 8
		let result = eval(value); // evaluate what the user entered

		inp.erase(); // erase the old input

		// create new input with it's initial value set to result
		inp = input(result, 0, 0, calculate);
	}

	// create the input
	inp = input('', 0, 0, calculate);
}
```

# Level 14 C

## Callback Chaining

If you try playing two sounds, one after the other like this it will not work!

```js
sound0.play();
sound1.play();
```

Both sounds will be played at the same time! You have to use the `onended` function to be able to tell when the first sound has finished playing. `.onended(callback)` takes a callback function, the function is run aka "called" when the sound file stops playing.

```js
sound0.play();
sound0.onended(() => {
	sound1.play();
});
```

Inside `onended` you can either put the name of a function to call or an anonymous function. In this example an anonymous function, a function that isn't given a name is used. Note that it uses the arrow `=>` syntax instead of the `function` keyword.

# Level 14 D

If you have to use callbacks to play five sounds this is what it might look like. It's awful!

```js
sound0.play();
sound0.onended(() => {
	sound1.play();
	sound1.onended(() => {
		sound2.play();
		sound2.onended(() => {
			sound3.play();
			sound3.onended(() => {
				sound4.play();
			});
		});
	});
});
```

You might be thinking that callback chaining is not as neat and simple as using async and await like we did with other asynchronous code like prompts and alerts. Wouldn't it be great if we could do this instead?

```js
await play(sound0);
await play(sound1);
await play(sound2);
await play(sound3);
await play(sound4);
```

To make a play function that we can `await`, we have to wrap it in a Promise.

## Promises

Back in my day... when I was a young lad first learning JavaScript in 2017, async/await and Promises were not part of JavaScript yet! We had to use callbacks for everything asynchronous... and it was awful. Check out what you'd have to do just to delay some code:

```js
console.log('start timer');
setTimeout(() => {
	console.log('2 seconds passed');
}, 2000);
```

I may sound like a grumpy old man but I want you to understand how Promises made JavaScript so much better. So let's learn how to make one! Here's `setTimeout()` wrapped in a promise.

```js
function delay(time) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, time);
	});
}
```

Now we can use `await` to delay code. So simple!

```js
async function timer() {
	console.log('start timer');
	await delay(2000); // delay program execution asynchronously for two seconds
	console.log('2 seconds passed');
}
```

`await` is used to wait until a Promise resolves or is rejected.

Some devs call this "promisify-ing". You can read more about promises here:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

A Promise exists in one of these states:

- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation was completed successfully.
- rejected: meaning that the operation failed.

## Promisfied p5.Sound

```js
function play(sound) {
	return new Promise((resolve, reject) => {
		sound.play();
		sound.onended(() => {
			resolve();
		});
	});
}
```

Now we could even use a for loop to play a lot of sounds! No callback chaining needed.

```js
async function playAllLetters() {
	let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	for (let i = 0; i < 26; i++) {
		let letter = alphabet[i];
		await play(letterSounds[letter]);
	}
}
```

## Computer History: Speak and Spell

This level's computer is based on the classic children's toy from the 1980s, the electronic [Speak and Spell](<https://en.wikipedia.org/wiki/Speak_%26_Spell_(toy)>) made by Texas Instruments. At the time it was a revolutionary toy that used speech synthesis to teach children how to spell. A talking computer was a big deal back then!

Since the 1980s computer scientists have been creating programs that can say nearly any word, in a language, using allophones. Check out this video to see how speech synthesis has improved over the years.

https://www.youtube.com/watch?v=XsMRxNSDccc

Nowadays, computer scientists at Google have developed Google Translate, which uses advanced methods of text to speech synthesis.

https://www.npmjs.com/package/google-tts-api

- [Level 14 A](#level-14-a)
  - [Review of Objects in JavaScript](#review-of-objects-in-javascript)
- [Level 14 B](#level-14-b)
  - [Working with Inputs directly](#working-with-inputs-directly)
  - [Example use of Inputs](#example-use-of-inputs)
- [Level 14 C](#level-14-c)
  - [Callback Chaining](#callback-chaining)
- [Level 14 D](#level-14-d)
  - [Promises](#promises)
  - [Promisfied p5.Sound](#promisfied-p5sound)
  - [Computer History: Speak and Spell](#computer-history-speak-and-spell)
