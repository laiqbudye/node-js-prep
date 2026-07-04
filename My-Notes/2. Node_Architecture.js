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

  
