What is Node.js?
  Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript outside 
  the browser. It is built on Google's V8 JavaScript Engine and is designed to build scalable, fast, and event-driven applications. 
  Unlike browsers, Node.js provides APIs for interacting with the operating system, such as reading files, creating servers, 
  accessing databases, and networking.


Why is Node.js so popular?
  Node.js uses:
  
  One main thread
  Event Loop
  Non-blocking I/O

This makes it lightweight and efficient for I/O-heavy applications.



What exactly is a Runtime?

  Many people confuse this.
  JavaScript itself cannot execute.
  It needs an engine.

    For browsers:
    JavaScript
    ↓
    Chrome
    ↓
    V8 Engine
    ↓
    Machine Code

    
    Node.js also uses the V8 engine.
    JavaScript
    ↓
    Node.js
    ↓
    V8 Engine
    ↓
    Machine Code



    Node REPL
    REPL means:
    Read
    Evaluate
    Print
    Loop



First Node Program
// Prints a message to the terminal
console.log("Welcome to Node.js");

// Declaring variables
const name = "Laiq";
const experience = 8;

// String interpolation using template literals
console.log(`My name is ${name}`);
console.log(`Experience: ${experience} years`);





Why do companies choose Node.js?
  Because it is:
  ✔ Fast
  ✔ Lightweight
  ✔ Non-blocking
  ✔ Event-driven
  ✔ Same language on frontend and backend
  ✔ Huge npm ecosystem



Real-world companies using Node.js
Some well-known companies that use Node.js for parts of their backend include:

  Netflix
  Uber
  PayPal
  LinkedIn
  Walmart
They use Node.js because many of their services are I/O-intensive and benefit from its event-driven model.


  
  Is Node.js single-threaded?
    JavaScript code in Node.js executes on a single main thread. However, Node.js itself is not limited to one thread. 
    It uses the libuv library, which maintains a thread pool for certain asynchronous operations (such as some file system 
    and cryptographic tasks). This combination allows Node.js to handle many concurrent operations efficiently.


      
