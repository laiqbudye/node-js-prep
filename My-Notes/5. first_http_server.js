Web applications work this way.
  
Browser (Client)
  ↓
HTTP Request
  ↓
Server
  ↓
HTTP Response
  ↓
Browser


What is HTTP?  (Hypertext Transfer Protocol)
  It is a set of rules that defines how a client and a server communicate.


What is a Client?
  A client is any application that sends requests.

What is a Server?
  A server is an application that listens for requests and sends responses.


HTTP Methods
  These define what action the client wants to perform.

Method	Purpose	
GET	    Read data
POST	  Create data
PUT	    Replace an entire resource
PATCH	  Update part of a resource
DELETE	Remove data

**************************************************************************************

Creating Your First HTTP Server
    - Node provides a built-in module:
    
    const http = require("http");

    // Create an HTTP server
    const server = http.createServer((req, res) => {
        res.end("Hello World");
    });

    // Start listening on port 3000
    server.listen(3000, () => {
        console.log("Server running on port 3000");
    });




Example 2:
      const http = require("http");
  
      const server = http.createServer((req, res) => {
          const user = {
              id: 1,
              name: "Laiq",
              experience: 8
          };
      
          res.setHeader("Content-Type", "application/json");
      
          res.end(JSON.stringify(user));    // res.end() only accepts a string, Buffer, or certain binary data; that's why JSON.stringify is needed here
      });
      
      server.listen(3000);


    
    Why JSON.stringify()?
    res.end() only accepts a string, Buffer, or certain binary data.
    
    A JavaScript object:
    {
      name: "Laiq"
    }
    
    cannot be sent directly.
    Convert it first:  JSON.stringify(user);


***************************************************************************************************************

  Without express, we need to handle requests like this, which becomes harder when the app grows: 

  if (req.method === "GET" && req.url === "/users") {
      res.end("All Users");
  }




What is the http module?
  The http module is a built-in Node.js module used to create HTTP servers and handle HTTP requests and responses. 
  Express is built on top of this module.


Why do we use JSON.stringify()?
  Because res.end() cannot send a plain JavaScript object directly. 
  JSON.stringify() converts the object into a JSON string that can be sent over HTTP.
