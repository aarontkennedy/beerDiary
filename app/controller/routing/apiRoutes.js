module.exports = function (app) {

    // store the google information/user info here
    const db = require("../../../models/index.js");

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


    app.put("/api/beers", function (req, res) {

        if (!req.body.name) {
            return res.status(400).send("Must provide beer name.");
        }

        db.Beers.update({
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
        },
            {
                where: {
                    style: {
                        [db.Sequelize.Op.like]: "%" + req.query.query + "%"
                    }
                }
            }).then(function (error, result) {
                if (error) {
                    console.log(error);
                    return res.status(500).send(error);
                }
                console.log(result);
                return res.json({ id: result.insertId });
            });
    });



    app.post("/api/beerConsumed", function (req, res) {

        db.BeerConsumed.create({
            rating: req.body.rating,
            opinion: req.body.opinion,
            beerId: req.body.beerID,
            UserGoogleID: req.body.userID,
        }).then(function (error, result) {
            if (error) {
                console.log(error);
                return res.status(500).send(error);
            }
            console.log(result);
            return res.json({ id: result.insertId });
        });
    });

    app.put("/api/beerConsumed", function (req, res) {

        db.BeerConsumed.update({
            rating: req.body.rating,
            opinion: req.body.opinion
        },
            {
                where: {
                    beerId: req.body.beerID,
                    UserGoogleID: req.body.userID
                }
            }).then(function (error, result) {
                if (error) {
                    console.log(error);
                    return res.status(500).send(error);
                }
                console.log(result);
                return res.json({ id: result.insertId });
            });
    });

    app.get("/api/beerConsumed/:userID", function (req, res) {

        db.BeerConsumed.findAll({
            where: {
                UserGoogleID: req.params.userID
            },
            group: ['style'],
            limit: autosuggestMaxReturn
        }).then(function (styles) {

        });
    });

};
