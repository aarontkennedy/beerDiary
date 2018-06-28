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

        db.Beers.findall({
            attributes: ['style'],
            where: {
                style: {
                    [Op.like]: "%" + req.query.query + "%"
                }
            },
            limit: autosuggestMaxReturn
        }).success(function (styles) {
            return res.json({ suggestions: styles });
        });
    });

}