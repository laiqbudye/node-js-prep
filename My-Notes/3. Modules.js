What is a Module?

A module is simply a file that contains reusable code.

Instead of writing everything in one file:

app.js

We split our application into multiple files.

Example:

project/
app.js
math.js
user.js
auth.js

Each file is a module here.


Types of Modules in Node.js
  1. Built-in Modules
  2. Custom Modules
  3. Third-party Modules


1. Built-in Modules -- Provided by Node.js.
  
  Examples:
  fs
  path
  http
  os
  crypto
  events
  
  No installation required.


2. Custom Modules
  Modules created by you.

    
3. Third-party Modules
Installed using npm.

-----------------------------------------------------------------------------

CommonJS Modules

Node.js originally used CommonJS.

Syntax:

require()
module.exports

Example:

math.js
// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Export the function
module.exports = add;


app.js
// Import the function
const add = require("./math");

console.log(add(10, 20));


********************************************

Exporting Multiple Functions

math.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = {
    add,
    subtract
};


app.js
const math = require("./math");     OR   const { add, subtract } = require("./math");

console.log(math.add(20, 10));
console.log(math.subtract(20, 10));


--------------------------------------------------------------------------------------------

How require() Works Internally

    When Node encounters:    const math = require("./math");
    
    It: 
    Resolves the file path.
    Loads the file.
    Executes the file once.
    Stores the result in memory (cache).
    Returns the exported object.
    
    This caching behavior improves performance.


--------------------------------------------------------------------------------------------


ES Modules (Modern JavaScript)

    React uses ES Modules.
    
    Example:
    export function add(a, b) {
        return a + b;
    }
    
    Import:
    import { add } from "./math.js";
    console.log(add(10, 20));



Difference Between Default and Named Exports
Default Export --->  Only one per file.

Named Export  --->  Can have many.


--------------------------------------------------------------------------------------


Using ES Modules in Node.js

By default, Node.js treats .js files as CommonJS.

To enable ES Modules:

package.json
{
  "type": "module"
}

Now this works:

import fs from "fs";

Without "type": "module", you'll get an error if you use import in a regular .js file.
  


When would you use a default export?
  Use a default export when a module exposes a single primary value, such as a class or function. Use named exports when a module exposes multiple related functions or constants.
