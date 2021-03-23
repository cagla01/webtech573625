const Buch = require("../model/buchliste.model.js");

// Create and Save a new Buch
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Buch
    const buch = new Buch({
        titel: req.body.titel,
        autor: req.body.autor,
        genre: req.body.genre,
        status: req.body.status,
        bewertung: req.body.bewertung,
        notiz: req.body.notiz
    });

    // Save Customer in the database
    Buch.create(buch, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Buch."
            });
        else res.send(data);
    });
};

// Retrieve all Buchliste from the database.
exports.findAll = (req, res) => {
    Buch.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving buchliste."
            });
        else res.send(data);
    });
};

// Find a single Buch with a buchId
exports.findOne = (req, res) => {
    Buch.findById(req.params.buchId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Buch with id ${req.params.buchId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Buch with id " + req.params.buchId
                });
            }
        } else res.send(data);
    });
};

// Update a Buch identified by the buchId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Buch.updateById(
        req.params.buchId,
        new Buch(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Buch with id ${req.params.buchId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Buch with id " + req.params.buchId
                    });
                }
            } else res.send(data);
        }
    );
};

// Delete a Buch with the specified buchId in the request
exports.delete = (req, res) => {
    Buch.remove(req.params.buchId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Buch with id ${req.params.buchId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Buch with id " + req.params.buchId
                });
            }
        } else res.send({ message: `Buch was deleted successfully!` });
    });
};

// Delete all Buchliste from the database.
exports.deleteAll = (req, res) => {
    Buch.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all buchliste."
            });
        else res.send({ message: `All Buchliste were deleted successfully!` });
    });
};