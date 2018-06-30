module.exports = function (app) {

    // store the google information/user info here
    const db = require("../../../models/index.js");
    const autosuggestMaxReturn = 5;

    app.get("/autosuggest/beers/names", function (req, res) {

        db.Beers.findAll({
            where: {
                name: {
                    [db.Sequelize.Op.like]: "%" + req.query.query + "%"
                }
            },
            limit: autosuggestMaxReturn
        }).then(function (beers) {
            console.log(beers);
            let beerArray = [];
            for (let i = 0; i < beers.length; i++) {

                beerArray.push({
                    value: beers[i].dataValues.name,
                    data: beers[i].dataValues
                });
            }
            return res.json({ suggestions: beerArray });
        });
    });

    app.get("/autosuggest/beers/styles", function (req, res) {

        db.Beers.findAll({
            attributes: ['style'],
            where: {
                style: {
                    [db.Sequelize.Op.like]: "%" + req.query.query + "%"
                }
            },
            group: ['style'],
            limit: autosuggestMaxReturn
        }).then(function (styles) {
            //console.log(styles);
            let beerStyles = [];
            for (let i = 0; i < styles.length; i++) {
                beerStyles.push(styles[i].dataValues.style);
            }
            return res.json({ suggestions: beerStyles });
        });
    });

    app.get("/autosuggest/beers/breweries", function (req, res) {

        db.Beers.findAll({
            attributes: ['brewery',
                'address',
                'city',
                'state',
                'country',
                'zipCode',
                'phone',
                'website'],
            where: {
                brewery: {
                    [db.Sequelize.Op.like]: "%" + req.query.query + "%"
                }
            },
            group: ['brewery'],
            limit: autosuggestMaxReturn
        }).then(function (breweries) {
            //console.log(breweries);
            let breweryInfo = [];
            for (let i = 0; i < breweries.length; i++) {
                breweryInfo.push({
                    value: breweries[i].dataValues.brewery,
                    data: {
                        address: breweries[i].dataValues.address,
                        city: breweries[i].dataValues.city,
                        state: breweries[i].dataValues.state,
                        country: breweries[i].dataValues.country,
                        zipCode: breweries[i].dataValues.zipCode,
                        phone: breweries[i].dataValues.phone,
                        website: breweries[i].dataValues.website
                    }
                });
            }
            return res.json({ suggestions: breweryInfo });
        });
    });

}