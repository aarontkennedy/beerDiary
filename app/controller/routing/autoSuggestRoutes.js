module.exports = function (app) {

    // store the google information/user info here
    const db = require("../../../models/index.js");
    const autosuggestMaxReturn = 5;

    app.get("/autosuggest/beers/names", function (req, res) {

        db.Beers.findall({
            attributes: ['name'],
            where: {
                name: {
                    [Op.like]: "%" + req.query.query + "%"
                }
            },
            limit: autosuggestMaxReturn
        }).success(function (beers) {
            return res.json({ suggestions: beers });
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