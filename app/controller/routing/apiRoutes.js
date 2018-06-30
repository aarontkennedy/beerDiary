module.exports = function (app) {

    // store the google information/user info here
    const db = require("../../../models/index.js");

    app.post("/api/beers", function (req, res) {

        if (!req.body.name) {
            return res.status(400).send("Must provide beer name.");
        }

        if (req.body.id) {

        }
        else {
            
        }
        db.Beers.create({
            name: req.body.name,
            style: req.body.style,
            abv: req.body.abv,
            ibu: req.body.ibu,
            description: req.body.description,
            brewery: req.body.brewery,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            zipCode: req.body.zipCode,
            phone: req.body.phone,
            website: req.body.website
        }).then(function (error, result) {
            if (error) {
                console.log(error);
                return res.status(500).send(error);
            }
            console.log(result);
            return res.json({ id: result.insertId });
        });
    });

    app.post("/api/beers", function (req, res) {

        if (!req.body.name) {
            return res.status(400).send("Must provide beer name.");
        }

        db.Beers.create({
            name: req.body.name,
            style: req.body.style,
            abv: req.body.abv,
            ibu: req.body.ibu,
            description: req.body.description,
            brewery: req.body.brewery,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            zipCode: req.body.zipCode,
            phone: req.body.phone,
            website: req.body.website
        }).then(function (error, result) {
            if (error) {
                console.log(error);
                return res.status(500).send(error);
            }
            console.log(result);
            return res.json({ id: result.insertId });
        });
    });
    

};