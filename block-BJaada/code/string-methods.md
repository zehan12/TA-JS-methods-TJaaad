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

   - Parameter: none
   - Return: return string in uppercase
   - Example:
     ```js
     let name = 'Arya Stark';
     name.toUpperCase(); //"ARYA STARK"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.toUpperCase(); // "A QUICK BROWN FOX JUMPED OVER A LAZY DOG"
     let houseName = 'Starks';
     houseName.toUpperCase(); // "STARK"
     ```
   - `toUpperCase` doesn't take a parameter and return the string into uppercase.

 

3. `toLowerCase`

   - Parameter: none
   - Return: return string in lowercase
   - Example:
     ```js
     let name = 'ARYA STARK';
     name.toLowerCase(); //"arya stark"
     let sentance = 'A QUICK BROWN FOX JUMPED OVER A LAZY DOG';
     sentance.toLowerCase(); // "A quick brown fox jumped over a lazy dog"
     let houseName = 'STARKS';
     houseName.toLowerCase(); // "stark"
     ```
   - `toLowerCase` doesn't take a parameter and return the string into lowercase.

4. `trim`

   - Parameter: none
   - Return: remove space from both the side
   - Example:
     ```js
     let name = '   Arya Stark   ';
     name.trim(); //"Arya Stark"
     let sentance = '    Hello World   ';
     sentance.trim(); // "Hello World"
     let houseName = '  Starks  ';
     houseName.trim(); // "stark"
     ```
   - `trim`  doesn't take a parameter and return the string into uppercase.


5. `trimEnd`

   - Parameter: none
   - Return: string remove space from end
   - Example:
     ```js
     let name = 'Arya Stark';
     name.trimEnd(); //"   Arya Stark    "
     let sentance = '   dog   ';
     sentance.trimEnd(); // "    dog"
     let houseName = '   Starks   ';
     houseName.trimEnd(); // "   Stark"
     ```
   - `trimEnd` does't accept the 

6. `trimStart`
7. `concat`

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


8. `endsWith`
9. `includes`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.includes(Arya); //true
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.includes(lazy); //false
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

10. `indexOf`
11. `lastIndexOf`
12. `padEnd`
13. `padStart`
14. `repeat`
15. `replace`
16. `slice`
17. `split`
18. `substring`
