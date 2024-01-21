# SpeakAndSpell

Based on the classic children's toy from the 1980s, the electronic [Speak and Spell](<https://en.wikipedia.org/wiki/Speak_%26_Spell_(toy)>) by Texas Instruments.

## Instructions for Part A

When I was a kid websites used to be able to play unwanted music or ads as soon as the site loaded. It was so annoying! Nowadays due to restrictions that improved everyone's internet browsing experience, modern browsers must get user input before playing any sounds. If you try to play a sound without the user interacting with a web page the browser will throw this error: "The AudioContext was not allowed to start. It must be resumed (or created) after a user gesture on the page.". That gesture on the page can be as simple as the user pressing enter on the keyboard or clicking a button. This is why in the starter code for this project I use `alert('Press enter to start.')` to get user input before starting the game and playing sounds.

First work on the preload function that will load all the sound files before `speakAndSpell.js` is started. Start by loading all the sounds of all the `letters` into the object called `letterSounds`. HINT: the letters should be the keys and the sounds should be the values in the `letterSounds` object.

## Instructions for Part B

Make the Speak and Spell say any letter you type in the input using the `onChange` callback function.

Load all the `words` and `speech` sounds into the objects `wordSounds` and `speechSounds` in the preload function.

In your `start` function have the Speak and Spell say "spell"! Then in the `nextWord` function, choose a random word from `words` array from the preload function. You'll notice that these two sounds will play at the same time. Find out why in Part C.

## Instructions for Part C

In the beginning of the game, the Speak and Spell should say "spell" and then say the word the player should spell. HINT: Use `onended`.

Let the player spell out the word, when they press enter your program should check if their spelling was correct. If their spelling was correct, use the phrase "that_is_correct_now_spell" and tell them the next word they should spell.

If the player spelled the word incorrectly then have the Speak and Spell tell them how to correctly spell the word. Have it spell out the word letter by letter. Here is an example of what it should say: "that is incorrect the correct spelling of worth is w o r t h". HINT: This part is tricky because you can't use a for loop cause the program must wait till each letter sound ends before playing the next letter, you must use a recursion loop.

## Instructions for Part D

Change your program to use the "promisified" play function to play sounds using async/await instead of callback chaining. Use a for loop instead of recursion to easily spell out the word.

Use the other interchangeable instructions to add some variety. Such as: "you_are_correct_next_spell" and "you_are_right_try".

Give the player another chance to spell words right before telling them how the word is spelled. HINT: Say "wrong try again".

Tell the player their score (how many words they got right) after they try to spell 10 words.

At the start of the game, the player should be able to select between two modes. If they select mode A they get small words. If they select mode B they get long words. Explain the modes to the player and let them select a mode by typing 'A' or 'B'.
