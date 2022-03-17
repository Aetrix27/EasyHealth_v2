const db = require("../models");
const Document = db.documents;
const User = db.users;

// Create a card and save it with the user
exports.create = (req, res) => { 
  var document = new Document(req.body);
  document.author = req.userId;

  if (req.userId) { var document = new Document(req.body); 
    document.author = req.userId;
    document
    .save()
    .then(document => {
        return User.findById(req.userId);
    })
    .then(user => {
        user.documents.unshift(document);
        user.save();
        res.redirect('/user');
    })
    .catch(err => {
        console.log(err.message);
    });
    } else {
      return res.status(401); 
    }
};

  
exports.findAll = async (req, res) => {
	try {
		const documents = await Document.find({});
		res.json(documents);

	} catch (err) {
		//!
		console.error(err);
		res.status(500).send();
	}
};

exports.findOne = (req, res) => {
	const id = req.params.id;

	Document.findById(id)
		.then((data) => {
			if (!data)
				res.status(404).send({ message: 'Not found document with id ' + id });
			else res.send(data);
		})
		.catch((err) => {
			res.status(500).send({ message: 'Error retrieving card with id=' + id });
		});
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Document.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Document with id=${id}. Maybe Card was not found!`
        });
      } else {
        res.send({
          message: "Document was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Document with id=" + id
      });
    });
};
