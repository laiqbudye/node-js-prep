
Middleware is a function that executes between the incoming request and the final response. 
It has access to the request object (req), response object (res), and the next() function. 
Middleware can modify the request, modify the response, execute logic, or pass control to the next middleware.


Express Request Lifecycle:-  (Every request passes through middleware before reaching the route.)
Client
  ↓
Request
  ↓
Middleware 1
  ↓
Middleware 2
  ↓
Middleware 3
  ↓
Route Handler
  ↓
Response
  ↓
Client


Middleware Function Syntax:- 
  function middleware(req, res, next) {
      console.log("Middleware Executed");
      next();
  }

req - Contains request information.
res - Used to send the response.
next - This is the most important part. Tells Express, "I'm done. Please continue to the next middleware or route handler."


Your First Middleware
const express = require("express");
const app = express();

function logger(req, res, next) {
    console.log("Request Received");
    next();
}

app.use(logger);   // all the reuest handlers below this line, will go through this middleware first

app.get("/", (req, res) => {
    res.send("Home");
});

app.listen(3000);


The flow will be like below:-
Client
  ↓
GET /
  ↓
logger()
  ↓
next()
  ↓
Route Handler
  ↓
res.send()
  ↓
Response

--------------------------------------------------------------------------------------------

What Happens If We Forget next()?
  function logger(req, res, next) {
    console.log("Logger");
  }

Here the request hangs, Because Express is waiting for either:
next()
OR a response like res.send(), res.json()

----------------------------------------------------------------------------------------------

Middleware types:- 
  1. Global Middleware
      Middleware applied to every request.  e.g app.use(logger);   <---- Every request passes through it.
        
  2. Route-Level Middleware
      Sometimes middleware should run only for specific routes.

        // middleware function
        function auth(req, res, next) {
          console.log("Authentication");
          next();
        }

        // usage
        app.get("/profile", auth, (req, res) => {
            res.send("Profile");
        });


        // Express executes middleware in the order they are registered.  (Here auth will execute first & then middleware2)
        app.get("/profile", auth, middleware2, (req, res) => {
            res.send("Profile");
        });


-------------------------------------------------------------------------------------------------------

  Built-in Middleware
    Express provides several middleware functions.

    express.json() - Most commonly used.
        app.use(express.json());

    Converts incoming JSON request bodies into JavaScript objects.

    Example request:
    {
      "name": "Laiq",
      "age": 28
    }
    
    Without: app.use(express.json()); 
        ↓
    req.body
        ↓
    undefined


    With: app.use(express.json()); 
          ↓
    {
      name: "Laiq",
      age: 28
    }

****************************************************************

  express.static() - Serves static files.


  Third party middlewares:-
    const cors = require("cors");
    app.use(cors());

      This enables Cross-Origin Resource Sharing (CORS).


----------------------------------------------------------------------

What is the difference between app.use() and app.get()?
app.use() registers middleware that can run for multiple routes.
app.get() registers a route handler that responds only to GET requests for a specific path.



What are common uses of middleware?
    Middleware is commonly used for:
    
    Authentication
    Authorization
    Logging
    Request validation
    Parsing request bodies
    CORS
    Error handling
    Rate limiting

---------------------------------------------------------------------------------------

If I apply authentication middleware using app.use, it will be performed for all the requests, but let's say I have 2 routes on which I don't want to perform authentication; then how should it work

Option 1 (Most Common) - Apply Middleware Only to Protected Routes ✅

// Public routes
app.get("/", (req, res) => {
    res.send("Home");
});

app.post("/login", (req, res) => {
    res.send("Login");
});

// Protected routes
app.get("/profile", auth, (req, res) => {
    res.send("Profile");
});


Option 2 - Apply Middleware After Public Routes (Very Common)

app.get("/", (req, res) => {
    res.send("Home");
});

app.post("/login", (req, res) => {
    res.send("Login");
});

// Everything below this line requires authentication
app.use(auth);

app.get("/profile", (req, res) => {
    res.send("Profile");
});



Option 3 - Use Express Router (Production Best Practice)

routes/
    publicRoutes.js
    userRoutes.js


const publicRoutes = require("./routes/publicRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/", publicRoutes);        // Public
app.use("/api", auth, userRoutes); // Protected
