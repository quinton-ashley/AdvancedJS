# Level 12 A

## spread syntax

The spread syntax in JS is represented by three periods `...`. It allows the values of an array to be used as arguments to a function.

```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

arr1.push(...arr2);
console.log(arr1); // -> [1, 2, 3, 4, 5, 6]
```

# Level 12 B

## textRect

Make rectangles out of text characters using `textRect`.

```js
txtRect(5, 5, 3, 3); // make a 3x3 rect at row 5 column 5 (5,5)
txt('W', 6, 6); // make letter 'W' at row 6 column 6 (6,6)
```

Use `for` loops to make lots of boxes!

```txt
┌─┐┌─┐┌─┐┌─┐┌─┐
│W││h││e││e││l│
└─┘└─┘└─┘└─┘└─┘
┌─┐┌─┐┌─┐┌─┐┌─┐
│ ││ ││ ││ ││ │
└─┘└─┘└─┘└─┘└─┘
```

An optional fourth argument can be used to specify the style of the text rectangle. By default it is 'solid' but can be changed to 'dashed' or 'outline'.

## eraseRect

```js
await eraseRect(row, col, w, h);
```

Erases text within the specified rectangle.

## delay

```js
await delay(millis);
```

Use the `delay` to have your program wait for a certain amount of time in milliseconds.

```js
// you need to make the function asynchronous to use await
async function takeFive() {
	log('start!');
	await delay(5000); // waits for a delay of 5000ms aka 5 seconds
	log('5 seconds passed');
}

takeFive();
```

# Level 12 C

## replace String

```js
let str = 'The cat jumped over the moon. The cat meowed.';
let result = str.replace('cat', 'dog');
log(result);
// -> 'The dog jumped over the moon. The cat meowed.'
```

This function takes two input parameters, the first input parameter is replaced in the string by the second. Note that it only does one replacement.

This function does not change the original value of the string.

## slice String

```js
str.slice(start, end);
```

This function returns a subsection of the string, starting at the start index and ending and the end index. It does not change the original value of the string. The `end` index is optional. Indexes can be negative. Take a look at the examples in the `slice` MDN JS documentation:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
