Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

```js
let userName = 'Zehan Khan';
userName.toUpperCase(); //"ZEHAN KHAN"
let sentance = 'A quick brown fox jumped over a lazy dog';
sentance.toUpperCase(); //"A QUICK BROWN FOX JUMPED OVER A LAZY DOG"
let houseName = 'Starks';
houseName.toUpperCase(); //"STARK"
```
`toUpperCase` doesn't accept a parameter and return the character into a uppercase


3. `toLowerCase`

```js
let lastName = 'KHAN'
lastName.toLowerCase(); //"khan"
let words = 'A QUICK BROWN FOX JUMPED OVER A LAZY DOG';
words.toLowerCase(); //"a quick brown fox jumped over a lazy dog"
let houseName = 'STARKS';
houseName.toLowerCase(); //"starks"
```

4. `trim`

```js
let title = "     Hello World     ";
title.trim(); //"Hello World"
let 
```
`trim` does't accept a parameter and return the character with removed whitespace from start and end

5. `trimEnd`
```js
let title = "     Hello World      ";
title.trimEnd(); //"    Hello World"

```
`trimEnd` does't accept a parameter and return the character with removed whitespace from end

6. `trimStart`
```js
let title = "     Hello World      ";
title.trimStart(); //"Hello World    "

```
`trimEnd` does't accept a parameter and return the character with removed whitespace start

7. `concat`

```js
let letter1 = "Hello"
let letter2 = "World"
letter1.concat(letter2); //"HelloWorld"
letter1.concat(' ',letter2); //"Hello World"

```
`concat` accept one or more string and return the concated string

8. `endsWith`
9. `includes`
10. `indexOf`
11. `lastIndexOf`
12. `padEnd`
13. `padStart`
14. `repeat`
15. `replace`
16. `slice`
17. `split`
18. `substring`
