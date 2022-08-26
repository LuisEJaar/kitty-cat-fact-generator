# kitty-cat-fact-generator
A full stack web application to request cat facts from a server generated via node.js and provide information at random.

**Link to project:** https://kitty-cat-fact-generator.herokuapp.com/

<img src="/Assets/functionality.gif" alt="Fact-Generator-Site" width="500"/>

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js

All files are retrieved from a Heroku hosted node.js server. A random number generator on the server side is used to return the corresponding array index as a string.

## Optimizations
- Update to call upon a separate JS file containing the array items. The server.js file starts to feel cluttered with so many facts.

## Lessons Learned:

-Practice with Node.js

-First time using Heroku

-Always assume dependancies are in a global file vs in the project folder.

-When in doubt, install modules again

