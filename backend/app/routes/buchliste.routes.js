module.exports = app => {
    const buchliste = require("../controller/buchliste.controller.js");

    // Create a new Buch
    app.post("/buchliste", buchliste.create);

    // GET all Buchliste
    app.get("/buchliste", buchliste.findAll);

    // GET one single Buch with BuchId
    app.get("/buchliste/:buchId", buchliste.findOne);

    // Update one Buch with BuchId
    app.put("/buchliste/:buchId", buchliste.update);

    // Delete the Buch with BuchId
    app.delete("/buchliste/:buchId", buchliste.delete);

    // Delete all buchliste
    app.delete("/buchliste", buchliste.deleteAll);
};