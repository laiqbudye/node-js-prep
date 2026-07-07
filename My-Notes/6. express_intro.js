What is Express.js?
  Express.js is a lightweight, minimal, and flexible web framework built on top of Node.js's built-in http module. 5
  It simplifies backend development by providing features such as routing, middleware, request parsing, and response handling.


Why Was Express Created?
Remember our Node.js server?

    const http = require("http");
    const server = http.createServer((req, res) => {
    
        if (req.url === "/") {
            res.end("Home");
        }
    
        if (req.url === "/users") {
            res.end("Users");
        }
    
        if (req.url === "/products") {
            res.end("Products");
        }
    });
    server.listen(3000);


Imagine doing this for 200 routes. Now compare it with Express:

    app.get("/", (req, res) => {
        res.send("Home");
    });
    
    app.get("/users", (req, res) => {
        res.send("Users");
    });
    
    app.get("/products", (req, res) => {
        res.send("Products");
    });

Much cleaner and easier to maintain.


---------------------------------------------------------------------------------------------

Creating Your First Express Server

    // Import Express
    const express = require("express");
    
    // Create an Express application
    const app = express();
    
    // Start the server
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });




Multiple Routes:- 
    const express = require("express");
    const app = express();
    
    app.get("/", (req, res) => {
        res.send("Home");
    });
    
    app.get("/about", (req, res) => {
        res.send("About");
    });
    
    app.get("/contact", (req, res) => {
        res.send("Contact");
    });
    
    app.listen(3000);



Sending JSON:-
    app.get("/user", (req, res) => {
    
        const user = {
            id: 1,
            name: "Laiq",
            experience: 8
        };
    
        res.json(user);
    });

Why res.json()?
Remember in Node.js:- res.end(JSON.stringify(user));
Express simplifies it: res.json(user);  // It automatically converts the object to JSON; Sets the Content-Type header to application/json


---------------------------------------------------------------------------------------------------------------------------------------------


Route Params
  app.get("/users/:userId/orders/:orderId", (req, res) => {
    res.json(req.params);
  });  

 visit :- /users/5/orders/100    // {"userId": "5", "orderId": "100" }
  


uery Params
  app.get("/products", (req, res) => {
    console.log(req.query);     
    res.send("Products");
  });

Visit: /products?page=2&limit=10    // { page: '2', limit: '10' }

-+--------------------------------------------------------------------------------------------------

Why do we need Express?
  While Node.js's http module can create web servers, it requires manual routing, header management, and request handling. 
  Express provides a cleaner and more productive API, reducing boilerplate code.


What is the difference between res.send() and res.json()?
  res.send() can send strings, HTML, buffers, or objects.
  res.json() is specifically designed for JSON responses. It converts JavaScript objects to JSON and automatically sets the Content-Type header to application/json.
