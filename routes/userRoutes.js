const { authJwt } = require('../middleware');
const { verifySignUp } = require("../middleware");
const users = require("../controllers/userController.js");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  // POST route that creates a new user 
  app.post("/user/signup", [ verifySignUp.checkDuplicateUsernameOrEmail ], users.signup);

  // POST route that logs in a user
  app.post("/user/signin", users.signin);

  //FOR TESTING PURPOSES ONLY
  // GET route that returns all users
  app.get("/user", [ authJwt.verifyToken ], users.findAll);

  app.get("/user/:id", users.findOne);

  // PUT route that updates a user
  app.put("/user/update/:id", users.update);


};
