module.exports = function (app) {

    // store the google information/user info here
    const db = require("../../../models/index.js");
    const autosuggestMaxReturn = 5;

    app.get("/autosuggest/beers/names", function (req, res) {
        console.log("***********************You were called!");
        db.Beers.findAll({
            attributes: ['name'],
            where: {
                name: {
                    [db.Sequelize.Op.like]: "%" + req.query.query + "%"
                }
            },
            limit: autosuggestMaxReturn
        }).then(function (beers) {
            console.log(beers);
            let beerNames = [];
            for(let i = 0; i < beers.length; i++) {
                beerNames.push(beers[i].dataValues.name);
            }
            return res.json({ suggestions: beerNames });
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
            limit: autosuggestMaxReturn
        }).then(function (styles) {
            console.log(styles);
            let beerStyles = [];
            for(let i = 0; i < styles.length; i++) {
                beerStyles.push(styles[i].dataValues.style);
            }
            return res.json({ suggestions: beerStyles });
        });
    });

    app.get("/autosuggest/beers/breweries", function (req, res) {

        db.Beers.findAll({
            attributes: ['brewery'],
            where: {
                brewery: {
                    [db.Sequelize.Op.like]: "%" + req.query.query + "%"
                }
            },
            limit: autosuggestMaxReturn
        }).then(function (breweries) {
            console.log(breweries);
            let breweryNames = [];
            for(let i = 0; i < breweries.length; i++) {
                breweryNames.push(breweries[i].dataValues.style);
            }
            return res.json({ suggestions: breweryNames });
        });
    });

}