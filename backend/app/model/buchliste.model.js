const sql = require("./db.js");

// constructor
const Buch = function(buch) {
    this.titel = buch.titel;
    this.autor = buch.autor;
    this.genre = buch.genre;
    this.status = buch.status;
    this.bewertung = buch.bewertung;
    this.notiz = buch.notiz;
};

Buch.create = (newBuch, result) => {
    sql.query("INSERT INTO buchliste SET ?", newBuch, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created buch: ", { id: res.insertId, ...newBuch });
        result(null, { id: res.insertId, ...newBuch });
    });
};

Buch.findById = (buchId, result) => {
    sql.query(`SELECT * FROM buchliste WHERE id = ${buchId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found buch: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Buch with the id
        result({ kind: "not_found" }, null);
    });
};

Buch.getAll = result => {
    sql.query("SELECT * FROM buchliste", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("buchliste: ", res);
        result(null, res);
    });
};

Buch.updateById = (id, buch, result) => {
    sql.query(
        "UPDATE buchliste SET titel = ?, autor = ?, genre = ?, status = ?, bewertung = ?, notiz = ? WHERE id = ?",
        [buch.titel, buch.autor, buch.genre, buch.status, buch.bewertung, buch.notiz, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Customer with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated buch: ", { id: id, ...buch });
            result(null, { id: id, ...buch });
        }
    );
};

Buch.remove = (id, result) => {
    sql.query("DELETE FROM buchliste WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Buch with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted buch with id: ", id);
        result(null, res);
    });
};

Buch.removeAll = result => {
    sql.query("DELETE FROM buchliste", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} buchliste`);
        result(null, res);
    });
};

module.exports = Buch;