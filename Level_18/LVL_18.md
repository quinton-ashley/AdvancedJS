# Level 18 A

## JSON

JSON stands for JavaScript Object Notation. JSON files are just a JS object in a file, but unlike in JS where quotes for the properties/keys are optional, for JSON they are required, in fact double quotes are required for all strings.

```json
{
	"name": "Quinton Ashley",
	"job": "Computer Science Teacher",
	"age": 25
}
```

## Regular Expressions (RegEx)

To better manipulate data, simple find and replace using Strings often won't cut it. You'll need to learn about Regular Expressions, a powerful pattern matching tool.

https://regex101.com/

# Level 18 B

## fetching JSON files

`fetch` can be load JavaScript objects from JSON files.

```js
let data = await (await fetch('data.json')).json();
```

Note that the parenthesis around await fetch are necessary to indicate that the fetch function should be done first.

- [Level 18 A](#level-18-a)
	- [JSON](#json)
	- [Regular Expressions (RegEx)](#regular-expressions-regex)
- [Level 18 B](#level-18-b)
	- [fetching JSON files](#fetching-json-files)
