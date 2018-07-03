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
        }).then(function (result) {

            //console.log(result);
            return res.json({ id: result.dataValues.id });
        }).catch(function (error) {
            console.log(error);
            return res.status(500).send(error);

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
                    id: req.body.id
                }
            }).then(function (result) {

                //console.log(result);
                return res.json({ result: result });
            }).catch(function (error) {
                console.log(error);
                return res.status(500).send(error);
    
            });
    });



    app.post("/api/beerConsumed", function (req, res) {

        db.BeerConsumed.create({
            rating: req.body.rating,
            opinion: req.body.opinion,
            BeerId: req.body.BeerId,
            UserGoogleID: req.body.UserGoogleID,
        }).then(function (result) {

            //console.log(result);
            return res.json({ id: result.dataValues });
        }).catch(function (error) {
            console.log(error);
            return res.status(500).send(error);

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
            }).then(function (result) {

                //console.log(result);
                return res.json({ id: result.dataValues });
            }).catch(function (error) {
                console.log(error);
                return res.status(500).send(error);
    
            });
    });

    

    app.get("/api/beerConsumed/:userID", function (req, res) {

        db.BeerConsumed.findAndCountAll({
            where: {
                UserGoogleID: req.params.userID
            },
            include: ['Beer']
            //group: ['style'],
            //limit: autosuggestMaxReturn
        }).then(function (result) {

            //console.log(result);
            return res.json({ result: result });
        }).catch(function (error) {
            console.log(error);
            return res.status(500).send(error);

        });
    });

};
