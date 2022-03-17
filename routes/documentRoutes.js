const { authJwt } = require("../middleware");

const documents = require("../controllers/documentController.js");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  // POST route that creates a post one authenticated 
  app.post("/document/create",[authJwt.verifyToken], documents.create);

  //FOR TESTING PURPOSES ONLY
  // GET route that returns single post with id
  app.get("/document/:id", [authJwt.verifyToken], documents.findOne);

  app.get("/document",  documents.findAll);

  app.delete("/document/delete/:id", [authJwt.verifyToken], documents.delete);

};