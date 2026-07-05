Node.js Internal Architecture

            Your JavaScript Code
                     │
                     ▼
               Call Stack
                     │
                     ▼
               Node.js APIs
                     │
                     ▼
                  libuv
                     │
      ┌──────────────┴──────────────┐
      ▼                             ▼
 Event Loop                  Thread Pool
      │
      ▼
 Callback Queue
      │
      ▼
 Back to Call Stack

--------------------------------------------------------------------------------------------

console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 2000);

console.log("End");

Output:- 
Start
End
(after 2 sec)
Timer


--------------------------------------------------------------------------------------------

  What is the Event Loop?
   The Event Loop is the core mechanism in Node.js that continuously checks whether the Call Stack is empty. 
   If it is, the Event Loop takes the next eligible callback from the appropriate queue and pushes it onto the Call Stack for execution..
   Without the Event Loop, asynchronous callbacks would never run.


--------------------------------------------------------------------------------------------

  What is libuv?
  
    Node.js uses libuv.
    libuv is a C library responsible for:
    
    Event Loop
    Thread Pool
    File System operations
    Networking
    Timers
    Some DNS operations
    
    Think of libuv as the engine that powers Node's asynchronous behavior.


--------------------------------------------------------------------------------------------

What is a Thread Pool?
    Node.js executes JS on one main thread.
    
    But operations like,
            1. Reading files
            2. Writing files
            3. Password hashing
            4. Compression

    can use libuv's thread pool.

    Default size: 4 Threads
    It can be increased using the UV_THREADPOOL_SIZE environment variable (up to a platform-dependent limit).

                
--------------------------------------------------------------------------------------------

Microtask Queue
Microtasks have higher priority than the regular Callback Queue.

Includes:
Promise callbacks (.then, .catch, .finally)
queueMicrotask()

In Node.js, process.nextTick() has its own special queue that is processed even before the regular microtask queue.


--------------------------------------------------------------------------------------------

process.nextTick()
            Highest priority in Node.js.

Example:
console.log("Start");

process.nextTick(() => {
    console.log("nextTick");
});

console.log("End");

Output:
Start
End
nextTick

--------------------------------------------------------------------------------------------

Why is Node.js called Single-Threaded?
JavaScript code executes on a single main thread. 
Asynchronous work is coordinated by libuv, allowing Node.js to handle many operations concurrently without creating a JavaScript thread for each request.
