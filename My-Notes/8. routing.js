Routing is the process of determining how an application responds to a client request for a specific URL and HTTP method.

Without Express Router

Suppose your application has:

  Users
  Products
  Orders
  Employees
  Payments
  Authentication

Everything inside one file:

  app.js
  
  1000+ lines
  
  app.get(...)
  app.post(...)
  app.put(...)
  app.delete(...)

  Finding routes becomes difficult.

Express provides:  express.Router()
  Instead of one huge file:  app.js

  Create:
    routes/
    userRoutes.js
    productRoutes.js
    orderRoutes.js



Creating your first router:-
  
  userRoutes.js
    const express = require("express");
    const router = express.Router();
    
    // GET /users
    router.get("/", (req, res) => {
        res.send("All Users");
    });
    
    module.exports = router;

  // usage
  app.js
    const express = require("express");
    const userRoutes = require("./routes/userRoutes");
    const app = express();
    
    // Mount router
    app.use("/users", userRoutes);
    
    app.listen(3000);

















    
